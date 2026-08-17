import { motion } from "framer-motion";

const PILLARS = [
  {
    title: "Software + Hardware",
    body: "An ETE background means the stack doesn't stop at the API — it extends down to the sensor, the microcontroller, and the signal.",
  },
  {
    title: "Systems that run",
    body: "Projects are built to actually work end-to-end: firmware talking to brokers, models serving real inference, dashboards showing real data.",
  },
  {
    title: "Deliberate learning",
    body: "Each project — from speech emotion recognition to embedded security systems — was picked to close a specific gap in practical skill.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="section-shell grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">About</span>
          <h2 className="section-heading">Engineering Mindset</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <p className="font-body text-base leading-relaxed text-ink-200 sm:text-lg">
            Soiyod Sifat Mahmud is a final-year Electronics and Telecommunication Engineering
            student at CUET with hands-on experience across software development, artificial
            intelligence, embedded systems, IoT, networking, and cybersecurity.
          </p>
          <p className="font-body text-base leading-relaxed text-ink-400">
            That combination is deliberate. An engineering background built around signals,
            circuits, and embedded systems means he can work on both sides of a project — writing
            the model or the API, and also the firmware or the sensor network feeding it. Recent
            work has centered on building practical systems end-to-end: a speech emotion
            recognition pipeline with fairness-aware training, a functioning CPU built gate-by-gate
            in a logic simulator, IoT dashboards, and document-intelligence tools — each one chosen
            to sharpen a specific, real skill rather than to pad a list.
          </p>

          <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.title} className="border-l-2 border-signal-cyan/40 pl-4">
                <h3 className="font-display text-sm font-semibold text-ink-100">{p.title}</h3>
                <p className="mt-1.5 font-body text-[13px] leading-relaxed text-ink-500">{p.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
