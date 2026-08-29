"use client";

import { motion } from "framer-motion";
import { Users, MapPin, Award } from "lucide-react";
import { leadership } from "@/lib/data";
import { useLang } from "@/lib/LangContext";

const orgColors: Record<string, string> = {
  "Google Developer Student Club (GDSC)": "#4285f4",
  "Microsoft Learn Student Ambassador": "#00a4ef",
  "Coding Ninjas": "#f97316",
};

export default function Leadership() {
  const { tr } = useLang();

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-accent mb-2 uppercase tracking-widest">{tr("leadership.label")}</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">{tr("leadership.heading")}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadership.map((item, i) => {
            const accentColor = orgColors[item.org] ?? "#6366f1";
            return (
              <motion.div
                key={item.org}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex flex-col p-6 rounded-xl border border-border bg-surface hover:border-accent/40 transition-colors duration-300 overflow-hidden"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }}
                />

                {/* Icon + role */}
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="p-2 rounded-lg flex-shrink-0"
                    style={{ background: `${accentColor}18`, border: `1px solid ${accentColor}35` }}
                  >
                    <Users size={18} style={{ color: accentColor }} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground leading-snug">{item.role}</p>
                    <p className="text-sm font-medium mt-0.5" style={{ color: accentColor }}>{item.org}</p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5">
                      <span className="text-xs text-muted font-mono">{item.period}</span>
                      <span className="flex items-center gap-1 text-xs text-muted">
                        <MapPin size={10} />{item.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Certificate badge */}
                {item.cert && (
                  <div className="flex items-center gap-1.5 mb-4 px-2.5 py-1.5 rounded-lg bg-border/40 w-fit">
                    <Award size={11} className="text-muted flex-shrink-0" />
                    <span className="text-[10px] font-mono text-muted">{item.cert}</span>
                  </div>
                )}

                {/* Highlights */}
                <ul className="space-y-2.5 flex-1">
                  {item.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2.5 text-sm text-muted leading-relaxed">
                      <span
                        className="mt-2 flex-shrink-0 w-1 h-1 rounded-full"
                        style={{ background: accentColor, opacity: 0.7 }}
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
