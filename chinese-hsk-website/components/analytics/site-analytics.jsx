"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPageViewTracker } from "@/lib/analytics/page-view-tracker";

export default function SiteAnalytics() {
  const pathname = usePathname();
  const trackerRef = useRef(null);

  if (trackerRef.current === null) {
    trackerRef.current = createPageViewTracker({
      send: sendEvent,
      getMetrics: getNavigationMetrics,
    });
  }

  useEffect(() => {
    return trackerRef.current(pathname, document.referrer);
  }, [pathname]);

  return null;
}

function getNavigationMetrics() {
  const navigation = performance.getEntriesByType("navigation")[0];
  if (!navigation) return {};
  return {
    loadMs: navigation.loadEventEnd,
    domReadyMs: navigation.domContentLoadedEventEnd,
  };
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
