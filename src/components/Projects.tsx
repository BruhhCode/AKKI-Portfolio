import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { SectionTag } from "./About";

const projects = [
  {
    title: "Lumen — Photography Portfolio",
    desc: "An immersive, scroll-driven portfolio with cinematic galleries and live category filters.",
    tags: ["React", "Framer Motion", "Tailwind"],
    accent: "from-primary/40 to-purple-accent/40",
  },
  {
    title: "Atlas — Travel Journal",
    desc: "A travel logging app with offline-first maps, story posts, and rich media uploads.",
    tags: ["Next.js", "TypeScript", "Mapbox"],
    accent: "from-purple-accent/40 to-orange-accent/40",
  },
  {
    title: "Plate — Food Studio CMS",
    desc: "Custom CMS for a food photography studio, with shoot scheduling and client galleries.",
    tags: ["React", "Node.js", "REST APIs"],
    accent: "from-orange-accent/40 to-primary/40",
  },
  {
    title: "Frame — UI Component Library",
    desc: "Accessible, themable, motion-aware components built for product teams.",
    tags: ["TypeScript", "Radix", "Storybook"],
    accent: "from-primary/40 to-orange-accent/40",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTag>04 — Projects</SectionTag>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 max-w-3xl font-display text-4xl font-bold sm:text-6xl"
        >
          Selected <span className="gradient-text">work.</span>
        </motion.h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-1 transition-all hover:border-primary/40"
            >
              {/* Glow border on hover */}
              <div
                className={`pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br ${p.accent} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60`}
              />
              <div className="relative rounded-[1.4rem] bg-card p-7">
                <div className={`mb-6 aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br ${p.accent} relative`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-5xl font-bold text-white/20">
                      {p.title.split(" — ")[0]}
                    </span>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold transition-colors group-hover:gradient-text">
                    {p.title}
                  </h3>
                  <div className="flex gap-2 opacity-60 transition group-hover:opacity-100">
                    <a aria-label="GitHub" href="#" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-white/5">
                      <Github className="h-4 w-4" />
                    </a>
                    <a aria-label="Live demo" href="#" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-white/5">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
