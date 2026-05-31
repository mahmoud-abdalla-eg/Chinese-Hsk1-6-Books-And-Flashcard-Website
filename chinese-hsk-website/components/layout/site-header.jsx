import Link from "next/link";
import AccountMenu from "@/components/auth/account-menu";
import { Localized } from "@/components/language/language-provider";
import LanguageSwitcher from "@/components/language/language-switcher";

const navItems = [
  { href: "/", label: "home" },
  { href: "/flashcards", label: "flashcards" },
  { href: "/conversations", label: "conversations" },
  { href: "/grammar", label: "grammar" },
  { href: "/dashboard", label: "dashboard" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-teal-700 text-xl font-black text-white">
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
        <nav className="hidden items-center rounded-full border border-slate-200 bg-slate-50 p-1 text-sm font-black text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 transition hover:bg-teal-700 hover:text-white"
            >
              <Localized k={item.label} />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <AccountMenu />
        </div>
      </div>
      <nav className="grid grid-cols-5 border-t border-slate-200 bg-white text-center text-xs font-black text-slate-700 md:hidden">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="px-2 py-3">
            <Localized k={item.label} />
          </Link>
        ))}
      </nav>
    </header>
  );
}
