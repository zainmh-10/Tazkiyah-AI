import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/Card";
import { ZakatCalculator } from "@/components/ZakatCalculator";

export const metadata: Metadata = {
  title: "Fiqh Basics | Tazkiyah AI",
  description: "Taharah, wudu, ghusl, salah, sawm, zakat calculator, and hajj outline — study with a teacher.",
};

function FlowStep({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <div className="flex gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
        {n}
      </span>
      <div>
        <p className="font-medium text-primary">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
      </div>
    </div>
  );
}

export default function FiqhPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-semibold text-primary">Fiqh basics</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Outlines for study — not verdicts. Wash, prayer, fasting, wealth, and pilgrimage have school-based details; pair these
          reminders with a qualified teacher.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">Taharah (purification)</h2>
        <Card className="p-6">
          <p className="leading-relaxed text-muted">
            Taharah is cleanliness of body, clothing, and place for worship. Najasah (impurities) are removed by washing per
            rulings; minor hadath is lifted by wudu (or tayammum when water is unavailable lawfully); major janabah/hayd/nifas
            typically require ghusl before salah (with school-specific exceptions to learn properly).
          </p>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">Wudu — step flow</h2>
        <Card className="p-6">
          <p className="mb-6 text-sm text-muted">Diagram: order as commonly taught (intention in the heart, then):</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Bismillah",
              "Wash hands to wrists",
              "Rinse mouth & nose",
              "Wash face (hairline to chin, ear to ear)",
              "Wash arms to elbows (right then left)",
              "Wipe head (and ears per madhhab detail)",
              "Wash feet to ankles (right then left)",
            ].map((label, i) => (
              <div
                key={label}
                className="rounded-xl border border-dashed border-primary/25 bg-primary/[0.04] px-4 py-3 text-center text-sm font-medium text-primary"
              >
                <span className="text-xs text-muted">{i + 1}. </span>
                {label}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted">Arrows between boxes: follow top-to-bottom, left-to-right in your practice sheet.</p>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">Ghusl — outline</h2>
        <Card className="p-6 space-y-4">
          <FlowStep
            n={1}
            title="Intention"
            body="In the heart: lifting major impurity or preparing for Friday/Jumuah per sound guidance."
          />
          <FlowStep n={2} title="Bismillah" body="Say Bismillah before starting when following sunnah practice." />
          <FlowStep n={3} title="Wash hands & private parts" body="Remove physical najasah first as needed." />
          <FlowStep n={4} title="Complete wudu as for prayer" body="Some sequences combine steps; follow your school." />
          <FlowStep n={5} title="Pour water over entire body" body="Ensure water reaches skin and hair thoroughly; order differs by madhhab." />
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">Salah — skeletal positions</h2>
        <Card className="p-6">
          <p className="mb-4 text-sm text-muted">Diagram: one rak&apos;ah skeleton (Fard movements):</p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-primary">
            {["Qiyam", "Ruku", "Qawmah", "Sujud", "Jalsa", "Sujud"].map((x, i) => (
              <span key={`${x}-${i}`} className="flex items-center gap-2">
                <span className="rounded-lg bg-primary/10 px-3 py-2">{x}</span>
                {i < 5 && <span aria-hidden="true">→</span>}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            Add Fatihah, ruku/qawmah duas, tashahhud, salam, and extra recitation per rak&apos;ah count. Learn timings and surahs with a
            teacher or structured course.
          </p>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">Sawm (fasting)</h2>
        <Card className="p-6">
          <ul className="list-inside list-disc space-y-2 text-muted">
            <li>Intention each night or before Fajr — details differ for voluntary vs Ramadan.</li>
            <li>Abstain from food, drink, and marital relations from true dawn to sunset.</li>
            <li>Guard tongue, eyes, and limbs — fasting is not only hunger.</li>
            <li>Those who are ill, traveling, or otherwise excused follow rulings for make-up or fidyah — ask a scholar.</li>
          </ul>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">Zakat</h2>
        <ZakatCalculator />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">Hajj — bird&apos;s-eye</h2>
        <Card className="p-6 space-y-4">
          {[
            { t: "Ihram", d: "Sacred state: intention, clothing rules, talbiyah, avoiding prohibited acts of ihram." },
            { t: "Tawaf & Sa'i", d: "Around the Ka'bah, then between Safa and Marwah — in the order your school affirms for your type of hajj." },
            { t: "Arafah", d: "Standing before Maghrib on the great Day — heart humbled, du'a abundant." },
            { t: "Muzdalifah / Mina", d: "Night stay, stones, ramy, sacrifice where applicable — follow group leader or scholar." },
            { t: "Tawaf al-Ifadah & farewell", d: "Completion rites; exit ihram fully per sequence learned." },
          ].map((s, i) => (
            <FlowStep key={s.t} n={i + 1} title={s.t} body={s.d} />
          ))}
          <p className="text-sm text-muted">
            Maps help; a living teacher helps more. See also{" "}
            <Link className="font-medium text-primary underline-offset-4 hover:underline" href="/ramadan">
              Ramadan hub
            </Link>{" "}
            for seasonal worship notes.
          </p>
        </Card>
      </section>
    </div>
  );
}
