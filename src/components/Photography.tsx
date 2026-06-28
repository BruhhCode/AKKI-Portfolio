import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { SectionTag } from "./About";

import t1 from "@/assets/photo-travel-1.jpg";
import t2 from "@/assets/photo-travel-2.jpg";
import t3 from "@/assets/photo-travel-3.jpg";
import f1 from "@/assets/photo-food-1.jpg";
import f2 from "@/assets/photo-food-2.jpg";
import p1 from "@/assets/photo-product-1.jpg";
import p2 from "@/assets/photo-product-2.jpg";
import por1 from "@/assets/photo-portrait-1.jpg";
import s1 from "@/assets/photo-street-1.jpg";
import l1 from "@/assets/photo-lifestyle-1.jpg";

type Photo = { src: string; cat: string; title: string; w: number; h: number };

const photos: Photo[] = [
  { src: t1, cat: "Travel", title: "Cloud Peak", w: 1024, h: 1280 },
  { src: f1, cat: "Food", title: "Carbonara", w: 1024, h: 1024 },
  { src: p1, cat: "Products", title: "Chronograph", w: 1024, h: 1024 },
  { src: por1, cat: "Portraits", title: "Quiet Light", w: 1024, h: 1280 },
  { src: s1, cat: "Street", title: "Neon Rain", w: 1024, h: 768 },
  { src: t2, cat: "Travel", title: "Temple Burn", w: 1024, h: 768 },
  { src: l1, cat: "Lifestyle", title: "Morning Ritual", w: 1024, h: 1280 },
  { src: f2, cat: "Food", title: "Honey Drip", w: 1024, h: 1280 },
  { src: p2, cat: "Products", title: "Azure", w: 1024, h: 1280 },
  { src: t3, cat: "Travel", title: "Solitude", w: 1024, h: 768 },
];

const cats = ["All", "Travel", "Food", "Products", "Portraits", "Street", "Lifestyle"] as const;

export function Photography() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const [lightbox, setLightbox] = useState<Photo | null>(null);

  const filtered = useMemo(
    () => (cat === "All" ? photos : photos.filter((p) => p.cat === cat)),
    [cat],
  );

  return (
    <section id="photography" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionTag>03 — Photography</SectionTag>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-6 max-w-3xl font-display text-4xl font-bold sm:text-6xl"
            >
              Light. <span className="gradient-text">Frame.</span> Story.
            </motion.h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all ${
                  cat === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-white/5 text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4"
        >
          <AnimatePresence>
            {filtered.map((p) => (
              <motion.button
                key={p.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setLightbox(p)}
                data-cursor="hover"
                className="group relative block w-full overflow-hidden rounded-2xl border border-border bg-card text-left"
                style={{ breakInside: "avoid" }}
              >
                <img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  width={p.w}
                  height={p.h}
                  className="w-full transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                      {p.cat}
                    </div>
                    <div className="font-display text-lg font-semibold">{p.title}</div>
                  </div>
                  <span className="glass rounded-full px-3 py-1 text-xs">View</span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-6 backdrop-blur-xl"
          >
            <button
              aria-label="Close"
              className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full glass text-foreground"
              onClick={() => setLightbox(null)}
            >
              <X className="h-4 w-4" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={lightbox.src}
              alt={lightbox.title}
              width={lightbox.w}
              height={lightbox.h}
              className="max-h-[90vh] w-auto max-w-[95vw] rounded-2xl object-contain shadow-2xl"
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                {lightbox.cat}
              </div>
              <div className="font-display text-lg font-semibold">{lightbox.title}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
