// ============================================================
// DATA: TIMELINE
// To add a new entry, copy one object and fill in your info.
// ============================================================

export interface TimelineEntry {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: "education" | "project" | "internship" | "certification" | "goal";
  highlight?: boolean;
}

export const timeline: TimelineEntry[] = [
  {
    year: "2021",
    title: "Baccalaureate — Sciences Physiques",
    subtitle: "High School, Benin",
    description:
      "Graduated with strong results in physics, mathematics, and chemistry. Developed a passion for electronics and how machines work.",
    type: "education",
  },
  {
    year: "2022",
    title: "Joined ENSA Tangier",
    subtitle: "National School of Applied Sciences, Morocco",
    description:
      "Enrolled in the Electronic Systems and Automation Engineering program. First exposure to control theory, programming, and electrical engineering.",
    type: "education",
    highlight: true,
  },
  {
    year: "2023",
    title: "First Hardware Project — Line Following Robot",
    subtitle: "Personal Project",
    description:
      "Built my first autonomous robot using Arduino and PID control. This project showed me that software and hardware can create intelligent machines.",
    type: "project",
  },
  {
    year: "2023",
    title: "Completed: PCB Design with KiCad",
    subtitle: "Self-Learning Certification",
    description:
      "Learned PCB design fundamentals. Designed and documented a simple home automation circuit board.",
    type: "certification",
  },
  {
    year: "2024",
    title: "IoT Monitoring System Project",
    subtitle: "Academic + Personal Project",
    description:
      "Built an ESP32-based temperature monitoring system with MQTT and Node-RED dashboard. First real IoT project connecting hardware to a cloud dashboard.",
    type: "project",
    highlight: true,
  },
  {
    year: "2024",
    title: "Industrial Automation Internship",
    subtitle: "Target — Summer 2024",
    description:
      "Seeking first industrial internship to apply PLC and automation skills in a real factory environment.",
    type: "internship",
  },
  {
    year: "2025",
    title: "AI for Industry — Predictive Maintenance",
    subtitle: "Research Project",
    description:
      "Working on machine learning project to detect motor failures from vibration data. Combining Python, data analysis, and industrial knowledge.",
    type: "project",
  },
  {
    year: "2025",
    title: "Advanced Internship at Engineering Company",
    subtitle: "Goal — 2025",
    description:
      "Target internship at a major automation or industrial technology company. Goal: work on real IIoT or smart factory projects.",
    type: "goal",
    highlight: true,
  },
  {
    year: "2027",
    title: "Engineering Degree — ENSA Tangier",
    subtitle: "Expected Graduation",
    description:
      "Complete my engineering degree in Electronic Systems and Automation. Final year project planned in industrial IoT or AI for industry.",
    type: "education",
    highlight: true,
  },
  {
    year: "2027+",
    title: "AIoT Industrial Engineer",
    subtitle: "Career Goal",
    description:
      "Join an international engineering company as an Automation & Industrial IoT Engineer. Build intelligent systems for the smart factories of tomorrow.",
    type: "goal",
  },
];
