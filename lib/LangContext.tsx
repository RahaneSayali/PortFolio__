"use client";

import { createContext, useContext, useState } from "react";
import { Lang, t } from "@/lib/i18n";

type LangCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: (key: string) => string;
};

const LangContext = createContext<LangCtx>({
  lang: "en",
  setLang: () => {},
  tr: (k) => k,
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const tr = (key: string) => t[lang][key] ?? t["en"][key] ?? key;
  return (
    <LangContext.Provider value={{ lang, setLang, tr }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
