# Soiyod Sifat Mahmud — Portfolio

A production-ready developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy `dist/` to Vercel, Netlify, or GitHub Pages.

## Editing content

All editable content lives in two files — no need to touch components for routine updates:

- `src/data/projects.js` — every project card and case-study modal
- `src/data/profile.js` — skills, certifications, experience, education, contact info

## Before deploying

- [ ] Replace `public/resume.pdf` with your actual resume (delete `RESUME_PLACEHOLDER.txt`)
- [ ] Add real GitHub/Live Demo links in `src/data/projects.js`
- [ ] Add a real `og-image.png` (1200×630) to `public/` for social previews, or remove the tags in `index.html`
- [ ] Wire up the contact form in `src/sections/Contact.jsx` (Formspree, EmailJS, or your own endpoint — a TODO marks the spot)
- [ ] Optionally connect the GitHub API in `src/sections/BuiltInPublic.jsx` to pull live repo stats

## Stack

React 18 · Vite · Tailwind CSS · Framer Motion · lucide-react
