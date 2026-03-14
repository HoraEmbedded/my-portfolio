// ============================================================
// DATA: SKILLS
// To add a new skill, copy one object and fill in your info.
// Level is from 1 to 100 (percentage of progress bar).
// ============================================================

export interface Skill {
  name: string;
  level: number;
  category: "Programming" | "Hardware" | "Tools" | "Concepts";
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: string[];
}

export const skills: Skill[] = [
  // Programming
  { name: "Python", level: 78, category: "Programming" },
  { name: "C / C++", level: 72, category: "Programming" },
  { name: "MATLAB / Simulink", level: 65, category: "Programming" },
  { name: "Ladder Logic (PLC)", level: 60, category: "Programming" },
  { name: "Shell / Bash", level: 55, category: "Programming" },
  // Hardware
  { name: "Arduino", level: 80, category: "Hardware" },
  { name: "ESP32 / ESP8266", level: 72, category: "Hardware" },
  { name: "Raspberry Pi", level: 65, category: "Hardware" },
  { name: "PLC (Siemens / Schneider)", level: 60, category: "Hardware" },
  { name: "PCB Design (KiCad)", level: 50, category: "Hardware" },
  // Tools
  { name: "Git / GitHub", level: 75, category: "Tools" },
  { name: "Linux (Ubuntu)", level: 68, category: "Tools" },
  { name: "MQTT / Node-RED", level: 65, category: "Tools" },
  { name: "VS Code", level: 85, category: "Tools" },
  { name: "Wireshark / Serial Monitor", level: 50, category: "Tools" },
  // Concepts
  { name: "Control Systems", level: 70, category: "Concepts" },
  { name: "Industrial IoT", level: 68, category: "Concepts" },
  { name: "Automation Design", level: 65, category: "Concepts" },
  { name: "Machine Learning (basics)", level: 52, category: "Concepts" },
  { name: "Communication Protocols", level: 63, category: "Concepts" },
];

export const engineeringDomains: SkillCategory[] = [
  {
    id: "automation",
    title: "Automation",
    description:
      "Designing control systems that make machines work by themselves — reliably, safely, and efficiently.",
    icon: "⚙",
    skills: ["PLC Programming", "SCADA", "Ladder Logic", "Control Systems", "HMI Design"],
  },
  {
    id: "embedded",
    title: "Embedded Systems",
    description:
      "Programming small computers (microcontrollers) that live inside physical devices and make them smart.",
    icon: "◈",
    skills: ["Arduino", "ESP32", "STM32", "C/C++", "Real-Time Systems", "PCB Design"],
  },
  {
    id: "iiot",
    title: "Industrial IoT",
    description:
      "Connecting industrial machines to the internet so engineers can see data and control systems remotely.",
    icon: "◉",
    skills: ["MQTT", "Modbus", "OPC-UA", "Node-RED", "Edge Computing", "Cloud Platforms"],
  },
  {
    id: "control",
    title: "Control Systems",
    description:
      "Using mathematics and engineering to make systems behave exactly how you want — stable, fast, and precise.",
    icon: "△",
    skills: ["PID Control", "MATLAB", "Simulink", "Transfer Functions", "State Space"],
  },
  {
    id: "data",
    title: "Industrial Data",
    description:
      "Collecting, analyzing, and making sense of data that machines generate — to improve performance.",
    icon: "▦",
    skills: ["Python", "Pandas", "Data Logging", "Visualization", "Signal Processing"],
  },
  {
    id: "ai",
    title: "AI for Industry",
    description:
      "Using machine learning to help machines make smart decisions — like detecting failures before they happen.",
    icon: "◇",
    skills: ["scikit-learn", "Predictive Maintenance", "Anomaly Detection", "NumPy", "Matplotlib"],
  },
];
