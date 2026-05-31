import { getSessionUserId } from "@/lib/auth/session";
import { getMongoDatabase } from "@/lib/db/mongodb";

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
    const db = await getMongoDatabase();
    await db.command({ ping: 1 });
    return Response.json({ ok: true, database: db.databaseName });
  } catch {
    return Response.json(
      { ok: false, error: "MongoDB is not reachable right now." },
      { status: 503 },
    );
  }
}
