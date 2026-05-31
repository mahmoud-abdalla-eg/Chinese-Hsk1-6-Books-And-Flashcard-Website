import { createAdminSession } from "@/lib/auth/admin-session";
import { authenticateAdmin } from "@/lib/auth/admins";

export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const form = await request.formData();
    const admin = await authenticateAdmin({
      email: form.get("email"),
      password: form.get("password"),
    });
    await createAdminSession(admin.id);
    return Response.redirect(new URL("/adminbase", request.url), 303);
  } catch {
    return Response.redirect(
      new URL("/adminbase/login?error=Invalid%20admin%20login.", request.url),
      303,
    );
  }
}
