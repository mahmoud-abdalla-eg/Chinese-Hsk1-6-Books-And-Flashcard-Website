import { createSession } from "@/lib/auth/session";
import { authenticateUser } from "@/lib/auth/users";

export const dynamic = "force-dynamic";

export async function POST(request) {
  const url = new URL(request.url);
  const redirectParam = url.searchParams.get("redirect");
  const targetUrl =
    redirectParam && redirectParam.startsWith("/")
      ? redirectParam
      : "/dashboard";

  try {
    const { body, wantsHtml } = await readAuthBody(request);
    const user = await authenticateUser(body);
    await createSession(user.id);
    if (wantsHtml) {
      return Response.redirect(new URL(targetUrl, request.url), 303);
    }
    return Response.json({ user });
  } catch (error) {
    console.error("[AUTH_LOGIN_ERROR]", error);
    const raw = error instanceof Error ? error.message : "";
    const lower = raw.toLowerCase();
    const isInfra =
      lower.includes("supabase") ||
      lower.includes("connection") ||
      lower.includes("database") ||
      lower.includes("etimedout") ||
      lower.includes("econnrefused") ||
      lower.includes("fetch failed") ||
      lower.includes("key in .env");

    const message = isInfra
      ? "Account service is temporarily unavailable. Please try again shortly or continue learning as a guest."
      : "Invalid email or password.";

    if (isFormPost(request)) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("error", message);
      if (redirectParam) loginUrl.searchParams.set("redirect", redirectParam);
      return Response.redirect(loginUrl, 303);
    }
    return Response.json({ error: message }, { status: isInfra ? 503 : 401 });
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
