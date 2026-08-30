"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";

const AREAS = [
  { num: "01", title: "API Design",    items: ["REST APIs", "Authentication", "Authorization", "Request validation", "Rate limiting"] },
  { num: "02", title: "Data",          items: ["PostgreSQL", "MongoDB", "Redis", "Indexing strategies", "Transactions", "Data modeling"] },
  { num: "03", title: "Async Systems", items: ["Apache Kafka", "RabbitMQ", "Message queues", "Background jobs", "Event-driven arch."] },
  { num: "04", title: "Scalability",   items: ["Caching layers", "Load balancing", "Horizontal scaling", "DB optimization", "Fault tolerance"] },
  { num: "05", title: "Observability", items: ["Structured logging", "Metrics (Prometheus)", "Distributed tracing", "Alerting", "Error handling"] },
];

const ARCH = [
  { label: "Client",                   note: "Web · Mobile · CLI · External" },
  { label: "API Gateway",              note: "Auth · Rate limiting · Routing" },
  { label: "Backend Services",         note: "Spring Boot · Node.js · REST APIs" },
  { label: "Cache · Database · Queue", note: "Redis · PostgreSQL · Kafka" },
  { label: "External Services",        note: "Cloud APIs · Third-party integrations" },
];

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.45, delay },
});

export default function SystemDesign() {
  const { tr } = useLang();

  return (
    <section id="system-design" className="relative py-28 border-t border-border overflow-hidden">

      <div className="max-w-content mx-auto px-6 md:px-12 relative z-10">

        <motion.p {...inView(0)} className="text-[11px] font-mono text-muted uppercase tracking-[0.22em] mb-4">
          {tr("sd.section")}
        </motion.p>

        <motion.h2 {...inView(0.05)}
          className="text-[clamp(28px,3.5vw,44px)] font-bold text-foreground tracking-[-0.025em] leading-[1.1] mb-3">
          {tr("sd.heading")}
        </motion.h2>
        <motion.p {...inView(0.1)} className="text-[15px] text-muted mb-16 max-w-lg">
          {tr("sd.desc")}
        </motion.p>

        <div className="grid lg:grid-cols-[1fr_280px] gap-6">
          {/* Area cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 content-start">
            {AREAS.map((area, i) => (
              <motion.div key={area.num} {...inView(0.1 + i * 0.07)}
                className="card-glow p-5 rounded-xl cursor-default">
                <span className="text-[10px] font-mono text-muted uppercase tracking-[0.15em] block mb-4">{area.num}</span>
                <h3 className="text-[13px] font-semibold text-foreground mb-3">{area.title}</h3>
                <ul className="space-y-1.5">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[12px] text-muted">
                      <span className="w-1 h-1 rounded-full bg-accent/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Architecture diagram — on engineering grid paper */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative border border-border rounded-xl overflow-hidden h-fit"
          >
            {/* Grid paper texture — light mode blueprint feel */}
            <div
              className="absolute inset-0 pointer-events-none dark:hidden"
              style={{
                backgroundImage: "url('/grid-paper.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.2,
              }}
            />
            <div className="relative z-10 p-6 bg-surface/80 backdrop-blur-[2px]">
              <p className="text-[10px] font-mono text-muted uppercase tracking-[0.18em] mb-6">
                {tr("sd.arch")}
              </p>
              <div className="space-y-2.5">
                {ARCH.map((layer, i) => (
                  <div key={layer.label}>
                    <div className="border border-border rounded-lg p-3 bg-background/70 hover:border-accent/30 transition-colors duration-150 cursor-default">
                      <p className="text-[12px] font-medium text-foreground leading-snug">{layer.label}</p>
                      <p className="text-[10px] font-mono text-muted mt-0.5">{layer.note}</p>
                    </div>
                    {i < ARCH.length - 1 && (
                      <div className="flex justify-center my-1">
                        <span className="text-muted text-xs font-mono">↓</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
