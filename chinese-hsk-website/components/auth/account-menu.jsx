"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language/language-provider";

export default function AccountMenu() {
  const { tr } = useLanguage();
  const [user, setUser] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/auth/me", { cache: "no-store" })
      .then((response) => response.json())
      .then((data) => {
        if (!cancelled) setUser(data.user || null);
      })
      .catch(() => {
        if (!cancelled) setUser(null);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    window.location.href = "/";
  };

  return user ? (
    <div className="flex items-center gap-2">
      <Link
        href="/account"
        className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-800 sm:inline-flex"
      >
        {user.name}
      </Link>
      <button
        type="button"
        onClick={logout}
        className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-black text-slate-700 hover:border-teal-400"
      >
        {tr("logOut")}
      </button>
    </div>
  ) : (
    <Link
      href="/account"
      className="rounded-full bg-teal-700 px-4 py-2 text-sm font-black text-white hover:bg-teal-800"
    >
      {tr("account")}
    </Link>
  );
}
