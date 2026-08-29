"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, Globe } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { personal } from "@/lib/data";
import { languages, type Lang } from "@/lib/i18n";
import { useLang } from "@/lib/LangContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { lang, setLang, tr } = useLang();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinks = [
    { label: tr("nav.about"), href: "#about" },
    { label: tr("nav.skills"), href: "#skills" },
    { label: tr("nav.experience"), href: "#experience" },
    { label: tr("nav.projects"), href: "#projects" },
    { label: tr("nav.blog"), href: "#blog" },
    { label: tr("nav.contact"), href: "#contact" },
  ];

  const currentLang = languages.find((l) => l.code === lang)!;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl xl:max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group flex-shrink-0">
          <svg width="22" height="24" viewBox="0 0 22 24" fill="none" className="text-accent group-hover:text-accent-light transition-colors duration-200" aria-hidden="true">
            <path d="M11 1L21 6.5V17.5L11 23L1 17.5V6.5L11 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M11 7L15 9.5V14.5L11 17L7 14.5V9.5L11 7Z" fill="currentColor" opacity="0.3" />
          </svg>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold text-foreground tracking-tight">{personal.name}</span>
            <span className="text-[9px] font-mono text-muted uppercase tracking-[0.2em]">Backend Engineer</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}
              className="text-sm text-muted hover:text-white transition-colors duration-200">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right: theme + language + hire */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          {/* Language switcher */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-surface/50 hover:border-accent/40 transition-colors duration-200 text-sm text-muted hover:text-white"
            >
              <Globe size={14} />
              <span className="font-mono text-xs font-bold">{currentLang.flag}</span>
              <span className="text-xs">{currentLang.native}</span>
              <ChevronDown size={12} className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-52 rounded-xl border border-border bg-surface shadow-xl shadow-black/40 overflow-hidden z-50"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code as Lang); setLangOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-background transition-colors duration-150 ${lang === l.code ? "text-foreground" : "text-muted"}`}
                    >
                      <span className="font-mono text-xs font-bold w-6 text-accent">{l.flag}</span>
                      <div className="flex flex-col items-start flex-1">
                        <span className="font-medium">{l.native}</span>
                        <span className="text-xs text-muted">{l.label}</span>
                      </div>
                      {lang === l.code && <Check size={14} className="text-accent" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href={`mailto:${personal.email}`}
            className="text-sm px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-light transition-colors duration-200 font-medium">
            {tr("nav.hire")}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-surface border-b border-border px-6 pb-6 flex flex-col gap-4"
          >
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="text-sm text-muted hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <div className="flex gap-2 flex-wrap">
              {languages.map((l) => (
                <button key={l.code} onClick={() => setLang(l.code as Lang)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-colors ${lang === l.code ? "border-accent bg-accent/10 text-accent" : "border-border text-muted"}`}>
                  {l.flag} {l.native}
                </button>
              ))}
            </div>
            <a href={`mailto:${personal.email}`}
              className="text-sm text-center px-4 py-2 rounded-lg bg-accent text-white">
              {tr("nav.hire")}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
