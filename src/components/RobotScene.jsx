import { useEffect, useRef } from "react";
import { LuRotateCcw } from "react-icons/lu";
import "./RobotScene.css";

// A line-art wheeled quadruped trotting over rolling terrain.
// - Trot gait: diagonal leg pairs alternate stance / swing; stance feet stay
//   fixed in the world while the terrain scrolls under the robot.
// - Two-link inverse kinematics for every leg, knees in "X" configuration.
// - A head-mounted LiDAR casts rays onto the terrain and leaves a fading
//   point cloud behind.
// - Every so often (or on click) it stops, crouches and does a backflip.

const TAU = Math.PI * 2;
const GAIT_PERIOD = 0.62; // s
const FLIP = { crouch: 0.28, flight: 0.9, land: 0.4 };
const AUTO_FLIP_EVERY = 14; // s
const RAYS = 9;

const smooth = (u) => u * u * (3 - 2 * u);
const clamp01 = (u) => Math.min(1, Math.max(0, u));

function terrain(wx, base, s) {
  return (
    base +
    16 * s * Math.sin(wx * 0.0052) +
    9 * s * Math.sin(wx * 0.013 + 1.3) +
    3.5 * s * Math.sin(wx * 0.037 + 0.4)
  );
}

// Two-link IK. Returns the knee position; `bend` (+1 / -1) picks the knee side.
function solveKnee(hx, hy, fx, fy, l1, l2, bend) {
  const dx = fx - hx;
  const dy = fy - hy;
  const d = Math.min(Math.hypot(dx, dy), l1 + l2 - 0.01);
  const a = Math.atan2(dy, dx);
  const b = Math.acos(Math.min(1, Math.max(-1, (l1 * l1 + d * d - l2 * l2) / (2 * l1 * d))));
  return [hx + l1 * Math.cos(a + bend * b), hy + l1 * Math.sin(a + bend * b)];
}

