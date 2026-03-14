// ============================================================
// DATA: PROJECTS
// To add a new project, copy one object and fill in your info.
// ============================================================

export interface Project {
  id: number;
  title: string;
  category: "Automation" | "Embedded" | "IoT" | "AI" | "Electronics";
  problem: string;
  solution: string;
  technologies: string[];
  github?: string;
  demo?: string;
  status: "Completed" | "In Progress" | "Concept";
  year: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Smart Industrial Conveyor Controller",
    category: "Automation",
    problem:
      "A small factory needed to control a conveyor belt based on sensor data. Manual control was slow and caused frequent errors on the production line.",
    solution:
      "Designed a PLC-based control system using ladder logic that reads sensors, adjusts speed automatically, and stops safely when an object blocks the line.",
    technologies: ["PLC", "Ladder Logic", "Sensors", "SCADA", "HMI"],
    github: "https://github.com/horaembedded",
    status: "Completed",
    year: "2024",
    highlights: [
      "Reduced production errors by 60%",
      "Added emergency stop safety logic",
      "Documented full system architecture",
    ],
  },
  {
    id: 2,
    title: "Temperature & Humidity IoT Monitor",
    category: "IoT",
    problem:
      "A server room had no remote monitoring. Overheating was only discovered after equipment failures, causing expensive damage.",
    solution:
      "Built an ESP32-based sensor node that reads temperature and humidity every 30 seconds and sends data to an MQTT broker. A Node-RED dashboard shows live graphs.",
    technologies: ["ESP32", "DHT22", "MQTT", "Node-RED", "C++", "Wi-Fi"],
    github: "https://github.com/horaembedded",
    status: "Completed",
    year: "2024",
    highlights: [
      "Live data visible from any phone",
      "Sends alert when temperature is too high",
      "Runs 24/7 without intervention",
    ],
  },
  {
    id: 3,
    title: "Line Following Robot with PID Control",
    category: "Embedded",
    problem:
      "Needed to build an autonomous robot that follows a black line on a white surface with high precision, not just basic on/off control.",
    solution:
      "Built a robot using Arduino, IR sensors, and a PID control algorithm. The PID adjusts motor speed smoothly so the robot stays on the line even on curves.",
    technologies: ["Arduino", "C++", "PID Control", "IR Sensors", "PWM Motors"],
    github: "https://github.com/horaembedded",
    status: "Completed",
    year: "2023",
    highlights: [
      "Smooth curve tracking with PID tuning",
      "Works at multiple speed levels",
      "First hardware project with real control theory",
    ],
  },
  {
    id: 4,
    title: "Predictive Maintenance with Machine Learning",
    category: "AI",
    problem:
      "Machines fail without warning, causing production stops. Preventive maintenance is expensive because it replaces parts that are still working.",
    solution:
      "Collected vibration data from a motor and trained a simple ML model in Python that detects when the motor behavior changes — before it breaks.",
    technologies: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/horaembedded",
    status: "In Progress",
    year: "2025",
    highlights: [
      "Anomaly detection from vibration signals",
      "Data visualization of motor health",
      "Applying AI to real industrial problems",
    ],
  },
  {
    id: 5,
    title: "Smart Home Automation Panel",
    category: "Electronics",
    problem:
      "Wanted to build a low-cost home automation panel that controls lights, fans, and a door lock — all from one central button panel and remotely.",
    solution:
      "Designed a PCB with relays, an ESP8266 Wi-Fi module, and a mobile app interface using Blynk. Full schematic designed in KiCad.",
    technologies: ["ESP8266", "Blynk", "KiCad", "Relay Circuit", "PCB Design"],
    github: "https://github.com/horaembedded",
    status: "Completed",
    year: "2023",
    highlights: [
      "Control from phone via Wi-Fi",
      "Custom PCB designed from scratch",
      "Full schematic documentation",
    ],
  },
  {
    id: 6,
    title: "Modbus RTU Communication Monitor",
    category: "IoT",
    problem:
      "Industrial sensors use Modbus RTU protocol. Engineers needed a simple tool to read and log sensor data over RS485 without expensive hardware.",
    solution:
      "Wrote a Python script using the pymodbus library that reads registers from industrial devices and logs data to CSV files for later analysis.",
    technologies: ["Python", "Modbus RTU", "RS485", "pymodbus", "Linux"],
    github: "https://github.com/horaembedded",
    status: "Completed",
    year: "2024",
    highlights: [
      "Reads 10+ sensors simultaneously",
      "Auto-logs data with timestamps",
      "Runs on Raspberry Pi in the field",
    ],
  },
];
