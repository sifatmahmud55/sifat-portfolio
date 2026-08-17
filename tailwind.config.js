/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#080B10",
          900: "#0A0E14",
          850: "#0D1219",
          800: "#10151D",
          700: "#161C26",
          600: "#1E2733",
          500: "#2A3542",
        },
        ink: {
          100: "#EAEFF5",
          200: "#D3DAE4",
          400: "#8B95A7",
          500: "#6B7488",
          600: "#4E5768",
        },
        signal: {
          cyan: "#4FD1E8",
          blue: "#5B7CFA",
          violet: "#8B7CFA",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "signal-gradient": "linear-gradient(120deg, #4FD1E8 0%, #5B7CFA 55%, #8B7CFA 100%)",
      },
      boxShadow: {
        "glow-cyan": "0 0 40px -8px rgba(79, 209, 232, 0.35)",
      },
      animation: {
        "pulse-slow": "pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
