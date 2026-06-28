import { motion } from "framer-motion";
import { Code2, Camera, Layout, Film, Package, Share2 } from "lucide-react";
import { SectionTag } from "./About";

const services = [
  { icon: Code2, title: "Frontend Development", desc: "Scalable React apps, design-system-driven UIs.", group: "dev" },
  { icon: Layout, title: "Portfolio & Landing Pages", desc: "High-converting sites that look expensive.", group: "dev" },
  { icon: Camera, title: "Brand & Product Shoots", desc: "On-brand visuals for D2C and lifestyle.", group: "photo" },
  { icon: Package, title: "Product Photography", desc: "Catalog, hero, and editorial product work.", group: "photo" },
  { icon: Film, title: "Travel Films", desc: "Cinematic short-form for brands and creators.", group: "photo" },
  { icon: Share2, title: "Social Content", desc: "Reels, stills, and campaigns that perform.", group: "photo" },
];

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTag>06 — Services</SectionTag>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 max-w-3xl font-display text-4xl font-bold sm:text-6xl"
        >
          What I can <span className="gradient-text">build & shoot</span> for you.
        </motion.h2>

        {/* Bento */}
        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4">
          {services.map((s, i) => {
            const big = i === 0 || i === 3;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 ${
                  big ? "col-span-2 row-span-2" : ""
                }`}
              >
                <div
                  className={`pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                    s.group === "dev" ? "bg-primary/30" : "bg-orange-accent/30"
                  }`}
                />
                <div className="relative flex h-full flex-col justify-between">
                  <div
                    className={`grid h-11 w-11 place-items-center rounded-xl ${
                      s.group === "dev"
                        ? "bg-primary/15 text-primary"
                        : "bg-orange-accent/15 text-orange-accent"
                    }`}
                  >
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold sm:text-xl">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
