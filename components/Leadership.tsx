"use client";

import { motion } from "framer-motion";
import { Users, MapPin, Award } from "lucide-react";
import { leadership } from "@/lib/data";

const ORG_ACCENT: Record<string, string> = {
  "Google Developer Student Club (GDSC)": "#F39F5A",
  "Microsoft Learn Student Ambassador":   "#AE445A",
  "Coding Ninjas":                        "#F39F5A",
};

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5, delay },
});

export default function Leadership() {
  return (
    <section className="py-28 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-12">

        <motion.p {...inView(0)} className="text-[11px] font-mono text-muted uppercase tracking-[0.22em] mb-4">
          Community &amp; Leadership
        </motion.p>

        <motion.h2 {...inView(0.05)}
          className="text-[clamp(28px,3.5vw,44px)] font-bold text-foreground tracking-[-0.025em] leading-[1.1] mb-16">
          Beyond the code.
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {leadership.map((item, i) => {
            const accent = ORG_ACCENT[item.org] ?? "#F39F5A";
            return (
              <motion.div key={item.org} {...inView(0.08 + i * 0.08)}
                className="card-glow rounded-2xl p-6 flex flex-col relative overflow-hidden">

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />

                {/* Org badge */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="p-2 rounded-lg shrink-0"
                    style={{ background: `${accent}18`, border: `1px solid ${accent}35` }}>
                    <Users size={15} style={{ color: accent }} />
                  </div>
                  <span className="text-[12px] font-semibold leading-snug" style={{ color: accent }}>
                    {item.org}
                  </span>
                </div>

                {/* Role */}
                <h3 className="text-[15px] font-bold text-foreground mb-1 tracking-[-0.01em]">
                  {item.role}
                </h3>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
                  <span className="text-[11px] font-mono text-muted">{item.period}</span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-muted">
                    <MapPin size={9} /> {item.location}
                  </span>
                </div>

                {/* Certificate */}
                {item.cert && (
                  <div className="flex items-center gap-1.5 mb-4 px-2.5 py-1.5 rounded-lg w-fit"
                    style={{ background: `${accent}10`, border: `1px solid ${accent}30` }}>
                    <Award size={10} style={{ color: accent }} />
                    <span className="text-[10px] font-mono" style={{ color: accent }}>{item.cert}</span>
                  </div>
                )}

                {/* Highlights */}
                <ul className="space-y-2.5 flex-1 mt-auto">
                  {item.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2.5 text-[13px] text-muted leading-[1.7]">
                      <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ background: accent, opacity: 0.7 }} />
                      {h}
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
