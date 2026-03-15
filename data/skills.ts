export interface Skill {
  name: string;
  level: number; // sur 10
  category: "Programming" | "Hardware & Embedded" | "Communication & IoT" | "Tools & Platforms";
}

export const skills: Skill[] = [
  // Programming
  { name: "Python",            level: 8,  category: "Programming" },
  { name: "C / C++",           level: 7.5, category: "Programming" },
  { name: "MATLAB / Simulink", level: 7,  category: "Programming" },
  { name: "Bash / Shell",      level: 5.5, category: "Programming" },

  // Hardware & Embedded
  { name: "Arduino / ESP32",   level: 8,  category: "Hardware & Embedded" },
  { name: "PLC (Siemens S7)",  level: 6.5, category: "Hardware & Embedded" },
  { name: "Raspberry Pi",      level: 7,  category: "Hardware & Embedded" },
  { name: "STM32",             level: 5,  category: "Hardware & Embedded" },

  // Communication & IoT
  { name: "MQTT",              level: 7,  category: "Communication & IoT" },
  { name: "Modbus RTU / TCP",  level: 6,  category: "Communication & IoT" },
  { name: "I2C / SPI / UART",  level: 7.5, category: "Communication & IoT" },
  { name: "Node-RED",          level: 6.5, category: "Communication & IoT" },

  // Tools & Platforms
  { name: "Linux (Ubuntu)",    level: 7,  category: "Tools & Platforms" },
  { name: "Git / GitHub",      level: 7.5, category: "Tools & Platforms" },
  { name: "InfluxDB / Grafana",level: 5.5, category: "Tools & Platforms" },
  { name: "Docker (learning)", level: 4,  category: "Tools & Platforms" },
];