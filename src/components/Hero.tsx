import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import LightRays from "./LightRays";

const rotating = [
  "Building Experiences.",
  "Capturing Stories.",
  "Designing Ideas.",
  "Creating Memories.",
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % rotating.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Aurora background */}
      <div className="pointer-events-none absolute inset-0 aurora-bg" />
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={0.8}
        lightSpread={1.6}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
        className="custom-rays"
        pulsating={false}
        fadeDistance={1}
        saturation={1.3}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          mixBlendMode: "screen",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* Floating blobs */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-primary/20 blur-[120px] animate-blob" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-purple-accent/20 blur-[120px] animate-blob" style={{ animationDelay: "-6s" }} />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for select projects — 2026
        </motion.div>

        <div className="grid items-end gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.75rem,8vw,7rem)] font-bold leading-[0.95] tracking-tight text-balance"
            >
              Hello, I'm <br className="hidden sm:block" />
              <span className="gradient-text">Akshit Sharma.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 max-w-xl font-display text-xl text-muted-foreground sm:text-2xl"
            >
              Developer by profession. <span className="text-foreground">Photographer by passion.</span>
            </motion.p>

            <div className="mt-8 flex h-12 items-center text-2xl font-medium text-muted-foreground sm:text-3xl">
              <span className="mr-3 h-1 w-8 rounded-full bg-primary" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={i}
                  initial={{ y: 20, opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -20, opacity: 0, filter: "blur(8px)" }}
                  transition={{ duration: 0.5 }}
                  className="gradient-text"
                >
                  {rotating[i]}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#photography"
                className="group relative inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:scale-[1.02]"
              >
                View my work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur-sm transition-all hover:bg-white/10"
              >
                Hire me
                <span className="h-1.5 w-1.5 rounded-full bg-primary glow-primary" />
              </a>
            </motion.div>
          </div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 gap-3"
          >
            {[
              { v: "5+", l: "Years coding" },
              { v: "8+", l: "Photography genres" },
              { v: "40+", l: "Projects shipped" },
              { v: "10k+", l: "Frames captured" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-5">
                <div className="font-display text-3xl font-bold gradient-text">{s.v}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
          aria-label="Scroll to about"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
