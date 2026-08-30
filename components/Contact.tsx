"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Loader2, CheckCircle } from "lucide-react";
import { personal } from "@/lib/data";
import { useLang } from "@/lib/LangContext";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const { tr } = useLang();
  const [form, setForm]     = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrMsg("");
    try {
      const res  = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) { setErrMsg(data.error || "Something went wrong."); setStatus("error"); return; }
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setErrMsg("Network error. Please email directly.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-28 border-t border-border overflow-hidden">

      <div className="max-w-content mx-auto px-6 md:px-12 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}
          className="text-[11px] font-mono text-muted uppercase tracking-[0.22em] mb-4"
        >
          {tr("contact.section")}
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h2 className="text-[clamp(30px,4vw,54px)] font-bold text-foreground tracking-[-0.03em] leading-[1.06] mb-6">
              {tr("contact.heading")}
            </h2>
            <p className="text-[15px] text-muted leading-[1.75] mb-10 max-w-sm">
              {tr("contact.desc")}
            </p>

            <div className="space-y-3">
              {[
                { href: `mailto:${personal.email}`, Icon: Mail,    value: personal.email },
                { href: personal.linkedin,           Icon: Linkedin, value: "sayali-rahane" },
                { href: personal.github,             Icon: Github,   value: "RahaneSayali" },
              ].map(({ href, Icon, value }) => (
                <a key={value} href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-3 text-[14px] text-muted hover:text-foreground transition-colors group"
                >
                  <span className="w-8 h-8 rounded-md border border-border flex items-center justify-center group-hover:border-foreground/30 transition-colors shrink-0">
                    <Icon size={14} />
                  </span>
                  {value}
                </a>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2 text-[12px] font-mono text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              {tr("contact.avail")} · Open to Remote &amp; Relocation
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.12 }}
          >
            {status === "sent" ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 py-16 text-center">
                <CheckCircle size={40} className="text-green-500" />
                <h3 className="text-lg font-semibold text-foreground">{tr("contact.sent.title")}</h3>
                <p className="text-sm text-muted">{tr("contact.sent.body")}</p>
                <button onClick={() => setStatus("idle")} className="text-sm text-accent hover:underline mt-2">
                  {tr("contact.sent.again")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono text-muted uppercase tracking-[0.12em] block mb-2">{tr("contact.name")}</label>
                    <input type="text" required value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder={tr("contact.name.ph")}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-foreground text-[14px] focus:outline-none focus:border-accent/50 transition-colors placeholder:text-muted/40" />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-muted uppercase tracking-[0.12em] block mb-2">{tr("contact.email")}</label>
                    <input type="email" required value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder={tr("contact.email.ph")}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-foreground text-[14px] focus:outline-none focus:border-accent/50 transition-colors placeholder:text-muted/40" />
                  </div>
                </div>
                <div>
                  <label className="text-[11px] font-mono text-muted uppercase tracking-[0.12em] block mb-2">{tr("contact.subject")}</label>
                  <input type="text" required value={form.subject}
                    onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                    placeholder={tr("contact.subject.ph")}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-foreground text-[14px] focus:outline-none focus:border-accent/50 transition-colors placeholder:text-muted/40" />
                </div>
                <div>
                  <label className="text-[11px] font-mono text-muted uppercase tracking-[0.12em] block mb-2">{tr("contact.message")}</label>
                  <textarea required rows={5} value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder={tr("contact.msg.ph")}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-foreground text-[14px] focus:outline-none focus:border-accent/50 transition-colors placeholder:text-muted/40 resize-none" />
                </div>
                {status === "error" && <p className="text-sm text-red-500">{errMsg}</p>}
                <button type="submit" disabled={status === "sending"}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-foreground text-background text-[14px] font-medium hover:opacity-85 transition-opacity disabled:opacity-50">
                  {status === "sending"
                    ? <><Loader2 size={14} className="animate-spin" /> {tr("contact.sending")}</>
                    : <><Send size={14} /> {tr("contact.send")}</>
                  }
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
