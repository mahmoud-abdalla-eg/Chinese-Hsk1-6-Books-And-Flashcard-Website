import {
  getSiteContentRows,
  upsertSiteContent,
} from "@/lib/admin/site-content";
import { getAdminUser } from "@/lib/auth/admin";

export const dynamic = "force-dynamic";

export async function GET() {
  const admin = await getAdminUser();
  if (!admin) return Response.json({ error: "Admin only" }, { status: 401 });
  return Response.json({ rows: await getSiteContentRows() });
}

export async function POST(request) {
  const admin = await getAdminUser();
  if (!admin) return Response.json({ error: "Admin only" }, { status: 401 });
  try {
    return Response.json({
      row: await upsertSiteContent(await request.json()),
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}
