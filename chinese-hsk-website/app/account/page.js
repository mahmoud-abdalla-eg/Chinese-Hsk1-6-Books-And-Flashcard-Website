import AccountForm from "@/components/auth/account-form";
import { Pill, Surface } from "@/components/ui/card";

export default async function AccountPage({ searchParams }) {
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
