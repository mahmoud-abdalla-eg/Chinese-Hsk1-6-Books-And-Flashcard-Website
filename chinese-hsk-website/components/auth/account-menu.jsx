"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/components/auth/auth-provider";
import { useLanguage } from "@/components/language/language-provider";

export default function AccountMenu() {
  const { tr } = useLanguage();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  if (!user) {
    return (
      <div className="flex items-center gap-1 sm:gap-2">
        <Link
          href="/login"
          className="rounded-full border border-slate-200 bg-white px-2 py-1 text-xs font-black text-slate-700 hover:border-teal-400 hover:bg-slate-50 sm:px-4 sm:py-2 sm:text-sm transition shrink-0"
        >
          {tr("logIn")}
        </Link>
        <Link
          href="/signup"
          className="hidden sm:inline-flex rounded-full bg-teal-700 px-3 py-1.5 text-xs font-black text-white hover:bg-teal-800 shadow-xs sm:px-4 sm:py-2 sm:text-sm transition shrink-0"
        >
          {tr("signUp")}
        </Link>
      </div>
    );
  }

  const initial = (user.name || "U").charAt(0).toUpperCase();

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setMenuOpen((prev) => !prev)}
        className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-teal-200 bg-teal-50/70 px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm font-black text-teal-950 transition hover:bg-teal-100 hover:border-teal-300 focus:outline-hidden focus:ring-2 focus:ring-teal-500/20"
        aria-expanded={menuOpen}
        aria-haspopup="menu"
        aria-label="User account menu"
      >
        <span className="grid h-6 w-6 place-items-center rounded-full bg-teal-700 text-[11px] font-black text-white shrink-0">
          {initial}
        </span>
        <span className="max-w-[65px] xs:max-w-[90px] sm:max-w-[120px] truncate text-slate-900">
          {user.name}
        </span>
        <svg
          className={`h-3.5 w-3.5 text-teal-700 transition-transform duration-200 ${
            menuOpen ? "rotate-180" : ""
          }`}
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

      {menuOpen && (
        <div
          role="menu"
          aria-label="Account options"
          className="absolute end-0 top-full mt-2 w-60 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl z-50 transition-all duration-150"
        >
          {/* User info banner */}
          <div className="px-3 py-2.5">
            <p className="text-sm font-black text-slate-950 truncate">
              {user.name}
            </p>
            {user.email ? (
              <p className="text-xs font-semibold text-slate-500 truncate mt-0.5">
                {user.email}
              </p>
            ) : null}
          </div>

          <div className="border-t border-slate-100 my-1" />

          {/* Links */}
          <Link
            href="/dashboard"
            onClick={() => setMenuOpen(false)}
            role="menuitem"
            className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs sm:text-sm font-bold text-slate-700 transition hover:bg-slate-50 hover:text-teal-700"
          >
            <svg
              className="h-4 w-4 text-slate-500 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <span>{tr("dashboard")}</span>
          </Link>

          <Link
            href="/account"
            onClick={() => setMenuOpen(false)}
            role="menuitem"
            className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs sm:text-sm font-bold text-slate-700 transition hover:bg-slate-50 hover:text-teal-700"
          >
            <svg
              className="h-4 w-4 text-slate-500 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{tr("accountSettings")}</span>
          </Link>

          <div className="border-t border-slate-100 my-1" />

          {/* Log out */}
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              logout();
            }}
            role="menuitem"
            className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs sm:text-sm font-bold text-rose-700 transition hover:bg-rose-50"
          >
            <svg
              className="h-4 w-4 text-rose-600 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span>{tr("logOut")}</span>
          </button>
        </div>
      )}
    </div>
  );
}
