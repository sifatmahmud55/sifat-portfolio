import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons.jsx";

export default function ProjectCard({ project, onOpen, featured = false }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45 }}
      className={`card-surface group flex flex-col justify-between overflow-hidden p-6 transition-colors duration-300 hover:border-signal-cyan/30 ${
        featured ? "sm:col-span-2 sm:p-8" : ""
      }`}
    >
      <div className={project.image ? "flex flex-col gap-5 md:flex-row md:items-center" : ""}>
        {project.image && (
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_12px_30px_rgba(15,23,42,0.22)] transition-transform duration-300 group-hover:-translate-y-0.5 md:w-[230px] lg:w-[260px]">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="h-52 w-full object-contain bg-base-900/60 p-2 sm:h-56 md:h-60 md:w-[230px] lg:h-64 lg:w-[260px]"
            />
          </div>
        )}

        <div className={project.image ? "min-w-0 flex-1" : ""}>
          <div className="flex flex-wrap items-center gap-2">
            {project.category.map((c) => (
              <span key={c} className="pill">
                {c}
              </span>
            ))}
          </div>

          <h3 className={`mt-4 font-display font-semibold text-ink-100 ${featured ? "text-2xl" : "text-xl"}`}>
            {project.title}
          </h3>
          <p className="mt-1 font-mono text-xs text-signal-cyan/80">{project.subtitle}</p>

          <p className="mt-4 font-body text-sm leading-relaxed text-ink-400">{project.description}</p>

          {project.features.length > 0 && (
            <ul className={`mt-5 grid grid-cols-1 gap-x-6 gap-y-1.5 ${featured ? "sm:grid-cols-2" : ""}`}>
              {project.features.slice(0, featured ? 8 : 4).map((f) => (
                <li key={f} className="flex items-start gap-2 font-body text-[13px] text-ink-500">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal-cyan/70" />
                  {f}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/[0.05] pt-5">
        <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-ink-600">
          {project.tech.slice(0, 4).map((t, i) => (
            <span key={t}>
              {t}
              {i < Math.min(project.tech.length, 4) - 1 && <span className="ml-3 text-ink-600">·</span>}
            </span>
          ))}
          {project.tech.length > 4 && <span>+{project.tech.length - 4} more</span>}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-4">
        <button
          onClick={() => onOpen(project)}
          className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-signal-cyan transition-transform duration-200 group-hover:translate-x-0.5"
        >
          View case study
          <ArrowUpRight size={15} />
        </button>
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-body text-sm text-ink-500 hover:text-ink-200"
          >
            <GithubIcon size={15} />
            Code
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 font-body text-sm text-ink-600">
            <GithubIcon size={15} />
            Link coming soon
          </span>
        )}
      </div>
    </motion.article>
  );
}
