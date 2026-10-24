import { getSafeRedirectPath } from "@/lib/auth/redirect";
import { createSession } from "@/lib/auth/session";
import { createUser } from "@/lib/auth/users";

export const dynamic = "force-dynamic";

function sanitizeAuthErrorMessage(
  error,
  defaultFallback = "Registration failed. Please check your details and try again.",
) {
  const raw = error instanceof Error ? error.message : String(error || "");
  console.error("[AUTH_REGISTER_ERROR]", error);

  const lower = raw.toLowerCase();
  if (
    lower.includes("supabase") ||
    lower.includes("connection") ||
    lower.includes("database") ||
    lower.includes("etimedout") ||
    lower.includes("econnrefused") ||
    lower.includes("fetch failed") ||
    lower.includes("key in .env") ||
    lower.includes("auth_secret") ||
    lower.includes("environment")
  ) {
    return "Account service is temporarily unavailable. Please try again shortly or continue learning as a guest.";
  }

  if (lower.includes("already registered")) {
    return "This email is already registered.";
  }
  if (lower.includes("least 8 characters")) {
    return "Password must be at least 8 characters.";
  }
  if (lower.includes("valid email")) {
    return "Please enter a valid email address.";
  }

  // Strict masking: never reflect arbitrary database error strings
  return defaultFallback;
}

export async function POST(request) {
  const url = new URL(request.url);
  const redirectParam = url.searchParams.get("redirect");
  const targetUrl = getSafeRedirectPath(redirectParam, "/dashboard");

  try {
    const { body, wantsHtml } = await readAuthBody(request);
    const user = await createUser(body);
    await createSession(user.id, user.tokenVersion || 1);
    if (wantsHtml) {
      return Response.redirect(new URL(targetUrl, request.url), 303);
    }
    return Response.json({ user });
  } catch (error) {
    const message = sanitizeAuthErrorMessage(error);
    if (isFormPost(request)) {
      const signupUrl = new URL("/signup", request.url);
      signupUrl.searchParams.set("error", message);
      if (redirectParam && targetUrl !== "/dashboard") {
        signupUrl.searchParams.set("redirect", targetUrl);
      }
      return Response.redirect(signupUrl, 303);
    }
    return Response.json({ error: message }, { status: 400 });
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
