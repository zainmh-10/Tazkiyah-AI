"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/Card";
import asma from "@/data/asma-ul-husna.json";

type Entry = (typeof asma)[number];

export function AsmaClient() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return asma;
    return asma.filter(
      (x) =>
        x.arabic.includes(q) ||
        x.transliteration.toLowerCase().includes(s) ||
        x.meaning.toLowerCase().includes(s) ||
        String(x.order).includes(s)
    );
  }, [q]);

  return (
    <div className="space-y-6">
      <label className="block max-w-md text-sm">
        <span className="text-muted">Search name, meaning, or number</span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="mt-1 w-full rounded-xl border border-primary/15 bg-white px-3 py-2 text-primary outline-none ring-primary/30 focus:ring-2"
          placeholder="e.g. Rahman, merciful, 1"
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((row: Entry) => (
          <Card key={row.order} className="p-5">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-primary/60">#{row.order}</span>
              <span className="font-arabic text-right text-2xl text-primary">{row.arabic}</span>
            </div>
            <p className="mt-2 font-medium text-primary">{row.transliteration}</p>
            <p className="mt-1 text-sm text-muted">{row.meaning}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{row.reflection}</p>
            <p className="mt-3 font-arabic text-right text-base leading-relaxed text-primary">{row.dua}</p>
          </Card>
        ))}
      </div>
      {filtered.length === 0 && <p className="text-muted">No names match that search.</p>}
    </div>
  );
}
