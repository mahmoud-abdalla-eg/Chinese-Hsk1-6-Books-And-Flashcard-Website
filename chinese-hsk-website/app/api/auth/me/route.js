import { getSessionUserId } from "@/lib/auth/session";
import { getUserById } from "@/lib/auth/users";

export const dynamic = "force-dynamic";

export async function GET() {
  const userId = await getSessionUserId();
  const user = userId ? await getUserById(userId) : null;
  return Response.json({ user });
}
