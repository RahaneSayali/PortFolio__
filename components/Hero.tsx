"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import { personal, stats } from "@/lib/data";
import { useLang } from "@/lib/LangContext";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

export default function Hero() {
  const { tr } = useLang();

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Background — deep vignette glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-accent/[0.07] blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full bg-indigo-900/[0.12] blur-[150px] pointer-events-none" />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      {/* Main content */}
      <div className="max-w-5xl xl:max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            {/* Available badge */}
            <motion.div {...fadeUp(0.05)} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/25 bg-green-500/8 text-xs text-green-400 font-mono tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                {tr("hero.badge")}
              </span>
            </motion.div>

            {/* Role label */}
            <motion.p {...fadeUp(0.12)} className="text-xs font-mono text-muted uppercase tracking-[0.25em] mb-4">
              {tr("hero.role")}
            </motion.p>

            {/* Name — display serif */}
            <motion.h1 {...fadeUp(0.2)} className="mb-6 leading-[1.05]">
              <span className="block text-xl sm:text-2xl font-display italic text-muted/80 mb-1">
                Hi, I&apos;m
              </span>
              <span className="block text-[clamp(52px,8vw,88px)] font-display font-black text-foreground">
                Sayali
              </span>
              <span className="block text-[clamp(52px,8vw,88px)] font-display font-black gradient-text leading-none">
                Rahane
              </span>
            </motion.h1>

            <motion.p {...fadeUp(0.35)} className="text-base sm:text-lg text-muted max-w-lg leading-relaxed mb-10">
              {tr("hero.tagline")}
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-3 mb-10">
              <a href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-light transition-all duration-200 shadow-lg shadow-accent/20">
                {tr("hero.cta.work")} →
              </a>
              <a href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-sm font-medium text-foreground hover:border-accent/50 hover:bg-accent/5 transition-all duration-200">
                <Mail size={15} />{tr("hero.cta.contact")}
              </a>
              <a href="/resume.pdf" download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-sm font-medium text-muted hover:text-foreground hover:border-border/80 transition-all duration-200">
                <Download size={15} />{tr("hero.cta.resume")}
              </a>
            </motion.div>

            {/* Social icons — square bordered */}
            <motion.div {...fadeUp(0.55)} className="flex items-center gap-3">
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-border text-muted hover:text-foreground hover:border-accent/50 transition-all duration-200">
                <Linkedin size={17} />
              </a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-border text-muted hover:text-foreground hover:border-accent/50 transition-all duration-200">
                <Github size={17} />
              </a>
              <a href={`mailto:${personal.email}`}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-border text-muted hover:text-foreground hover:border-accent/50 transition-all duration-200">
                <Mail size={17} />
              </a>
              <span className="w-px h-5 bg-border mx-1" />
              <span className="text-xs text-muted font-mono">{personal.location}</span>
            </motion.div>
          </div>

          {/* RIGHT — hexagonal avatar + floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
            className="relative flex justify-center items-center"
          >
            {/* Ambient glow behind hex */}
            <div className="absolute w-[300px] h-[300px] rounded-full bg-accent/15 blur-[80px] pointer-events-none" />

            {/* Hexagonal avatar */}
            <div
              className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px]"
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            >
              <Image
                src="/avatar.jpg"
                alt="Sayali Rahane"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Metric cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -right-2 sm:right-0 bg-surface border border-border rounded-xl px-4 py-3 shadow-2xl shadow-black/40"
            >
              <p className="text-[10px] text-muted mb-0.5 font-mono">{tr("hero.metric.throughput.label")}</p>
              <p className="text-2xl font-bold gradient-text font-display">5×</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-2 sm:left-0 bg-surface border border-border rounded-xl px-4 py-3 shadow-2xl shadow-black/40"
            >
              <p className="text-[10px] text-muted mb-0.5 font-mono">{tr("hero.metric.latency.label")}</p>
              <p className="text-2xl font-bold gradient-text font-display">40%</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 right-0 sm:right-4 bg-surface border border-border rounded-xl px-4 py-3 shadow-2xl shadow-black/40"
            >
              <p className="text-[10px] text-muted mb-0.5 font-mono">{tr("hero.metric.dau.label")}</p>
              <p className="text-2xl font-bold gradient-text font-display">50K+</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border"
        >
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + i * 0.08 }}
              className="p-6 bg-surface/60 text-center hover:bg-surface transition-colors duration-300 group"
            >
              <p className="text-3xl font-extrabold gradient-text mb-1 font-display group-hover:scale-105 transition-transform duration-200">{s.value}</p>
              <p className="text-xs text-muted font-mono">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted text-xs">
        <span className="font-mono">{tr("hero.scroll")}</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
