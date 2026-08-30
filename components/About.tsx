"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.55, delay },
});

export default function About() {
  const { tr } = useLang();

  const CAPABILITIES = [
    { num: "01", titleKey: "cap.01.title", descKey: "cap.01.desc" },
    { num: "02", titleKey: "cap.02.title", descKey: "cap.02.desc" },
    { num: "03", titleKey: "cap.03.title", descKey: "cap.03.desc" },
    { num: "04", titleKey: "cap.04.title", descKey: "cap.04.desc" },
  ];

  return (
    <section id="about" className="relative py-28 border-t border-border overflow-hidden">


<div className="max-w-content mx-auto px-6 md:px-12 relative z-10">
        <motion.p {...inView(0)} className="text-[11px] font-mono text-muted uppercase tracking-[0.22em] mb-12">
          {tr("about.section")}
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div {...inView(0.05)}>
            <h2 className="text-[clamp(30px,3.8vw,50px)] font-bold text-foreground tracking-[-0.025em] leading-[1.1] mb-7">
              {tr("about.heading")}
            </h2>
            <div className="space-y-4 text-[15px] text-muted leading-[1.8]">
              <p>{tr("about.p1")}</p>
              <p>{tr("about.p2")}</p>
              <p>{tr("about.p3")}</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            {CAPABILITIES.map((c, i) => (
              <motion.div key={c.num} {...inView(0.1 + i * 0.07)}
                className="card-glow p-5 rounded-xl cursor-default">
                <span className="text-[11px] font-mono text-accent block mb-3">{c.num}</span>
                <h3 className="text-[13px] font-semibold text-foreground mb-2 leading-snug">{tr(c.titleKey)}</h3>
                <p className="text-[12px] text-muted leading-[1.7]">{tr(c.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
