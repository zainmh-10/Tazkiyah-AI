"use client";

import { useMemo, useState } from "react";
import words from "@/data/quranic-vocabulary.json";
import { Card } from "@/components/Card";

export function VocabClient() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return words;
    return words.filter(
      (w) =>
        w.lemma.includes(q) ||
        w.meaning.toLowerCase().includes(s) ||
        w.exampleArabic.includes(q) ||
        w.exampleGloss.toLowerCase().includes(s)
    );
  }, [q]);

  return (
    <div className="space-y-6">
      <label className="block max-w-md text-sm">
        <span className="text-muted">Search lemma, gloss, or example</span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="mt-1 w-full rounded-xl border border-primary/15 bg-white px-3 py-2 text-primary outline-none ring-primary/30 focus:ring-2"
          placeholder="e.g. mercy, qul, path"
        />
      </label>
      <p className="text-xs text-muted">
        High-frequency lemmas often cover large portions of Qur&apos;anic word tokens; exact percentages depend on corpus and
        morphology — use this list as a study scaffold, not a statistical claim.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((w) => (
          <Card key={w.lemma + w.meaning} className="p-5">
            <div className="flex items-baseline justify-between gap-2">
              <span className="font-arabic text-2xl text-primary">{w.lemma}</span>
              <span className="text-xs text-muted">{w.frequencyNote}</span>
            </div>
            <p className="mt-2 font-medium text-primary">{w.meaning}</p>
            <p className="mt-3 font-arabic text-right text-lg text-primary/90">{w.exampleArabic}</p>
            <p className="mt-1 text-sm text-muted">{w.exampleGloss}</p>
          </Card>
        ))}
      </div>
      {filtered.length === 0 && <p className="text-muted">No entries match.</p>}
    </div>
  );
}
