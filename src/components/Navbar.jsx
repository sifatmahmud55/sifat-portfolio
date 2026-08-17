import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons.jsx";

const base = import.meta.env.BASE_URL || "/";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ github, linkedin }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-base-950/85 backdrop-blur-md border-b border-white/[0.06]" : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#home" className="font-display text-lg font-semibold tracking-tight text-ink-100">
          S. Sifat<span className="text-signal-cyan">.</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm text-ink-400 transition-colors hover:text-ink-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-ink-400 transition-colors hover:text-signal-cyan"
          >
            <GithubIcon size={19} />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-ink-400 transition-colors hover:text-signal-cyan"
          >
            <LinkedinIcon size={19} />
          </a>
          <a href={`${base}resume_sifat.pdf`} download="Soiyod_Sifat_Mahmud_Resume.pdf" className="btn-secondary !py-2 !px-4 text-xs">
            <FileDown size={15} />
            Resume
          </a>
        </div>

        <button
          className="text-ink-100 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/[0.06] bg-base-950/95 backdrop-blur-md lg:hidden"
          >
            <ul className="section-shell flex flex-col gap-1 py-4">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 font-body text-sm text-ink-200 transition-colors hover:bg-white/[0.04] hover:text-signal-cyan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex items-center gap-5 px-3 pt-2">
                <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-ink-400">
                  <GithubIcon size={20} />
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-ink-400">
                  <LinkedinIcon size={20} />
                </a>
                <a href={`${base}resume_sifat.pdf`} download="Soiyod_Sifat_Mahmud_Resume.pdf" className="btn-secondary !py-2 !px-4 text-xs ml-auto">
                  <FileDown size={15} />
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
