import backflipVideo from "../assets/projects/backflip.mp4";
import backflipPoster from "../assets/projects/backflip.webp";
import ultrasoundVideo from "../assets/projects/ultrasound.mp4";
import ultrasoundPoster from "../assets/projects/ultrasound.webp";
import arcVideo from "../assets/projects/arc.mp4";
import arcPoster from "../assets/projects/arc.webp";
import xploreVideo from "../assets/projects/xplore.mp4";
import xplorePoster from "../assets/projects/xplore.webp";
import drivingVideo from "../assets/projects/driving-games.mp4";
import drivingPoster from "../assets/projects/driving-games.webp";
import rocketVideo from "../assets/projects/rocket-lander.mp4";
import rocketPoster from "../assets/projects/rocket-lander.webp";
import pendulumVideo from "../assets/projects/double-pendulum.mp4";
import pendulumPoster from "../assets/projects/double-pendulum.webp";
import plateVideo from "../assets/projects/plate-recognition.mp4";
import platePoster from "../assets/projects/plate-recognition.webp";
import archipelago from "../assets/projects/archipelago.webp";
import temperatureController from "../assets/projects/temperature-controller.webp";
import logicWatch from "../assets/projects/logic-watch.webp";
import laserMirror from "../assets/projects/laser-mirror.webp";
import seedDrill from "../assets/projects/seed-drill.webp";

export const categories = ["Robot learning", "Control", "Perception", "Mechanical", "Embedded & software"];

