import Link from "next/link";
import { notFound } from "next/navigation";
import { stories } from "@/data/stories";
import { Card } from "@/components/Card";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export default function StoryPage({ params }: Props) {
  const story = stories.find((s) => s.slug === params.slug);
  if (!story) notFound();

  const kindLabel =
    story.kind === "prophet" ? "Prophet" : story.kind === "companion" ? "Companion" : "Islamic History";

  return (
    <article className="space-y-8">
      <div>
        <Link href="/stories" className="text-sm font-medium text-primary/80 hover:underline">
          ← All stories
        </Link>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-primary/60">
          {kindLabel}
          {story.era ? ` · ${story.era}` : ""}
        </p>
        <h1 className="mt-1 text-3xl font-semibold text-primary sm:text-4xl">{story.title}</h1>
        <p className="mt-2 text-lg italic text-primary/80">{story.subtitle}</p>
      </div>

      <Card className="p-6 sm:p-8">
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-wide text-primary/60">Summary</h2>
          <p className="mt-3 leading-relaxed text-muted">{story.summary}</p>
        </section>

        {story.sections.map((s, i) => (
          <section key={i} className="mt-10">
            <h2 className="text-lg font-semibold text-primary">{s.heading}</h2>
            <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
          </section>
        ))}

        <section className="mt-10 rounded-2xl bg-primary/5 p-5 pl-4 sm:p-6 sm:pl-5 border-l-4 border-l-primary/30">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-primary/70">Lessons</h2>
          <ul className="mt-3 space-y-2 text-muted">
            {story.lessons.map((l, i) => (
              <li key={i} className="flex gap-3 leading-relaxed">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </section>

        {story.source && (
          <p className="mt-6 text-xs italic text-primary/70">Sources: {story.source}</p>
        )}
      </Card>
    </article>
  );
}
