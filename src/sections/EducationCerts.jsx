import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck } from "lucide-react";
import { education, certifications } from "../data/profile.js";

export default function EducationCerts() {
  return (
    <section className="py-24 sm:py-28">
      <div className="section-shell grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div id="education">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">Education</span>
            <h2 className="section-heading">Academic background</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="card-surface mt-8 flex gap-4 p-6"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-signal-cyan/30 bg-signal-cyan/10 text-[10px] font-bold tracking-[0.18em] text-signal-cyan">
              CUET
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-ink-100">
                {education.institution}
              </h3>
              <p className="mt-1 font-body text-sm text-ink-400">{education.degree}</p>
              <span className="mt-2 inline-block font-mono text-xs text-signal-cyan/80">
                Class of {education.year}
              </span>
            </div>
          </motion.div>
        </div>

        <div id="certifications">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">Certifications</span>
            <h2 className="section-heading">Verified learning</h2>
          </motion.div>

          <div className="mt-8 space-y-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="card-surface flex items-center gap-3.5 px-5 py-4"
              >
                <BadgeCheck size={18} className="shrink-0 text-signal-cyan" />
                <div>
                  <h3 className="font-body text-sm font-semibold text-ink-100">{cert.name}</h3>
                  <p className="font-mono text-[11px] text-ink-500">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
