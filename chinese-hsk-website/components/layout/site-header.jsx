"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import AccountMenu from "@/components/auth/account-menu";
import {
  Localized,
  useLanguage,
} from "@/components/language/language-provider";
import LanguageSwitcher from "@/components/language/language-switcher";

const studyModes = [
  {
    href: "/hsk/1",
    labelKey: "vocabulary",
    descKey: "vocabularyDesc",
    matchPrefix: "/hsk",
    icon: (
      <svg
        className="h-5 w-5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    href: "/flashcards",
    labelKey: "flashcards",
    descKey: "flashcardsDesc",
    matchPrefix: "/flashcards",
    icon: (
      <svg
        className="h-5 w-5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    href: "/conversations",
    labelKey: "conversations",
    descKey: "conversationsDesc",
    matchPrefix: "/conversations",
    icon: (
      <svg
        className="h-5 w-5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    href: "/grammar",
    labelKey: "grammar",
    descKey: "grammarDesc",
    matchPrefix: "/grammar",
    icon: (
      <svg
        className="h-5 w-5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const { tr } = useLanguage();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [learnDropdownOpen, setLearnDropdownOpen] = useState(false);
  const learnMenuRef = useRef(null);

  const isDashboardActive = pathname === "/dashboard";
  const isBooksActive = pathname === "/books" || pathname?.startsWith("/books");
  const isContactActive =
    pathname === "/contact" || pathname?.startsWith("/contact");
  const isLearnActive =
    pathname?.startsWith("/hsk") ||
    pathname?.startsWith("/flashcards") ||
    pathname?.startsWith("/conversations") ||
    pathname?.startsWith("/grammar");

  // Close menus on route change
  useEffect(() => {
    setDrawerOpen(false);
    setLearnDropdownOpen(false);
  }, [pathname]);

  // Click outside and Escape key handler for Learn dropdown
  useEffect(() => {
    if (!learnDropdownOpen) return;

    const handleClickOutside = (e) => {
      if (learnMenuRef.current && !learnMenuRef.current.contains(e.target)) {
        setLearnDropdownOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setLearnDropdownOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [learnDropdownOpen]);

  // Lock body scroll and listen for Escape key when mobile drawer is open
  useEffect(() => {
    if (!drawerOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [drawerOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2.5 px-3 py-3 sm:gap-4 sm:px-6 sm:py-3.5 lg:px-8">
        {/* Left: Mobile Hamburger & Brand Logo */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Mobile Hamburger Button (hidden on lg: >= 1024px) */}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-teal-400 hover:bg-slate-100 hover:text-slate-950 lg:hidden shrink-0"
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Logo & Brand Title (links to Home /) */}
          <Link href="/" className="group flex items-center gap-2.5 sm:gap-3">
            <Image
              src="/logo.png"
              alt="Mandarin Flow HSK"
              width={44}
              height={44}
              priority
              className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl shadow-xs transition group-hover:scale-105 shrink-0 object-contain"
            />
          </Link>
        </div>

        {/* Center: Streamlined Desktop Navigation Bar (visible on lg: >= 1024px) */}
        <nav className="hidden items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 p-1 text-sm font-black text-slate-700 lg:flex">
          {/* 1. Dashboard Pill */}
          <Link
            href="/dashboard"
            className={`rounded-full px-4 py-1.5 transition ${
              isDashboardActive
                ? "bg-teal-700 text-white shadow-2xs"
                : "text-slate-700 hover:text-teal-700"
            }`}
          >
            <Localized k="dashboard" />
          </Link>

          {/* 2. Learn Dropdown Pill */}
          <div ref={learnMenuRef} className="relative">
            <button
              type="button"
              onClick={() => setLearnDropdownOpen((prev) => !prev)}
              aria-expanded={learnDropdownOpen}
              aria-haspopup="menu"
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 transition ${
                isLearnActive
                  ? "bg-teal-700 text-white shadow-2xs"
                  : "text-slate-700 hover:text-teal-700"
              }`}
            >
              <span>{tr("navLearn")}</span>
              <svg
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  learnDropdownOpen ? "rotate-180" : ""
                } ${isLearnActive ? "text-teal-200" : "text-slate-400"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Learn Dropdown Card */}
            {learnDropdownOpen && (
              <div
                role="menu"
                aria-label="Learning modes"
                className="absolute start-0 top-full mt-2 w-72 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl z-50 transition-all duration-150"
              >
                {studyModes.map((mode) => {
                  const active = pathname?.startsWith(mode.matchPrefix);
                  return (
                    <Link
                      key={mode.href}
                      href={mode.href}
                      onClick={() => setLearnDropdownOpen(false)}
                      role="menuitem"
                      className={`flex items-start gap-3 rounded-xl p-2.5 transition ${
                        active
                          ? "bg-teal-50/80 text-teal-900"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                      }`}
                    >
                      <div
                        className={`mt-0.5 grid h-8 w-8 place-items-center rounded-lg ${
                          active
                            ? "bg-teal-700 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {mode.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-black tracking-tight">
                          {tr(mode.labelKey)}
                        </p>
                        <p className="mt-0.5 text-xs font-semibold text-slate-500 leading-snug">
                          {tr(mode.descKey)}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* 3. Books Pill */}
          <Link
            href="/books"
            className={`rounded-full px-4 py-1.5 transition ${
              isBooksActive
                ? "bg-teal-700 text-white shadow-2xs"
                : "text-slate-700 hover:text-teal-700"
            }`}
          >
            <span>{tr("navBooks")}</span>
          </Link>

          {/* 4. Contact Pill */}
          <Link
            href="/contact"
            className={`rounded-full px-4 py-1.5 transition ${
              isContactActive
                ? "bg-teal-700 text-white shadow-2xs"
                : "text-slate-700 hover:text-teal-700"
            }`}
          >
            <span>{tr("contactNav")}</span>
          </Link>
        </nav>

        {/* Right: Language Switcher & Unified Account Menu */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <LanguageSwitcher />
          <AccountMenu />
        </div>
      </div>

      {/* Mobile Slide-Out Drawer & Backdrop (hidden on lg: >= 1024px) */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Dimmed Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-200"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Content Panel (start-0 ensures left in LTR, right in RTL) */}
          <div className="fixed inset-y-0 start-0 z-50 flex w-full max-w-[290px] sm:max-w-xs flex-col bg-white p-5 shadow-2xl transition-transform duration-300 ease-out">
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <Link
                href="/"
                onClick={() => setDrawerOpen(false)}
                className="flex items-center gap-2.5"
              >
                <span className="relative grid h-10 w-10 place-items-center rounded-xl overflow-hidden bg-gradient-to-br from-red-500 via-red-600 to-red-800 shadow-xs shrink-0 border border-red-300/40">
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent" />
                  <span className="relative font-black text-lg text-white select-none">
                    {"\u6C49"}
                  </span>
                  <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-amber-400 ring-1 ring-white/70 shadow-xs" />
                </span>
                <span className="text-base font-black tracking-tight text-slate-950">
                  <Localized k="appName" />
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
                aria-label="Close menu"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Nav Destination Links */}
            <nav className="mt-5 flex-1 space-y-4 overflow-y-auto">
              {/* Dashboard Link */}
              <Link
                href="/dashboard"
                onClick={() => setDrawerOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-black transition ${
                  isDashboardActive
                    ? "bg-teal-700 text-white shadow-xs"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                <span>{tr("dashboard")}</span>
                <span
                  className={`text-xs ${
                    isDashboardActive ? "text-teal-200" : "text-slate-400"
                  }`}
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>

              {/* Books & Materials Link */}
              <Link
                href="/books"
                onClick={() => setDrawerOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-black transition ${
                  isBooksActive
                    ? "bg-teal-700 text-white shadow-xs"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <svg
                    className={`h-5 w-5 ${isBooksActive ? "text-white" : "text-slate-500"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <span>{tr("navBooks")}</span>
                </div>
                <span
                  className={`text-xs ${
                    isBooksActive ? "text-teal-200" : "text-slate-400"
                  }`}
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>

              {/* Contact Link */}
              <Link
                href="/contact"
                onClick={() => setDrawerOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-black transition ${
                  isContactActive
                    ? "bg-teal-700 text-white shadow-xs"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <svg
                    className={`h-5 w-5 ${isContactActive ? "text-white" : "text-slate-500"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                    />
                  </svg>
                  <span>{tr("contactNav")}</span>
                </div>
                <span
                  className={`text-xs ${
                    isContactActive ? "text-teal-200" : "text-slate-400"
                  }`}
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>

              {/* Study Modes Group */}
              <div>
                <span className="block px-2 text-[11px] font-black uppercase tracking-[0.16em] text-slate-400">
                  {tr("navLearn")}
                </span>
                <div className="mt-2 space-y-1">
                  {studyModes.map((mode) => {
                    const active = pathname?.startsWith(mode.matchPrefix);
                    return (
                      <Link
                        key={mode.href}
                        href={mode.href}
                        onClick={() => setDrawerOpen(false)}
                        className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-black transition ${
                          active
                            ? "bg-teal-50 text-teal-800"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <div
                          className={`grid h-7 w-7 place-items-center rounded-lg ${
                            active
                              ? "bg-teal-700 text-white"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {mode.icon}
                        </div>
                        <span>{tr(mode.labelKey)}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Quick HSK Levels Navigation */}
              <div className="border-t border-slate-100 pt-4">
                <span className="block px-2 text-[11px] font-black uppercase tracking-[0.16em] text-slate-400">
                  HSK Levels
                </span>
                <div className="mt-2.5 grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((lvl) => (
                    <Link
                      key={lvl}
                      href={`/hsk/${lvl}`}
                      onClick={() => setDrawerOpen(false)}
                      className={`rounded-xl border py-2 text-center text-xs font-black transition ${
                        pathname === `/hsk/${lvl}`
                          ? "border-teal-700 bg-teal-50 text-teal-800"
                          : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-white"
                      }`}
                    >
                      HSK {lvl}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
