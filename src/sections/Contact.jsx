import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons.jsx";
import { contact } from "../data/profile.js";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/[0.05] py-24 sm:py-28">
      <div className="section-shell grid grid-cols-1 gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Contact</span>
          <h2 className="section-heading">Let&apos;s build something useful.</h2>
          <p className="mt-5 max-w-md font-body text-sm leading-relaxed text-ink-400 sm:text-base">
            I&apos;m currently looking for internship, trainee, junior software, AI/ML, embedded,
            and IoT opportunities where I can contribute to real engineering projects and continue
            developing professionally.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`mailto:${contact.email}`}
              className="card-surface flex items-center gap-3.5 px-5 py-3.5 transition-colors hover:border-signal-cyan/30"
            >
              <Mail size={17} className="text-signal-cyan" />
              <span className="font-body text-sm text-ink-200">{contact.email}</span>
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card-surface flex items-center gap-3.5 px-5 py-3.5 transition-colors hover:border-signal-cyan/30"
            >
              <LinkedinIcon size={17} className="text-signal-cyan" />
              <span className="font-body text-sm text-ink-200">linkedin.com/in/soiyod-sifat-mahmud</span>
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card-surface flex items-center gap-3.5 px-5 py-3.5 transition-colors hover:border-signal-cyan/30"
            >
              <GithubIcon size={17} className="text-signal-cyan" />
              <span className="font-body text-sm text-ink-200">GitHub profile</span>
            </a>
            <div className="card-surface flex items-center gap-3.5 px-5 py-3.5">
              <Phone size={17} className="text-signal-cyan" />
              <span className="font-body text-sm text-ink-200">{contact.phone}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-surface p-6 sm:p-7"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-signal-cyan/30 bg-signal-cyan/10 text-[10px] font-bold tracking-[0.18em] text-signal-cyan">
              CUET
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-500">University</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-ink-100">
                Chittagong University of Engineering and Technology
              </h3>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <div className="rounded-xl border border-white/10 bg-base-900/40 p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500">Focus</p>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-300">
                Electronics and Telecommunication Engineering with hands-on work in AI, embedded,
                software, and IoT systems.
              </p>
            </div>
            <p className="font-mono text-[11px] text-ink-600">
              Email is the quickest way to reach me for collaboration and opportunities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
