"use client";

import { motion } from "framer-motion";
import { Code2, Server, Zap, Activity, Database, Cloud, CheckCircle, Layers } from "lucide-react";
import { skillCategories } from "@/lib/data";
import { useLang } from "@/lib/LangContext";

const iconMap: Record<string, React.ElementType> = { Code2, Server, Zap, Activity, Database, Cloud, CheckCircle, Layers };

export default function Skills() {
  const { tr } = useLang();
  return (
    <section id="skills" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="mb-12">
          <p className="text-xs font-mono text-accent mb-2 uppercase tracking-widest">{tr("skills.label")}</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">{tr("skills.heading")}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skillCategories.map((cat, catIndex) => {
            const Icon = iconMap[cat.icon];
            return (
              <motion.div key={cat.title}
                initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.08, ease: "easeOut" }}
                className={`p-5 rounded-xl border ${cat.border} bg-gradient-to-b ${cat.color} hover:scale-[1.01] transition-transform duration-300`}>
                <div className="flex items-center gap-2 mb-4">
                  {Icon && <Icon size={16} className="text-accent" />}
                  <span className="text-xs font-mono text-muted uppercase tracking-widest">{cat.title}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <motion.span key={skill}
                      initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: catIndex * 0.06 + i * 0.04 }}
                      className="px-2.5 py-1 rounded-md text-xs bg-background border border-border text-muted hover:text-foreground hover:border-accent/50 transition-colors duration-200 cursor-default">
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
