import { resetLearnerProgress } from "@/lib/admin/learners";
import { getAdminUser } from "@/lib/auth/admin";

export const dynamic = "force-dynamic";

export async function POST(_request, { params }) {
  const admin = await getAdminUser();
  if (!admin) return Response.json({ error: "Admin only" }, { status: 401 });
  const { learnerId } = await params;
  try {
    return Response.json({ reset: await resetLearnerProgress(learnerId) });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}
