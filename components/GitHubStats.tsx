"use client";

import { motion } from "framer-motion";
import { GitCommit, GitPullRequest, Star, Flame } from "lucide-react";
import { githubStats, personal } from "@/lib/data";
import { useLang } from "@/lib/LangContext";

export default function GitHubStats() {
  const { tr } = useLang();
  const statCards = [
    { icon: GitCommit, label: tr("github.commits"), value: githubStats.totalCommits },
    { icon: GitPullRequest, label: tr("github.prs"), value: githubStats.pullRequests },
    { icon: Star, label: tr("github.repos"), value: githubStats.repositories },
    { icon: Flame, label: tr("github.streak"), value: `${githubStats.streak}d` },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="mb-12">
          <p className="text-xs font-mono text-accent mb-2 uppercase tracking-widest">{tr("github.label")}</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">{tr("github.heading")}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {statCards.map((s, i) => (
                <motion.div key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="p-5 rounded-xl border border-border bg-surface hover:border-accent/40 transition-colors duration-300 group">
                  <s.icon size={18} className="text-accent mb-3" />
                  <p className="text-2xl font-bold text-foreground">{s.value}</p>
                  <p className="text-xs text-muted mt-0.5">{s.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.35 }}
              className="p-5 rounded-xl border border-accent/30 bg-accent/5">
              <p className="text-xs text-muted font-mono uppercase tracking-widest mb-1">{tr("github.year")}</p>
              <p className="text-4xl font-extrabold gradient-text">{githubStats.thisYear}</p>
              <p className="text-sm text-muted mt-1">{tr("github.year.sub")}</p>
            </motion.div>
          </div>

          <div className="space-y-4">
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="p-6 rounded-xl border border-border bg-surface">
              <p className="text-xs font-mono text-muted uppercase tracking-widest mb-4">{tr("github.langs")}</p>
              <div className="space-y-4">
                {githubStats.topLanguages.map((lang, i) => (
                  <div key={lang.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: lang.color }} />
                        <span className="text-sm text-foreground font-medium">{lang.name}</span>
                      </div>
                      <span className="text-xs text-muted font-mono">{lang.percent}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-border overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${lang.percent}%` }}
                        viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full" style={{ background: lang.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 rounded-xl border border-border bg-surface">
              <p className="text-xs font-mono text-muted uppercase tracking-widest mb-4">{tr("github.activity")}</p>
              <div className="flex gap-1 flex-wrap">
                {Array.from({ length: 52 * 7 }).map((_, i) => {
                  const v = (Math.sin(i * 127.1 + 311.7) * 43758.5453) % 1;
                  const n = v < 0 ? v + 1 : v;
                  const c = n > 0.85 ? "bg-accent" : n > 0.65 ? "bg-accent/60" : n > 0.45 ? "bg-accent/30" : n > 0.25 ? "bg-accent/15" : "bg-border/50";
                  return <div key={i} className={`w-[10px] h-[10px] rounded-sm ${c}`} />;
                })}
              </div>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-muted">{tr("github.less")}</span>
                <div className="flex gap-1">
                  {["bg-border/50","bg-accent/15","bg-accent/30","bg-accent/60","bg-accent"].map((c) => (
                    <div key={c} className={`w-3 h-3 rounded-sm ${c}`} />
                  ))}
                </div>
                <span className="text-xs text-muted">{tr("github.more")}</span>
              </div>
            </motion.div>

            <a href={personal.github} target="_blank" rel="noopener noreferrer"
              className="block text-center text-xs text-muted hover:text-accent-light transition-colors font-mono">
              github.com/RahaneSayali →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
