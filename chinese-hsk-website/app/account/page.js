import { redirect } from "next/navigation";
import AccountProfile from "@/components/account/account-profile";
import {
  getManagedHskSummary,
  getManagedHskWordIds,
} from "@/lib/admin/course-words";
import { getSessionUserId } from "@/lib/auth/session";
import { getUserById } from "@/lib/auth/users";
import { getUserProgress } from "@/lib/progress/user-progress";

export const dynamic = "force-dynamic";

export default async function AccountPage() {
  const userId = await getSessionUserId();
  const user = userId ? await getUserById(userId) : null;
  if (!user) {
    redirect("/login?redirect=/account");
  }

  const [progressRecord, summaries] = await Promise.all([
    getUserProgress(userId),
    getManagedHskSummary(),
  ]);
  const levelWords = await Promise.all(
    summaries.map(async (summary) => ({
      ...summary,
      wordIds: await getManagedHskWordIds(summary.level),
    })),
  );
  return (
    <AccountProfile
      user={{
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
      }}
      progress={progressRecord?.progress}
      progressUpdatedAt={progressRecord?.updatedAt}
      levels={levelWords}
    />
  );
}
