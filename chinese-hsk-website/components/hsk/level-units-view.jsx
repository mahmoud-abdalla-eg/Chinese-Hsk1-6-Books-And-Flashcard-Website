"use client";

import { useEffect, useMemo, useState } from "react";
import UnitCard from "@/components/hsk/unit-card";
import { Card, Pill } from "@/components/ui/card";
import { UNIT_SIZE } from "@/lib/data/schema";

export default function LevelUnitsView({ level, words = [], defaultUnits = [] }) {
  const [unitSize, setUnitSize] = useState(UNIT_SIZE);

  // Restore user's saved preference
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("mandarin_flow_unit_chunk_size");
      if (saved && [25, 50, 100].includes(Number(saved))) {
        setUnitSize(Number(saved));
      }
    } catch {}
  }, []);

  const handleUnitSizeChange = (newSize) => {
    setUnitSize(newSize);
    try {
      window.localStorage.setItem("mandarin_flow_unit_chunk_size", String(newSize));
    } catch {}
  };

  const computedUnits = useMemo(() => {
    if (unitSize === UNIT_SIZE && defaultUnits.length > 0) {
      return defaultUnits.map((u) => ({ ...u, isCustom: false }));
    }
    const units = [];
    for (let i = 0; i < words.length; i += unitSize) {
      const chunkWords = words.slice(i, i + unitSize);
      units.push({
        id: units.length + 1,
        level: Number(level),
        start: i + 1,
        end: i + chunkWords.length,
        words: chunkWords,
        wordCount: chunkWords.length,
        isCustom: unitSize !== UNIT_SIZE,
      });
    }
    return units;
  }, [level, words, defaultUnits, unitSize]);

  return (
    <div className="space-y-6">
      {/* Unit Size Customization Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs">
        <div className="flex items-center gap-2">
          <svg
            className="h-4 w-4 text-teal-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
          <span className="text-xs font-black uppercase tracking-wider text-slate-700">
            Unit Batch Size:
          </span>
        </div>

        <div className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 p-1 text-xs font-bold">
          {[
            { size: 50, label: "50 words (Standard)" },
            { size: 25, label: "25 words (Bite-sized)" },
            { size: 100, label: "100 words (Deep Dive)" },
          ].map(({ size, label }) => (
            <button
              key={size}
              type="button"
              onClick={() => handleUnitSizeChange(size)}
              className={`rounded-full px-3 py-1.5 transition ${
                unitSize === size
                  ? "bg-teal-700 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Units Grid */}
      {computedUnits.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {computedUnits.map((unit) => (
            <UnitCard
              key={`${unitSize}-${unit.id}`}
              unit={unit}
              isCustom={unit.isCustom}
            />
          ))}
        </div>
      ) : (
        <Card>
          <Pill tone="blue">Vocabulary pending</Pill>
          <p className="mt-4 text-sm font-semibold text-slate-600">
            No units found for this level yet.
          </p>
        </Card>
      )}
    </div>
  );
}
