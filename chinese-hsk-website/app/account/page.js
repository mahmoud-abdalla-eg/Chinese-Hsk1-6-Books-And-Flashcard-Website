import AccountForm from "@/components/auth/account-form";
import PasswordChangeForm from "@/components/auth/password-change-form";
import { Card, Pill, ProgressBar, Surface } from "@/components/ui/card";
import {
  getManagedHskSummary,
  getManagedHskWordIds,
} from "@/lib/admin/course-words";
import { getSessionUserId } from "@/lib/auth/session";
import { getUserById } from "@/lib/auth/users";
import { defaultProgress, sanitizeProgress } from "@/lib/progress/storage";
import { getUserProgress } from "@/lib/progress/user-progress";

export const dynamic = "force-dynamic";

export default async function AccountPage({ searchParams }) {
  const userId = await getSessionUserId();
  const user = userId ? await getUserById(userId) : null;
  if (user) return <AccountProfile user={user} userId={userId} />;

  const params = await searchParams;
  const error = params?.error ? decodeURIComponent(params.error) : "";
  return (
    <div className="space-y-8 pb-8">
      <Surface className="p-7 lg:p-10">
        <Pill>Account</Pill>
        <h1 className="mt-5 max-w-4xl text-5xl font-black text-slate-950 sm:text-7xl">
          Save your Mandarin progress.
        </h1>
        <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
          Create an account or log in to keep your study progress, hard words,
          favorites, and reviews saved in your database.
        </p>
      </Surface>
      <AccountForm error={error} />
    </div>
  );
}

async function AccountProfile({ user, userId }) {
  const [progressRecord, summaries] = await Promise.all([
    getUserProgress(userId),
    getManagedHskSummary(),
  ]);
  const levelWords = await Promise.all(
    summaries.map(async (summary) => ({
      level: summary.level,
      wordCount: summary.wordCount,
      wordIds: new Set(await getManagedHskWordIds(summary.level)),
    })),
  );
  const progress = sanitizeProgress(
    progressRecord?.progress || defaultProgress(),
  );
  const totalWords = summaries.reduce((sum, item) => sum + item.wordCount, 0);
  const learnedCount = progress.learnedWords.length;
  const percent = totalWords
    ? Math.round((learnedCount / totalWords) * 100)
    : 0;
  const profileStats = [
    ["Words learned", learnedCount],
    ["Favorites", progress.favorites.length],
    ["Hard words", progress.hardWords.length],
    ["Reviews", progress.reviewHistory.length],
    ["Completed units", progress.completedUnits.length],
    ["Completed conversations", progress.completedConversations.length],
  ];

  return (
    <div className="space-y-8 pb-8">
      <Surface className="grid gap-8 p-7 lg:grid-cols-[1fr_360px] lg:items-center lg:p-10">
        <div>
          <Pill>Profile</Pill>
          <h1 className="mt-5 max-w-4xl text-5xl font-black text-slate-950 sm:text-7xl">
            {user.name}
          </h1>
          <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
            Your account is signed in. Manage your profile, review saved study
            progress, and change your password securely.
          </p>
        </div>
        <Card className="bg-blue-50 text-slate-950">
          <div className="text-6xl font-black text-blue-900">{percent}%</div>
          <p className="mt-1 font-bold text-slate-700">
            overall course progress
          </p>
          <div className="mt-5">
            <ProgressBar value={percent} />
          </div>
        </Card>
      </Surface>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <Card>
            <Pill tone="blue">Account information</Pill>
            <div className="mt-5 grid gap-4 text-sm font-bold text-slate-700">
              <InfoRow label="Name" value={user.name} />
              <InfoRow label="Email" value={user.email} />
              <InfoRow
                label="Member since"
                value={formatDate(user.createdAt)}
              />
              <InfoRow
                label="Progress last synced"
                value={formatDate(progressRecord?.updatedAt)}
              />
            </div>
          </Card>
          <PasswordChangeForm />
        </div>

        <Card>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Pill tone="green">Saved progress</Pill>
              <h2 className="mt-4 text-3xl font-black text-slate-950">
                Study snapshot
              </h2>
            </div>
            <span className="text-sm font-black text-slate-500">
              {learnedCount}/{totalWords} words
            </span>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {profileStats.map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <strong className="block text-4xl font-black text-slate-950">
                  {value}
                </strong>
                <span className="mt-1 block text-sm font-bold text-slate-600">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-4">
            {levelWords.map((summary) => {
              const learnedInLevel = progress.learnedWords.filter((wordId) =>
                summary.wordIds.has(wordId),
              ).length;
              const levelPercent = summary.wordCount
                ? Math.round((learnedInLevel / summary.wordCount) * 100)
                : 0;
              return (
                <div key={summary.level}>
                  <div className="mb-2 flex justify-between text-sm font-black text-slate-700">
                    <span>HSK {summary.level}</span>
                    <span>
                      {learnedInLevel}/{summary.wordCount}
                    </span>
                  </div>
                  <ProgressBar value={levelPercent} />
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <span className="block text-xs font-black uppercase tracking-[0.14em] text-slate-500">
        {label}
      </span>
      <span className="mt-1 block text-base text-slate-950">
        {value || "Not available"}
      </span>
    </div>
  );
}

function formatDate(value) {
  if (!value) return "Not available";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Not available";
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}
