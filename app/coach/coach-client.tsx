"use client";

import {
  CalendarClock,
  EyeOff,
  Flame,
  Heart,
  Sparkles,
  Star,
  ChevronRight,
  HandHeart,
  Leaf,
  Scale,
  HelpingHand,
  RefreshCcw,
  Anchor,
  MessageCircleHeart,
  SunMedium,
  Droplets,
  ShieldCheck,
  ArrowDownToLine,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";
import { tazkiyahTopics } from "@/data/tazkiyah";
import type { TazkiyahTopic } from "@/data/tazkiyah";
import { Button } from "@/components/Button";
import { CoachCard } from "@/components/CoachCard";
import { GuidancePanel } from "@/components/GuidancePanel";

const iconBySlug: Record<string, typeof Sparkles> = {
  khushu: Sparkles,
  consistency: CalendarClock,
  anger: Flame,
  gaze: EyeOff,
  gratitude: Heart,
  ikhlas: Star,
  tawbah: RefreshCcw,
  tawakkul: Anchor,
  sabr: Leaf,
  dhikr: Droplets,
  dua: MessageCircleHeart,
  humility: ArrowDownToLine,
  envy: ShieldCheck,
  pride: Scale,
  "hope-fear": Scale,
  charity: HandHeart,
  mercy: HelpingHand,
  zuhd: SunMedium,
  brotherhood: Users,
};

const categories = ["All", "Heart", "Worship", "Character", "Social", "Self-discipline"] as const;
type Category = (typeof categories)[number];

export function CoachClient() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [category, setCategory] = useState<Category>("All");

  const filtered = useMemo(
    () => (category === "All" ? tazkiyahTopics : tazkiyahTopics.filter((t) => t.category === category)),
    [category],
  );

  const selected: TazkiyahTopic | null = useMemo(
    () => tazkiyahTopics.find((t) => t.slug === selectedSlug) ?? null,
    [selectedSlug],
  );

  function nextTopic() {
    if (filtered.length === 0) return;
    const idx = selectedSlug ? filtered.findIndex((t) => t.slug === selectedSlug) : -1;
    const next = idx >= 0 ? (idx + 1) % filtered.length : 0;
    setSelectedSlug(filtered[next].slug);
  }

  return (
    <div className="space-y-10">
      <header className="text-center sm:text-left">
        <h1 className="text-3xl font-semibold text-primary sm:text-4xl">Tazkiyah Coach</h1>
        <p className="mt-3 text-lg text-muted">Practical guidance for your heart and actions</p>
      </header>

      <section>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary/70">Choose a topic</h2>
          <div className="flex flex-wrap gap-1.5">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  category === c
                    ? "bg-primary text-primary-foreground"
                    : "border border-primary/15 bg-white/70 text-primary/90 hover:bg-primary/5"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((topic) => {
            const Icon = iconBySlug[topic.slug] ?? Sparkles;
            return (
              <CoachCard
                key={topic.slug}
                title={topic.title}
                description={topic.description}
                icon={Icon}
                selected={selectedSlug === topic.slug}
                onSelect={() => setSelectedSlug(topic.slug)}
              />
            );
          })}
        </div>
      </section>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button variant="ghost" onClick={nextTopic} className="gap-2">
          Next topic
          <ChevronRight className="h-4 w-4" />
        </Button>
        <p className="text-sm text-muted">
          {selected ? "Guidance below updates when you pick a topic." : "Select a card to open your guidance panel."}
        </p>
      </div>

      <GuidancePanel topic={selected} animationKey={selectedSlug ?? "none"} />
    </div>
  );
}
