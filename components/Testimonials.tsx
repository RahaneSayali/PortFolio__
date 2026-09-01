"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { useLang } from "@/lib/LangContext";

export default function Testimonials() {
  const { tr } = useLang();

  return (
    <section className="relative py-28 border-t border-border overflow-hidden">
      {/* Parchment texture accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/parchment.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.035,
          mixBlendMode: "multiply",
        }}
      />

      <div className="max-w-content mx-auto px-6 md:px-12 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-[11px] font-mono text-muted uppercase tracking-[0.22em] mb-4"
        >
          {tr("testimonials.label")}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[clamp(28px,3.5vw,44px)] font-bold text-foreground tracking-[-0.025em] leading-[1.1] mb-16"
        >
          {tr("testimonials.heading")}
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {testimonials.map((t, i) => {
            const isLastOdd = i === testimonials.length - 1 && testimonials.length % 2 !== 0;
            return (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`card-glow rounded-2xl p-7${isLastOdd ? " sm:col-span-2 sm:max-w-[calc(50%-8px)] sm:mx-auto sm:w-full" : ""}`}
            >
              {/* Quote — from i18n so it translates */}
              <p className="text-[15px] text-foreground leading-[1.8] mb-7">
                &ldquo;{tr(`t${i}.quote`)}&rdquo;
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="w-9 h-9 rounded-full bg-foreground/8 border border-border flex items-center justify-center text-[11px] font-mono font-bold text-foreground shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-foreground">{t.name}</p>
                  <p className="text-[11px] font-mono text-muted">{tr(`t${i}.role`)}</p>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
