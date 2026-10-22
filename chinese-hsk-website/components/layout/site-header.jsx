"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AccountMenu from "@/components/auth/account-menu";
import { Localized } from "@/components/language/language-provider";
import LanguageSwitcher from "@/components/language/language-switcher";

const navItems = [
  { href: "/", label: "home" },
  { href: "/hsk/1", label: "vocabulary", matchPrefix: "/hsk" },
  { href: "/flashcards", label: "flashcards", matchPrefix: "/flashcards" },
  { href: "/conversations", label: "conversations", matchPrefix: "/conversations" },
  { href: "/grammar", label: "grammar", matchPrefix: "/grammar" },
  { href: "/dashboard", label: "dashboard", matchPrefix: "/dashboard" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  const isActive = (item) => {
    if (item.href === "/") return pathname === "/";
    if (item.matchPrefix) return pathname?.startsWith(item.matchPrefix);
    return pathname === item.href;
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-700 text-xl font-black text-white shadow-2xs transition group-hover:scale-105">
            <span>{"\u6C49"}</span>
          </span>
          <span>
            <span className="block text-base font-black tracking-tight text-slate-950">
              <Localized k="appName" />
            </span>
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              <Localized k="brandSubtitle" />
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
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

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <AccountMenu />
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="grid grid-cols-6 border-t border-slate-200 bg-white text-center text-xs font-black text-slate-700 md:hidden">
        {navItems.map((item) => {
          const active = isActive(item);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`px-1.5 py-2.5 transition ${
                active
                  ? "border-b-2 border-teal-700 font-black text-teal-700"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Localized k={item.label} />
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
