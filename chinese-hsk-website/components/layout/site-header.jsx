"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AccountMenu from "@/components/auth/account-menu";
import { Localized } from "@/components/language/language-provider";
import LanguageSwitcher from "@/components/language/language-switcher";

const navItems = [
  { href: "/", label: "home" },
  { href: "/hsk/1", label: "vocabulary", matchPrefix: "/hsk" },
  { href: "/flashcards", label: "flashcards", matchPrefix: "/flashcards" },
  {
    href: "/conversations",
    label: "conversations",
    matchPrefix: "/conversations",
  },
  { href: "/grammar", label: "grammar", matchPrefix: "/grammar" },
  { href: "/dashboard", label: "dashboard", matchPrefix: "/dashboard" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isActive = (item) => {
    if (item.href === "/") return pathname === "/";
    if (item.matchPrefix) return pathname?.startsWith(item.matchPrefix);
    return pathname === item.href;
  };

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  // Lock body scroll and listen for Escape key when drawer is open
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
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-teal-400 hover:bg-slate-100 hover:text-slate-950 md:hidden shrink-0"
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

          {/* Logo & Brand Title */}
          <Link href="/" className="group flex items-center gap-2.5 sm:gap-3">
            <span className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl bg-teal-700 text-lg sm:text-xl font-black text-white shadow-2xs transition group-hover:scale-105 shrink-0">
              <span>{"\u6C49"}</span>
            </span>
            <span className="min-w-0">
              <span className="block text-sm sm:text-base font-black tracking-tight text-slate-950 truncate">
                <Localized k="appName" />
              </span>
              <span className="hidden sm:block text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                <Localized k="brandSubtitle" />
              </span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Bar */}
        <nav className="hidden items-center rounded-full border border-slate-200 bg-slate-50 p-1 text-sm font-black text-slate-700 md:flex">
          {navItems.map((item) => {
            const active = isActive(item);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-1.5 transition ${
                  active
                    ? "bg-teal-700 text-white shadow-2xs"
                    : "text-slate-700 hover:text-teal-700"
                }`}
              >
                <Localized k={item.label} />
              </Link>
            );
          })}
        </nav>

        {/* Top Right Language & Auth Controls */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <LanguageSwitcher />
          <AccountMenu />
        </div>
      </div>

      {/* Mobile Slide-Out Drawer & Backdrop */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden"
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
          <div className="fixed inset-y-0 start-0 z-50 flex w-full max-w-[280px] sm:max-w-xs flex-col bg-white p-5 shadow-2xl transition-transform duration-300 ease-out">
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <Link
                href="/"
                onClick={() => setDrawerOpen(false)}
                className="flex items-center gap-2.5"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-700 text-lg font-black text-white shadow-2xs">
                  <span>{"\u6C49"}</span>
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
            <nav className="mt-5 flex-1 space-y-1.5 overflow-y-auto">
              {navItems.map((item) => {
                const active = isActive(item);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setDrawerOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-black transition ${
                      active
                        ? "bg-teal-700 text-white shadow-xs"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                    }`}
                  >
                    <span>
                      <Localized k={item.label} />
                    </span>
                    <span
                      className={`text-xs ${active ? "text-teal-200" : "text-slate-400"}`}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                );
              })}

              {/* Quick HSK Levels Navigation */}
              <div className="mt-6 border-t border-slate-100 pt-4">
                <span className="block px-1 text-xs font-black uppercase tracking-[0.16em] text-slate-400">
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
