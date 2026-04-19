import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Pillars of Islam | Tazkiyah AI",
  description: "The five pillars — shahadah, salah, zakah, sawm, hajj — in outline form.",
};

const pillars = [
  {
    name: "Shahadah",
    arabic: "الشَّهَادَةُ",
    body: " Bearing witness that none is worthy of worship except Allah and that Muhammad is His Messenger — the foundation upon which the rest stands.",
  },
  {
    name: "Salah",
    arabic: "الصَّلَاةُ",
    body: "Prayer at fixed times, in body and heart — the daily tether to Allah amid noise and distraction.",
  },
  {
    name: "Zakah",
    arabic: "الزَّكَاةُ",
    body: "Purifying charity on defined kinds of wealth — solidarity, humility, and obedience in wealth.",
  },
  {
    name: "Sawm",
    arabic: "الصَّوْمُ",
    body: "Fasting Ramadan from dawn to sunset — restraint of limbs and tongue, not mere hunger.",
  },
  {
    name: "Hajj",
    arabic: "الْحَجُّ",
    body: "Pilgrimage once in a lifetime for those able — unity of Ummah at the House Ibrahim was commanded to face.",
  },
];

export default function PillarsIslamPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-primary">Pillars of Islam</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Five acts of obedience that structure Muslim life outwardly. Details of fiqh belong to scholarship — learn rulings from
          qualified teachers.
        </p>
      </div>
      <div className="grid gap-4">
        {pillars.map((p) => (
          <Card key={p.name} className="p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-semibold text-primary">{p.name}</h2>
              <span className="font-arabic text-2xl text-primary/90">{p.arabic}</span>
            </div>
            <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
          </Card>
        ))}
      </div>
      <p className="text-sm text-muted">
        Pair with{" "}
        <Link href="/pillars/iman" className="font-medium text-primary underline-offset-4 hover:underline">
          pillars of iman
        </Link>{" "}
        and{" "}
        <Link href="/fiqh" className="font-medium text-primary underline-offset-4 hover:underline">
          fiqh basics
        </Link>
        .
      </p>
    </div>
  );
}
