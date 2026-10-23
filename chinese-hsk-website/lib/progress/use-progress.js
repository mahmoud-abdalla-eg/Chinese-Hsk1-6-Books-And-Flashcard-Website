"use client";

import { useCallback, useEffect, useState } from "react";
import { useAuth } from "@/components/auth/auth-provider";
import {
  defaultProgress,
  mergeProgress,
  progressKey,
  sanitizeProgress,
} from "@/lib/progress/storage";

export function usePersistentProgress() {
  const { user, loading: authLoading } = useAuth();
  const [progress, setProgress] = useState(defaultProgress());
  const [syncStatus, setSyncStatus] = useState("loading");
  const [storageKey, setStorageKey] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadProgress() {
      if (authLoading) return;

      if (!user) {
        // Guest mode: local storage only, no remote cloud sync
        const key = "mandarin-flow-guest-session";
        if (cancelled) return;
        setStorageKey(key);
        const local = loadLocalProgress(key);
        setProgress(local);
        setSyncStatus("guest");
        return;
      }

      // Logged in user: load from local cache + remote Supabase
      const key = accountProgressKey(user.id);
      const local = loadLocalProgress(key);
      if (cancelled) return;
      setStorageKey(key);
      setProgress(local);

      try {
        const response = await fetch("/api/progress", {
          cache: "no-store",
        });
        if (!response.ok) {
          if (!cancelled) setSyncStatus("local");
          return;
        }
        const data = await response.json();
        const merged = mergeProgress(local, data.progress);
        if (cancelled) return;
        saveLocalProgress(key, merged);
        setProgress(merged);
        setSyncStatus("synced");
        if (JSON.stringify(merged) !== JSON.stringify(data.progress)) {
          await saveRemoteProgress(user.id, merged);
        }
      } catch {
        if (!cancelled) setSyncStatus("local");
      }
    }

    loadProgress();
    return () => {
      cancelled = true;
    };
  }, [user, authLoading]);

  const saveProgress = useCallback(
    (nextProgress) => {
      const activeKey =
        storageKey ||
        (user ? accountProgressKey(user.id) : "mandarin-flow-guest-session");

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
        if (user) {
          setSyncStatus("syncing");
          saveRemoteProgress(user.id, withDate)
            .then((synced) => setSyncStatus(synced ? "synced" : "local"))
            .catch(() => setSyncStatus("local"));
        } else {
          setSyncStatus("guest");
        }
        return withDate;
      });
    },
    [user, storageKey],
  );

  return {
    progress,
    saveProgress,
    syncStatus,
    userId: user?.id || null,
    isGuest: !user,
  };
}

function loadLocalProgress(key) {
  try {
    const saved = window.localStorage.getItem(key);
    return saved ? sanitizeProgress(JSON.parse(saved)) : defaultProgress();
  } catch {
    return defaultProgress();
  }
}

function saveLocalProgress(key, progress) {
  try {
    window.localStorage.setItem(key, JSON.stringify(progress));
  } catch {}
}

function accountProgressKey(userId) {
  return `${progressKey}:account:${userId}`;
}

async function saveRemoteProgress(userId, progress) {
  if (!userId) return false;
  const response = await fetch("/api/progress", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ progress }),
  });
  if (!response.ok) return false;
  await response.json();
  return true;
}
