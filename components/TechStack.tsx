"use client";

import { motion } from "framer-motion";

const STACK = [
  {
    num: "01", category: "Languages",
    accent: "#F39F5A",
    items: ["Java", "TypeScript", "JavaScript", "SQL"],
  },
  {
    num: "02", category: "Backend",
    accent: "#AE445A",
    items: ["Spring Boot", "Spring Security", "Node.js", "Express", "Fastify"],
  },
  {
    num: "03", category: "Databases",
    accent: "#F39F5A",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    num: "04", category: "Messaging",
    accent: "#AE445A",
    items: ["Apache Kafka", "RabbitMQ", "Event-Driven"],
  },
  {
    num: "05", category: "Cloud",
    accent: "#F39F5A",
    items: ["Azure", "AWS (EC2, S3, RDS)", "Docker", "Kubernetes"],
  },
  {
    num: "06", category: "DevOps",
    accent: "#AE445A",
    items: ["GitHub Actions", "Jenkins", "CI/CD", "SonarQube"],
  },
  {
    num: "07", category: "Testing",
    accent: "#F39F5A",
    items: ["JUnit 5", "Mockito", "Jest", "Integration Testing"],
  },
  {
    num: "08", category: "Concepts",
    accent: "#AE445A",
    items: ["Microservices", "System Design (HLD/LLD)", "REST APIs", "SOLID", "RBAC", "OAuth 2.0", "JWT"],
    wide: true,
  },
];

export default function TechStack() {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <p className="text-[11px] font-mono text-muted uppercase tracking-[0.22em] mb-3">
              Technology Stack
            </p>
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold text-foreground tracking-[-0.025em] leading-[1.1]">
              Tools I build with.
            </h2>
          </div>
          <span className="hidden sm:block text-[11px] font-mono text-muted uppercase tracking-[0.12em]">
            {STACK.length} categories
          </span>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-fr">
          {STACK.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: gi * 0.06 }}
              className={`card-glow rounded-2xl p-5 flex flex-col gap-4 group cursor-default${group.wide ? " col-span-2" : ""}`}
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <span
                  className="text-[11px] font-mono font-bold tracking-[0.1em]"
                  style={{ color: group.accent }}
                >
                  {group.num}
                </span>
                {/* Accent dot cluster */}
                <div className="flex gap-1 opacity-40 group-hover:opacity-80 transition-opacity duration-300">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: group.accent }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-border" />
                  <span className="w-1.5 h-1.5 rounded-full bg-border" />
                </div>
              </div>

              {/* Category title */}
              <h3
                className="text-[17px] font-bold tracking-[-0.02em] leading-none transition-colors duration-200"
                style={{ color: "rgb(var(--foreground))" }}
              >
                {group.category}
              </h3>

              {/* Divider */}
              <div
                className="h-px w-8 transition-all duration-300 group-hover:w-16"
                style={{ background: `linear-gradient(90deg, ${group.accent}, transparent)` }}
              />

              {/* Tech pills */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {group.items.map((item, ii) => (
                  <span
                    key={item}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg border transition-all duration-200 cursor-default"
                    style={ii === 0 ? {
                      borderColor: `${group.accent}50`,
                      background: `${group.accent}12`,
                      color: group.accent,
                      fontWeight: 600,
                    } : {
                      borderColor: "rgb(var(--border) / 0.7)",
                      background: "transparent",
                      color: "rgb(var(--muted))",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
