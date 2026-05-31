import { ObjectId } from "mongodb";
import { upsertCourseSetting } from "@/lib/admin/course-settings";
import { getAdminUser } from "@/lib/auth/admin";
import { getMongoDatabase } from "@/lib/db/mongodb";

export const dynamic = "force-dynamic";

export async function PUT(request) {
  const admin = await getAdminUser();
  if (!admin) return Response.json({ error: "Admin only" }, { status: 401 });
  try {
    return Response.json({
      setting: await upsertCourseSetting(await request.json()),
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(_request, { params }) {
  const admin = await getAdminUser();
  if (!admin) return Response.json({ error: "Admin only" }, { status: 401 });
  const { settingId } = await params;
  if (!ObjectId.isValid(settingId)) return Response.json({ deleted: false });
  const db = await getMongoDatabase();
  const result = await db
    .collection("course_settings")
    .deleteOne({ _id: new ObjectId(settingId) });
  return Response.json({ deleted: result.deletedCount > 0 });
}
