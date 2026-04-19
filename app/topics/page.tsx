import type { Metadata } from "next";
import Link from "next/link";
import {
  Baby,
  BookOpen,
  CalendarDays,
  Heart,
  Library,
  Moon,
  PersonStanding,
  Scale,
  Sparkles,
  Star,
  Timer,
  Waves,
} from "lucide-react";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Topics | Tazkiyah AI",
  description: "Browse all learning paths: adhkar, du'a, Asma al-Husna, seerah, fiqh, Ramadan, and more.",
};

const topics = [
  { href: "/adhkar", title: "Daily adhkar", desc: "Morning & evening checklist with repeats", icon: Timer },
  { href: "/dua", title: "Du'a library", desc: "Waking, travel, distress, tawbah, istikharah", icon: Heart },
  { href: "/asma", title: "Asma al-Husna", desc: "99 names with reflection & du'a pattern", icon: Star },
  { href: "/seerah", title: "Seerah timeline", desc: "Horizontal map of key moments", icon: Waves },
  { href: "/pillars/islam", title: "Pillars of Islam", desc: "Shahadah, salah, zakah, sawm, hajj", icon: Scale },
  { href: "/pillars/iman", title: "Pillars of iman", desc: "Six articles of faith", icon: Sparkles },
  { href: "/fiqh", title: "Fiqh basics", desc: "Taharah, salah flow, zakat calculator, hajj outline", icon: BookOpen },
  { href: "/ramadan", title: "Ramadan hub", desc: "Itikaf, Laylat al-Qadr, taraweeh", icon: Moon },
  { href: "/hijri", title: "Hijri & days", desc: "Converter + upcoming dates", icon: CalendarDays },
  { href: "/tajweed/practice", title: "Tajweed quiz", desc: "Audio (optional) + rule choice", icon: Library },
  { href: "/tajweed", title: "Tajweed lessons", desc: "Rule reference with examples", icon: BookOpen },
  { href: "/vocabulary", title: "Qur'anic vocabulary", desc: "High-frequency lemmas + examples", icon: Library },
  { href: "/women", title: "Women: history & fiqh", desc: "Profiles and gentle notes", icon: PersonStanding },
  { href: "/children", title: "Children's corner", desc: "Stories + mini-quizzes", icon: Baby },
];

export default function TopicsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-primary">Topics</h1>
        <p className="mt-2 max-w-2xl text-muted">Everything in one place — pick a path and go deeper calmly.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((t) => {
          const Icon = t.icon;
          return (
            <Link key={t.href} href={t.href} className="group block">
              <Card className="h-full p-5 transition group-hover:border-primary/30 group-hover:shadow-md">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h2 className="font-semibold text-primary">{t.title}</h2>
                    <p className="mt-1 text-sm text-muted">{t.desc}</p>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
      <p className="text-sm text-muted">
        Core library:{" "}
        <Link href="/coach" className="font-medium text-primary underline-offset-4 hover:underline">
          Coach
        </Link>
        ,{" "}
        <Link href="/hadith" className="font-medium text-primary underline-offset-4 hover:underline">
          Hadith
        </Link>
        ,{" "}
        <Link href="/stories" className="font-medium text-primary underline-offset-4 hover:underline">
          Stories
        </Link>
        ,{" "}
        <Link href="/adab" className="font-medium text-primary underline-offset-4 hover:underline">
          Adab
        </Link>
        .
      </p>
    </div>
  );
}
