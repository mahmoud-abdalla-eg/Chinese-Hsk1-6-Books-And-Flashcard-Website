"use client";

import { useEffect, useRef } from "react";
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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        detailsRef.current &&
        detailsRef.current.open &&
        !detailsRef.current.contains(e.target)
      ) {
        detailsRef.current.open = false;
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && detailsRef.current && detailsRef.current.open) {
        detailsRef.current.open = false;
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <details ref={detailsRef} className="group relative">
      <summary
        className="inline-flex cursor-pointer list-none items-center gap-1 sm:gap-2 rounded-full border border-slate-200 bg-white px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm font-black text-slate-800 shadow-2xs transition marker:hidden hover:border-teal-400 hover:bg-slate-50 focus:outline-hidden [&::-webkit-details-marker]:hidden"
        aria-label="Select language"
      >
        <svg
          className="h-4 w-4 text-slate-500 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
        <span className="uppercase text-xs sm:text-sm font-black text-slate-800">
          {lang}
        </span>
        <svg
          className="h-3 w-3 text-slate-400 transition-transform duration-200 group-open:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div
        className="absolute end-0 z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl"
        role="listbox"
      >
        {Object.entries(languages).map(([code, language]) => (
          <button
            key={code}
            type="button"
            onClick={() => chooseLanguage(code)}
            className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-bold transition ${
              code === lang
                ? "bg-teal-700 text-white shadow-2xs"
                : "text-slate-700 hover:bg-slate-100"
            }`}
            dir={language.dir}
            role="option"
            aria-selected={code === lang}
          >
            <span>{language.label}</span>
            <span
              className={`text-xs uppercase font-bold ${
                code === lang ? "text-teal-100" : "text-slate-400"
              }`}
            >
              {code}
            </span>
          </button>
        ))}
      </div>
    </details>
  );
}
