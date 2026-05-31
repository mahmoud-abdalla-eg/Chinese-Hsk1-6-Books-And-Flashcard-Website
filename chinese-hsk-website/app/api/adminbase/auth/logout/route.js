import { clearAdminSession } from "@/lib/auth/admin-session";

export const dynamic = "force-dynamic";

export async function POST(request) {
  await clearAdminSession();
  return Response.redirect(new URL("/adminbase/login", request.url), 303);
}
