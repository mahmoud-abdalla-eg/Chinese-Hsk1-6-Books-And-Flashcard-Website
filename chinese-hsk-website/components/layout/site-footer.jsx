"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language/language-provider";

export default function SiteFooter() {
  const { tr } = useLanguage();
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white text-slate-700">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
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
            <Link href="/hsk/1">HSK 1</Link>
            <Link href="/flashcards">{tr("flashcards")}</Link>
            <Link href="/conversations">{tr("conversations")}</Link>
            <Link href="/grammar">{tr("grammar")}</Link>
          </div>
        </div>
        <div>
          <h3 className="font-black uppercase tracking-[0.18em] text-teal-700">
            {tr("progress")}
          </h3>
          <div className="mt-4 grid gap-3 text-sm font-bold text-slate-600">
            <Link href="/dashboard">{tr("dashboard")}</Link>
            <span>{tr("savedProgress")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
