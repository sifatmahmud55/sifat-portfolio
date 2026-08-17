import { motion } from "framer-motion";

// Signature visual: a small interconnected system representing the way
// Sifat's work actually flows between disciplines — AI reasoning over
// data collected by embedded/IoT hardware, surfaced through software.
const NODES = [
  { id: "ai", label: "AI", x: 210, y: 40 },
  { id: "software", label: "Software", x: 340, y: 130 },
  { id: "data", label: "Data", x: 300, y: 260 },
  { id: "iot", label: "IoT", x: 110, y: 260 },
  { id: "embedded", label: "Embedded", x: 70, y: 130 },
];

const EDGES = [
  ["ai", "software"],
  ["software", "data"],
  ["data", "iot"],
  ["iot", "embedded"],
  ["embedded", "ai"],
  ["software", "embedded"],
];

const nodeById = Object.fromEntries(NODES.map((n) => [n.id, n]));

export default function SystemDiagram() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <svg
        viewBox="0 0 410 320"
        className="h-full w-full"
        role="img"
        aria-label="Diagram showing AI, Software, Data, IoT, and Embedded systems connected in a loop"
      >
        <defs>
          <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4FD1E8" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#8B7CFA" stopOpacity="0.35" />
          </linearGradient>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4FD1E8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#4FD1E8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {EDGES.map(([from, to], i) => {
          const a = nodeById[from];
          const b = nodeById[to];
          return (
            <line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="url(#edgeGradient)"
              strokeWidth="1.5"
            />
          );
        })}

        {EDGES.map(([from, to], i) => {
          const a = nodeById[from];
          const b = nodeById[to];
          return (
            <motion.circle
              key={`pulse-${from}-${to}`}
              r="3"
              fill="#4FD1E8"
              initial={{ cx: a.x, cy: a.y, opacity: 0 }}
              animate={{ cx: [a.x, b.x], cy: [a.y, b.y], opacity: [0, 1, 0] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: i * 0.45,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {NODES.map((n, i) => (
          <g key={n.id}>
            <circle cx={n.x} cy={n.y} r="26" fill="url(#nodeGlow)" />
            <motion.circle
              cx={n.x}
              cy={n.y}
              r="20"
              fill="#0D1219"
              stroke={n.id === "ai" ? "#4FD1E8" : "rgba(255,255,255,0.18)"}
              strokeWidth="1.5"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 * i }}
            />
            <text
              x={n.x}
              y={n.y + 40}
              textAnchor="middle"
              className="fill-ink-400"
              style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10.5px", letterSpacing: "0.04em" }}
            >
              {n.label.toUpperCase()}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
