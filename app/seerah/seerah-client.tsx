"use client";

import { useState } from "react";
import events from "@/data/seerah-timeline.json";
import { Card } from "@/components/Card";

type Ev = (typeof events)[number];

export function SeerahClient() {
  const [open, setOpen] = useState<string>(events[0]?.id ?? "");

  const current = events.find((e) => e.id === open) ?? events[0];

  return (
    <div className="space-y-8">
      <div className="relative">
        <div className="overflow-x-auto pb-4">
          <div className="flex min-w-max gap-0">
            {events.map((e: Ev, i: number) => {
              const active = e.id === open;
              return (
                <button
                  key={e.id}
                  type="button"
                  onClick={() => setOpen(e.id)}
                  className={`group relative flex w-44 shrink-0 flex-col border-t-4 px-3 pt-4 text-left transition sm:w-52 ${
                    active ? "border-primary" : "border-primary/20 hover:border-primary/50"
                  }`}
                >
                  <span className="text-xs font-semibold text-primary/60">~{e.yearApprox} CE</span>
                  <span className={`mt-1 text-sm font-semibold leading-snug ${active ? "text-primary" : "text-muted"}`}>
                    {e.label}
                  </span>
                  {i < events.length - 1 && (
                    <span className="pointer-events-none absolute right-0 top-6 hidden h-px w-full translate-x-1/2 bg-primary/15 sm:block" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
        <p className="text-xs text-muted">Scroll horizontally on small screens. Tap an event for detail.</p>
      </div>

      {current && (
        <Card className="p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary/60">~{current.yearApprox} CE</p>
          <h2 className="mt-2 text-2xl font-semibold text-primary">{current.label}</h2>
          <p className="mt-4 leading-relaxed text-muted">{current.summary}</p>
        </Card>
      )}
    </div>
  );
}
