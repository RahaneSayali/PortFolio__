"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar, Brain, Cloud, TrendingUp, Server } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { useLang } from "@/lib/LangContext";

type IconComponent = React.ComponentType<{ size?: number; style?: React.CSSProperties }>;

const categoryIcon: Record<string, IconComponent> = {
  "AI & ML": Brain,
  "Cloud Computing": Cloud,
  "Tech Industry": TrendingUp,
  "DevOps": Server,
};

export default function Blog() {
  const { tr } = useLang();

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  };

  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-accent mb-2 uppercase tracking-widest">{tr("blog.label")}</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-3">{tr("blog.heading")}</h2>
          <p className="text-muted text-sm max-w-xl">{tr("blog.sub")}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {blogPosts.map((post, i) => {
            const Icon = categoryIcon[post.category] ?? TrendingUp;
            const a = post.accent;

            return (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex flex-col rounded-2xl border border-border bg-surface hover:border-accent/40 transition-all duration-300 overflow-hidden"
              >
                {/* ── Thumbnail ── */}
                <div
                  className="relative h-48 overflow-hidden flex items-center justify-center"
                  style={{
                    background: `
                      radial-gradient(ellipse at 25% 60%, ${a}45 0%, transparent 55%),
                      radial-gradient(ellipse at 80% 20%, ${a}30 0%, transparent 50%),
                      radial-gradient(ellipse at 60% 90%, ${a}20 0%, transparent 45%)
                    `,
                    backgroundColor: "rgb(10 10 15)",
                  }}
                >
                  {/* Dot grid */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle, ${a}55 1px, transparent 1px)`,
                      backgroundSize: "22px 22px",
                    }}
                  />

                  {/* Decorative blob top-right */}
                  <div
                    className="absolute -top-10 -right-10 w-52 h-52 rounded-full blur-3xl opacity-30 pointer-events-none"
                    style={{ background: a }}
                  />
                  {/* Decorative blob bottom-left */}
                  <div
                    className="absolute -bottom-10 -left-8 w-40 h-40 rounded-full blur-2xl opacity-20 pointer-events-none"
                    style={{ background: a }}
                  />

                  {/* Faded category watermark */}
                  <span
                    className="absolute bottom-1 right-3 text-[72px] font-display font-black select-none pointer-events-none uppercase leading-none opacity-[0.05] tracking-tight"
                    style={{ color: a }}
                  >
                    {post.category.split(" ")[0]}
                  </span>

                  {/* Glowing icon tile */}
                  <div className="relative z-10">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `${a}22`,
                        border: `1.5px solid ${a}70`,
                        boxShadow: `0 0 32px ${a}50, 0 0 8px ${a}30, inset 0 1px 0 ${a}40`,
                      }}
                    >
                      <Icon size={36} style={{ color: a }} />
                    </div>
                    {/* Outer glow ring */}
                    <div
                      className="absolute inset-0 -m-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                      style={{ background: `${a}25` }}
                    />
                  </div>

                  {/* Category badge */}
                  <span
                    className="absolute top-3 left-4 text-[10px] font-mono px-2.5 py-1 rounded-full backdrop-blur-sm"
                    style={{
                      color: a,
                      border: `1px solid ${a}55`,
                      background: `${a}18`,
                    }}
                  >
                    {post.category}
                  </span>

                  {/* Read time */}
                  <div className="absolute top-3 right-4 flex items-center gap-1 text-[10px] text-white/40 font-mono backdrop-blur-sm">
                    <Clock size={10} />
                    <span>{post.readTime} {tr("blog.min")}</span>
                  </div>
                </div>

                {/* ── Content ── */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-base font-semibold text-foreground leading-snug mb-3 group-hover:text-accent-light transition-colors duration-200">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed flex-1 mb-5">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-border/50 text-muted font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-1.5 text-xs text-muted">
                      <Calendar size={11} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-medium transition-colors duration-200"
                      style={{ color: a }}
                    >
                      {tr("blog.read")}
                      <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Medium CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="https://medium.com/@sayalipr15"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-sm text-muted hover:text-foreground hover:border-accent transition-colors duration-200"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
            {tr("blog.medium")}
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
