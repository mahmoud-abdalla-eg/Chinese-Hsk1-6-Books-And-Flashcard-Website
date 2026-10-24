"use client";

import { useState } from "react";
import { useLanguage } from "@/components/language/language-provider";
import {
  hskMaterials,
  additionalResourceCards,
  HSK_DRIVE_ROOT,
  BAUL_CHINO_BOOKS,
  BAUL_CHINO_AUDIOS,
} from "@/lib/data/books-data";

export default function BooksView() {
  const { tr, language } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [expandedExams, setExpandedExams] = useState({});

  const toggleExams = (level) => {
    setExpandedExams((prev) => ({
      ...prev,
      [level]: !prev[level],
    }));
  };

  const getLocalizedTitle = (item) => {
    if (!item) return "";
    if (language === "ar") return item.titleAr || item.titleEn;
    if (language === "zh") return item.titleZh || item.titleEn;
    return item.titleEn;
  };

  const getLocalizedLevelName = (material) => {
    if (language === "ar") return material.levelNameAr;
    if (language === "zh") return material.levelNameZh;
    return material.levelNameEn;
  };

  const showHskCards =
    selectedFilter === "all" ||
    (selectedFilter >= "1" && selectedFilter <= "6");

  const showAdditionalCards =
    selectedFilter === "all" ||
    selectedFilter === "words" ||
    selectedFilter === "grids";

  const displayedHskMaterials =
    selectedFilter === "all"
      ? hskMaterials
      : hskMaterials.filter((m) => m.level === Number(selectedFilter));

  const displayedAdditionalCards =
    selectedFilter === "all"
      ? additionalResourceCards
      : additionalResourceCards.filter((c) => c.filterKey === selectedFilter);

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      {/* Page Header */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-50/80 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-teal-800">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>{tr("navBooks")}</span>
            </span>

            <h1 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              {tr("booksTitle")}
            </h1>

            <p className="mt-2.5 max-w-2xl text-sm font-semibold text-slate-600 sm:text-base leading-relaxed">
              {tr("booksSubtitle")}
            </p>

            {/* Cloud Storage & Backup Links Info Banner */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-slate-500">
              <a
                href={HSK_DRIVE_ROOT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-teal-500/30 bg-teal-50 px-3 py-1.5 text-teal-900 transition hover:bg-teal-100"
              >
                <svg className="h-4 w-4 text-teal-700 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                <span>Google Drive Hub (Chinese-hsk-Flashcards)</span>
                <span className="text-[10px] text-teal-600">↗</span>
              </a>
              <a
                href={BAUL_CHINO_BOOKS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-slate-700 transition hover:border-teal-500 hover:text-teal-800"
              >
                <span>📚 Baúl Chino Textbooks</span>
                <span className="text-[10px] text-slate-400">↗</span>
              </a>
              <a
                href={BAUL_CHINO_AUDIOS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-slate-700 transition hover:border-teal-500 hover:text-teal-800"
              >
                <span>🎧 Baúl Chino Audio Hub</span>
                <span className="text-[10px] text-slate-400">↗</span>
              </a>
            </div>

            {/* Level & Resource Filter Tabs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 rounded-2xl border border-slate-200 bg-slate-100/80 p-1.5">
              <button
                type="button"
                onClick={() => setSelectedFilter("all")}
                className={`rounded-xl px-4 py-2 text-xs font-black transition ${
                  selectedFilter === "all"
                    ? "bg-white text-slate-950 shadow-xs"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                {tr("allLevels")} (8)
              </button>
              {[1, 2, 3, 4, 5, 6].map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setSelectedFilter(String(lvl))}
                  className={`rounded-xl px-3 py-2 text-xs font-black transition ${
                    selectedFilter === String(lvl)
                      ? "bg-white text-slate-950 shadow-xs"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  HSK {lvl}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setSelectedFilter("words")}
                className={`rounded-xl px-3.5 py-2 text-xs font-black transition ${
                  selectedFilter === "words"
                    ? "bg-white text-slate-950 shadow-xs"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                {tr("wordLists")}
              </button>
              <button
                type="button"
                onClick={() => setSelectedFilter("grids")}
                className={`rounded-xl px-3.5 py-2 text-xs font-black transition ${
                  selectedFilter === "grids"
                    ? "bg-white text-slate-950 shadow-xs"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                {tr("practiceGrids")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* 1. HSK 1 - 6 Course Level Cards */}
          {showHskCards &&
            displayedHskMaterials.map((material) => {
              const examsOpen = Boolean(expandedExams[material.level]);

              return (
                <div
                  key={`hsk-${material.level}`}
                  className={`flex flex-col justify-between overflow-hidden rounded-3xl border bg-white shadow-xs transition-all duration-200 hover:shadow-md ${material.theme.border}`}
                >
                  {/* Card Header */}
                  <div className={`border-b border-slate-100 bg-gradient-to-br ${material.theme.accentBg} p-5 sm:p-6`}>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className={`grid h-10 w-10 place-items-center rounded-2xl border font-black text-sm shadow-2xs ${material.theme.badge}`}>
                          {material.name}
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <h2 className="text-lg font-black text-slate-900">
                              {material.name}
                            </h2>
                            <span className="text-xs font-black text-slate-400">
                              ({material.hanzi})
                            </span>
                          </div>
                          <p className="text-xs font-bold text-slate-600">
                            {getLocalizedLevelName(material)}
                          </p>
                        </div>
                      </div>

                      {/* Word Count Badge */}
                      <div className="rounded-xl border border-slate-200 bg-white/90 px-2.5 py-1 text-end shadow-2xs">
                        <span className="block text-[10px] font-bold uppercase text-slate-400">
                          {tr("wordsCountLabel")}
                        </span>
                        <span className="block text-xs font-black text-slate-800">
                          {material.wordsCount}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body: 4 Core Resource Rows */}
                  <div className="flex-1 space-y-3.5 p-5 sm:p-6">
                    {/* 1. Main Textbook */}
                    <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-3.5 transition hover:bg-slate-50">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2.5 min-w-0">
                          <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-teal-700/10 text-teal-800 font-black text-xs">
                            PDF
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-xs font-black text-slate-900 truncate">
                              {getLocalizedTitle(material.textbook)}
                            </h3>
                            <p className="text-[11px] font-semibold text-slate-500">
                              {tr("mainTextbook")} • {material.textbook.size}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2.5 flex items-center justify-end gap-2">
                        <a
                          href={material.textbook.previewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-bold text-slate-700 shadow-2xs transition hover:border-teal-400 hover:text-teal-800"
                        >
                          {tr("previewFile")} ↗
                        </a>
                        <a
                          href={material.textbook.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg bg-slate-900 px-2.5 py-1 text-[11px] font-bold text-white shadow-2xs transition hover:bg-slate-800"
                        >
                          {tr("downloadFile")} 📥
                        </a>
                      </div>
                    </div>

                    {/* 2. Workbook & Answers */}
                    <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-3.5 transition hover:bg-slate-50">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2.5 min-w-0">
                          <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-sky-700/10 text-sky-800 font-black text-xs">
                            PDF
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-xs font-black text-slate-900 truncate">
                              {getLocalizedTitle(material.workbook)}
                            </h3>
                            <p className="text-[11px] font-semibold text-slate-500">
                              {tr("workbook")} • {material.workbook.size}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2.5 flex items-center justify-end gap-2">
                        <a
                          href={material.workbook.previewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-bold text-slate-700 shadow-2xs transition hover:border-sky-400 hover:text-sky-800"
                        >
                          {tr("previewFile")} ↗
                        </a>
                        <a
                          href={material.workbook.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg bg-slate-900 px-2.5 py-1 text-[11px] font-bold text-white shadow-2xs transition hover:bg-slate-800"
                        >
                          {tr("downloadFile")} 📥
                        </a>
                      </div>
                    </div>

                    {/* 3. Audio Listening Tracks */}
                    <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-3.5 transition hover:bg-slate-50">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2.5 min-w-0">
                          <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-amber-700/10 text-amber-800 font-black text-xs">
                            MP3
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-xs font-black text-slate-900 truncate">
                              {getLocalizedTitle(material.audio)}
                            </h3>
                            <p className="text-[11px] font-semibold text-slate-500">
                              {tr("audioTracks")} • {material.audio.count}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2.5 flex items-center justify-end gap-2">
                        <a
                          href={material.audio.streamUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg border border-amber-300/40 bg-amber-50 px-3 py-1 text-[11px] font-bold text-amber-900 shadow-2xs transition hover:bg-amber-100"
                        >
                          🎧 {language === "ar" ? "استماع ومجلد الصوتيات" : language === "zh" ? "在线试听与音频库" : "Listen & Audio Hub"} ↗
                        </a>
                      </div>
                    </div>

                    {/* 4. Mock Exams */}
                    <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-3.5 transition hover:bg-slate-50">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2.5 min-w-0">
                          <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-violet-700/10 text-violet-800 font-black text-xs">
                            TEST
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-xs font-black text-slate-900 truncate">
                              {getLocalizedTitle(material.mockExams)}
                            </h3>
                            <p className="text-[11px] font-semibold text-slate-500">
                              {material.mockExams.count} {tr("mockExams")}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-2.5 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => toggleExams(material.level)}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-violet-700 hover:text-violet-900 transition"
                        >
                          <span>{examsOpen ? "Hide" : tr("viewTests")}</span>
                          <span className="text-[10px]">{examsOpen ? "▲" : "▼"}</span>
                        </button>

                        <a
                          href={material.driveFolderUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-bold text-slate-700 shadow-2xs transition hover:border-violet-400 hover:text-violet-800"
                        >
                          {tr("previewFile")} ↗
                        </a>
                      </div>

                      {/* Expandable Mock Exams List */}
                      {examsOpen && (
                        <div className="mt-3 space-y-1.5 border-t border-slate-200/60 pt-2.5">
                          {material.mockExams.items.map((test) => (
                            <div
                              key={test.id}
                              className="flex items-center justify-between gap-2 rounded-lg bg-white px-2.5 py-1.5 text-[11px] text-slate-700 border border-slate-100"
                            >
                              <span className="truncate font-semibold">{test.label}</span>
                              <a
                                href={material.driveFolderUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-teal-700 hover:text-teal-900 font-bold shrink-0"
                              >
                                Open ↗
                              </a>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer: One-Click Download All Button */}
                  <div className="border-t border-slate-100 bg-slate-50/80 p-5 sm:p-6">
                    <a
                      href={material.downloadAllUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex w-full items-center justify-center gap-2 rounded-2xl py-3 px-4 text-xs font-black shadow-2xs transition duration-150 ${material.theme.button}`}
                    >
                      <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      <span>
                        {tr("downloadAll")} ({material.name})
                      </span>
                    </a>
                  </div>
                </div>
              );
            })}

          {/* 2. Additional Dedicated Resource Cards (Hsk Words & Writing Grids) */}
          {showAdditionalCards &&
            displayedAdditionalCards.map((card) => {
              const cardTitle =
                language === "ar"
                  ? card.titleAr
                  : language === "zh"
                  ? card.titleZh
                  : card.titleEn;

              const cardDesc =
                language === "ar"
                  ? card.descAr
                  : language === "zh"
                  ? card.descZh
                  : card.descEn;

              return (
                <div
                  key={card.id}
                  className={`flex flex-col justify-between overflow-hidden rounded-3xl border bg-white shadow-xs transition-all duration-200 hover:shadow-md ${card.theme.border}`}
                >
                  {/* Card Header */}
                  <div className={`border-b border-slate-100 bg-gradient-to-br ${card.theme.accentBg} p-5 sm:p-6`}>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className={`grid h-10 px-2.5 place-items-center rounded-2xl border font-black text-xs shadow-2xs ${card.theme.badge}`}>
                          {card.shortBadge}
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <h2 className="text-base font-black text-slate-900 truncate">
                              {card.name}
                            </h2>
                            <span className="text-xs font-black text-slate-400">
                              ({card.hanzi})
                            </span>
                          </div>
                          <p className="text-xs font-bold text-slate-600 truncate">
                            {cardTitle}
                          </p>
                        </div>
                      </div>

                      <div className="rounded-xl border border-slate-200 bg-white/90 px-2.5 py-1 text-end shadow-2xs">
                        <span className="block text-[10px] font-bold uppercase text-slate-400">
                          Files
                        </span>
                        <span className="block text-xs font-black text-slate-800">
                          {card.items.length} Packages
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex-1 p-5 sm:p-6">
                    <p className="text-xs font-semibold text-slate-600 leading-relaxed">
                      {cardDesc}
                    </p>

                    <div className="mt-4 space-y-2">
                      {card.items.map((item) => {
                        const itemLabel =
                          language === "ar"
                            ? item.labelAr || item.labelEn
                            : language === "zh"
                            ? item.labelZh || item.labelEn
                            : item.labelEn;

                        return (
                          <div
                            key={item.id}
                            className="flex items-center justify-between gap-2 rounded-xl border border-slate-100 bg-slate-50/70 p-2.5 text-xs transition hover:bg-slate-50"
                          >
                            <div className="min-w-0 flex-1">
                              <p className="font-bold text-slate-800 truncate">
                                {itemLabel}
                              </p>
                              <p className="text-[10px] font-semibold text-slate-400">
                                {item.size} • PDF
                              </p>
                            </div>

                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-bold text-slate-700 shadow-2xs transition hover:border-teal-400 hover:text-teal-800 shrink-0"
                            >
                              {tr("previewFile")} ↗
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="border-t border-slate-100 bg-slate-50/80 p-5 sm:p-6">
                    <a
                      href={card.downloadAllUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex w-full items-center justify-center gap-2 rounded-2xl py-3 px-4 text-xs font-black shadow-2xs transition duration-150 ${card.theme.button}`}
                    >
                      <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      <span>
                        {tr("downloadAll")} ({card.name})
                      </span>
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
