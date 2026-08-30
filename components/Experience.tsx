"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { useLang } from "@/lib/LangContext";

export default function Experience() {
  const { tr } = useLang();

  return (
    <section id="experience" className="py-28 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-12">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-[11px] font-mono text-muted uppercase tracking-[0.22em] mb-4"
        >
          {tr("exp.section")}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[clamp(28px,3.5vw,44px)] font-bold text-foreground tracking-[-0.025em] leading-[1.1] mb-16"
        >
          {tr("exp.heading")}
        </motion.h2>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-glow rounded-2xl p-7 md:p-8"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                <div>
                  <h3 className="text-[17px] font-semibold text-foreground tracking-[-0.015em]">{exp.role}</h3>
                  <p className="text-[13px] text-accent font-mono mt-1">
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <div className="sm:text-right shrink-0">
                  <span className="text-[11px] font-mono text-muted uppercase tracking-[0.1em] block">{exp.period}</span>
                  <span className="text-[11px] font-mono text-border mt-0.5 block">
                    {exp.type === "Full-time" ? tr("exp.fulltime") : tr("exp.internship")}
                  </span>
                </div>
              </div>

              {/* Metrics */}
              {exp.metrics?.length > 0 && (
                <div className="flex flex-wrap gap-2.5 mb-6">
                  {exp.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex items-center gap-1.5 text-[12px] font-mono px-3 py-1 rounded-full border border-accent/20 bg-accent/5"
                    >
                      <span className="text-accent font-bold">{m.value}</span>
                      <span className="text-muted">{m.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Highlights */}
              <ul className="space-y-2.5 mb-6">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="flex gap-3 text-[14px] text-muted leading-[1.75]">
                    <span className="mt-2.5 w-1 h-1 rounded-full bg-border shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-5 border-t border-border">
                {exp.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-border text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
