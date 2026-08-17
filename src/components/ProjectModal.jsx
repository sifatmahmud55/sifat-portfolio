import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowRight, ExternalLink, X } from "lucide-react";
import { GithubIcon } from "./BrandIcons.jsx";

function FlowDiagram({ steps }) {
  if (!steps || steps.length === 0) return null;
  return (
    <div className="flex flex-col items-start gap-1.5">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-col items-start gap-1.5">
          <span className="rounded-md border border-white/10 bg-white/[0.03] px-3.5 py-2 font-mono text-xs text-ink-200">
            {step}
          </span>
          {i < steps.length - 1 && <ArrowDown size={14} className="ml-3.5 text-signal-cyan/50" />}
        </div>
      ))}
    </div>
  );
}

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-base-950/80 px-4 py-8 backdrop-blur-sm sm:py-16"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} case study`}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl rounded-2xl border border-white/10 bg-base-850 shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Close case study"
              className="absolute right-5 top-5 z-10 rounded-full border border-white/10 bg-base-800 p-2 text-ink-400 transition-colors hover:text-ink-100"
            >
              <X size={18} />
            </button>

            <div className="max-h-[85vh] overflow-y-auto p-7 sm:p-10">
              <div className="flex flex-wrap gap-2">
                {project.category.map((c) => (
                  <span key={c} className="pill">
                    {c}
                  </span>
                ))}
              </div>

              <h2 className="mt-4 font-display text-2xl font-semibold text-ink-100 sm:text-3xl">
                {project.title}
              </h2>
              <p className="mt-1 font-mono text-sm text-signal-cyan/80">{project.subtitle}</p>

              <Section title="Overview">
                <p>{project.description}</p>
              </Section>

              {project.problem && (
                <Section title="Problem">
                  <p>{project.problem}</p>
                </Section>
              )}

              {project.solution && (
                <Section title="Solution">
                  <p>{project.solution}</p>
                </Section>
              )}

              {project.architecture?.length > 0 && (
                <Section title="Architecture">
                  <FlowDiagram steps={project.architecture} />
                  {project.motorFlow && (
                    <div className="mt-4 flex items-center gap-2">
                      {project.motorFlow.map((s, i) => (
                        <span key={s} className="flex items-center gap-2">
                          <span className="rounded-md border border-white/10 bg-white/[0.03] px-3.5 py-2 font-mono text-xs text-ink-200">
                            {s}
                          </span>
                          {i < project.motorFlow.length - 1 && (
                            <ArrowRight size={14} className="text-signal-cyan/50" />
                          )}
                        </span>
                      ))}
                    </div>
                  )}
                </Section>
              )}

              {project.tech?.length > 0 && (
                <Section title="Technologies">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </Section>
              )}

              {project.features?.length > 0 && (
                <Section title="Key Features">
                  <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-ink-400">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal-cyan/70" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Section>
              )}

              {project.challenges && (
                <Section title="Key Challenges">
                  <p>{project.challenges}</p>
                </Section>
              )}

              {project.learnings && (
                <Section title="What I Learned">
                  <p>{project.learnings}</p>
                </Section>
              )}

              <Section title="Links">
                <div className="flex flex-wrap gap-3">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary !py-2.5 !px-4 text-xs">
                      <GithubIcon size={15} />
                      View on GitHub
                    </a>
                  ) : (
                    <span className="btn-secondary !py-2.5 !px-4 text-xs opacity-50">
                      <GithubIcon size={15} />
                      GitHub link coming soon
                    </span>
                  )}
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="btn-secondary !py-2.5 !px-4 text-xs">
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  ) : (
                    <span className="btn-secondary !py-2.5 !px-4 text-xs opacity-50">
                      <ExternalLink size={15} />
                      Live demo coming soon
                    </span>
                  )}
                </div>
              </Section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Section({ title, children }) {
  return (
    <div className="mt-7">
      <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">{title}</h3>
      <div className="mt-2.5 font-body text-sm leading-relaxed text-ink-300">{children}</div>
    </div>
  );
}
