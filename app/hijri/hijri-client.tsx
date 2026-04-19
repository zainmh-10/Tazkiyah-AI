"use client";

import { useMemo, useState } from "react";
import islamicDays from "@/data/islamic-days.json";
import { Card } from "@/components/Card";
import { formatHijriLong, getHijriParts, nextGregorianForHijriMonthDay } from "@/lib/hijri";

type Row = {
  key: string;
  hijriMonth: number;
  hijriDay: number | null;
  title: string;
  note: string;
  special?: string;
};

type DisplayRow = Row & { approx: string };

function fmtGregorian(d: Date) {
  return d.toLocaleDateString(undefined, { weekday: "short", year: "numeric", month: "short", day: "numeric" });
}

export function HijriClient() {
  const [inputDate, setInputDate] = useState(() => {
    const t = new Date();
    return t.toISOString().slice(0, 10);
  });

  const parsed = useMemo(() => {
    const d = new Date(inputDate + "T12:00:00");
    if (Number.isNaN(d.getTime())) return { valid: false as const };
    return { valid: true as const, date: d, hijri: formatHijriLong(d), parts: getHijriParts(d) };
  }, [inputDate]);

  const rows: DisplayRow[] = useMemo(() => {
    const today = new Date();
    return (islamicDays as Row[]).map((row): DisplayRow => {
      if (row.special === "lastTenOddNights") {
        const ramadan1 = nextGregorianForHijriMonthDay(9, 1, today);
        return {
          ...row,
          approx: ramadan1
            ? `Next Ramadan begins ~${fmtGregorian(ramadan1)} — seek Laylat al-Qadr in the last ten odd nights.`
            : "Could not compute — check calendar locally.",
        };
      }
      if (row.hijriDay == null) {
        return { ...row, approx: row.note };
      }
      const next = nextGregorianForHijriMonthDay(row.hijriMonth, row.hijriDay, today);
      return {
        ...row,
        approx: next ? fmtGregorian(next) : "—",
      };
    });
  }, []);

  return (
    <div className="space-y-8">
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-primary">Gregorian → Hijri</h2>
        <label className="mt-4 block text-sm">
          <span className="text-muted">Pick a date</span>
          <input
            type="date"
            value={inputDate}
            onChange={(e) => setInputDate(e.target.value)}
            className="mt-1 block w-full max-w-xs rounded-xl border border-primary/15 bg-white px-3 py-2 text-primary outline-none ring-primary/30 focus:ring-2"
          />
        </label>
        {parsed.valid && (
          <div className="mt-4 space-y-1 text-muted">
            <p>
              <span className="font-medium text-primary">Hijri (display):</span> {parsed.hijri}
            </p>
            <p className="text-xs">
              Parts: {parsed.parts.year}/{parsed.parts.month}/{parsed.parts.day} — calendar backend depends on your browser/system
              (often Umm al-Qura–style).
            </p>
          </div>
        )}
      </Card>

      <div>
        <h2 className="mb-4 text-lg font-semibold text-primary">Upcoming significant days (approximate)</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-primary/15 text-primary/80">
                <th className="py-2 pr-4 font-semibold">Day</th>
                <th className="py-2 pr-4 font-semibold">Next / note</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.key} className="border-b border-primary/10">
                  <td className="py-3 pr-4 align-top font-medium text-primary">{r.title}</td>
                  <td className="py-3 text-muted">{r.approx}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-muted">
          Hijri–Gregorian matching varies slightly by global region and sighting vs calculation — confirm moonsighting announcements
          for your locality.
        </p>
      </div>
    </div>
  );
}
