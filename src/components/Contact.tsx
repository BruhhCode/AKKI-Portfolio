import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Instagram, Mail, Download } from "lucide-react";
import { SectionTag } from "./About";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTag>08 — Contact</SectionTag>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 max-w-3xl font-display text-5xl font-bold sm:text-7xl"
        >
          Let's build <span className="gradient-text">something</span>—
          <br />or shoot <span className="gradient-text">something.</span>
        </motion.h2>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
              setForm({ name: "", email: "", message: "" });
            }}
            className="glass-strong space-y-6 rounded-3xl p-8 sm:p-10"
          >
            {(["name", "email"] as const).map((k) => (
              <Field key={k} label={k === "name" ? "Your name" : "Email"} type={k === "email" ? "email" : "text"} value={form[k]} onChange={(v) => setForm((f) => ({ ...f, [k]: v }))} />
            ))}
            <div className="group relative">
              <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Project
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                rows={5}
                required
                className="w-full resize-none rounded-2xl border border-border bg-background/40 px-4 py-3 text-base outline-none transition-all focus:border-primary focus:bg-background"
                placeholder="Tell me about it…"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
            >
              {sent ? "Sent — talk soon ✦" : "Send message"}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </button>
          </form>

          <div className="space-y-4">
            {[
              { icon: Mail, l: "Email", v: "akshits055@gmail.com", href: "mailto:akshits055@gmail.com" },
              { icon: Github, l: "GitHub", v: "@BruhhCode", href: "https://github.com/BruhhCode" },
              { icon: Linkedin, l: "LinkedIn", v: "in/akshit-sharma", href: "https://www.linkedin.com/in/akshit-sharma-715b07278/" },
              { icon: Instagram, l: "Instagram", v: "@kidfromhimalayas", href: "https://www.instagram.com/kidfromhimalayas/" },
            ].map((s) => (
              <a
                key={s.l}
                href={s.href}
                className="group flex items-center justify-between rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {s.l}
                    </div>
                    <div className="font-display text-base font-semibold">{s.v}</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1iXdXjymxbr8tiK48m3YVjDk__aIys0tj/view?usp=sharing"
              className="group flex items-center justify-between rounded-2xl bg-gradient-to-br from-primary to-purple-accent p-5 text-primary-foreground transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/15">
                  <Download className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest opacity-80">
                    Download
                  </div>
                  <div className="font-display text-base font-semibold">Résumé · 2026</div>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type, value, onChange }: { label: string; type: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-border bg-background/40 px-4 py-3 text-base outline-none transition-all focus:border-primary focus:bg-background"
        placeholder={label}
      />
    </div>
  );
}
