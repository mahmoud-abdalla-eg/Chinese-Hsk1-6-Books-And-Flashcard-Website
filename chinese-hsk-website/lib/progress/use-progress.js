"use client";

import { useCallback, useEffect, useState } from "react";
import {
  defaultProgress,
  mergeProgress,
  progressKey,
  progressUserKey,
  sanitizeProgress,
} from "@/lib/progress/storage";

export function usePersistentProgress() {
  const [progress, setProgress] = useState(defaultProgress());
  const [syncStatus, setSyncStatus] = useState("loading");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const id = ensureUserId();
    setUserId(id);
    const local = loadLocalProgress();
    setProgress(local);

    let cancelled = false;
    async function loadRemoteProgress() {
      try {
        const account = await loadAccount();
        const progressUrl = account?.user
          ? "/api/progress"
          : `/api/progress?userId=${id}`;
        const response = await fetch(progressUrl, {
          cache: "no-store",
        });
        if (!response.ok) throw new Error("Progress load failed.");
        const data = await response.json();
        const merged = mergeProgress(local, data.progress);
        if (cancelled) return;
        saveLocalProgress(merged);
        setProgress(merged);
        setSyncStatus("synced");
        if (JSON.stringify(merged) !== JSON.stringify(data.progress)) {
          await saveRemoteProgress(id, merged);
        }
      } catch {
        if (!cancelled) setSyncStatus("local");
      }
    }

    loadRemoteProgress();
    return () => {
      cancelled = true;
    };
  }, []);

  const saveProgress = useCallback(
    (nextProgress) => {
      setProgress((current) => {
        const next =
          typeof nextProgress === "function"
            ? sanitizeProgress(nextProgress(current))
            : sanitizeProgress(nextProgress);
        const withDate = {
          ...next,
          lastStudiedDate: new Date().toISOString(),
        };
        saveLocalProgress(withDate);
        if (userId) {
          setSyncStatus("syncing");
          saveRemoteProgress(userId, withDate)
            .then(() => setSyncStatus("synced"))
            .catch(() => setSyncStatus("local"));
        }
        return withDate;
      });
    },
    [userId],
  );

  return { progress, saveProgress, syncStatus, userId };
}

function loadLocalProgress() {
  try {
    const saved = window.localStorage.getItem(progressKey);
    return saved ? sanitizeProgress(JSON.parse(saved)) : defaultProgress();
  } catch {
    return defaultProgress();
  }
}

function saveLocalProgress(progress) {
  window.localStorage.setItem(progressKey, JSON.stringify(progress));
}

function ensureUserId() {
  const saved = window.localStorage.getItem(progressUserKey);
  if (saved) return saved;
  const id = `mf_${crypto.randomUUID().replaceAll("-", "")}`;
  window.localStorage.setItem(progressUserKey, id);
  return id;
}

async function saveRemoteProgress(userId, progress) {
  const account = await loadAccount();
  const body = account?.user ? { progress } : { userId, progress };
  const response = await fetch("/api/progress", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!response.ok) throw new Error("Progress save failed.");
  return response.json();
}

async function loadAccount() {
  try {
    const response = await fetch("/api/auth/me", { cache: "no-store" });
    if (!response.ok) return null;
    return response.json();
  } catch {
    return null;
  }
}
