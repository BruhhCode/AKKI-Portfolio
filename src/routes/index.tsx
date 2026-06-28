import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import Lenis from "lenis";

import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Marquee } from "@/components/Marquee";
import { Skills } from "@/components/Skills";
import { Photography } from "@/components/Photography";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Cursor } from "@/components/Cursor";
import { ScrollProgress } from "@/components/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akshit Sharma — Developer & Photographer" },
      {
        name: "description",
        content:
          "Akshit Sharma is a developer and photographer crafting premium web experiences and cinematic visual stories.",
      },
      { property: "og:title", content: "Akshit Sharma — Developer & Photographer" },
      {
        property: "og:description",
        content:
          "Developer by profession, photographer by passion. Selected work, photography, and services.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let raf = 0;
    const tick = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative bg-background text-foreground">
      <ScrollProgress />
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Photography />
      <Projects />
      <Experience />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
