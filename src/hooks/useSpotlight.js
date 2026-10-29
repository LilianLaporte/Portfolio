import { useEffect } from "react";

// Feeds the pointer position to any `.spotlight` element under the cursor
// as --mx / --my, which global.css uses for the glow effect.
export function useSpotlight() {
  useEffect(() => {
    const onMove = (e) => {
      const el = e.target instanceof Element && e.target.closest(".spotlight");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
}
