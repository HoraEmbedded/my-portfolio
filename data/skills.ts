export interface Skill {
  name: string;
  level: number; // sur 10
  category: "Programming" | "Hardware & Embedded" | "Communication & IoT" | "Tools & Platforms";
}

export const skills: Skill[] = [
  // Programming
  { name: "Python",            level: 1,  category: "Programming" },
  { name: "C / C++",           level: 3, category: "Programming" },
  { name: "MATLAB / Simulink", level: 3,  category: "Programming" },
  { name: "Bash / Shell",      level: 1, category: "Programming" },

  // Hardware & Embedded
  { name: "Arduino / ESP32",   level: 0,  category: "Hardware & Embedded" },
  { name: "PLC (Siemens S7)",  level: 4, category: "Hardware & Embedded" },
  { name: "Raspberry Pi",      level: 0,  category: "Hardware & Embedded" },
  { name: "STM32",             level: 0,  category: "Hardware & Embedded" },

  // Communication & IoT
  { name: "MQTT",              level: 0,  category: "Communication & IoT" },
  { name: "Modbus RTU / TCP",  level: 0,  category: "Communication & IoT" },
  { name: "I2C / SPI / UART",  level: 0, category: "Communication & IoT" },
  { name: "Node-RED",          level: 0, category: "Communication & IoT" },

  // Tools & Platforms
  { name: "Linux (Ubuntu)",    level: 4,  category: "Tools & Platforms" },
  { name: "Git / GitHub",      level: 4, category: "Tools & Platforms" },
  { name: "InfluxDB / Grafana",level: 0, category: "Tools & Platforms" },
  { name: "Docker (learning)", level: 0,  category: "Tools & Platforms" },
];