function RobotScene({ className = "" }) {
  const canvasRef = useRef(null);
  const flipRef = useRef(() => {});

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = 0;
    let H = 0;
    let s = 1; // scale factor for the robot and terrain
    let raf = 0;
    let running = false;
    let visible = true;
    let last = performance.now();
    let clock = 0;

    // Simulation state
    let scroll = 0;
    let phase = 0;
    let speed = reduceMotion ? 0 : 1; // fraction of cruise speed
    let mode = "walk"; // walk | brake | crouch | flight | land
    let modeT = 0;
    let flipQueued = false;
    let nextAutoFlip = 5;
    let lastHit = 0;
    const hits = []; // LiDAR points in world coordinates

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      s = Math.max(0.5, Math.min(1.3, Math.min(H / 330, W / 700)));
    };

    const requestFlip = () => {
      if (mode === "walk" && !reduceMotion) flipQueued = true;
    };
    flipRef.current = requestFlip;

    const step = (dt) => {
      clock += dt;
      modeT += dt;
      if (mode === "walk") {
        speed += (1 - speed) * Math.min(1, dt * 2.5);
        if (clock > nextAutoFlip) flipQueued = true;
        if (flipQueued) [mode, modeT] = ["brake", 0];
      } else if (mode === "brake") {
        speed += (0 - speed) * Math.min(1, dt * 7);
        if (speed < 0.03) [speed, mode, modeT] = [0, "crouch", 0];
      } else if (mode === "crouch" && modeT > FLIP.crouch) {
        [mode, modeT] = ["flight", 0];
      } else if (mode === "flight" && modeT > FLIP.flight) {
        [mode, modeT, flipQueued] = ["land", 0, false];
      } else if (mode === "land" && modeT > FLIP.land) {
        [mode, modeT] = ["walk", 0];
        nextAutoFlip = clock + AUTO_FLIP_EVERY;
      }
      phase = (phase + (dt / GAIT_PERIOD) * Math.min(1, speed * 3)) % 1;
      scroll += 95 * s * speed * dt;
    };

    const draw = () => {
      const css = getComputedStyle(document.body);
      const ink = css.color;
      const paper = css.backgroundColor;
      const accent = getComputedStyle(canvas).color;

      const base = H * 0.8;
      const v = 95 * s * speed;
      const g = (sx) => terrain(sx + scroll, base, s);

      // Robot geometry
      const L = 150 * s;
      const bodyH = 30 * s;
      const l1 = 46 * s;
      const l2 = 46 * s;
      const wheelR = 7 * s;
      const hipY = 0.3 * bodyH;
      const hipX = 0.36 * L;
      const h0 = 0.8 * (l1 + l2);
      const stride = (v * GAIT_PERIOD) / 2;
      const lift = 15 * s * Math.min(1, speed * 1.5);
      const cx = W < 720 ? W * 0.5 : W * 0.7;

      // Body pose
      const gFront = g(cx + hipX);
      const gHind = g(cx - hipX);
      const slope = Math.atan2(gFront - gHind, 2 * hipX);
      let h = h0;
      let jump = 0;
      let flipAngle = 0;
      let tuck = 0;
      if (mode === "crouch") {
        h = h0 - 24 * s * smooth(clamp01(modeT / FLIP.crouch));
      } else if (mode === "flight") {
        const u = clamp01(modeT / FLIP.flight);
        h = h0 - 24 * s * (1 - u);
        jump = 4 * 125 * s * u * (1 - u);
        flipAngle = -TAU * smooth(u);
        tuck = Math.sin(Math.PI * u) ** 0.7;
      } else if (mode === "land") {
        h = h0 - 20 * s * Math.sin(Math.PI * clamp01(modeT / FLIP.land));
      }
      const bob = mode === "walk" || mode === "brake" ? 2 * s * Math.sin(phase * TAU * 2) * speed : 0;
      const theta = slope + flipAngle;
      const cy = (gFront + gHind) / 2 - wheelR - h - hipY + bob - jump;
      const cos = Math.cos(theta);
      const sin = Math.sin(theta);
      const toScreen = (bx, by) => [cx + bx * cos - by * sin, cy + bx * sin + by * cos];

      // Legs: [hip x in body frame, gait phase offset, knee bend, near side?]
      const legs = [
        { x: hipX, off: 0, bend: 1, near: true },
        { x: -hipX, off: 0.5, bend: -1, near: true },
        { x: hipX, off: 0.5, bend: 1, near: false },
        { x: -hipX, off: 0, bend: -1, near: false },
      ].map((leg) => {
        const [hx, hy] = toScreen(leg.x, hipY);
        let fx;
        let fy;
        if (mode === "flight") {
          // Feet in the body frame, blending from standing to tucked.
          const bx = leg.x * (1 - 0.3 * tuck);
          const by = hipY + h * (1 - tuck) + 0.45 * (l1 + l2) * tuck;
          [fx, fy] = toScreen(bx, by);
        } else {
          const p = (phase + leg.off) % 1;
          let dx;
          let up = 0;
          if (p < 0.5) {
            dx = stride * (0.5 - p / 0.5);
          } else {
            const u = (p - 0.5) / 0.5;
            dx = stride * (-0.5 + (1 - Math.cos(Math.PI * u)) / 2);
            up = lift * Math.sin(Math.PI * u);
          }
          fx = cx + leg.x * Math.cos(slope) + dx;
          fy = g(fx) - wheelR - up;
        }
        const [kx, ky] = solveKnee(hx, hy, fx, fy, l1, l2, leg.bend);
        return { ...leg, hx, hy, kx, ky, fx, fy };
      });

      ctx.clearRect(0, 0, W, H);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // Background ridges (parallax point clouds) and the ground profile.
      const layers = [
        { par: 0.25, dy: -95, amp: 1.3, freq: 0.6, a: 0.1 },
        { par: 0.45, dy: -58, amp: 1.1, freq: 0.8, a: 0.16 },
        { par: 0.7, dy: -28, amp: 0.9, freq: 1.2, a: 0.24 },
      ];
      ctx.fillStyle = accent;
      for (const layer of layers) {
        ctx.globalAlpha = layer.a;
        for (let x = 0; x <= W; x += 7) {
          const wx = (x + scroll * layer.par) * layer.freq;
          const y = terrain(wx + 4000 * layer.par, base + layer.dy * s, s * layer.amp);
          ctx.fillRect(x - 0.75, y - 0.75, 1.5, 1.5);
        }
      }
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = ink;
      for (let x = -(scroll % 6); x <= W; x += 6) {
        ctx.fillRect(x - 1, g(x) - 1, 2, 2);
      }

      // LiDAR: rays from the head sensor, in the body frame.
      const [sx, sy] = toScreen(0.4 * L, -bodyH / 2 - 6 * s);
      const sweep = 0.12 * Math.sin(clock * 2.2);
      const record = clock - lastHit > 0.045 && mode !== "flight";
      if (record) lastHit = clock;
      ctx.strokeStyle = accent;
      ctx.lineWidth = 1;
      for (let i = 0; i < RAYS; i++) {
        const ang = theta + 0.18 + (i / (RAYS - 1)) * 0.75 + sweep;
        const dx = Math.cos(ang);
        const dy = Math.sin(ang);
        let hit = null;
        for (let d = 10; d < 420 * s; d += 3) {
          const x = sx + dx * d;
          const y = sy + dy * d;
          if (x < 0 || x > W || y > H) break;
          if (y >= g(x)) {
            hit = [x, g(x)];
            break;
          }
        }
        if (!hit) continue;
        ctx.globalAlpha = 0.14;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(hit[0], hit[1]);
        ctx.stroke();
        if (record) hits.push({ wx: hit[0] + scroll, wy: hit[1], t: clock });
      }
      ctx.fillStyle = accent;
      while (hits.length && clock - hits[0].t > 3.5) hits.shift();
      for (const p of hits) {
        const age = (clock - p.t) / 3.5;
        ctx.globalAlpha = 0.9 * (1 - age);
        const r = 2.4 - age;
        ctx.fillRect(p.wx - scroll - r / 2, p.wy - r / 2, r, r);
      }
      ctx.globalAlpha = 1;

      const drawLeg = (leg) => {
        ctx.strokeStyle = ink;
        ctx.lineWidth = 5.5 * s;
        ctx.beginPath();
        ctx.moveTo(leg.hx, leg.hy);
        ctx.lineTo(leg.kx, leg.ky);
        ctx.lineTo(leg.fx, leg.fy);
        ctx.stroke();
        // Knee actuator and wheel, drawn as outlined discs.
        ctx.lineWidth = 1.6;
        ctx.fillStyle = paper;
        for (const [x, y, r] of [
          [leg.kx, leg.ky, 4.5 * s],
          [leg.fx, leg.fy, wheelR],
        ]) {
          ctx.beginPath();
          ctx.arc(x, y, r, 0, TAU);
          ctx.fill();
          ctx.stroke();
        }
        const spin = (leg.fx + scroll) / wheelR;
        ctx.beginPath();
        ctx.moveTo(leg.fx, leg.fy);
        ctx.lineTo(leg.fx + Math.cos(spin) * wheelR, leg.fy + Math.sin(spin) * wheelR);
        ctx.stroke();
      };

      // Far legs first, faded, slightly offset for depth.
      ctx.save();
      ctx.globalAlpha = 0.35;
      ctx.translate(5 * s, -3 * s);
      legs.filter((l) => !l.near).forEach(drawLeg);
      ctx.restore();

      // Body
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(theta);
      ctx.fillStyle = paper;
      ctx.strokeStyle = ink;
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.roundRect(-L / 2, -bodyH / 2, L, bodyH, 8 * s);
      ctx.fill();
      ctx.stroke();
      // Panel line, front head and LiDAR dome
      ctx.globalAlpha = 0.45;
      ctx.beginPath();
      ctx.moveTo(-L / 2 + 14 * s, -bodyH / 2 + 9 * s);
      ctx.lineTo(L / 2 - 26 * s, -bodyH / 2 + 9 * s);
      ctx.stroke();
      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.roundRect(L / 2 - 4 * s, -bodyH / 2 + 4 * s, 14 * s, bodyH - 8 * s, 4 * s);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.roundRect(0.4 * L - 7 * s, -bodyH / 2 - 9 * s, 14 * s, 9 * s, 3 * s);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = accent;
      ctx.beginPath();
      ctx.arc(L / 2 + 5 * s, 0, 2.2 * s, 0, TAU);
      ctx.fill();
      ctx.restore();

      // Hip actuators sit on the body, near legs on top.
      legs.filter((l) => l.near).forEach(drawLeg);
      ctx.fillStyle = paper;
      ctx.strokeStyle = ink;
      ctx.lineWidth = 1.6;
      for (const leg of legs.filter((l) => l.near)) {
        ctx.beginPath();
        ctx.arc(leg.hx, leg.hy, 6.5 * s, 0, TAU);
        ctx.fill();
        ctx.stroke();
      }
    };

    const loop = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      step(dt);
      draw();
      raf = requestAnimationFrame(loop);
    };

    const update = () => {
      const shouldRun = visible && !document.hidden && !reduceMotion;
      if (shouldRun && !running) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(loop);
      } else if (!shouldRun && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (!running) draw();
    });
    resizeObserver.observe(canvas);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    intersection.observe(canvas);
    document.addEventListener("visibilitychange", update);
    const themeObserver = new MutationObserver(() => !running && draw());
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    resize();
    draw();
    update();

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      intersection.disconnect();
      themeObserver.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return (
    <div className={`robot-scene ${className}`}>
      <canvas ref={canvasRef} className="robot-scene__canvas" aria-hidden="true" onClick={() => flipRef.current()} />
      <button type="button" className="robot-scene__flip" onClick={() => flipRef.current()}>
        <LuRotateCcw aria-hidden="true" /> Backflip
      </button>
    </div>
  );
}

export default RobotScene;
