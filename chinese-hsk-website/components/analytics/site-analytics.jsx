"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SiteAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    sendEvent({ type: "visit", path: pathname, referrer: document.referrer });
    const timer = window.setTimeout(() => {
      const navigation = performance.getEntriesByType("navigation")[0];
      if (!navigation) return;
      sendEvent({
        type: "performance",
        path: pathname,
        metrics: {
          loadMs: navigation.loadEventEnd,
          domReadyMs: navigation.domContentLoadedEventEnd,
        },
      });
    }, 1200);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}

function sendEvent(payload) {
  const body = JSON.stringify(payload);
  if (navigator.sendBeacon) {
    navigator.sendBeacon(
      "/api/analytics",
      new Blob([body], { type: "application/json" }),
    );
    return;
  }
  fetch("/api/analytics", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {});
}
