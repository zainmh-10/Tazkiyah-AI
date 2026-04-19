/** Hijri display using the host environment's Islamic calendar (typically Umm al-Qura / similar). */

const HIJRI_CAL = "islamic-umalqura" as const;

export function formatHijriLong(date: Date, locale = "en"): string {
  return new Intl.DateTimeFormat(locale, {
    calendar: HIJRI_CAL,
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export type HijriParts = { year: number; month: number; day: number };

export function getHijriParts(date: Date): HijriParts {
  const dtf = new Intl.DateTimeFormat("en", {
    calendar: HIJRI_CAL,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const parts = dtf.formatToParts(date);
  const y = parts.find((p) => p.type === "year")?.value;
  const m = parts.find((p) => p.type === "month")?.value;
  const d = parts.find((p) => p.type === "day")?.value;
  return {
    year: y ? Number.parseInt(y, 10) : date.getFullYear(),
    month: m ? Number.parseInt(m, 10) : 1,
    day: d ? Number.parseInt(d, 10) : 1,
  };
}

/** Find the next Gregorian date on which Hijri month/day matches (scans forward, max ~4 years). */
export function nextGregorianForHijriMonthDay(
  targetMonth: number,
  targetDay: number,
  from: Date = new Date(),
  maxDays = 1460
): Date | null {
  const cursor = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  for (let i = 0; i < maxDays; i++) {
    const h = getHijriParts(cursor);
    if (h.month === targetMonth && h.day === targetDay) {
      return new Date(cursor);
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return null;
}
