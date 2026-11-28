const PERFORMANCE_CAPTURE_DELAY_MS = 1200;

export function createPageViewTracker({
  send,
  getMetrics,
  setTimer = setTimeout,
  clearTimer = clearTimeout,
}) {
  let lastPathname = null;

  return function trackPageView(pathname, referrer) {
    if (lastPathname === pathname) return () => {};

    let sent = false;
    const sendOnce = () => {
      if (sent) return;
      sent = true;
      lastPathname = pathname;
      send({
        type: "visit",
        path: pathname,
        referrer,
        metrics: getMetrics(),
      });
    };

    const timer = setTimer(sendOnce, PERFORMANCE_CAPTURE_DELAY_MS);
    return () => {
      clearTimer(timer);
      sendOnce();
    };
  };
}
