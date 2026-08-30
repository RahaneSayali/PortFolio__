import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-content mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[12px] font-mono text-muted">
          © 2026 Sayali Rahane
        </p>

        <div className="flex items-center gap-4">
          <a href={`mailto:${personal.email}`}
            className="text-muted hover:text-foreground transition-colors" aria-label="Email">
            <Mail size={15} />
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors" aria-label="GitHub">
            <Github size={15} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors" aria-label="LinkedIn">
            <Linkedin size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
