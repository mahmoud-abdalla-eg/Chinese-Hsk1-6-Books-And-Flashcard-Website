import { getSessionUserId } from "@/lib/auth/session";
import {
  getUserProgress,
  saveUserProgress,
} from "@/lib/progress/user-progress";

export const dynamic = "force-dynamic";

export async function GET() {
  const userId = await getSessionUserId();
  if (!userId) {
    return Response.json(
      { error: "Log in to sync progress." },
      { status: 401 },
    );
  }
  try {
    const record = await getUserProgress(userId);
    return Response.json({
      userId,
      progress: record?.progress || null,
      updatedAt: record?.updatedAt || null,
    });
  } catch {
    return Response.json(
      { error: "Could not load progress right now." },
      { status: 500 },
    );
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const userId = await getSessionUserId();
    if (!userId) {
      return Response.json(
        { error: "Log in to sync progress." },
        { status: 401 },
      );
    }
    const saved = await saveUserProgress(userId, body.progress);
    return Response.json(saved);
  } catch {
    return Response.json(
      { error: "Could not save progress right now." },
      { status: 500 },
    );
  }
}