// `featured` projects appear on the home page, in this order.
export const projects = [
  {
    id: "backflip",
    title: "Learning backflips on a wheeled quadruped",
    context: "Master's thesis · RSL, ETH Zurich",
    summary:
      "A two-stage framework — imitation pre-training from a single trajectory, then KL-regularised RL fine-tuning — that unlocks jumps and backflips.",
    description: [
      "This work introduces a two-stage learning framework that combines imitation-based pre-training with reinforcement learning to acquire complex, highly dynamic robot behaviours.",
      "A policy is first trained with Asymmetric Critic Distillation from a single reference trajectory with privileged information. It is then fine-tuned with KL-regularised RL, which keeps exploration close to the reference while letting the policy improve — enabling skills such as jumping and backflipping.",
    ],
    tags: ["Reinforcement learning", "Imitation learning", "Isaac Lab", "PyTorch"],
    categories: ["Robot learning", "Control"],
    media: { video: backflipVideo, poster: backflipPoster },
    featured: true,
  },
  {
    id: "ultrasound",
    title: "Real-time ultrasound imaging feedback",
    context: "Semester project · IBM / ARSL, ETH Zurich",
    summary:
      "AI-based tracking and closed-loop steering of microbubbles under ultrasound imaging, inside custom vein phantoms.",
    description: [
      "This project explores a new way to visualise and guide microbubbles using ultrasound imaging and custom-made channels.",
      "It introduces real-time feedback and an AI-based tracking method. The system can steer microbubbles even under strong flow conditions, although tracking becomes difficult at high speeds.",
    ],
    tags: ["Computer vision", "Tracking", "Python"],
    categories: ["Perception", "Robot learning"],
    media: { video: ultrasoundVideo, poster: ultrasoundPoster },
    links: { github: "https://github.com/LilianLaporte/Real-Time-Ultrasound-Imaging-Feedback" },
    featured: true,
  },
  {
    id: "arc",
    title: "Autonomous River Cleanup",
    context: "Robotics HiWi · RSL, ETH Zurich",
    summary:
      "Vision-based waste tracking, a full Gazebo simulation, and an improved pre-sorting stage for an automatic waste-sorting system.",
    description: [
      "Assisted the team in improving an automatic waste-sorting system: implemented a new computer-vision pipeline for waste tracking, developed a simulation of the entire system in Gazebo, and enhanced the pre-sorting stage.",
    ],
    tags: ["Object tracking", "YOLO", "ROS", "Gazebo"],
    categories: ["Perception"],
    media: { video: arcVideo, poster: arcPoster },
    links: { website: "https://riverclean.ethz.ch/" },
    featured: true,
  },
  {
    id: "xplore",
    title: "Mars rover arm — EPFL Xplore",
    context: "Student team · EPFL",
    summary: "Designed and built the forearm and gripper of a Mars rover for the European Rover Challenge.",
    description: [
      "Responsible for designing and building the forearm of a Mars rover as part of an inter-university competition.",
    ],
    highlights: [
      "#3 at the European Rover Challenge in the team's first year",
      "Special prize for the handling task",
      "Special prize for the science task",
    ],
    tags: ["Mechanical design", "CAD", "Manufacturing"],
    categories: ["Mechanical"],
    media: { video: xploreVideo, poster: xplorePoster },
    links: { website: "https://epfl-xplore.ch/" },
  },
  {
    id: "driving-games",
    title: "Multi-agent driving game",
    context: "Course project · ETH Zurich",
    summary: "Path generation, control and collision avoidance to guide each vehicle to its goal among static and moving obstacles.",
    description: [
      "Guide each agent (vehicle) to a designated area by first generating the path, then controlling the agent, and finally avoiding both static obstacles and other agents.",
    ],
    tags: ["Motion planning", "Control", "Python"],
    categories: ["Control"],
    media: { video: drivingVideo, poster: drivingPoster },
    links: { github: "https://github.com/LilianLaporte/Driving-games" },
  },
  {
    id: "rocket-lander",
    title: "Rocket lander",
    context: "Course project",
    summary: "Vertical landing of a Falcon 9-style rocket — from PID, to Model Predictive Control, to reinforcement learning.",
    description: [
      "Designed a system to simulate the vertical landing of a SpaceX Falcon 9 rocket. Progressed from basic to advanced controllers: starting with PID, then Model Predictive Control, and finally a reinforcement-learning approach.",
    ],
    tags: ["MPC", "PID", "Reinforcement learning", "Python"],
    categories: ["Control", "Robot learning"],
    media: { video: rocketVideo, poster: rocketPoster },
    links: { github: "https://github.com/LilianLaporte/rocket-lander" },
  },
  {
    id: "double-pendulum",
    title: "Double pendulum control",
    context: "Course project",
    summary: "LQR for the 'up-up' balance and cascaded PID for disturbance rejection in the 'down-down' state, on real hardware.",
    description: [
      "Built a controller to stabilise a double pendulum in both upright and downward positions. Used LQR for the challenging 'up-up' balance and a cascaded PID to handle disturbances in the 'down-down' state.",
    ],
    tags: ["LQR", "PID", "MATLAB"],
    categories: ["Control"],
    media: { video: pendulumVideo, poster: pendulumPoster },
    links: { github: "https://github.com/LilianLaporte/Double-pendulum" },
  },
  {
    id: "plate-recognition",
    title: "License plate recognition",
    context: "Course project · TU Delft",
    summary: "Reads plates from video under varying angles, lighting, speeds and plate types.",
    description: [
      "Designed and implemented a system that automatically recognises the number/letter combination of licence plates in a video sequence under various conditions — different angles, lighting, speeds and plate types.",
    ],
    tags: ["Computer vision", "OpenCV", "Python", "Docker"],
    categories: ["Perception"],
    media: { video: plateVideo, poster: platePoster },
    links: { github: "https://github.com/LilianLaporte/Plate-Recognition" },
  },
  {
    id: "archipelago",
    title: "Archipelago",
    context: "Course project · EPFL",
    summary: "A C++/GTK tool to design and evaluate a floating city of circular islands linked by bridges.",
    description: [
      "Due to a predicted rise in sea level, a city-state on the edge of the ocean decides to turn itself into a floating city. We developed a tool to evaluate a city plan in which each district is a circular island and districts are linked by floating bridges, with efficiency criteria evaluated systematically.",
    ],
    tags: ["C++", "GTKmm", "Graph algorithms"],
    categories: ["Embedded & software"],
    media: { image: archipelago },
    links: { github: "https://github.com/LilianLaporte/Archipelago/tree/main" },
  },
  {
    id: "temperature-controller",
    title: "Temperature controller",
    context: "Course project · EPFL",
    summary: "AVR microcontroller in assembly with a 1-wire sensor, servo, LCD and buzzer.",
    description: [
      "Created a system using the AVR STK300 microcontroller with a 1-wire temperature sensor. It includes a servo motor, a 2×16 LCD display and a buzzer for interaction and feedback.",
    ],
    tags: ["AVR", "Assembly", "Embedded"],
    categories: ["Embedded & software"],
    media: { image: temperatureController },
    links: { github: "https://github.com/LilianLaporte/temperature-controller" },
  },
  {
    id: "logic-watch",
    title: "Logic watch",
    context: "Course project · EPFL",
    summary: "A digital watch with alarm built only from logic gates, running on a DE10-Lite FPGA board.",
    description: [
      "Built a digital watch with a buzzer using the DE10-Lite board. The entire system was designed using only logic gates in Logisim Evolution.",
    ],
    tags: ["Digital logic", "FPGA", "Logisim"],
    categories: ["Embedded & software"],
    media: { image: logicWatch },
    links: { github: "https://github.com/LilianLaporte/logic-watch" },
  },
  {
    id: "laser-mirror",
    title: "Mirror mechanism for femtosecond laser micromachining",
    context: "Course project · EPFL",
    summary: "A balanced dual-axis mechanism pivoting a mirror from 10 Hz to 820 Hz.",
    description: [
      "Created a dynamic mechanism for a femtosecond laser machine by replacing a fixed mirror with a movable one on a dual-axis rotating system. The design allows precise mirror pivoting from 10 Hz to 820 Hz while maintaining balance.",
    ],
    tags: ["Mechanism design", "CAD", "Dynamics"],
    categories: ["Mechanical"],
    media: { image: laserMirror },
  },
  {
    id: "seed-drill",
    title: "Automatic seed drill",
    context: "Course project · EPFL",
    summary: "Opens a trench, plants and covers seeds, with adjustable seed size and spacing.",
    description: [
      "Developed an automatic seed drill that opens a trench, plants seeds and closes it behind. Users can adjust seed size and spacing at any time.",
    ],
    tags: ["Mechanism design", "CAD"],
    categories: ["Mechanical"],
    media: { image: seedDrill },
  },
];
