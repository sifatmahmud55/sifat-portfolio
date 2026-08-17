import { motion } from "framer-motion";
import { ArrowRight, FileDown, Mail, ExternalLink } from "lucide-react";
import { contact } from "../data/profile.js";

const base = import.meta.env.BASE_URL || "/";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid-backdrop pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-signal-blue/10 blur-[120px]" />

      <div className="section-shell relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="section-label">Final-Year ETE Engineer</span>

          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-ink-100 sm:text-5xl lg:text-[3.4rem]">
            Building intelligent software
            <br />
            &amp; connected systems.
          </h1>

          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-ink-400 sm:text-lg">
            Final-year Electronics and Telecommunication Engineering student at CUET with
            hands-on experience building AI-powered applications, full-stack systems, embedded
            solutions, IoT platforms, and computer-vision projects.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View My Projects
              <ArrowRight size={16} />
            </a>
            <a href={`${base}resume_sifat.pdf`} download="Soiyod_Sifat_Mahmud_Resume.pdf" className="btn-secondary">
              <FileDown size={16} />
              Download Resume
            </a>
            <a href={`${base}resume_sifat.pdf`} target="_blank" rel="noopener noreferrer" className="btn-secondary border border-white/10 bg-transparent">
              <ExternalLink size={14} />
              View Resume
            </a>
            <a href={`mailto:${contact.email}`} className="btn-ghost">
              <Mail size={14} />
              Email Me
            </a>
          </div>

          <div className="mt-10 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] py-2 pl-2.5 pr-4">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-cyan/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-cyan" />
            </span>
            <span className="font-mono text-xs tracking-wide text-ink-200">
              Available for Internship / Junior Roles
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="pointer-events-none absolute inset-0 rounded-full bg-signal-cyan/5 blur-3xl" />
          <div className="relative mx-auto flex w-full max-w-[420px] items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.02] p-3 shadow-[0_25px_80px_rgba(14,165,233,0.12)] backdrop-blur-sm">
            <img
              src={`${base}profile.jpeg`}
              alt="Soiyod Sifat Mahmud"
              className="h-[320px] w-full max-w-[360px] rounded-[1.4rem] object-cover object-center shadow-[0_10px_30px_rgba(15,23,42,0.45)] sm:h-[380px] lg:h-[460px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
