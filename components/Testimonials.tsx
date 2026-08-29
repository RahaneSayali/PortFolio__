"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import { useLang } from "@/lib/LangContext";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const { tr } = useLang();

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section className="py-24 px-6 bg-surface/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-mono text-accent mb-2 uppercase tracking-widest">{tr("testimonials.label")}</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">{tr("testimonials.heading")}</h2>
        </motion.div>

        {/* All cards grid — desktop */}
        <div className="hidden md:grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-surface hover:border-accent/30 transition-colors duration-300"
            >
              <Quote size={28} className="text-accent/30 mb-4" />
              <p className="text-sm text-muted leading-relaxed mb-6 italic">&quot;{tr(`t${i}.quote`)}&quot;</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-xs font-bold text-white">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted">{tr(`t${i}.role`)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Slider — mobile */}
        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6 min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.25 }}
              >
                <Quote size={28} className="text-accent/30 mb-4" />
                <p className="text-sm text-muted leading-relaxed mb-6 italic">
                  &quot;{tr(`t${active}.quote`)}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonials[active].avatarColor} flex items-center justify-center`}>
                    <span className="text-xs font-bold text-white">{testimonials[active].avatar}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{testimonials[active].name}</p>
                    <p className="text-xs text-muted">{tr(`t${active}.role`)}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between mt-4">
            <button onClick={prev}
              className="p-2 rounded-lg border border-border text-muted hover:text-white hover:border-accent/40 transition-colors">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${i === active ? "bg-accent w-6" : "bg-border"}`} />
              ))}
            </div>
            <button onClick={next}
              className="p-2 rounded-lg border border-border text-muted hover:text-white hover:border-accent/40 transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
