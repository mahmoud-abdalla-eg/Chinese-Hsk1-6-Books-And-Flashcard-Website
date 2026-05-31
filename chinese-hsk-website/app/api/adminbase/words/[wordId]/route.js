import { deleteManagedWord, upsertManagedWord } from "@/lib/admin/course-words";
import { getAdminUser } from "@/lib/auth/admin";

export const dynamic = "force-dynamic";

export async function PUT(request) {
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

export async function DELETE(_request, { params }) {
  const admin = await getAdminUser();
  if (!admin) return Response.json({ error: "Admin only" }, { status: 401 });
  const { wordId } = await params;
  const deleted = await deleteManagedWord(wordId);
  return Response.json({ deleted });
}
