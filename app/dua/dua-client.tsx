"use client";

import { useMemo, useState } from "react";
import duas from "@/data/dua-library.json";
import { Card } from "@/components/Card";

const categories = [
  { id: "all", label: "All" },
  { id: "waking", label: "Waking" },
  { id: "eating", label: "Eating" },
  { id: "travel", label: "Travel" },
  { id: "distress", label: "Distress" },
  { id: "tawbah", label: "Tawbah" },
  { id: "istikharah", label: "Istikharah" },
] as const;

type Cat = (typeof categories)[number]["id"];

export function DuaClient() {
  const [cat, setCat] = useState<Cat>("all");
  const list = useMemo(() => {
    if (cat === "all") return duas;
    return duas.filter((d) => d.category === cat);
  }, [cat]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setCat(c.id)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              cat === c.id ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary hover:bg-primary/15"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {list.map((d) => (
          <Card key={d.id} className="p-5 sm:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-lg font-semibold text-primary">{d.title}</h2>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-primary/80">
                {d.category}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">
              <span className="font-medium text-primary/80">Timing:</span> {d.timing}
            </p>
            <p className="mt-1 text-sm text-muted">
              <span className="font-medium text-primary/80">Context:</span> {d.context}
            </p>
            <p className="mt-4 font-arabic text-right text-xl leading-relaxed text-primary">{d.arabic}</p>
            <p className="mt-2 text-sm italic text-muted">{d.transliteration}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{d.translation}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
