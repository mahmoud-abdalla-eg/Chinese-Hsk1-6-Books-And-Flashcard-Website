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
  const [storageKey, setStorageKey] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function loadRemoteProgress() {
      try {
        const account = await loadAccount();
        const key = account?.user
          ? accountProgressKey(account.user.id)
          : anonymousProgressKey();
        const local = loadLocalProgress(key, !account?.user);
        if (cancelled) return;
        setStorageKey(key);
        setProgress(local);

        if (!account?.user) {
          setSyncStatus("local");
          return;
        }
        const response = await fetch("/api/progress", {
          cache: "no-store",
        });
        if (!response.ok) throw new Error("Progress load failed.");
        const data = await response.json();
        const merged = mergeProgress(local, data.progress);
        if (cancelled) return;
        saveLocalProgress(key, merged);
        setProgress(merged);
        setSyncStatus("synced");
        if (JSON.stringify(merged) !== JSON.stringify(data.progress)) {
          await saveRemoteProgress(merged);
        }
      } catch {
        if (!cancelled) {
          const key = anonymousProgressKey();
          setStorageKey(key);
          setProgress(loadLocalProgress(key, true));
          setSyncStatus("local");
        }
      }
    }

    loadRemoteProgress();
    return () => {
      cancelled = true;
    };
  }, []);

  const saveProgress = useCallback(
    (nextProgress) => {
      const activeKey = storageKey || anonymousProgressKey();
      if (!storageKey) setStorageKey(activeKey);
      setProgress((current) => {
        const next =
          typeof nextProgress === "function"
            ? sanitizeProgress(nextProgress(current))
            : sanitizeProgress(nextProgress);
        const withDate = {
          ...next,
          lastStudiedDate: new Date().toISOString(),
        };
        saveLocalProgress(activeKey, withDate);
        if (storageKey) {
          setSyncStatus("syncing");
          saveRemoteProgress(withDate)
            .then((synced) => setSyncStatus(synced ? "synced" : "local"))
            .catch(() => setSyncStatus("local"));
        }
        return withDate;
      });
    },
    [storageKey],
  );

  return { progress, saveProgress, syncStatus, userId: storageKey };
}

function loadLocalProgress(key, includeLegacy = false) {
  try {
    const saved =
      window.localStorage.getItem(key) ||
      (includeLegacy ? window.localStorage.getItem(progressKey) : null);
    return saved ? sanitizeProgress(JSON.parse(saved)) : defaultProgress();
  } catch {
    return defaultProgress();
  }
}

function saveLocalProgress(key, progress) {
  window.localStorage.setItem(key, JSON.stringify(progress));
}

function anonymousProgressKey() {
  const saved = window.localStorage.getItem(progressUserKey);
  if (saved) return `${progressKey}:${saved}`;
  const id = `mf_${crypto.randomUUID().replaceAll("-", "")}`;
  window.localStorage.setItem(progressUserKey, id);
  return `${progressKey}:${id}`;
}

function accountProgressKey(userId) {
  return `${progressKey}:account:${userId}`;
}

async function saveRemoteProgress(progress) {
  const account = await loadAccount();
  if (!account?.user) return false;
  const response = await fetch("/api/progress", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ progress }),
  });
  if (!response.ok) throw new Error("Progress save failed.");
  await response.json();
  return true;
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
