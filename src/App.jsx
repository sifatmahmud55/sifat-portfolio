import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import QuickValue from "./sections/QuickValue.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Experience from "./sections/Experience.jsx";
import EducationCerts from "./sections/EducationCerts.jsx";
import BuiltInPublic from "./sections/BuiltInPublic.jsx";
import CurrentFocus from "./sections/CurrentFocus.jsx";
import Contact from "./sections/Contact.jsx";
import { contact } from "./data/profile.js";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-base-900 font-body text-ink-100">
      <Navbar github={contact.github} linkedin={contact.linkedin} />
      <main>
        <Hero />
        <QuickValue />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <EducationCerts />
        <BuiltInPublic />
        <CurrentFocus />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
