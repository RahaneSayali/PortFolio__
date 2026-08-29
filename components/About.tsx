"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Briefcase } from "lucide-react";
import { education } from "@/lib/data";
import { useLang } from "@/lib/LangContext";

const inView = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function About() {
  const { tr } = useLang();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...inView} className="mb-12">
          <p className="text-xs font-mono text-accent mb-3 uppercase tracking-widest">{tr("about.label")}</p>

          {/* Tech badge */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent/30 bg-accent/8 text-xs font-mono text-accent-light">
              {tr("about.badge")}
            </span>
            {["Java", "Node.js", "Next.js"].map((t) => (
              <span key={t} className="px-2.5 py-0.5 rounded-md border border-border bg-surface text-xs font-mono text-muted">
                {t}
              </span>
            ))}
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">{tr("about.heading")}</h2>

          {/* Taglines */}
          <div className="space-y-1">
            <p className="text-base text-muted italic">&ldquo;{tr("about.tagline1")}&rdquo;</p>
            <p className="font-mono text-sm gradient-text tracking-wide">{tr("about.tagline2")}</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div {...inView} className="space-y-5">
            <p className="text-muted leading-relaxed">{tr("about.bio1")}</p>
            <p className="text-muted leading-relaxed">{tr("about.bio2")}</p>
            <p className="text-muted leading-relaxed">{tr("about.bio3")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="space-y-4">
            <div className="p-5 rounded-xl border border-border bg-surface glow-border">
              <div className="flex items-center gap-3 mb-1">
                <Briefcase size={16} className="text-accent" />
                <span className="text-xs font-mono text-muted uppercase tracking-widest">{tr("about.current")}</span>
              </div>
              <p className="text-foreground font-medium">Software Engineer — Backend</p>
              <p className="text-sm text-muted">CentraLogic · Pune, India</p>
            </div>

            <div className="p-5 rounded-xl border border-border bg-surface glow-border">
              <div className="flex items-center gap-3 mb-1">
                <GraduationCap size={16} className="text-accent" />
                <span className="text-xs font-mono text-muted uppercase tracking-widest">{tr("about.education")}</span>
              </div>
              <p className="text-foreground font-medium">{education.degree}</p>
              <p className="text-sm text-muted">{education.institution}</p>
              <p className="text-sm text-muted">{education.period} · CGPA {education.cgpa}</p>
            </div>

            <div className="p-5 rounded-xl border border-border bg-surface glow-border">
              <div className="flex items-center gap-3 mb-1">
                <MapPin size={16} className="text-accent" />
                <span className="text-xs font-mono text-muted uppercase tracking-widest">{tr("about.location")}</span>
              </div>
              <p className="text-foreground font-medium">Pune, India</p>
              <p className="text-sm text-muted">{tr("about.open")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
