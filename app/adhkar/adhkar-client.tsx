"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Check } from "lucide-react";
import { Card } from "@/components/Card";
import { getLocalDateKey } from "@/lib/calendar-day-key";

type AdhkarItem = {
  id: string;
  arabic: string;
  transliteration: string;
  translation: string;
  repeats: number;
};

type Bundle = { morning: AdhkarItem[]; evening: AdhkarItem[] };

const STORAGE_KEY = "tazkiyah-adhkar-v1";

type Stored = { day: string; done: Record<string, boolean> };

function loadStored(): Stored {
  if (typeof window === "undefined") return { day: getLocalDateKey(), done: {} };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { day: getLocalDateKey(), done: {} };
    const p = JSON.parse(raw) as Stored;
    const today = getLocalDateKey();
    if (p.day !== today) return { day: today, done: {} };
    return { day: p.day, done: p.done || {} };
  } catch {
    return { day: getLocalDateKey(), done: {} };
  }
}

export function AdhkarClient({ data }: { data: Bundle }) {
  const [stored, setStored] = useState<Stored>({ day: getLocalDateKey(), done: {} });

  useEffect(() => {
    setStored(loadStored());
  }, []);

  const persist = useCallback((next: Stored) => {
    setStored(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore quota */
    }
  }, []);

  const toggle = useCallback(
    (id: string) => {
      const today = getLocalDateKey();
      const base = stored.day === today ? stored : { day: today, done: {} };
      const done = { ...base.done, [id]: !base.done[id] };
      persist({ day: today, done });
    },
    [persist, stored]
  );

  const todayKey = useMemo(() => getLocalDateKey(), []);

  const morningDone = useMemo(
    () => data.morning.filter((x) => stored.done[x.id]).length,
    [data.morning, stored.done]
  );
  const eveningDone = useMemo(
    () => data.evening.filter((x) => stored.done[x.id]).length,
    [data.evening, stored.done]
  );

  const Section = ({ title, items }: { title: string; items: AdhkarItem[] }) => (
    <div>
      <h2 className="mb-4 text-lg font-semibold text-primary">{title}</h2>
      <div className="space-y-3">
        {items.map((item) => {
          const checked = Boolean(stored.done[item.id]);
          return (
            <Card key={item.id} className={`p-4 transition ${checked ? "border-primary/25 bg-primary/[0.03]" : ""}`}>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-pressed={checked}
                  className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border-2 transition ${
                    checked ? "border-primary bg-primary text-primary-foreground" : "border-primary/20 bg-white hover:border-primary/40"
                  }`}
                >
                  {checked ? <Check className="h-4 w-4" strokeWidth={2.5} /> : null}
                </button>
                <div className="min-w-0 flex-1">
                  <p className="font-arabic text-right text-xl leading-relaxed text-primary">{item.arabic}</p>
                  <p className="mt-2 text-sm italic text-muted">{item.transliteration}</p>
                  <p className="mt-1 text-sm text-muted">{item.translation}</p>
                  <p className="mt-2 text-xs font-medium text-primary/80">Repeat: {item.repeats}×</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="space-y-10">
      <div className="rounded-2xl border border-primary/10 bg-white/80 px-4 py-3 text-sm text-muted">
        <span className="font-medium text-primary">Today (local): {todayKey}</span>
        <span className="mx-2">·</span>
        Morning: {morningDone}/{data.morning.length} · Evening: {eveningDone}/{data.evening.length}
        <span className="mx-2">·</span>
        Checkmarks reset automatically each calendar day.
      </div>
      <Section title="Morning adhkar" items={data.morning} />
      <Section title="Evening adhkar" items={data.evening} />
    </div>
  );
}
