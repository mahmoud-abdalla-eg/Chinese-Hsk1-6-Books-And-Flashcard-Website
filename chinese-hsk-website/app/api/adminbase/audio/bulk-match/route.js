import { bulkMatchWordAudio } from "@/lib/admin/course-settings";
import { getAdminUser } from "@/lib/auth/admin";

export const dynamic = "force-dynamic";

export async function POST(request) {
  const admin = await getAdminUser();
  if (!admin) return Response.json({ error: "Admin only" }, { status: 401 });
  try {
    const result = await bulkMatchWordAudio(await request.json());
    return Response.json({ result });
  } catch (error) {
    return Response.json(
      { error: error.message || "Bulk audio match failed." },
      { status: 400 },
    );
  }
}
