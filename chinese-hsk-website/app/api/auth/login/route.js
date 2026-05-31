import { createSession } from "@/lib/auth/session";
import { authenticateUser } from "@/lib/auth/users";

export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const { body, wantsHtml } = await readAuthBody(request);
    const user = await authenticateUser(body);
    await createSession(user.id);
    if (wantsHtml) {
      return Response.redirect(new URL("/dashboard", request.url), 303);
    }
    return Response.json({ user });
  } catch {
    if (isFormPost(request)) {
      return Response.redirect(
        new URL("/account?error=Invalid%20email%20or%20password.", request.url),
        303,
      );
    }
    return Response.json(
      { error: "Invalid email or password." },
      { status: 401 },
    );
  }
}

async function readAuthBody(request) {
  if (isFormPost(request)) {
    const form = await request.formData();
    return {
      wantsHtml: true,
      body: {
        email: form.get("email"),
        password: form.get("password"),
      },
    };
  }
  return { wantsHtml: false, body: await request.json() };
}

function isFormPost(request) {
  return request.headers
    .get("content-type")
    ?.includes("application/x-www-form-urlencoded");
}
