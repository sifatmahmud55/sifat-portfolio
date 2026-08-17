import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons.jsx";
import { contact } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-ink-600">
          © {new Date().getFullYear()} Soiyod Sifat Mahmud. Built with React &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${contact.email}`} aria-label="Email" className="text-ink-500 hover:text-signal-cyan">
            <Mail size={16} />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ink-500 hover:text-signal-cyan">
            <LinkedinIcon size={16} />
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-ink-500 hover:text-signal-cyan">
            <GithubIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
