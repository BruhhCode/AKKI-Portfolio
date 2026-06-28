import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "photography", label: "Photography" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-1/2 top-4 z-50 w-[min(1100px,calc(100%-2rem))] -translate-x-1/2 rounded-full transition-all duration-500 ${
        scrolled ? "glass-strong" : "glass"
      }`}
    >
      <div className="flex items-center justify-between px-5 py-3">
        <a href="#top" className="group flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-primary to-purple-accent text-sm font-bold text-primary-foreground">
            A
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight sm:inline">
            Akshit Sharma
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={() => setLight((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground transition hover:bg-white/5"
          >
            {light ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition hover:opacity-90 sm:inline-flex"
          >
            Hire me
          </a>
        </div>
      </div>
    </motion.header>
  );
}
