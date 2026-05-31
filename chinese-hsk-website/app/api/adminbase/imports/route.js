import { getImportQueue, upsertImportJob } from "@/lib/admin/import-workflow";
import { getAdminUser } from "@/lib/auth/admin";

export const dynamic = "force-dynamic";

export async function GET() {
  const admin = await getAdminUser();
  if (!admin) return Response.json({ error: "Admin only" }, { status: 401 });
  return Response.json({ jobs: await getImportQueue() });
}

export async function POST(request) {
  const admin = await getAdminUser();
  if (!admin) return Response.json({ error: "Admin only" }, { status: 401 });
  try {
    return Response.json({ job: await upsertImportJob(await request.json()) });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}
