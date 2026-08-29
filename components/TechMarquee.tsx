"use client";

import {
  SiOpenjdk, SiSpringboot, SiApachekafka, SiRedis, SiDocker,
  SiKubernetes, SiTerraform, SiNodedotjs, SiTypescript,
  SiPostgresql, SiMongodb, SiNestjs, SiNextdotjs, SiReact,
  SiGit, SiGithubactions, SiMysql, SiGrafana, SiRabbitmq,
} from "react-icons/si";

const techStack = [
  { icon: SiOpenjdk, name: "Java" },
  { icon: SiSpringboot, name: "Spring Boot" },
  { icon: SiApachekafka, name: "Kafka" },
  { icon: SiRedis, name: "Redis" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiKubernetes, name: "Kubernetes" },
  { icon: SiTerraform, name: "Terraform" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiNestjs, name: "NestJS" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiReact, name: "React" },
  { icon: SiGit, name: "Git" },
  { icon: SiGithubactions, name: "CI/CD" },
  { icon: SiMysql, name: "MySQL" },
  { icon: SiGrafana, name: "Grafana" },
  { icon: SiRabbitmq, name: "RabbitMQ" },
];

const doubled = [...techStack, ...techStack];

export default function TechMarquee() {
  return (
    <div className="relative py-3 overflow-hidden border-y border-border bg-surface/10">
      {/* Labels */}
      <div className="absolute top-3 left-6 z-10 pointer-events-none">
        <span className="text-[10px] font-mono text-accent uppercase tracking-[0.3em]">Stack</span>
      </div>
      <div className="absolute top-3 right-6 z-10 pointer-events-none">
        <span className="text-[10px] font-mono text-muted">Tools I ship with daily</span>
      </div>

      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Scrolling icons */}
      <div className="flex animate-marquee mt-7" style={{ width: "max-content" }}>
        {doubled.map((tech, i) => {
          const Icon = tech.icon;
          return (
            <div
              key={`${tech.name}-${i}`}
              className="group flex flex-col items-center justify-center gap-2 mx-5 cursor-default"
            >
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-xl border border-border bg-surface/60 group-hover:border-accent/40 group-hover:bg-accent/5 transition-all duration-300">
                <Icon
                  size={30}
                  className="text-muted/70 group-hover:text-foreground transition-colors duration-300"
                />
              </div>
              <span className="text-[9px] font-mono text-muted/50 group-hover:text-muted transition-colors duration-300 whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
