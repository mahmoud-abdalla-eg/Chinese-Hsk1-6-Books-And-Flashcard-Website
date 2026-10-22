import { getSessionUserId } from "@/lib/auth/session";
import { getSupabaseAdmin } from "@/lib/db/supabase";

export const dynamic = "force-dynamic";

export async function GET() {
  const userId = await getSessionUserId();
  if (!userId) {
    return Response.json(
      { ok: false, error: "Login required." },
      { status: 401 },
    );
  }
  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("site_content").select("key").limit(1);
    if (error && error.code !== "PGRST116" && error.code !== "PGRST205") {
      throw error;
    }
    return Response.json({ ok: true, database: "Supabase" });
  } catch {
    return Response.json(
      { ok: false, error: "Database is not reachable right now." },
      { status: 503 },
    );
  }
}
