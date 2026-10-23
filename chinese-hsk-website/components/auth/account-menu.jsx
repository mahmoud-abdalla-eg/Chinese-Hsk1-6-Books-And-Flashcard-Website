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
        className="hidden items-center rounded-full border border-teal-200 bg-teal-50/70 px-4 py-2 text-sm font-black text-teal-900 transition hover:bg-teal-100 sm:inline-flex"
      >
        <svg
          className="mr-1.5 h-4 w-4 text-teal-700 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
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
    <div className="flex items-center gap-1.5 sm:gap-2">
      <Link
        href="/login"
        className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-black text-slate-700 hover:border-teal-400 hover:bg-slate-50 sm:px-4 sm:py-2 sm:text-sm transition"
      >
        {tr("logIn")}
      </Link>
      <Link
        href="/signup"
        className="rounded-full bg-teal-700 px-3 py-1.5 text-xs font-black text-white hover:bg-teal-800 shadow-xs sm:px-4 sm:py-2 sm:text-sm transition"
      >
        {tr("signUp")}
      </Link>
    </div>
  );
}
