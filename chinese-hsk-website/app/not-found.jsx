"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language/language-provider";

export default function NotFound() {
  const { tr, lang } = useLanguage();
  const isRtl = lang === "ar";

  return (
    <div
      className="flex min-h-[62vh] items-center justify-center py-10 sm:py-16 px-3 sm:px-6"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="w-full max-w-2xl text-center space-y-6 sm:space-y-8">
        {/* Cultural Hero Visual: Numeric 404 + Animated Imperial Scarlet Seal [ 迷 ] */}
        <div className="relative inline-flex items-center justify-center select-none">
          <span className="text-8xl sm:text-9xl font-black tracking-tighter text-slate-200/90 leading-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex items-center gap-2 rounded-2xl bg-[#c92a2a] px-3.5 py-1.5 sm:px-4 sm:py-2 text-white shadow-xl shadow-rose-950/20 border border-red-700/80 animate-pulse">
              <span className="text-xl sm:text-2xl font-black leading-none">迷</span>
              <span className="text-[11px] sm:text-xs uppercase tracking-widest font-black text-amber-200 leading-none">
                mí • lost
              </span>
            </div>
          </div>
        </div>

        {/* Localized Headline & Punchy Description */}
        <div className="space-y-2.5">
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950">
            {tr("notFoundTitle")}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-md sm:max-w-lg mx-auto leading-relaxed font-medium">
            {tr("notFoundDescription")}
          </p>
        </div>

        {/* Primary Recovery Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 pt-1">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-black text-white hover:bg-teal-800 shadow-xs hover:shadow-md transition shrink-0"
          >
            <svg
              className="h-4 w-4 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>{tr("returnHome")}</span>
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-black text-slate-700 hover:border-teal-500 hover:bg-slate-50 shadow-2xs transition shrink-0"
          >
            <span>{tr("openDashboard")}</span>
            <span aria-hidden="true">{isRtl ? "←" : "→"}</span>
          </Link>
        </div>

        {/* Direct HSK Quick-Jump Strip */}
        <div className="pt-6 sm:pt-8 border-t border-slate-200/80 max-w-lg mx-auto">
          <span className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-3.5">
            {tr("jumpToLevel")}
          </span>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {[1, 2, 3, 4, 5, 6].map((lvl) => (
              <Link
                key={lvl}
                href={`/hsk/${lvl}`}
                className="rounded-xl border border-slate-200 bg-white py-2 sm:py-2.5 text-center text-xs font-black text-slate-700 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-900 shadow-2xs transition active:scale-95"
              >
                HSK {lvl}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
