// Central project data source. Edit this file to add, remove, or update projects —
// every card, filter, and case-study modal reads from here.

const base = import.meta.env.BASE_URL || "/";
const withBase = (path) => `${base}${path.replace(/^\/+/, "")}`;

export const CATEGORIES = ["All", "AI/ML", "Software", "IoT", "Embedded", "Computer Vision"];

export const projects = [
  {
    id: "mentora",
    title: "Mentora",
    subtitle: "AI-Powered PDF Learning Platform",
    category: ["AI/ML", "Software"],
    featured: true,
    description:
      "An AI-powered learning platform designed to extract and analyze complex information from PDF documents.",
    problem:
      "Dense PDFs mix text, tables, diagrams, charts, equations, and handwriting — most tools only handle the first of these well, leaving students to manually dig through the rest.",
    solution:
      "Mentora runs uploaded PDFs through a processing pipeline that separates and interprets each content type, indexes it for retrieval, and exposes it through a conversational interface backed by an LLM.",
    features: [
      "Text extraction",
      "Image extraction",
      "Table processing",
      "Diagram analysis",
      "Chart analysis",
      "Mathematical equation handling",
      "Handwritten content processing",
      "OCR",
      "AI-powered analysis",
    ],
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "PyMuPDF",
      "Tesseract OCR",
      "ChromaDB",
      "SQLite",
      "LLM APIs",
    ],
    architecture: ["PDF", "Document Processing", "Text / Images / Tables / OCR", "Vector Database", "LLM", "AI Learning Interface"],
    challenges:
      "Reliably separating scanned/handwritten regions from digital text within the same document, and keeping retrieval accurate once content is split across multiple vector entries.",
    learnings:
      "Building a real document-processing pipeline surfaced how much production AI work is data plumbing — parsing, chunking, and indexing — before the LLM ever sees a prompt.",
    github: null,
    demo: "https://sifatmahmud55.github.io/Mentoraa/",
    image: withBase("mentora.jpg"),
  },
  {
    id: "smart-env-monitor",
    title: "Smart Temperature & Humidity Monitoring System",
    subtitle: "Real-Time Environmental Monitoring",
    category: ["IoT", "Embedded"],
    featured: false,
    description:
      "An ESP32-based real-time environmental monitoring system combining sensors, MQTT communication, database storage, and a custom web dashboard.",
    problem:
      "Manual, periodic checks of temperature and humidity don't scale for continuous monitoring or catch short-lived fluctuations.",
    solution:
      "Sensor readings are published from an ESP32 over MQTT, persisted to a database, and rendered on a live dashboard so conditions can be tracked and reviewed remotely.",
    features: [
      "Real-time temperature monitoring",
      "Humidity monitoring",
      "MQTT communication",
      "Database storage",
      "Data visualization",
      "Analytics",
      "Web dashboard",
      "Remote monitoring",
    ],
    tech: ["ESP32", "Sensors", "Arduino IDE", "MQTT", "Database", "Web Dashboard", "Chart.js"],
    architecture: ["Sensors", "ESP32", "MQTT", "Backend / Database", "Web Dashboard"],
    challenges:
      "Keeping the MQTT connection stable on a constrained microcontroller while the dashboard polled for near-real-time updates without overwhelming the broker.",
    learnings:
      "Gained a much clearer picture of the full IoT stack — from firmware and message brokers to how that data eventually becomes something readable on a screen.",
    github: null,
    demo: null,
    image: withBase("iot.png"),
  },
  {
    id: "visiondrive",
    title: "VisionDrive",
    subtitle: "Autonomous Monitoring Robot",
    category: ["Computer Vision", "Embedded", "AI/ML"],
    featured: false,
    description:
      "An autonomous monitoring robot combining embedded control, robotics, and edge AI for real-time object detection and counting.",
    problem:
      "Monitoring a physical space for specific objects or movement typically needs either a person watching a feed or an expensive dedicated system.",
    solution:
      "A Raspberry Pi runs a MobileNet SSD model on a live camera feed to detect and count objects, while an Arduino UNO handles motor control for movement.",
    features: ["Real-time object detection", "Object counting", "Live MJPEG stream", "Embedded motor control"],
    tech: ["Arduino UNO", "Raspberry Pi", "MobileNet SSD", "Flask MJPEG", "Computer Vision"],
    architecture: ["Camera", "Raspberry Pi", "MobileNet SSD", "Object Detection", "Counting / Monitoring"],
    motorFlow: ["Arduino UNO", "Motors"],
    challenges:
      "Running object detection fast enough on Raspberry Pi-class hardware to stay useful in real time, while keeping motor control responsive on a separate microcontroller.",
    learnings:
      "Learned how much systems design matters in embedded AI — splitting inference and motor control across two boards was necessary for both to run reliably.",
    github: null,
    demo: null,
    image: withBase("Roboscout_1.jpeg"),
  },
  {
    id: "progressnest",
    title: "ProgressNest",
    subtitle: "Personal Goal & Productivity Tracker",
    category: ["Software"],
    featured: false,
    description:
      "A full-stack platform for tracking personal goals, achievements, productivity, and collaborative learning activities.",
    problem: null,
    solution: null,
    features: [],
    tech: ["React", "FastAPI"],
    architecture: [],
    challenges: null,
    learnings: null,
    github: null,
    demo: null,
    image: withBase("progressnest.png"),
  },
  {
    id: "robo-advisor",
    title: "Robo-Advisor Investment Chatbot",
    subtitle: "AI-Powered Investment Advisor for Bangladeshi Market",
    category: ["AI/ML", "Software"],
    featured: true,
    description:
      "A specialized investment chatbot tailored for the Bangladeshi market that assists users in identifying optimal investment opportunities by analyzing financial profiles and risk appetite.",
    problem:
      "Individual investors struggle to make informed investment decisions without personalized guidance. Generic financial tools don't account for market-specific opportunities or personal financial constraints.",
    solution:
      "An AI-driven chatbot powered by OpenRouter that analyzes user input (earnings, capital, objectives, risk appetite, timelines) and provides intelligent, market-specific investment recommendations through conversational interaction.",
    features: [
      "Personalized investment recommendations",
      "Monthly earnings and capital analysis",
      "Financial objectives assessment",
      "Risk appetite evaluation",
      "Investment timeline planning",
      "AI-driven conversational interface",
      "Multi-LLM support via OpenRouter",
      "Real-time investment advice",
    ],
    tech: [
      "FastAPI",
      "OpenRouter API",
      "LLM Models",
      "React",
      "Vite",
      "Tailwind CSS",
      "Vercel",
      "Prompt Engineering",
      "Python",
    ],
    architecture: ["User Input", "AI Analysis Engine", "Intelligent Recommendation Logic", "Dataset Filtering", "Chat Interface", "Investment Recommendations"],
    challenges:
      "Orchestrating multiple LLMs through a unified API while maintaining cost efficiency, and building recommendation logic that accurately reflects the Bangladeshi investment landscape.",
    learnings:
      "Gained deep experience in AI model orchestration, prompt engineering for financial advisory, and leveraging open-source models for cost-effective AI deployment in production systems.",
    github: "https://lnkd.in/gmAsusXU",
    demo: "https://lnkd.in/ghJzuAgc",
    image: withBase("roboadvisor.png"),
  },
  {
    id: "smart-home-security",
    title: "Smart Home Safety & Security System",
    subtitle: "Embedded Intrusion & Environmental Safety",
    category: ["Embedded", "IoT"],
    featured: false,
    description:
      "A real-time safety and security system integrating environmental sensors, intrusion detection, person counting, Arduino control, and buzzer alerts.",
    problem:
      "Home safety systems need to react to more than one kind of threat — gas leaks, smoke, and physical intrusion — without needing separate standalone devices.",
    solution:
      "Smoke, gas, and LDR sensors feed into an Arduino alongside a laser-based intrusion trigger, with person counting logic and buzzer alerts for immediate notification.",
    features: [
      "Smoke sensor",
      "Gas sensor",
      "LDR",
      "Laser-based intrusion detection",
      "Person counting",
      "Arduino control",
      "Buzzer alerts",
    ],
    tech: ["Arduino", "Smoke Sensor", "Gas Sensor", "LDR", "Laser Module", "Buzzer"],
    architecture: ["Sensors (Smoke / Gas / LDR / Laser)", "Arduino", "Detection Logic", "Buzzer Alert"],
    challenges:
      "Coordinating multiple sensor types on limited Arduino I/O and tuning thresholds to avoid false triggers.",
    learnings:
      "Reinforced the fundamentals of interrupt handling and sensor calibration in a system where false positives and false negatives both carry real cost.",
    github: null,
    demo: null,
    image: withBase("safety.jpeg"),
  },
];
