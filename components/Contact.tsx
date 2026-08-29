"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, ArrowUpRight, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { personal } from "@/lib/data";
import { useLang } from "@/lib/LangContext";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const { tr } = useLang();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) { setErrorMsg(data.error || "Something went wrong."); setStatus("error"); return; }
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  const interests = tr("contact.interests").split("|");

  return (
    <section id="contact" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}
          className="mb-12 text-center">
          <p className="text-xs font-mono text-accent mb-2 uppercase tracking-widest">{tr("contact.label")}</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">{tr("contact.heading")}</h2>
          <p className="text-muted max-w-xl mx-auto">{tr("contact.sub")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 p-8 rounded-xl border border-green-500/30 bg-green-500/5 text-center">
                <CheckCircle size={40} className="text-green-400" />
                <h3 className="text-lg font-semibold">{tr("contact.success.title")}</h3>
                <p className="text-sm text-muted">{tr("contact.success.body")}</p>
                <button onClick={() => setStatus("idle")} className="text-sm text-accent-light hover:underline mt-2">
                  {tr("contact.success.again")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: "name", label: tr("contact.name"), type: "text", placeholder: tr("contact.name.placeholder") },
                  { id: "email", label: tr("contact.email"), type: "email", placeholder: tr("contact.email.placeholder") },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-xs font-mono text-muted uppercase tracking-widest mb-1.5">{f.label}</label>
                    <input id={f.id} name={f.id} type={f.type} required
                      value={form[f.id as keyof typeof form]}
                      onChange={handleChange} placeholder={f.placeholder}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-white text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-200" />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-muted uppercase tracking-widest mb-1.5">{tr("contact.message")}</label>
                  <textarea id="message" name="message" required rows={5}
                    value={form.message} onChange={handleChange}
                    placeholder={tr("contact.msg.placeholder")}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-white text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-200 resize-none" />
                </div>
                {status === "error" && (
                  <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                    <AlertCircle size={14} />{errorMsg}
                  </div>
                )}
                <button type="submit" disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-light transition-colors duration-200 disabled:opacity-60">
                  {status === "loading" ? <><Loader2 size={16} className="animate-spin" />{tr("contact.sending")}</> : <><Send size={16} />{tr("contact.send")}</>}
                </button>
              </form>
            )}
          </motion.div>

          {/* Links + availability */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4">
            {[
              { href: `mailto:${personal.email}`, icon: Mail, label: "Email", value: personal.email },
              { href: personal.github, icon: Github, label: "GitHub", value: "github.com/RahaneSayali" },
              { href: personal.linkedin, icon: Linkedin, label: "LinkedIn", value: "sayali-rahane" },
            ].map((l) => (
              <a key={l.href} href={l.href} target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel={l.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group flex items-center justify-between p-4 rounded-xl border border-border bg-surface hover:border-accent/50 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <l.icon size={18} className="text-accent" />
                  <div>
                    <p className="text-xs text-muted mb-0.5">{l.label}</p>
                    <p className="text-sm text-foreground">{l.value}</p>
                  </div>
                </div>
                <ArrowUpRight size={15} className="text-muted group-hover:text-accent transition-colors" />
              </a>
            ))}

            <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-surface">
              <MapPin size={18} className="text-accent" />
              <div>
                <p className="text-xs text-muted mb-0.5">{tr("about.location")}</p>
                <p className="text-sm text-white">Pune, India · {tr("contact.open")}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-accent/30 bg-accent/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium text-foreground">{tr("contact.available.title")}</span>
              </div>
              <p className="text-xs text-muted mb-3">{tr("contact.available.body")}</p>
              <ul className="space-y-1.5">
                {interests.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 pt-8 border-t border-border text-center">
        <p className="text-xs text-muted">
          {tr("footer.built")} · <span className="gradient-text font-medium">{personal.name}</span> © 2025
        </p>
      </motion.div>
    </section>
  );
}
