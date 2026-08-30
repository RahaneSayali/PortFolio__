"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, Globe, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { languages, type Lang } from "@/lib/i18n";
import { useLang } from "@/lib/LangContext";

const NAV_KEYS = [
  { href: "/",           key: "nav.home" },
  { href: "#about",      key: "nav.about" },
  { href: "#experience", key: "nav.experience" },
  { href: "#projects",   key: "nav.projects" },
  { href: "#writing",    key: "nav.writing" },
  { href: "#contact",    key: "nav.contact" },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen,   setLangOpen]   = useState(false);
  const [mounted,    setMounted]    = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { lang, setLang, tr }        = useLang();
  const langRef                     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close lang dropdown on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const currentLang = languages.find((l) => l.code === lang) ?? languages[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-accent/15 bg-background/80 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
      style={scrolled ? {
        boxShadow: "0 1px 0 rgba(243,159,90,0.08), 0 4px 30px rgba(0,0,0,0.4)",
      } : undefined}
    >
      <div className="max-w-content mx-auto px-6 md:px-12 h-[60px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span
            className="w-7 h-7 rounded-md flex items-center justify-center text-[11px] font-bold tracking-tight select-none transition-all duration-300 group-hover:scale-110"
            style={{
              background: "linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-light)))",
              color: "rgb(var(--background))",
              boxShadow: "0 0 16px rgba(243,159,90,0.35)",
            }}
          >
            SR
          </span>
          <span className="text-sm font-semibold text-foreground tracking-[-0.01em] group-hover:text-accent transition-colors duration-200">
            Sayali Rahane
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {NAV_KEYS.map((l) => (
            <a key={l.href} href={l.href}
              className="relative text-[13px] text-muted hover:text-foreground transition-colors duration-200 group/link">
              {tr(l.key)}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover/link:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2">

          {/* Language selector */}
          <div ref={langRef} className="relative hidden md:block">
            <button
              onClick={() => setLangOpen((o) => !o)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-muted hover:text-foreground hover:bg-border/40 transition-all duration-200 text-[12px] font-mono"
              aria-label="Select language"
            >
              <Globe size={13} />
              <span>{currentLang.flag}</span>
              <span className="hidden lg:inline">{currentLang.native}</span>
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.96 }}
                  transition={{ duration: 0.14 }}
                  className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-border bg-surface shadow-lg overflow-hidden z-50"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code as Lang); setLangOpen(false); }}
                      className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-[13px] hover:bg-background transition-colors duration-150 ${
                        lang === l.code ? "text-foreground" : "text-muted"
                      }`}
                    >
                      <span className="font-mono text-[11px] w-5 text-accent">{l.flag}</span>
                      <span className="flex-1 text-left">{l.native}</span>
                      {lang === l.code && <Check size={12} className="text-accent" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-1.5 rounded-md text-muted hover:text-foreground hover:bg-border/40 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          )}

          {/* CTA */}
          <a href="#contact"
            className="hidden md:inline-flex items-center px-4 py-1.5 rounded-md text-[13px] font-medium ml-1 transition-all duration-300 hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-light)))",
              color: "rgb(var(--background))",
              boxShadow: "0 0 20px rgba(243,159,90,0.3), 0 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            {tr("nav.connect")}
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1.5 text-muted hover:text-foreground transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="max-w-content mx-auto px-6 py-5 flex flex-col gap-4">
              {NAV_KEYS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                  className="text-sm text-muted hover:text-foreground transition-colors">
                  {tr(l.key)}
                </a>
              ))}

              {/* Mobile language picker */}
              <div className="flex flex-wrap gap-2 pt-1">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code as Lang)}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-mono border transition-colors ${
                      lang === l.code
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-border text-muted hover:text-foreground"
                    }`}
                  >
                    {l.flag} {l.native}
                  </button>
                ))}
              </div>

              <a href="#contact" onClick={() => setMobileOpen(false)}
                className="mt-1 inline-flex justify-center px-4 py-2.5 rounded-md bg-foreground text-background text-sm font-medium">
                {tr("nav.connect")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
