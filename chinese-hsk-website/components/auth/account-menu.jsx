"use client";

import Link from "next/link";
import { useAuth } from "@/components/auth/auth-provider";
import { useLanguage } from "@/components/language/language-provider";

export default function AccountMenu() {
  const { tr } = useLanguage();
  const { user, logout } = useAuth();

  return user ? (
    <div className="flex items-center gap-2">
      <Link
        href="/account"
        className="hidden rounded-full border border-teal-200 bg-teal-50/70 px-4 py-2 text-sm font-black text-teal-900 transition hover:bg-teal-100 sm:inline-flex"
      >
        <span className="mr-1.5 text-xs text-teal-600">👤</span>
        {user.name}
      </Link>
      <button
        type="button"
        onClick={logout}
        className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-black text-slate-700 hover:border-teal-400 transition"
      >
        {tr("logOut")}
      </button>
    </div>
  ) : (
    <div className="flex items-center gap-2">
      <span className="hidden rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-black text-amber-800 sm:inline-flex">
        {tr("guestMode")}
      </span>
      <Link
        href="/account"
        className="rounded-full bg-teal-700 px-4 py-2 text-sm font-black text-white hover:bg-teal-800 shadow-xs transition"
      >
        {tr("account")}
      </Link>
    </div>
  );
}
