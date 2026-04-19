"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/Card";

export function ZakatCalculator() {
  const [wealth, setWealth] = useState("");
  const [nisab, setNisab] = useState("");
  const [ratePct, setRatePct] = useState("2.5");

  const parsed = useMemo(() => {
    const w = Number.parseFloat(wealth.replace(/,/g, ""));
    const n = Number.parseFloat(nisab.replace(/,/g, ""));
    const r = Number.parseFloat(ratePct);
    return {
      wealth: Number.isFinite(w) ? w : NaN,
      nisab: Number.isFinite(n) ? n : NaN,
      rate: Number.isFinite(r) ? r / 100 : NaN,
    };
  }, [wealth, nisab, ratePct]);

  const zakat = useMemo(() => {
    if (!Number.isFinite(parsed.wealth) || !Number.isFinite(parsed.nisab) || !Number.isFinite(parsed.rate)) return null;
    if (parsed.wealth < parsed.nisab) return 0;
    return parsed.wealth * parsed.rate;
  }, [parsed]);

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-primary">Zakat (simple calculator)</h3>
      <p className="mt-2 text-sm text-muted">
        Enter zakatable wealth after debts; set nisab to your scholar&apos;s threshold (e.g. gold/silver equivalents). This is a
        planning aid, not a fatwa.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <label className="block text-sm">
          <span className="text-muted">Zakatable wealth</span>
          <input
            type="text"
            inputMode="decimal"
            value={wealth}
            onChange={(e) => setWealth(e.target.value)}
            className="mt-1 w-full rounded-xl border border-primary/15 bg-white px-3 py-2 text-primary outline-none ring-primary/30 focus:ring-2"
            placeholder="e.g. 10000"
          />
        </label>
        <label className="block text-sm">
          <span className="text-muted">Nisab threshold</span>
          <input
            type="text"
            inputMode="decimal"
            value={nisab}
            onChange={(e) => setNisab(e.target.value)}
            className="mt-1 w-full rounded-xl border border-primary/15 bg-white px-3 py-2 text-primary outline-none ring-primary/30 focus:ring-2"
            placeholder="Ask your scholar"
          />
        </label>
        <label className="block text-sm">
          <span className="text-muted">Rate (%)</span>
          <input
            type="text"
            inputMode="decimal"
            value={ratePct}
            onChange={(e) => setRatePct(e.target.value)}
            className="mt-1 w-full rounded-xl border border-primary/15 bg-white px-3 py-2 text-primary outline-none ring-primary/30 focus:ring-2"
            placeholder="2.5"
          />
        </label>
      </div>
      <p className="mt-4 rounded-xl bg-primary/5 px-4 py-3 text-sm text-primary">
        {zakat === null && "Fill numbers to estimate."}
        {zakat !== null && zakat === 0 && "Below nisab — zakat on this model is 0 (still verify categories)."}
        {zakat !== null && zakat > 0 && (
          <>
            Estimated zakat: <span className="font-semibold tabular-nums">{zakat.toFixed(2)}</span> (same currency units as wealth)
          </>
        )}
      </p>
    </Card>
  );
}
