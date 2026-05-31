import {
  deleteManagedConversation,
  upsertManagedConversation,
} from "@/lib/admin/course-conversations";
import { getAdminUser } from "@/lib/auth/admin";

export const dynamic = "force-dynamic";

export async function PUT(request) {
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

export async function DELETE(_request, { params }) {
  const admin = await getAdminUser();
  if (!admin) return Response.json({ error: "Admin only" }, { status: 401 });
  const { conversationId } = await params;
  return Response.json({
    deleted: await deleteManagedConversation(conversationId),
  });
}
