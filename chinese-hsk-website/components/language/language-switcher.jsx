"use client";

import { useRef } from "react";
import { languages } from "@/lib/i18n/dictionaries";
import { useLanguage } from "./language-provider";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const detailsRef = useRef(null);
  const active = languages[lang] || languages.en;

  const chooseLanguage = (code) => {
    setLang(code);
    if (detailsRef.current) detailsRef.current.open = false;
  };

  return (
    <details ref={detailsRef} className="group relative">
      <summary className="inline-flex min-w-36 cursor-pointer list-none items-center justify-between gap-3 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-black text-slate-800 shadow-sm transition marker:hidden hover:border-teal-400 hover:bg-slate-50 [&::-webkit-details-marker]:hidden">
        <span>{active.label}</span>
        <span className="text-xs text-slate-400">v</span>
      </summary>
      <div
        className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1 shadow-lg"
        role="listbox"
      >
        {Object.entries(languages).map(([code, language]) => (
          <button
            key={code}
            type="button"
            onClick={() => chooseLanguage(code)}
            className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-bold transition ${
              code === lang
                ? "bg-teal-700 text-white"
                : "text-slate-700 hover:bg-slate-100"
            }`}
            dir={language.dir}
            role="option"
            aria-selected={code === lang}
          >
            <span>{language.label}</span>
            <span className="text-xs uppercase text-slate-400">{code}</span>
          </button>
        ))}
      </div>
    </details>
  );
}
