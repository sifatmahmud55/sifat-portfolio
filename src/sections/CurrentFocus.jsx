import { motion } from "framer-motion";
import { currentFocus } from "../data/profile.js";

export default function CurrentFocus() {
  return (
    <section className="py-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Currently Exploring</span>
          <p className="mt-3 max-w-lg font-body text-sm text-ink-500">
            Active areas of development — not claims of mastery, just where the current focus is.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 flex flex-wrap gap-2.5"
        >
          {currentFocus.map((item) => (
            <span
              key={item}
              className="rounded-full border border-signal-cyan/25 bg-signal-cyan/[0.05] px-4 py-2 font-mono text-xs text-signal-cyan/90"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
