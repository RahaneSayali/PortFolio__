"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { experiences } from "@/lib/data";
import { useLang } from "@/lib/LangContext";

export default function Experience() {
  const { tr } = useLang();
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="mb-12">
          <p className="text-xs font-mono text-accent mb-2 uppercase tracking-widest">{tr("exp.label")}</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">{tr("exp.heading")}</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-[200px] top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div key={`${exp.role}-${i}`}
                initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="md:flex gap-8">
                {/* Left: date */}
                <div className="md:w-[200px] md:text-right md:pr-8 mb-4 md:mb-0 flex-shrink-0">
                  <div className="flex items-center gap-2 md:justify-end text-xs text-muted mb-1">
                    <Calendar size={12} />
                    <span className="font-mono">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end text-xs text-muted mb-1">
                    <MapPin size={12} /><span>{exp.location}</span>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded border border-border text-muted">
                    {exp.type === "Full-time" ? tr("exp.fulltime") : tr("exp.internship")}
                  </span>
                </div>

                {/* Dot */}
                <div className="hidden md:block relative flex-shrink-0">
                  <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-accent border-2 border-background" />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 rounded-xl border border-border bg-surface hover:border-accent/30 transition-colors duration-300 glow-border">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-accent-light text-sm font-medium">{exp.company}</p>
                    </div>
                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2">
                      {exp.metrics.map((m) => (
                        <div key={m.label} className="text-center px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20">
                          <p className="text-sm font-bold gradient-text">{m.value}</p>
                          <p className="text-[10px] text-muted">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-sm text-muted leading-relaxed">
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent/60" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded text-xs bg-background border border-border text-muted">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
