"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/data";
import { useLang } from "@/lib/LangContext";

export default function Projects() {
  const { tr } = useLang();

  return (
    <section id="projects" className="py-28 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-12">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-[11px] font-mono text-muted uppercase tracking-[0.22em] mb-4"
        >
          {tr("projects.section")}
        </motion.p>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-[clamp(28px,3.5vw,44px)] font-bold text-foreground tracking-[-0.025em] leading-[1.1]"
          >
            {tr("projects.heading")}
          </motion.h2>
          <motion.a
            href="https://github.com/RahaneSayali"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="shrink-0 inline-flex items-center gap-1.5 text-[13px] text-muted hover:text-foreground transition-colors"
          >
            {tr("projects.all")} <ArrowUpRight size={14} />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group card-glow rounded-2xl p-7 flex flex-col"
            >
              {/* Number + category */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-mono text-muted">0{i + 1}</span>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-border text-muted">
                  {p.category}
                </span>
              </div>

              {/* Title + metric */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[16px] font-semibold text-foreground leading-tight tracking-[-0.015em]">
                  {p.title}
                </h3>
                {p.metrics && (
                  <div className="shrink-0 text-right">
                    <span className="text-xl font-bold text-accent block">{p.metrics.value}</span>
                    <p className="text-[10px] font-mono text-muted">{p.metrics.label}</p>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-[13px] text-muted leading-[1.75] flex-1 mb-6">{p.description}</p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-5 border-t border-border">
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 4).map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-border text-muted">
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 4 && (
                    <span className="text-[10px] font-mono text-muted/50">+{p.tech.length - 4}</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      className="p-1.5 text-muted hover:text-foreground transition-colors" aria-label="Live demo">
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="p-1.5 text-muted hover:text-foreground transition-colors" aria-label="GitHub">
                    <Github size={15} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
