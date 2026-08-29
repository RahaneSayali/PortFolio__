"use client";

import { motion } from "framer-motion";
import { Server, Zap, Shield, Users } from "lucide-react";
import { whyHireMe } from "@/lib/data";
import { useLang } from "@/lib/LangContext";

const iconMap: Record<string, React.ElementType> = { Server, Zap, Shield, Users };
const colors = [
  { bg: "from-violet-600/20 to-purple-600/5", border: "border-violet-500/20", icon: "text-violet-400" },
  { bg: "from-amber-600/20 to-orange-600/5", border: "border-amber-500/20", icon: "text-amber-400" },
  { bg: "from-emerald-600/20 to-green-600/5", border: "border-emerald-500/20", icon: "text-emerald-400" },
  { bg: "from-sky-600/20 to-blue-600/5", border: "border-sky-500/20", icon: "text-sky-400" },
];

export default function WhyHireMe() {
  const { tr } = useLang();
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}
          className="mb-4 text-center">
          <p className="text-xs font-mono text-accent mb-2 uppercase tracking-widest">{tr("why.label")}</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">{tr("why.heading")}</h2>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted text-center max-w-xl mx-auto mb-12">{tr("why.sub")}</motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyHireMe.map((item, i) => {
            const Icon = iconMap[item.icon];
            const color = colors[i % colors.length];
            return (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-6 rounded-xl border ${color.border} bg-gradient-to-b ${color.bg} hover:scale-[1.02] transition-transform duration-300`}>
                <div className={`mb-4 p-2.5 rounded-lg bg-background/60 border ${color.border} w-fit`}>
                  {Icon && <Icon size={20} className={color.icon} />}
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
