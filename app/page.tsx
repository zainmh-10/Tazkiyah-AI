import Link from "next/link";
import { BookOpen, Sparkles, Sunrise, ScrollText, BookMarked, LayoutGrid } from "lucide-react";
import { Button } from "@/components/Button";
import { FeatureCard } from "@/components/FeatureCard";

const features = [
  {
    href: "/topics",
    title: "Topics library",
    description: "Adhkar, du'a, Asma al-Husna, seerah timeline, fiqh, Ramadan, Hijri, tajweed quiz, vocabulary, and more.",
    icon: LayoutGrid,
  },
  {
    href: "/coach",
    title: "Tazkiyah Coach",
    description: "18 topics of reflection, evidence, action, and small habits — no chatbot, just intentional steps.",
    icon: Sparkles,
  },
  {
    href: "/tajweed",
    title: "Tajweed Trainer",
    description: "Core recitation rules with Arabic examples — ikhfa, idgham, qalqalah, madd, and more.",
    icon: BookOpen,
  },
  {
    href: "/adab",
    title: "Adab Library",
    description: "Etiquettes of salah, Qur'an, family, travel, and sleep — sourced from Qur'an and Sunnah.",
    icon: Sunrise,
  },
  {
    href: "/hadith",
    title: "Hadith",
    description: "Thematic collections of authentic narrations — intention, worship, heart, social bonds, mercy.",
    icon: ScrollText,
  },
  {
    href: "/stories",
    title: "Stories",
    description: "Prophets, companions, and turning points of Islamic history — with lessons for today.",
    icon: BookMarked,
  },
  {
    href: "/dashboard",
    title: "Daily Tazkiyah",
    description: "Begin each visit with an ayah and paths into reflection, etiquette, and remembrance.",
    icon: Sunrise,
  },
];

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-20">
      <section className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">Tazkiyah AI</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          Purify your heart. Perfect your recitation. Deepen your understanding.
        </p>
        <div className="mt-10">
          <Button href="/dashboard">Start Learning</Button>
        </div>
      </section>

      <section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="group block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <FeatureCard title={f.title} description={f.description} icon={f.icon} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
