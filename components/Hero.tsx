"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Mail, Github, Linkedin, Download } from "lucide-react";
import { personal, stats } from "@/lib/data";
import { useLang } from "@/lib/LangContext";

const TECH = ["Java", "Spring Boot", "Node.js", "Next.js", "TypeScript", "AWS", "Docker", "PostgreSQL", "Redis", "Azure"];

const STACK_CARDS = [
  { label: "Java · Spring Boot", sub: "Backend · Microservices", color: "#F39F5A" },
  { label: "Node.js · Next.js",  sub: "APIs · Full Stack",       color: "#AE445A" },
  { label: "AWS · Kubernetes",   sub: "Cloud · DevOps",          color: "#F39F5A" },
];

const STARS = [
  { x: 8,  y: 18, s: 1.5, d: 0    },
  { x: 22, y: 8,  s: 1,   d: 1.5  },
  { x: 38, y: 32, s: 2,   d: 0.8  },
  { x: 62, y: 12, s: 1.5, d: 2.2  },
  { x: 78, y: 28, s: 1,   d: 0.5  },
  { x: 91, y: 55, s: 1.5, d: 3.1  },
  { x: 14, y: 65, s: 1,   d: 1.8  },
  { x: 50, y: 78, s: 2,   d: 0.3  },
  { x: 82, y: 82, s: 1,   d: 2.5  },
  { x: 6,  y: 48, s: 1.5, d: 1.1  },
  { x: 96, y: 20, s: 1,   d: 3.7  },
  { x: 44, y: 50, s: 1,   d: 0.9  },
  { x: 68, y: 62, s: 2,   d: 2.8  },
  { x: 29, y: 88, s: 1.5, d: 1.4  },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const, delay },
});

