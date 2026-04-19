import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/Card";
import content from "@/data/women-content.json";

export const metadata: Metadata = {
  title: "Women in Islam | Tazkiyah AI",
  description: "Brief profiles and gentle fiqh reference reminders — follow qualified teachers for rulings.",
};

export default function WomenPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-semibold text-primary">Women — history &amp; fiqh notes</h1>
        <p className="mt-2 max-w-2xl text-muted">{content.intro}</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">Profiles</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {content.figures.map((f) => (
            <Card key={f.id} className="p-6">
              <h3 className="text-lg font-semibold text-primary">{f.name}</h3>
              <p className="mt-2 font-arabic text-right text-lg text-primary/90">{f.arabic}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{f.summary}</p>
              <p className="mt-3 text-sm font-medium text-primary">Lesson: {f.lesson}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">Gentle fiqh reference</h2>
        <div className="space-y-3">
          {content.fiqhNotes.map((n) => (
            <Card key={n.title} className="p-5">
              <h3 className="font-semibold text-primary">{n.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{n.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <p className="text-sm text-muted">
        Related:{" "}
        <Link href="/stories" className="font-medium text-primary underline-offset-4 hover:underline">
          Stories
        </Link>
        ,{" "}
        <Link href="/fiqh" className="font-medium text-primary underline-offset-4 hover:underline">
          Fiqh basics
        </Link>
        .
      </p>
    </div>
  );
}
