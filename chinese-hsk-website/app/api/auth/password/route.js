import { getSessionUserId } from "@/lib/auth/session";
import { changeUserPassword } from "@/lib/auth/users";

export const dynamic = "force-dynamic";

export async function POST(request) {
  const userId = await getSessionUserId();
  if (!userId) {
    return Response.json(
      { error: "Log in again before changing your password." },
      { status: 401 },
    );
  }

  try {
    const body = await request.json();
    await changeUserPassword({
      currentPassword: body.currentPassword,
      newPassword: body.newPassword,
      userId,
    });
    return Response.json({ ok: true });
  } catch (error) {
    return Response.json(
      {
        error:
          error instanceof Error ? error.message : "Could not change password.",
      },
      { status: 400 },
    );
  }
}
