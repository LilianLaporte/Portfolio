import { LuBrain, LuActivity, LuEye, LuCode, LuWrench } from "react-icons/lu";
import {
  SiPytorch,
  SiNvidia,
  SiOpencv,
  SiPython,
  SiCplusplus,
  SiC,
  SiRos,
  SiDocker,
  SiLinux,
  SiGit,
  SiJavascript,
  SiBlender,
  SiDassaultsystemes,
} from "react-icons/si";

export const skillGroups = [
  {
    title: "Robot learning",
    icon: LuBrain,
    skills: [
      { name: "PyTorch", icon: SiPytorch },
      { name: "Isaac Lab / Sim", icon: SiNvidia },
      { name: "MuJoCo" },
      { name: "Reinforcement learning" },
      { name: "Imitation learning" },
    ],
  },
  {
    title: "Control",
    icon: LuActivity,
    skills: [{ name: "MPC" }, { name: "LQR" }, { name: "PID" }, { name: "MATLAB / Simulink" }, { name: "YALMIP" }],
  },
  {
    title: "Perception",
    icon: LuEye,
    skills: [{ name: "OpenCV", icon: SiOpencv }, { name: "YOLO" }, { name: "Object tracking" }, { name: "Ultrasound imaging" }],
  },
  {
    title: "Software",
    icon: LuCode,
    skills: [
      { name: "Python", icon: SiPython },
      { name: "C++", icon: SiCplusplus },
      { name: "C", icon: SiC },
      { name: "ROS", icon: SiRos },
      { name: "Docker", icon: SiDocker },
      { name: "Linux", icon: SiLinux },
      { name: "Git", icon: SiGit },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Assembly" },
    ],
  },
  {
    title: "Design & simulation",
    icon: LuWrench,
    skills: [
      { name: "SolidWorks", icon: SiDassaultsystemes },
      { name: "CATIA", icon: SiDassaultsystemes },
      { name: "Blender", icon: SiBlender },
      { name: "Abaqus" },
      { name: "Gazebo" },
    ],
  },
];
