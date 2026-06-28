import { motion } from "framer-motion";
import { SectionTag } from "./About";

const exp = [
  { y: "2024 — Now", r: "Independent Developer & Photographer", c: "Self-employed", d: "Shipping product UIs for early-stage startups; shooting brand & travel work." },
  { y: "2023 — 2024", r: "Frontend Developer", c: "Studio (remote)", d: "Led the rebuild of a customer-facing dashboard; cut LCP by 48%." },
  { y: "2022 — 2023", r: "Junior Developer", c: "Agency", d: "Built marketing sites and landing pages for D2C brands." },
  { y: "2019 — 2023", r: "B.Tech, Computer Science", c: "University", d: "Foundation in algorithms, systems, and modern web." },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTag>05 — Experience</SectionTag>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 max-w-3xl font-display text-4xl font-bold sm:text-6xl"
        >
          A <span className="gradient-text">timeline</span> of practice.
        </motion.h2>

        <div className="relative mt-14">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-purple-accent to-transparent sm:left-1/2" />
          <div className="space-y-8">
            {exp.map((e, i) => (
              <motion.div
                key={e.y}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative grid grid-cols-[40px_1fr] gap-6 sm:grid-cols-2 sm:gap-12 ${
                  i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-2"
                }`}
              >
                <div className={`sm:text-right ${i % 2 === 0 ? "" : "sm:text-left"}`}>
                  <div className="hidden sm:block">
                    <div className="font-mono text-xs text-primary">{e.y}</div>
                    <h3 className="mt-1 font-display text-xl font-semibold">{e.r}</h3>
                    <div className="text-sm text-muted-foreground">{e.c}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
                  </div>
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-background bg-primary glow-primary sm:left-[-3rem]" />
                  <div className="ml-10 sm:hidden">
                    <div className="font-mono text-xs text-primary">{e.y}</div>
                    <h3 className="mt-1 font-display text-lg font-semibold">{e.r}</h3>
                    <div className="text-sm text-muted-foreground">{e.c}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
