import { motion } from "framer-motion";
import { Star, GitFork } from "lucide-react";
import { GithubIcon } from "../components/BrandIcons.jsx";
import { projects } from "../data/projects.js";
import { contact } from "../data/profile.js";

// Static showcase — swap in a GitHub API fetch here once repos are public
// and the API integration is configured. Kept structurally identical so
// the swap is a drop-in data change, not a redesign.
const repos = projects.slice(0, 4).map((p) => ({
  name: p.id,
  description: p.description,
  language: p.tech[0],
}));

export default function BuiltInPublic() {
  return (
    <section className="border-t border-white/[0.05] bg-base-850/30 py-24 sm:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <span className="section-label">Built in Public</span>
            <h2 className="section-heading">Repositories</h2>
          </div>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <GithubIcon size={15} />
            View GitHub profile
          </a>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {repos.map((repo, i) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="card-surface flex flex-col justify-between p-5"
            >
              <div>
                <div className="flex items-center gap-2 text-ink-400">
                  <GithubIcon size={15} />
                  <span className="font-mono text-xs">{repo.name}</span>
                </div>
                <p className="mt-3 font-body text-[13px] leading-relaxed text-ink-500">
                  {repo.description}
                </p>
              </div>
              <div className="mt-5 flex items-center justify-between font-mono text-[11px] text-ink-600">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-signal-cyan/70" />
                  {repo.language}
                </span>
                <span className="inline-flex items-center gap-3 opacity-60">
                  <span className="inline-flex items-center gap-1">
                    <Star size={12} /> —
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GitFork size={12} /> —
                  </span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-4 font-mono text-[11px] text-ink-600">
          Repository stats sync once GitHub API integration is connected.
        </p>
      </div>
    </section>
  );
}
