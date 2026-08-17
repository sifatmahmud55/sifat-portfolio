import { motion } from "framer-motion";
import { experience } from "../data/profile.js";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-white/[0.05] bg-base-850/30 py-24 sm:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Experience</span>
          <h2 className="section-heading">Where I&apos;ve applied this</h2>
        </motion.div>

        <div className="mt-12 max-w-2xl border-l border-white/10 pl-8">
          {experience.map((item, i) => (
            <motion.div
              key={item.role + item.org}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative pb-2"
            >
              <span className="absolute -left-[2.15rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-signal-cyan bg-base-850" />
              <div className="flex items-start justify-between gap-5">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-lg font-semibold text-ink-100">{item.role}</h3>
                    <span className="font-body text-sm text-ink-500">— {item.org}</span>
                  </div>
                  <span className="pill mt-2 inline-block">{item.duration}</span>
                </div>
                {item.image && (
                  <div className="group relative ml-2 w-[45%] max-w-[280px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-2 shadow-[0_16px_40px_rgba(15,23,42,0.22)] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
                    <img
                      src={item.image}
                      alt={`${item.org} logo`}
                      className="h-32 w-full rounded-xl object-contain transition-transform duration-300 ease-out group-hover:scale-[1.02] sm:h-36 lg:h-40"
                    />
                  </div>
                )}
              </div>
              <ul className="mt-4 space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 font-body text-sm leading-relaxed text-ink-400">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal-cyan/70" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
