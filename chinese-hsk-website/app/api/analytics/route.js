import { recordAnalyticsEvent } from "@/lib/admin/analytics";

export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const body = await request.json();
    const type = body.type === "performance" ? "performance" : "visit";
    await recordAnalyticsEvent({
      type,
      path: String(body.path || "/").slice(0, 300),
      referrer: String(body.referrer || "").slice(0, 500),
      userAgent: request.headers.get("user-agent") || "",
      metrics: sanitizeMetrics(body.metrics),
    });
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }
  return Response.json({ ok: true });
}

function sanitizeMetrics(metrics) {
  if (!metrics || typeof metrics !== "object") return {};
  return {
    loadMs: Math.max(0, Math.round(Number(metrics.loadMs) || 0)),
    domReadyMs: Math.max(0, Math.round(Number(metrics.domReadyMs) || 0)),
  };
}
