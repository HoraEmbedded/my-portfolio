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

  {
  id: 4,
  title: "PLC Programming Languages under IEC 61131-3",
  summary: "Overview of IEC 61131-3, the five PLC programming languages, their advantages and disadvantages, and the most widely used language in industry.",
  date: "June 2025",
  readTime: "5 min read",
  category: "Learning",   // Learning | Project | Industry | Reflection
  tags: ["PLC", "IEC", "PLC Languages", "Ladder Diagram", "Automation"],
  content: `
## What is a PLC?

A PLC means **Programmable Logic Controller**.

A PLC is an industrial computer. It is used to control machines and industrial processes.  
It reads **inputs**, makes decisions with a program, and controls **outputs**.

For example:
- a sensor sends a signal to the PLC
- the PLC checks the logic
- the PLC starts a motor, a lamp, or a valve

## What is IEC?

**IEC** means **International Electrotechnical Commission**.

IEC creates international standards for electrical and electronic systems.

## What is IEC 61131-3?

IEC 61131-3 is the main standard for PLC programming languages.

When people talk about the **classic PLC languages**, they usually mean these five:
- **LD** = Ladder Diagram
- **FBD** = Function Block Diagram
- **ST** = Structured Text
- **SFC** = Sequential Function Chart
- **IL** = Instruction List

> Important note: IL is mostly found in older documents and older software.  
> In modern practice, LD, FBD, ST, and SFC are more important.

## 1) LD : Ladder Diagram

LD is a graphical language.  
It looks like electrical relay diagrams.

**Advantages**
- easy to read for electricians and technicians
- very good for simple logic
- very good for maintenance and troubleshooting
- popular in factories

**Disadvantages**
- not the best for complex math
- large programs can become difficult to read
- not ideal for advanced data handling

## 2) FBD : Function Block Diagram

FBD is a graphical language made with blocks connected together.

**Advantages**
- easy for control functions and signal flow
- good for analog control and process logic
- good for reusable function blocks
- visual and practical

**Disadvantages**
- big diagrams can become crowded
- complex systems may be hard to follow
- less convenient for long algorithms

## 3) ST : Structured Text

ST is a text language, similar to programming languages.

**Advantages**
- very good for math and formulas
- very good for loops, arrays, and data processing
- good for advanced logic
- compact and powerful

**Disadvantages**
- harder for beginners
- less visual than LD or FBD
- maintenance teams may prefer graphical languages

## 4) SFC : Sequential Function Chart

SFC is used to describe steps and transitions in a process.

**Advantages**
- very clear for sequences
- good for machines with many steps
- easy to understand process flow
- good for organizing large programs

**Disadvantages**
- usually not enough alone
- often needs LD, FBD, or ST with it
- not ideal for detailed calculations

## 5) IL : Instruction List

IL is a text language that looks a little like assembly language.

**Advantages**
- simple and direct in old systems
- compact in small old programs

**Disadvantages**
- hard to read
- hard to maintain
- not beginner-friendly
- mostly outdated today

## Which language is the most used?

The most used language in industry is usually **LD (Ladder Diagram)**.

Why?
- it is visual
- it is easy for maintenance teams
- it is close to electrical logic
- many technicians already understand it

However, **ST** is also very important today, especially for:
- complex logic
- calculations
- data processing
- advanced automation

## Simple conclusion

A PLC is an industrial computer used to automate machines.

IEC 61131-3 defines the main PLC programming languages.

For a beginner:
- start with **LD**
- understand **FBD**
- learn **ST** for advanced logic
- use **SFC** for sequence control
- know that **IL** is mainly old technology 
In practice, engineers often combine multiple IEC 61131-3 languages in the same project to build robust, readable, and efficient automation systems.
  `,
},

];