export default function Hero() {
  const { tr } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const gridY = useTransform(scrollY, [0, 700], [0, 45]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center pt-[60px] overflow-hidden">

      {/* ── Static gradient base ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden style={{
        background: `
          radial-gradient(ellipse 70% 60% at 90% 0%,   rgba(243,159,90,0.2)  0%, transparent 55%),
          radial-gradient(ellipse 60% 55% at -5% 100%, rgba(102,37,73,0.45)  0%, transparent 60%),
          radial-gradient(ellipse 50% 45% at 0%   0%,  rgba(69,25,82,0.3)   0%, transparent 55%)
        `,
      }} />

      {/* ── Animated floating orbs ── */}
      <motion.div className="absolute pointer-events-none rounded-full" aria-hidden
        style={{ width: 520, height: 520, top: "-10%", right: "-8%",
          background: "radial-gradient(circle, rgba(243,159,90,0.26) 0%, transparent 70%)", filter: "blur(72px)" }}
        animate={{ x: [0,35,-15,20,0], y: [0,-25,20,-10,0], opacity: [0.8,1,0.65,0.9,0.8] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />

      <motion.div className="absolute pointer-events-none rounded-full" aria-hidden
        style={{ width: 420, height: 420, top: "30%", left: "-10%",
          background: "radial-gradient(circle, rgba(174,68,90,0.22) 0%, transparent 70%)", filter: "blur(80px)" }}
        animate={{ x: [0,-30,22,-12,0], y: [0,35,-20,18,0], opacity: [0.6,0.85,0.5,0.75,0.6] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }} />

      <motion.div className="absolute pointer-events-none rounded-full" aria-hidden
        style={{ width: 380, height: 380, bottom: "0%", right: "10%",
          background: "radial-gradient(circle, rgba(102,37,73,0.32) 0%, transparent 70%)", filter: "blur(90px)" }}
        animate={{ x: [0,25,-20,12,0], y: [0,-30,15,-18,0], opacity: [0.7,0.5,0.85,0.6,0.7] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 6 }} />

      {/* ── Twinkling stars ── */}
      {STARS.map((star, i) => (
        <motion.div key={i} className="absolute rounded-full pointer-events-none" aria-hidden
          style={{ left: `${star.x}%`, top: `${star.y}%`, width: star.s, height: star.s,
            background: "rgba(232,188,185,0.55)",
            boxShadow: `0 0 ${star.s * 3}px rgba(243,159,90,0.4)` }}
          animate={{ opacity: [0.15, 0.75, 0.15], scale: [1, 1.4, 1] }}
          transition={{ duration: 2.5 + star.d * 0.6, repeat: Infinity, ease: "easeInOut", delay: star.d }} />
      ))}

      {/* ── Grid paper parallax ── */}
      <motion.div style={{ y: gridY }} className="absolute inset-0 pointer-events-none opacity-[0.06]" aria-hidden>
        <div className="absolute inset-0" style={{
          backgroundImage: "url('/grid-paper.jpg')", backgroundSize: "cover", backgroundPosition: "center",
        }} />
      </motion.div>

      {/* Edge vignette */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden style={{
        background: "radial-gradient(ellipse 110% 110% at 50% 50%, transparent 45%, rgba(0,0,0,0.65) 100%)",
      }} />

      {/* ── Content ── */}
      <div className="max-w-content mx-auto px-6 md:px-12 w-full py-20 relative z-10">
        <div className="grid lg:grid-cols-[1fr_380px] gap-16 xl:gap-24 items-center">

          {/* LEFT */}
          <div>
            {/* Available badge */}
            <motion.div {...fade(0.05)} className="mb-7">
              <span className="inline-flex items-center gap-2 text-[11px] font-mono text-muted uppercase tracking-[0.18em]">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                {tr("hero.available")}
              </span>
            </motion.div>

            {/* Eyebrow */}
            <motion.p {...fade(0.1)} className="text-[11px] font-mono text-muted uppercase tracking-[0.22em] mb-5">
              {tr("hero.eyebrow")}
            </motion.p>

            {/* Heading */}
            <motion.h1 {...fade(0.18)}
              className="text-[clamp(28px,3.8vw,56px)] font-bold text-foreground leading-[1.1] tracking-[-0.03em] mb-6 whitespace-pre-line">
              {tr("hero.heading1")}
              {"\n"}
              <span className="text-accent whitespace-pre-line"
                style={{ textShadow: "0 0 80px rgba(243,159,90,0.4), 0 0 180px rgba(243,159,90,0.15)" }}>
                {tr("hero.heading2")}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p {...fade(0.28)} className="text-[15px] text-muted leading-[1.8] max-w-[540px] mb-8">
              {tr("hero.desc")}
            </motion.p>

            {/* Tech pills */}
            <motion.div {...fade(0.36)} className="flex flex-wrap gap-2 mb-10">
              {TECH.map((t) => (
                <span key={t}
                  className="text-[12px] font-mono px-3 py-1 rounded-full border border-border bg-surface/60 text-muted hover:border-accent/60 hover:text-foreground transition-colors duration-150">
                  {t}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fade(0.44)} className="flex flex-wrap items-center gap-3 mb-10">
              <a href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-[14px] font-semibold transition-all hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-light)))",
                  color: "rgb(var(--background))",
                  boxShadow: "0 0 30px rgba(243,159,90,0.3), 0 4px 15px rgba(0,0,0,0.3)",
                }}>
                {tr("hero.cta.work")} <ArrowRight size={15} />
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border/70 text-[14px] font-medium text-foreground hover:border-accent/50 hover:bg-surface/40 transition-all">
                <Mail size={14} /> {tr("hero.connect")}
              </a>
              <a href="/resume.pdf" download="sayali_rahane.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-[14px] text-muted hover:text-foreground transition-colors">
                <Download size={14} /> {tr("hero.cta.resume")}
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div {...fade(0.52)} className="flex flex-wrap items-center gap-4">
              <a href={`mailto:${personal.email}`}
                className="flex items-center gap-1.5 text-[12px] font-mono text-muted hover:text-accent transition-colors group">
                <Mail size={13} className="group-hover:text-accent" />
                {personal.email}
              </a>
              <span className="w-px h-3 bg-border/60" />
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[12px] font-mono text-muted hover:text-accent transition-colors group">
                <Linkedin size={13} className="group-hover:text-accent" />
                LinkedIn
              </a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[12px] font-mono text-muted hover:text-accent transition-colors group">
                <Github size={13} className="group-hover:text-accent" />
                GitHub
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Photo + architecture cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="relative hidden lg:flex flex-col items-center gap-3 pt-4"
          >
            {/* Reliability card — top */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="self-end card-glow rounded-xl px-4 py-2.5 flex items-center gap-3 mr-4"
            >
              <div>
                <p className="text-[10px] font-mono text-muted uppercase tracking-[0.12em]">Reliability</p>
                <p className="text-lg font-bold text-accent tracking-tight">99.9%</p>
              </div>
              <div className="w-px h-8 bg-border/60" />
              <div>
                <p className="text-[10px] font-mono text-muted uppercase tracking-[0.12em]">Events/sec</p>
                <p className="text-lg font-bold text-accent tracking-tight">10K+</p>
              </div>
            </motion.div>

            {/* Photo */}
            <div
              className="relative w-[280px] h-[350px] rounded-2xl overflow-hidden border border-border bg-surface"
              style={{ boxShadow: "0 0 0 1px rgba(243,159,90,0.2), 0 0 60px rgba(174,68,90,0.2), 0 16px 50px rgba(0,0,0,0.6)" }}
            >
              <Image src="/avatar.png" alt="Sayali Rahane" fill className="object-cover object-center" priority />
            </div>

            {/* Tech stack cards — below photo */}
            <div className="flex flex-col gap-2 w-full px-2">
              {STACK_CARDS.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -12 : 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="card-glow rounded-xl px-4 py-2.5 flex items-center justify-between"
                >
                  <div>
                    <p className="text-[12px] font-semibold text-foreground">{card.label}</p>
                    <p className="text-[10px] font-mono text-muted">{card.sub}</p>
                  </div>
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ background: card.color, boxShadow: `0 0 8px ${card.color}` }} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="mt-16 border border-border/60 rounded-xl overflow-hidden grid grid-cols-3 bg-surface/40 backdrop-blur-md"
        >
          {stats.map((s, i) => (
            <div key={s.label}
              className={`py-5 px-6 ${i > 0 ? "border-l border-border/60" : ""}`}>
              <p className="text-2xl font-bold text-accent tracking-tight mb-0.5">{s.value}</p>
              <p className="text-[11px] font-mono text-muted uppercase tracking-[0.12em]">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
