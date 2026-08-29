"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, TrendingUp, ChevronDown } from "lucide-react";
import { projects } from "@/lib/data";
import { useLang } from "@/lib/LangContext";

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const { tr } = useLang();

  return (
    <section id="projects" className="py-24 px-6 bg-surface/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-3"
        >
          <p className="text-xs font-mono text-accent mb-2 uppercase tracking-widest">{tr("projects.label")}</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">{tr("projects.heading")}</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted text-sm mb-12 max-w-xl"
        >
          {tr("projects.sub")}
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-surface overflow-hidden hover:border-accent/40 transition-all duration-300 group"
            >
              {/* Gradient preview banner */}
              <div className={`relative h-36 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                {/* Mock code snippet decoration */}
                <div className="absolute inset-0 opacity-20 font-mono text-[10px] text-white leading-5 p-4 overflow-hidden select-none">
                  {`@Service\npublic class ${project.title.split("—")[0].trim().replace(/ /g, "")}\n  implements EventHandler {\n\n  @Autowired\n  private KafkaTemplate<String, Event> kafka;\n\n  @Override\n  public void process(Event event) {\n    kafka.send("topic", event);\n  }\n}`}
                </div>
                <div className="relative z-10 text-center">
                  <span className="inline-block px-3 py-1 rounded-full border text-xs font-mono" style={{ borderColor: project.accent + "60", color: project.accent, background: project.accent + "15" }}>
                    {project.status}
                  </span>
                </div>
                {/* Category label */}
                <span className="absolute top-3 right-3 text-xs font-mono text-white/50 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-light transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 flex-shrink-0">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="p-1.5 rounded-lg border border-border text-muted hover:text-foreground hover:border-accent/40 transition-colors">
                      <Github size={15} />
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        className="p-1.5 rounded-lg border border-border text-muted hover:text-foreground hover:border-accent/40 transition-colors">
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted leading-relaxed mb-4">{project.description}</p>

                {/* Expandable details */}
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="flex items-center gap-1.5 text-xs text-accent-light hover:text-white transition-colors mb-4"
                >
                  <ChevronDown size={14} className={`transition-transform duration-200 ${expanded === i ? "rotate-180" : ""}`} />
                  {expanded === i ? tr("projects.less") : tr("projects.more")}
                </button>

                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-muted leading-relaxed mb-4 pb-4 border-b border-border">
                        {project.longDescription}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Metric highlight */}
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg mb-4"
                  style={{ background: project.accent + "12", border: `1px solid ${project.accent}30` }}>
                  <TrendingUp size={13} style={{ color: project.accent }} />
                  <span className="text-xs font-medium" style={{ color: project.accent }}>
                    {project.metrics.label}:
                  </span>
                  <span className="text-xs font-bold text-foreground">{project.metrics.value}</span>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t}
                      className="px-2.5 py-1 rounded-md text-xs bg-background border border-border text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a href="https://github.com/RahaneSayali" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-sm text-muted hover:text-foreground hover:border-accent transition-colors duration-200">
            <Github size={16} />
            {tr("projects.github")}
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
