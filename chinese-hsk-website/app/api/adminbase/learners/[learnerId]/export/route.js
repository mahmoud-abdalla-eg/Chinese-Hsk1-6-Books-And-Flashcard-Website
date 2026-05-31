import { getLearnerExport } from "@/lib/admin/learners";
import { getAdminUser } from "@/lib/auth/admin";

export const dynamic = "force-dynamic";

export async function GET(_request, { params }) {
  const admin = await getAdminUser();
  if (!admin) return Response.json({ error: "Admin only" }, { status: 401 });
  const { learnerId } = await params;
  try {
    const data = await getLearnerExport(learnerId);
    return Response.json(data, {
      headers: {
        "content-disposition": `attachment; filename="learner-${learnerId}.json"`,
      },
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}
