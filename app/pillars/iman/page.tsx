import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Pillars of Iman | Tazkiyah AI",
  description: "The six articles of faith in outline — belief in Allah, angels, books, messengers, Last Day, and divine decree.",
};

const articles = [
  {
    name: "Allah",
    arabic: "اللَّهُ",
    body: "Belief in Allah — His names and attributes as He described Himself, without comparing Him to creation.",
  },
  {
    name: "Angels",
    arabic: "الْمَلَائِكَةُ",
    body: "Belief in angels — noble servants who do not disobey; carriers of revelation, recorders of deeds, and more.",
  },
  {
    name: "Books",
    arabic: "الْكُتُبُ",
    body: "Belief in scriptures revealed to messengers — the Qur'an preserved; earlier books in their affirmed truths as Allah spoke of them.",
  },
  {
    name: "Messengers",
    arabic: "الرُّسُلُ",
    body: "Belief in all messengers Allah named and those He did not name — culminating in Muhammad ﷺ as seal of prophethood.",
  },
  {
    name: "Last Day",
    arabic: "الْيَوْمِ الْآخِرِ",
    body: "Belief in resurrection, reckoning, the Scale, the Bridge, Paradise and Hell — and that hope and fear both purify.",
  },
  {
    name: "Divine decree (Qadar)",
    arabic: "الْقَدَرِ",
    body: "Belief that Allah knew, wrote, willed, and created all things — good and evil in their created aspect — while human choice remains real in Allah's justice.",
  },
];

export default function PillarsImanPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-primary">Pillars of iman</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Six articles summarized in the famous hadith of Jibril. Creed (aqidah) is learned from revelation and sound scholarship —
          this page is only a gentle map.
        </p>
      </div>
      <div className="grid gap-4">
        {articles.map((a) => (
          <Card key={a.name} className="p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-semibold text-primary">{a.name}</h2>
              <span className="font-arabic text-2xl text-primary/90">{a.arabic}</span>
            </div>
            <p className="mt-3 leading-relaxed text-muted">{a.body}</p>
          </Card>
        ))}
      </div>
      <p className="text-sm text-muted">
        See also{" "}
        <Link href="/pillars/islam" className="font-medium text-primary underline-offset-4 hover:underline">
          pillars of Islam
        </Link>
        .
      </p>
    </div>
  );
}
