import Link from "next/link";
import { notFound } from "next/navigation";
import tajweed from "@/data/tajweed.json";
import { Card } from "@/components/Card";

type Props = { params: { rule: string } };

type Example = { arabic: string; note?: string };
type Rule = {
  slug: string;
  title: string;
  category?: string;
  explanation: string;
  detail?: string;
  letters?: string[];
  examples?: Example[];
  exampleArabic?: string;
};

export function generateStaticParams() {
  return tajweed.map((r) => ({ rule: r.slug }));
}

export default function TajweedRulePage({ params }: Props) {
  const rule = (tajweed as Rule[]).find((r) => r.slug === params.rule);
  if (!rule) notFound();

  const examples: Example[] =
    rule.examples && rule.examples.length > 0
      ? rule.examples
      : rule.exampleArabic
        ? [{ arabic: rule.exampleArabic }]
        : [];

  return (
    <div className="space-y-8">
      <div>
        <Link href="/tajweed" className="text-sm font-medium text-primary/80 hover:underline">
          ← All rules
        </Link>
        {rule.category && (
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-primary/60">{rule.category}</p>
        )}
        <h1 className="mt-1 text-3xl font-semibold text-primary">{rule.title}</h1>
      </div>

      <Card className="p-6 sm:p-8">
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-wide text-primary/60">Explanation</h2>
          <p className="mt-3 leading-relaxed text-muted">{rule.explanation}</p>
        </section>

        {rule.detail && (
          <section className="mt-8">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-primary/60">In depth</h2>
            <p className="mt-3 leading-relaxed text-muted">{rule.detail}</p>
          </section>
        )}

        {rule.letters && rule.letters.length > 0 && (
          <section className="mt-8">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-primary/60">Letters</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {rule.letters.map((letter, i) => (
                <span
                  key={`${letter}-${i}`}
                  className="rounded-lg border border-primary/15 bg-primary/5 px-3 py-1.5 font-arabic text-lg text-primary"
                >
                  {letter}
                </span>
              ))}
            </div>
          </section>
        )}

        {examples.length > 0 && (
          <section className="mt-8">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-primary/60">Examples</h2>
            <ul className="mt-3 space-y-4">
              {examples.map((ex, i) => (
                <li
                  key={i}
                  className="rounded-2xl border border-primary/10 bg-primary/5 p-4 sm:p-5"
                >
                  <p className="text-right font-arabic text-2xl leading-relaxed text-primary sm:text-3xl">
                    {ex.arabic}
                  </p>
                  {ex.note && <p className="mt-2 text-sm text-muted">{ex.note}</p>}
                </li>
              ))}
            </ul>
          </section>
        )}
      </Card>
    </div>
  );
}
