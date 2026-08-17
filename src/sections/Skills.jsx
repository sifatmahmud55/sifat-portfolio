import { motion } from "framer-motion";
import { skillGroups } from "../data/profile.js";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/[0.05] bg-base-850/30 py-24 sm:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Technical Skills</span>
          <h2 className="section-heading">Toolkit, by domain</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (gi % 3) * 0.06 }}
            >
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">
                {group.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="pill transition-colors duration-200 hover:border-signal-cyan/40 hover:text-ink-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
