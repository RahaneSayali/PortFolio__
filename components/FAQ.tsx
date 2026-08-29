"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/data";
import { useLang } from "@/lib/LangContext";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { tr } = useLang();

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}
          className="mb-12 text-center">
          <p className="text-xs font-mono text-accent mb-2 uppercase tracking-widest">{tr("faq.label")}</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">{tr("faq.heading")}</h2>
          <p className="text-muted mt-4 text-sm max-w-md mx-auto">
            {tr("faq.sub")}{" "}
            <a href="#contact" className="text-accent-light hover:underline">{tr("faq.sub.cta")}</a>
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${open === i ? "border-accent/40 bg-surface" : "border-border bg-surface/40 hover:border-border/80"}`}>
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left">
                <span className="flex items-start gap-3">
                  <span className="text-xs font-mono text-accent mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className={`text-sm font-medium transition-colors duration-200 ${open === i ? "text-foreground" : "text-muted"}`}>{faq.question}</span>
                </span>
                <span className="flex-shrink-0 mt-0.5 text-accent">
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden">
                    <p className="px-6 pb-5 pl-[calc(1.5rem+1.75rem)] text-sm text-muted leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
