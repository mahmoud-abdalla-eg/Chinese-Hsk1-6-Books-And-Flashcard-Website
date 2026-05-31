import Link from "next/link";
import { Card, Pill, Surface } from "@/components/ui/card";
import { getAdminUser } from "@/lib/auth/admin";
import {
  buildCoverageReport,
  validateAllLevels,
} from "@/lib/validation/hsk-validation";

export const dynamic = "force-dynamic";

export default async function AdminbaseDataCheckPage() {
  const admin = await getAdminUser();
  if (!admin) return <AdminLocked />;
  const validations = validateAllLevels();
  const coverage = buildCoverageReport();
  return (
    <div className="space-y-8 pb-8">
      <Surface className="p-7 lg:p-10">
        <Pill tone="amber">Strict checker</Pill>
        <h1 className="mt-5 text-5xl font-black text-slate-950 sm:text-7xl">
          Data check
        </h1>
        <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
          Check counts, missing fields, missing audio, conversation coverage,
          and duplicate words before publishing updates.
        </p>
      </Surface>
      <div className="grid gap-5">
        {validations.map((item) => {
          const levelCoverage = coverage.levels.find(
            (level) => Number(level.level) === Number(item.level),
          );
          return (
            <Card key={item.level}>
              <div className="grid gap-4 md:grid-cols-5">
                <div>
                  <Pill>HSK {item.level}</Pill>
                  <p className="mt-3 text-3xl font-black text-slate-950">
                    {item.actualCount}/{item.expectedCount}
                  </p>
                  <p className="text-sm font-bold text-slate-500">words</p>
                </div>
                <Metric label="duplicates" value={item.duplicateWords.length} />
                <Metric
                  label="missing rows"
                  value={item.missingFields.length}
                />
                <Metric label="covered" value={levelCoverage.coveredWords} />
                <Metric
                  label="uncovered"
                  value={levelCoverage.uncoveredWords.length}
                />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <strong className="text-3xl font-black text-slate-950">{value}</strong>
      <p className="text-sm font-bold text-slate-500">{label}</p>
    </div>
  );
}

function AdminLocked() {
  return (
    <Surface className="p-7 lg:p-10">
      <Pill tone="rose">Adminbase only</Pill>
      <h1 className="mt-5 text-5xl font-black text-slate-950">Data check</h1>
      <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
        Log in with an admin account to check course data.
      </p>
      <Link
        href="/adminbase/login"
        className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white"
      >
        Admin login
      </Link>
    </Surface>
  );
}
