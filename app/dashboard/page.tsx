import Link from "next/link";
import { BookOpen, Sparkles, Users, ScrollText, BookMarked, LayoutGrid, Timer } from "lucide-react";
import ayahs from "@/data/ayahs.json";
import hadithData from "@/data/hadith.json";
import { AyahCard } from "@/components/AyahCard";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { getDayOfYearIndex } from "@/lib/day-of-year";

type HadithEntry = { text: string; narrator?: string; source: string };
type HadithSection = { category: string; entries: HadithEntry[] };

export default function DashboardPage() {
  const idx = getDayOfYearIndex(ayahs.length);
  const ayah = ayahs[idx];

  const allHadith: HadithEntry[] = (hadithData as HadithSection[]).flatMap((s) => s.entries);
  const hadith = allHadith[getDayOfYearIndex(allHadith.length)];

  const quick = [
    { href: "/topics", title: "All topics", blurb: "Adhkar, du'a, fiqh, Ramadan, seerah, and more", icon: LayoutGrid },
    { href: "/coach", title: "Tazkiyah Coach", blurb: "Reflection, evidence, and habits", icon: Sparkles },
    { href: "/adhkar", title: "Daily adhkar", blurb: "Morning & evening checklist", icon: Timer },
    { href: "/tajweed", title: "Learn Tajweed", blurb: "Rules of beautiful recitation", icon: BookOpen },
    { href: "/adab", title: "Explore Adab", blurb: "Etiquette from Qur'an and Sunnah", icon: Users },
    { href: "/hadith", title: "Hadith", blurb: "Authentic narrations by theme", icon: ScrollText },
    { href: "/stories", title: "Stories", blurb: "Prophets, companions, history", icon: BookMarked },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-semibold text-primary">Dashboard</h1>
        <p className="mt-2 text-muted">Welcome back. Take a calm step forward today.</p>
      </div>

      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary/70">Today&apos;s Ayah</h2>
        <AyahCard arabic={ayah.arabic} translation={ayah.translation} reference={ayah.reference} />
      </section>

      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary/70">Today&apos;s Hadith</h2>
        <Card className="p-6 sm:p-8">
          <p className="leading-relaxed text-muted">&ldquo;{hadith.text}&rdquo;</p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-primary/80">
            {hadith.narrator && (
              <span>
                Narrated by <span className="font-medium">{hadith.narrator}</span>
              </span>
            )}
            <span className="italic">{hadith.source}</span>
          </div>
        </Card>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary/70">Explore</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quick.map((q) => {
            const Icon = q.icon;
            return (
              <Link key={q.href} href={q.href} className="group block">
                <Card className="h-full p-5 transition group-hover:border-primary/30 group-hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">{q.title}</h3>
                      <p className="mt-1 text-sm text-muted">{q.blurb}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <Button href="/coach" variant="ghost">
          Open Coach
        </Button>
        <Button href="/">Back to home</Button>
      </div>
    </div>
  );
}
