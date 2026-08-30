"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { useLang } from "@/lib/LangContext";

export default function Blog() {
  const { tr } = useLang();

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

  return (
    <section id="writing" className="py-28 border-t border-border">

      <div className="max-w-content mx-auto px-6 md:px-12 relative z-10">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-[11px] font-mono text-muted uppercase tracking-[0.22em] mb-4"
        >
          {tr("blog.section")}
        </motion.p>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-[clamp(28px,3.5vw,44px)] font-bold text-foreground tracking-[-0.025em] leading-[1.1]"
          >
            {tr("blog.heading")}
          </motion.h2>

          <motion.a
            href="https://medium.com/@sayalipr15"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="shrink-0 inline-flex items-center gap-1.5 text-[13px] text-muted hover:text-foreground transition-colors"
          >
            {tr("blog.all")} <ArrowUpRight size={14} />
          </motion.a>
        </div>

        <div className="divide-y divide-border">
          {blogPosts.map((post, i) => (
            <motion.a
              key={post.slug}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group flex flex-col sm:flex-row sm:items-start gap-5 py-7 hover:bg-surface -mx-4 px-4 rounded-xl transition-colors duration-200"
            >
              {/* Meta */}
              <div className="sm:w-44 shrink-0">
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-border text-muted">
                  {post.category}
                </span>
                <div className="flex items-center gap-3 text-[11px] font-mono text-muted pt-2.5">
                  <span className="flex items-center gap-1"><Calendar size={10} /> {formatDate(post.date)}</span>
                  <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime} {tr("blog.min")}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-[15px] font-semibold text-foreground leading-snug tracking-[-0.01em] mb-2 group-hover:text-accent transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-[13px] text-muted leading-[1.75]">{post.excerpt}</p>
              </div>

              <ArrowUpRight
                size={16}
                className="shrink-0 text-border group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 mt-0.5"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
