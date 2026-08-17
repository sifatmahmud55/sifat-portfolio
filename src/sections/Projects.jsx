import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES, projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectModal from "../components/ProjectModal.jsx";

export default function Projects() {
  const [active, setActive] = useState("All");
  const [openProject, setOpenProject] = useState(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category.includes(active));

  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="section-label">Featured Projects</span>
            <h2 className="section-heading">Things I&apos;ve built</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-colors duration-200 ${
                  active === cat
                    ? "border-signal-cyan/50 bg-signal-cyan/10 text-signal-cyan"
                    : "border-white/10 text-ink-500 hover:border-white/20 hover:text-ink-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={project.featured}
                onOpen={setOpenProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center font-body text-sm text-ink-500">
            No projects in this category yet.
          </p>
        )}
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  );
}
