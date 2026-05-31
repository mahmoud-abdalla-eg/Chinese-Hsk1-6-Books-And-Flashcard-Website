import {
  getManagedConversationsForLevel,
  upsertManagedConversation,
} from "@/lib/admin/course-conversations";
import { getAdminUser } from "@/lib/auth/admin";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const admin = await getAdminUser();
  if (!admin) return Response.json({ error: "Admin only" }, { status: 401 });
  const level = Number(new URL(request.url).searchParams.get("level") || 1);
  return Response.json({
    conversations: await getManagedConversationsForLevel(level),
  });
}

export async function POST(request) {
  const admin = await getAdminUser();
  if (!admin) return Response.json({ error: "Admin only" }, { status: 401 });
  try {
    return Response.json({
      conversation: await upsertManagedConversation(await request.json()),
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}
