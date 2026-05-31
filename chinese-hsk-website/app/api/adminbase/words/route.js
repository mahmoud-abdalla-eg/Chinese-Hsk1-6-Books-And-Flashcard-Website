import {
  getManagedWordsForAdmin,
  upsertManagedWord,
} from "@/lib/admin/course-words";
import { getAdminUser } from "@/lib/auth/admin";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const admin = await getAdminUser();
  if (!admin) return Response.json({ error: "Admin only" }, { status: 401 });
  const { searchParams } = new URL(request.url);
  const level = Number(searchParams.get("level") || 1);
  const words = await getManagedWordsForAdmin(level);
  return Response.json({ words });
}

export async function POST(request) {
  const admin = await getAdminUser();
  if (!admin) return Response.json({ error: "Admin only" }, { status: 401 });
  try {
    const word = await upsertManagedWord(await request.json());
    return Response.json({ word });
  } catch (error) {
    return Response.json(
      { error: error.message || "Could not save word." },
      { status: 400 },
    );
  }
}
