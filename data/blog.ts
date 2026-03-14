// ============================================================
// DATA: BLOG ARTICLES
// To add a new article, copy one object and fill in your info.
// Write content in plain text or simple Markdown.
// ============================================================

export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  category: "Learning" | "Project" | "Industry" | "Reflection";
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How PID Control Works — A Simple Explanation",
    summary:
      "PID control is everywhere in industrial machines. Here is how I learned to understand it by building a line-following robot.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Learning",
    tags: ["PID", "Control Systems", "Arduino", "Robotics"],
    content: `
## What is PID Control?

PID stands for Proportional, Integral, and Derivative. It is a control algorithm that helps a machine reach a target value and stay there — even when things change.

Think of it like driving a car. You want to stay at exactly 80 km/h. If you go too fast, you release the gas. If you go too slow, you press the gas. PID does exactly this, but automatically and much faster.

## Why I Started Learning This

When I built my line-following robot, I used simple on/off control at first. The robot was shaking and went off the line every time it turned. That is when I discovered PID.

## The Three Parts

**P (Proportional):** Reacts to the current error. If the error is big, the correction is big.

**I (Integral):** Reacts to errors that accumulate over time. Fixes small persistent errors.

**D (Derivative):** Predicts future error based on how fast the error is changing. Slows down the correction to avoid overshooting.

## Result

After adding PID to my robot, it followed the line smoothly around corners. No more shaking. This was my first real experience connecting control theory to a physical system.
    `,
  },
  {
    id: 2,
    title: "My First MQTT Project: Sending Sensor Data Over Wi-Fi",
    summary:
      "MQTT is the protocol that connects IoT devices to dashboards. Here is how I used it with ESP32 to monitor a server room remotely.",
    date: "May 2, 2024",
    readTime: "6 min read",
    category: "Project",
    tags: ["MQTT", "ESP32", "IoT", "Node-RED"],
    content: `
## What is MQTT?

MQTT (Message Queuing Telemetry Transport) is a lightweight communication protocol designed for IoT devices. It works like a messaging system where devices publish data and other devices or servers subscribe to receive it.

## The Problem I Was Solving

A small server room had no temperature monitoring. When temperatures got too high, equipment started failing and nobody knew why. I wanted to build a simple, low-cost solution.

## What I Built

**Hardware:** ESP32 microcontroller + DHT22 temperature and humidity sensor.

**Software:**
- ESP32 reads sensor every 30 seconds
- Sends data to MQTT broker (Mosquitto)
- Node-RED receives data and shows a live dashboard
- Alert triggered when temperature exceeds 28°C

## What I Learned

MQTT is incredibly efficient. The messages are tiny, so even a cheap device with slow Wi-Fi can send data reliably. Node-RED made it easy to create a dashboard without writing a lot of code.

This project showed me the power of IIoT: simple hardware + smart software = a real solution to a real problem.
    `,
  },
  {
    id: 3,
    title: "Why I Want to Build Smart Factories",
    summary:
      "A personal reflection on what motivates me to study automation and why Industry 4.0 excites me every day.",
    date: "January 10, 2025",
    readTime: "4 min read",
    category: "Reflection",
    tags: ["Industry 4.0", "Motivation", "Career", "Smart Factory"],
    content: `
## The Moment Everything Made Sense

I was watching a documentary about a car factory in Germany. Every robot moved with perfect precision. Every part arrived at the right place at the right time. No human was directing them — the whole system was intelligent.

I thought: I want to build systems like this.

## What Is a Smart Factory?

A smart factory is not just a factory with robots. It is a factory where machines talk to each other, share data, detect problems before they happen, and adapt to changes automatically.

It combines automation, IoT, AI, and data analysis — exactly the fields I am learning.

## Why This Matters

The world is changing fast. Climate change, supply chain disruptions, and labor shortages are pushing industries to become smarter and more efficient. Engineers who understand both hardware and software will be the ones building this future.

That is exactly where I want to be.

## My Plan

1. Master automation and embedded systems
2. Learn industrial IoT protocols deeply
3. Add machine learning for predictive maintenance
4. Work on real factory projects during internships
5. Become an AIoT Industrial Engineer

I am building toward this goal every day. This portfolio is part of that journey.
    `,
  },
];
