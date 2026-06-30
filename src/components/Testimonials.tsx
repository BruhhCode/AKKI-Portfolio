import { motion } from "framer-motion";
import { SectionTag } from "./About";

const items = [
  { q: "Akshit consistently brought creativity, professionalism, and attention to detail to every project. His ability to transform ideas into compelling visual content and collaborate effectively with the team made him a valuable contributor. I appreciate his dedication and look forward to seeing his continued growth", a: "Varuna Saini", r: "Founder, Loop Studio India Pvt. Ltd." },
  { q: "The product photos he shot for our launch outperformed our paid creative by 3x.", a: "Vikram S.", r: "Marketing Lead, D2C brand" },
  { q: "Rare to find someone equally fluent in React and a Lightroom panel. Hire him.", a: "Anika M.", r: "Design Director" },
];

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTag>07 — Testimonials</SectionTag>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 max-w-3xl font-display text-4xl font-bold sm:text-6xl"
        >
          Kind words from <span className="gradient-text">good people.</span>
        </motion.h2>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.figure
              key={t.a}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-strong rounded-3xl p-8"
            >
              <div className="font-display text-3xl leading-none text-primary">"</div>
              <blockquote className="mt-2 text-base leading-relaxed text-foreground/90">
                {t.q}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-purple-accent font-display text-sm font-bold text-primary-foreground">
                  {t.a[0]}
                </div>
                <div>
                  <div className="font-display text-sm font-semibold">{t.a}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
