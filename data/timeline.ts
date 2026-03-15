export interface TimelineEntry {
  date: string;
  title: string;
  description: string;
  type: "Education" | "Project" | "Internship" | "Certification" | "Learning" | "Lab" | "Career" | "Goal";
}

export const timeline: TimelineEntry[] = [
  {
    date: "September 2022",
    title: "Joined ENSA Tangier",
    description: "Started Engineering degree in Electronic Systems and Automation. First real exposure to control theory, electronics, and programming.",
    type: "Education",
  },
  {
    date: "March 2023",
    title: "First Arduino Project",
    description: "Built a temperature monitoring system with an LCD display. This was the project that made everything click — hardware, code, real output.",
    type: "Project",
  },
  {
    date: "September 2023",
    title: "Discovered IoT and MQTT",
    description: "Set up my first MQTT broker and connected multiple ESP32 nodes. Started thinking about systems, not just individual devices.",
    type: "Learning",
  },
  {
    date: "January 2024",
    title: "PCB Design — First Custom Board",
    description: "Learned KiCad, designed a custom sensor interface PCB, and received the manufactured boards. First time holding hardware I had fully designed.",
    type: "Project",
  },
  {
    date: "June 2024",
    title: "Started Personal Lab",
    description: "Dedicated a space and budget to continuous experimentation. Began documenting every experiment systematically.",
    type: "Lab",
  },
  {
    date: "Summer 2025",
    title: "Internship at an Engineering Company",
    description: "Target: industrial automation, embedded systems, or IIoT role at a major engineering or technology company in Morocco or internationally.",
    type: "Internship",
  },
  {
    date: "2025–2026",
    title: "IIoT and PLC Certifications",
    description: "Planning to obtain professional certifications in industrial IoT (Coursera, edX) and PLC programming (Siemens TIA Portal).",
    type: "Certification",
  },
  {
    date: "June 2027",
    title: "Engineering Degree — ENSA Tangier",
    description: "Expected graduation with an Engineering degree in Electronic Systems and Automation, ready for a full-time engineering career.",
    type: "Education",
  },
  {
    date: "2027+",
    title: "Automation & IIoT Engineer",
    description: "Full-time career in industrial automation, smart factory engineering, or industrial IoT — contributing to Industry 4.0 from the ground level.",
    type: "Career",
  },
];