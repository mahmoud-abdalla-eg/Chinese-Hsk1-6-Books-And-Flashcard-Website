import { getSupabaseAdmin } from "@/lib/db/supabase";

export const dynamic = "force-dynamic";

export async function GET() {
  const startedAt = Date.now();

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("users").select("id").limit(1);

    const latencyMs = Date.now() - startedAt;

    if (error) {
      return Response.json(
        {
          status: "error",
          online: false,
          latencyMs,
          message: "Database service check failed.",
        },
        { status: 503 },
      );
    }

    return Response.json({
      status: "ok",
      online: true,
      latencyMs,
    });
  } catch (err) {
    const latencyMs = Date.now() - startedAt;
    const raw = err instanceof Error ? err.message : String(err || "");
    const lower = raw.toLowerCase();

    let errorCategory = "general_error";
    if (lower.includes("not configured") || lower.includes("in .env")) {
      errorCategory = "missing_configuration";
    } else if (lower.includes("fetch failed") || lower.includes("econnreset")) {
      errorCategory = "network_connection_reset";
    } else if (lower.includes("timeout") || lower.includes("timed out")) {
      errorCategory = "connection_timeout";
    } else if (lower.includes("econnrefused")) {
      errorCategory = "proxy_refused";
    }

    return Response.json(
      {
        status: "error",
        online: false,
        latencyMs,
        errorCategory,
        message: "Database service is not reachable.",
      },
      { status: 503 },
    );
  }
}
