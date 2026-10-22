import { upsertCourseSetting } from "@/lib/admin/course-settings";
import { getAdminUser } from "@/lib/auth/admin";
import { getSupabaseAdmin } from "@/lib/db/supabase";

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
  if (!settingId) return Response.json({ deleted: false });

  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("course_settings")
    .delete()
    .eq("key", settingId);

  return Response.json({ deleted: !error });
}
