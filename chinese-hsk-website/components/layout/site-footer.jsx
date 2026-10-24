"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language/language-provider";

export default function SiteFooter() {
  const { tr } = useLanguage();

  return (
    <footer className="mt-20 border-t border-slate-200 bg-white text-slate-700">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr] lg:px-8">
        <div>
          <div className="text-3xl font-black text-slate-950">
            {tr("appName")}
          </div>
          <p className="mt-4 max-w-md text-sm font-semibold leading-7 text-slate-600">
            {tr("footerIntro")}
          </p>
        </div>

        <div>
          <h3 className="font-black uppercase tracking-[0.18em] text-teal-700">
            {tr("study")}
          </h3>
          <div className="mt-4 grid gap-3 text-sm font-bold text-slate-600">
            <Link href="/hsk/1" className="transition hover:text-teal-700">
              HSK 1
            </Link>
            <Link href="/flashcards" className="transition hover:text-teal-700">
              {tr("flashcards")}
            </Link>
            <Link
              href="/conversations"
              className="transition hover:text-teal-700"
            >
              {tr("conversations")}
            </Link>
            <Link href="/grammar" className="transition hover:text-teal-700">
              {tr("grammar")}
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-black uppercase tracking-[0.18em] text-teal-700">
            {tr("progress")}
          </h3>
          <div className="mt-4 grid gap-3 text-sm font-bold text-slate-600">
            <Link href="/dashboard" className="transition hover:text-teal-700">
              {tr("dashboard")}
            </Link>
            <Link href="/books" className="transition hover:text-teal-700">
              {tr("navBooks")}
            </Link>
            <Link href="/contact" className="transition hover:text-teal-700">
              {tr("contactNav")}
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-black uppercase tracking-[0.18em] text-teal-700">
            {tr("supportProject")}
          </h3>
          <p className="mt-4 text-sm font-semibold leading-6 text-slate-600">
            {tr("supportDesc")}
          </p>
          <div className="mt-4">
            <Link
              href="/contact?topic=support"
              className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-xs font-black text-white shadow-sm transition hover:bg-teal-700 hover:shadow active:scale-95"
            >
              <svg
                className="h-4 w-4 fill-white text-white shrink-0"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <span>{tr("supportAction")}</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 border-t border-slate-200 py-6 text-xs font-semibold text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-1.5">
            <span>{tr("madeBy")}</span>
            <a
              href="https://github.com/mahmoud-abdalla-eg"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-slate-900 underline decoration-slate-300 underline-offset-2 transition hover:text-teal-700 hover:decoration-teal-700"
            >
              Mahmoud Abdalla
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="underline decoration-slate-300 underline-offset-2 transition hover:text-teal-700 hover:decoration-teal-700"
            >
              {tr("feedbackAndSuggestions")}
            </Link>
            <span className="hidden text-slate-300 sm:inline">•</span>
            <span>© 2026 {tr("copyrightNotice")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
