"use client";

import { useState } from "react";
import { useLanguage } from "@/components/language/language-provider";
import {
  hskMaterials,
  additionalResourceCards,
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

            {/* Curriculum Reference Links */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5 text-xs font-bold text-slate-600">
              <a
                href={BAUL_CHINO_BOOKS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 transition hover:border-teal-500 hover:text-teal-800"
              >
                <svg className="h-3.5 w-3.5 text-slate-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Baúl Chino Textbooks</span>
                <span className="text-[10px] text-slate-400">↗</span>
              </a>
              <a
                href={BAUL_CHINO_AUDIOS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 transition hover:border-teal-500 hover:text-teal-800"
              >
                <svg className="h-3.5 w-3.5 text-slate-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                </svg>
                <span>Baúl Chino Audio Hub</span>
                <span className="text-[10px] text-slate-400">↗</span>
              </a>
            </div>

            {/* Level & Resource Filter Tabs (Scrollable on mobile) */}
            <div className="mt-7 w-full max-w-3xl overflow-x-auto pb-1">
              <div className="inline-flex items-center gap-1.5 rounded-2xl border border-slate-200 bg-slate-100/80 p-1.5 min-w-max">
                <button
                  type="button"
                  onClick={() => setSelectedFilter("all")}
                  className={`rounded-xl px-4 py-2 text-xs font-black transition shrink-0 ${
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
                    className={`rounded-xl px-3.5 py-2 text-xs font-black transition shrink-0 ${
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
                  className={`rounded-xl px-3.5 py-2 text-xs font-black transition shrink-0 ${
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
                  className={`rounded-xl px-3.5 py-2 text-xs font-black transition shrink-0 ${
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
      </div>

      {/* Cards Grid */}
      <div className="mx-auto mt-8 max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* 1. HSK 1 - 6 Course Level Cards */}
          {showHskCards &&
            displayedHskMaterials.map((material) => {
              const examsOpen = Boolean(expandedExams[material.level]);

              return (
                <div
                  key={`hsk-${material.level}`}
                  className="flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xs transition-all duration-200 hover:shadow-md"
                >
                  {/* Card Header (Option B: Clean, no squished circle badge) */}
                  <div className={`border-b border-slate-100 bg-gradient-to-br ${material.theme.accentBg} p-4 sm:p-5`}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h2 className="text-xl font-black text-slate-900 tracking-tight">
                            {material.name}
                          </h2>
                          <span className="text-sm font-bold text-slate-400">
                            ({material.hanzi})
                          </span>
                        </div>
                        <p className="mt-0.5 text-xs font-bold text-slate-500">
                          {getLocalizedLevelName(material)}
                        </p>
                      </div>

                      {/* Right Word Count Pill (shrink-0 whitespace-nowrap prevents clipping) */}
                      <div className="shrink-0 whitespace-nowrap rounded-full border border-slate-200/80 bg-white/95 px-3 py-1 shadow-2xs">
                        <span className="text-xs font-black text-slate-700">
                          {material.wordsCount} {language === "ar" ? "كلمة" : language === "zh" ? "核心词" : "Words"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body: 4 Core Resource Rows */}
                  <div className="flex-1 space-y-3 p-4 sm:p-5">
                    {/* 1. Main Textbook */}
                    <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3 sm:p-3.5 transition hover:bg-slate-50">
                      <div className="flex items-start gap-2.5">
                        <svg className="mt-0.5 h-5 w-5 text-slate-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-xs font-black text-slate-900 leading-snug">
                            {getLocalizedTitle(material.textbook)}
                          </h3>
                          <p className="mt-0.5 text-[11px] font-semibold text-slate-400">
                            {tr("mainTextbook")} • {material.textbook.size}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2.5 flex items-center justify-end flex-wrap gap-2">
                        <a
                          href={material.textbook.previewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-bold text-slate-700 shadow-2xs transition hover:border-slate-400 hover:text-slate-950"
                        >
                          <span>{tr("previewFile")}</span>
                          <svg className="h-3 w-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </a>
                        <a
                          href={material.textbook.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-2.5 py-1 text-[11px] font-bold text-white shadow-2xs transition hover:bg-slate-800"
                        >
                          <svg className="h-3 w-3 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                          </svg>
                          <span>{tr("downloadFile")}</span>
                        </a>
                      </div>
                    </div>

                    {/* 2. Workbook & Answers */}
                    <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3 sm:p-3.5 transition hover:bg-slate-50">
                      <div className="flex items-start gap-2.5">
                        <svg className="mt-0.5 h-5 w-5 text-slate-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-xs font-black text-slate-900 leading-snug">
                            {getLocalizedTitle(material.workbook)}
                          </h3>
                          <p className="mt-0.5 text-[11px] font-semibold text-slate-400">
                            {tr("workbook")} • {material.workbook.size}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2.5 flex items-center justify-end flex-wrap gap-2">
                        <a
                          href={material.workbook.previewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-bold text-slate-700 shadow-2xs transition hover:border-slate-400 hover:text-slate-950"
                        >
                          <span>{tr("previewFile")}</span>
                          <svg className="h-3 w-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </a>
                        <a
                          href={material.workbook.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-2.5 py-1 text-[11px] font-bold text-white shadow-2xs transition hover:bg-slate-800"
                        >
                          <svg className="h-3 w-3 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                          </svg>
                          <span>{tr("downloadFile")}</span>
                        </a>
                      </div>
                    </div>

                    {/* 3. Audio Listening Tracks */}
                    <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3 sm:p-3.5 transition hover:bg-slate-50">
                      <div className="flex items-start gap-2.5">
                        <svg className="mt-0.5 h-5 w-5 text-slate-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                        </svg>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-xs font-black text-slate-900 leading-snug">
                            {getLocalizedTitle(material.audio)}
                          </h3>
                          <p className="mt-0.5 text-[11px] font-semibold text-slate-400">
                            {tr("audioTracks")} • {material.audio.count}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2.5 flex items-center justify-end flex-wrap gap-2">
                        <a
                          href={material.audio.streamUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1 text-[11px] font-bold text-slate-700 shadow-2xs transition hover:border-slate-400 hover:text-slate-950"
                        >
                          <svg className="h-3.5 w-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                          </svg>
                          <span>{language === "ar" ? "استماع ومجلد الصوتيات" : language === "zh" ? "在线试听与音频库" : "Listen & Audio Hub"}</span>
                          <span className="text-[10px] text-slate-400">↗</span>
                        </a>
                      </div>
                    </div>

                    {/* 4. Mock Exams */}
                    <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3 sm:p-3.5 transition hover:bg-slate-50">
                      <div className="flex items-start gap-2.5">
                        <svg className="mt-0.5 h-5 w-5 text-slate-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                        </svg>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-xs font-black text-slate-900 leading-snug">
                            {getLocalizedTitle(material.mockExams)}
                          </h3>
                          <p className="mt-0.5 text-[11px] font-semibold text-slate-400">
                            {material.mockExams.count} {tr("mockExams")}
                          </p>
                        </div>
                      </div>

                      <div className="mt-2.5 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => toggleExams(material.level)}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-700 hover:text-slate-950 transition"
                        >
                          <span>{examsOpen ? "Hide" : tr("viewTests")}</span>
                          <span className="text-[10px] text-slate-400">{examsOpen ? "▲" : "▼"}</span>
                        </button>

                        <a
                          href={material.driveFolderUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-bold text-slate-700 shadow-2xs transition hover:border-slate-400 hover:text-slate-950"
                        >
                          <span>{tr("previewFile")}</span>
                          <span className="text-[10px] text-slate-400">↗</span>
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
                  <div className="border-t border-slate-100 bg-slate-50/80 p-4 sm:p-5">
                    <a
                      href={material.downloadAllUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white py-3 px-4 text-xs font-black shadow-2xs transition duration-150"
                    >
                      <svg className="h-4 w-4 shrink-0 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
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
                  className="flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xs transition-all duration-200 hover:shadow-md"
                >
                  {/* Card Header (Option B: Clean, no squished badge) */}
                  <div className={`border-b border-slate-100 bg-gradient-to-br ${card.theme.accentBg} p-4 sm:p-5`}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h2 className="text-xl font-black text-slate-900 tracking-tight">
                            {card.name}
                          </h2>
                          <span className="text-sm font-bold text-slate-400">
                            ({card.hanzi})
                          </span>
                        </div>
                        <p className="mt-0.5 text-xs font-bold text-slate-500">
                          {cardTitle}
                        </p>
                      </div>

                      {/* Right Stats Pill (shrink-0 whitespace-nowrap prevents clipping) */}
                      <div className="shrink-0 whitespace-nowrap rounded-full border border-slate-200/80 bg-white/95 px-3 py-1 shadow-2xs">
                        <span className="text-xs font-black text-slate-700">
                          {card.items.length} {language === "ar" ? "ملفات" : language === "zh" ? "份文件" : "Packages"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex-1 p-4 sm:p-5">
                    <p className="text-xs font-semibold text-slate-600 leading-relaxed">
                      {cardDesc}
                    </p>

                    <div className="mt-3.5 space-y-2">
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
                              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-bold text-slate-700 shadow-2xs transition hover:border-slate-400 hover:text-slate-950 shrink-0"
                            >
                              <span>{tr("previewFile")}</span>
                              <span className="text-[10px] text-slate-400">↗</span>
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="border-t border-slate-100 bg-slate-50/80 p-4 sm:p-5">
                    <a
                      href={card.downloadAllUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white py-3 px-4 text-xs font-black shadow-2xs transition duration-150"
                    >
                      <svg className="h-4 w-4 shrink-0 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
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
