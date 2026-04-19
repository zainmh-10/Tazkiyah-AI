import type { Metadata } from "next";
import { formatHijriLong } from "@/lib/hijri";
import { HijriClient } from "./hijri-client";

export const metadata: Metadata = {
  title: "Hijri Calendar | Tazkiyah AI",
  description: "Today's Hijri date, simple Gregorian converter, and upcoming significant Islamic days.",
};

export default function HijriPage() {
  const today = new Date();
  const hijriToday = formatHijriLong(today);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-primary">Hijri &amp; Islamic days</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Today&apos;s Hijri string uses your system&apos;s Islamic calendar support. Use the converter for planning; verify Ramadan and
          Eid with local sighting or authority you follow.
        </p>
        <p className="mt-4 rounded-2xl border border-primary/10 bg-white/80 px-4 py-3 text-sm text-muted">
          <span className="font-semibold text-primary">Today:</span> {hijriToday}
        </p>
      </div>
      <HijriClient />
    </div>
  );
}
