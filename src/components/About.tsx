import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";

const timeline = [
  { y: "2021", t: "Picked up the camera", d: "Fell in love with light, frame, and story." },
  { y: "2022", t: "Started Computer Science", d: "Began B.Tech in CS — first lines of HTML & CSS." },
  { y: "2024", t: "Shipped first product", d: "Built and launched scalable React applications." },
  { y: "2025", t: "Brand & travel work", d: "Photographed for brands across India and beyond." },
  { y: "2026", t: "Independent practice", d: "Code by day. Camera by golden hour." },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTag>01 — About</SectionTag>

        <div className="mt-10 grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="group relative overflow-hidden rounded-3xl border border-border bg-card">
              <img
                src={"https://res.cloudinary.com/doudcr0tg/image/upload/v1782629098/ChatGPT_Image_Jun_28_2026_12_13_27_PM_crioaq.png"}
                alt="Portrait of Akshit Sharma"
                loading="lazy"
                width={896}
                height={1152}
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="font-display text-lg font-semibold">Akshit Sharma</div>
                  <div className="text-xs text-muted-foreground">Developer · Photographer</div>
                </div>
                <span className="glass rounded-full px-3 py-1 text-[10px] uppercase tracking-widest">
                  2026
                </span>
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 to-purple-accent/20 blur-2xl" />
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-4xl font-bold leading-tight sm:text-5xl"
            >
              Two crafts.<br />
              <span className="gradient-text">One obsession with detail.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground"
            >
              <p>
                I'm a B.Tech Computer Science graduate who fell in love with building things on the
                web — fast, scalable, modern, and quietly opinionated about every pixel.
              </p>
              <p>
                After dusk, the laptop closes and the camera comes out. Travel, food, products,
                portraits, streets — different subjects, same instinct: chase the light, frame the
                story, edit until it sings.
              </p>
            </motion.div>

            <div className="mt-10 space-y-0">
              {timeline.map((item, idx) => (
                <motion.div
                  key={item.y}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group relative grid grid-cols-[80px_1fr] gap-6 border-t border-border py-5 last:border-b"
                >
                  <div className="font-mono text-sm text-primary">{item.y}</div>
                  <div>
                    <div className="font-display text-base font-semibold transition-colors group-hover:gradient-text">
                      {item.t}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">{item.d}</div>
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground opacity-0 transition group-hover:opacity-100">
                    →
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
    >
      <span className="h-px w-8 bg-primary" />
      {children}
    </motion.div>
  );
}
