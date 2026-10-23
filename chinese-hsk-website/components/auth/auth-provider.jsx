"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const AUTH_CACHE_KEY = "mandarin_flow_user_cache";
const GUEST_DISMISSED_KEY = "mandarin_flow_guest_dismissed";

const AuthContext = createContext({
  user: null,
  isLoggedIn: false,
  isGuest: true,
  loading: true,
  login: () => {},
  logout: async () => {},
  refreshUser: async () => {},
  loginPromptState: null,
  requestAuthAction: () => true,
  closeLoginPrompt: () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loginPromptState, setLoginPromptState] = useState(null);

  // 1. Initial hydration: read from localStorage cache immediately
  useEffect(() => {
    try {
      const cached = window.localStorage.getItem(AUTH_CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed?.id) {
          setUser(parsed);
          setLoading(false);
        }
      }
    } catch {
      // Ignore cache parse error
    }

    // 2. Background revalidation with /api/auth/me
    let cancelled = false;
    async function revalidate() {
      try {
        const res = await fetch("/api/auth/me", { cache: "no-store" });
        if (cancelled) return;
        if (res.ok) {
          const data = await res.json();
          if (data?.user) {
            setUser(data.user);
            try {
              window.localStorage.setItem(
                AUTH_CACHE_KEY,
                JSON.stringify(data.user),
              );
            } catch {}
          } else {
            // Session expired or logged out
            setUser(null);
            try {
              window.localStorage.removeItem(AUTH_CACHE_KEY);
            } catch {}
          }
        } else {
          setUser(null);
          try {
            window.localStorage.removeItem(AUTH_CACHE_KEY);
          } catch {}
        }
      } catch {
        // Network offline: retain cached user if present
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    revalidate();
    return () => {
      cancelled = true;
    };
  }, []);

  const login = useCallback((userData) => {
    setUser(userData);
    try {
      window.localStorage.setItem(AUTH_CACHE_KEY, JSON.stringify(userData));
    } catch {}
  }, []);

  const logout = useCallback(async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch {}
    setUser(null);
    try {
      window.localStorage.removeItem(AUTH_CACHE_KEY);
      window.sessionStorage.removeItem(GUEST_DISMISSED_KEY);
    } catch {}
    window.location.href = "/";
  }, []);

  const refreshUser = useCallback(async () => {
    try {
      const res = await fetch("/api/auth/me", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        if (data?.user) {
          setUser(data.user);
          window.localStorage.setItem(
            AUTH_CACHE_KEY,
            JSON.stringify(data.user),
          );
          return data.user;
        }
      }
      setUser(null);
      window.localStorage.removeItem(AUTH_CACHE_KEY);
      return null;
    } catch {
      return null;
    }
  }, []);

  const requestAuthAction = useCallback(
    ({ title, description, onContinue }) => {
      if (user) {
        // Authenticated: allow action directly
        onContinue?.(true);
        return true;
      }

      // Check if session has dismissed prompts
      const isDismissed =
        typeof window !== "undefined" &&
        window.sessionStorage.getItem(GUEST_DISMISSED_KEY) === "true";

      if (isDismissed) {
        // User chose "Don't ask again this session", allow guest continuation without persisting
        onContinue?.(false);
        return false;
      }

      // Show prompt modal
      setLoginPromptState({
        isOpen: true,
        title: title || "",
        description: description || "",
        onContinue: onContinue || (() => {}),
      });
      return false;
    },
    [user],
  );

  const closeLoginPrompt = useCallback(
    (continueAsGuest = true, rememberChoice = false) => {
      if (rememberChoice && typeof window !== "undefined") {
        try {
          window.sessionStorage.setItem(GUEST_DISMISSED_KEY, "true");
        } catch {}
      }
      const cb = loginPromptState?.onContinue;
      setLoginPromptState(null);
      if (continueAsGuest && cb) {
        cb(false);
      }
    },
    [loginPromptState],
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: Boolean(user),
        isGuest: !user && !loading,
        loading,
        login,
        logout,
        refreshUser,
        loginPromptState,
        requestAuthAction,
        closeLoginPrompt,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
