import { createSession } from "@/lib/auth/session";
import { createUser } from "@/lib/auth/users";

export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const { body, wantsHtml } = await readAuthBody(request);
    const user = await createUser(body);
    await createSession(user.id);
    if (wantsHtml) {
      return Response.redirect(new URL("/dashboard", request.url), 303);
    }
    return Response.json({ user });
  } catch (error) {
    if (isFormPost(request)) {
      const message =
        error instanceof Error ? error.message : "Could not register.";
      return Response.redirect(
        new URL(`/account?error=${encodeURIComponent(message)}`, request.url),
        303,
      );
    }
    return Response.json(
      { error: error instanceof Error ? error.message : "Could not register." },
      { status: 400 },
    );
  }
}

async function readAuthBody(request) {
  if (isFormPost(request)) {
    const form = await request.formData();
    return {
      wantsHtml: true,
      body: {
        name: form.get("name"),
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
