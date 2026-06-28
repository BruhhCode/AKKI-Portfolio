import { motion } from "framer-motion";
import { SectionTag } from "./About";
import { Code2, Camera } from "lucide-react";

const dev = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
  "Node.js", "REST APIs", "Tailwind", "Git & GitHub", "Responsive Design", "UI Engineering",
];
const photo = [
  "Lightroom", "Photoshop", "Premiere Pro", "Food", "Travel", "Portrait",
  "Brand Shoots", "Product", "Street", "Lifestyle", "Drone Cinematography", "Camera Gear",
];

function SkillList({ items, color }: { items: string[]; color: string }) {
  return (
    <ul className="space-y-1">
      {items.map((s, i) => (
        <motion.li
          key={s}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: i * 0.03 }}
          className="group flex items-center justify-between border-b border-border/60 py-3 text-lg transition-colors hover:text-foreground"
        >
          <span className="font-display font-medium">{s}</span>
          <span
            className="h-1.5 w-1.5 rounded-full transition-all group-hover:w-8"
            style={{ background: color }}
          />
        </motion.li>
      ))}
    </ul>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTag>02 — Skills</SectionTag>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 max-w-3xl font-display text-4xl font-bold sm:text-6xl"
        >
          A toolkit for <span className="gradient-text">building</span> and{" "}
          <span className="gradient-text">capturing</span>.
        </motion.h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="glass-strong rounded-3xl p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl font-semibold">Developer</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Frontend-first. Performance, accessibility, and craft.
            </p>
            <div className="mt-8">
              <SkillList items={dev} color="oklch(0.65 0.22 260)" />
            </div>
          </div>

          <div className="glass-strong rounded-3xl p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-orange-accent/15 text-orange-accent">
                <Camera className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl font-semibold">Photographer</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Light, frame, story — across genres and editing suites.
            </p>
            <div className="mt-8">
              <SkillList items={photo} color="oklch(0.75 0.18 60)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
