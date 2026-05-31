import { applyImportJob } from "@/lib/admin/import-workflow";
import { getAdminUser } from "@/lib/auth/admin";

export const dynamic = "force-dynamic";

export async function POST(_request, { params }) {
  const admin = await getAdminUser();
  if (!admin) return Response.json({ error: "Admin only" }, { status: 401 });
  try {
    const { jobId } = await params;
    return Response.json({ result: await applyImportJob(jobId) });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}
