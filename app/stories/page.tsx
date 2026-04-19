import Link from "next/link";
import { stories } from "@/data/stories";
import { Card } from "@/components/Card";

const kindLabel: Record<string, string> = {
  prophet: "Prophets",
  companion: "Companions",
  history: "Islamic History",
};

export default function StoriesIndexPage() {
  const byKind = {
    prophet: stories.filter((s) => s.kind === "prophet"),
    companion: stories.filter((s) => s.kind === "companion"),
    history: stories.filter((s) => s.kind === "history"),
  };

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-semibold text-primary">Stories</h1>
        <p className="mt-2 max-w-2xl text-muted">
          The lives of prophets, the stand of the companions, and the turning points of Islamic history — each with clear
          lessons for the heart today.
        </p>
      </div>

      <nav className="flex flex-wrap gap-2">
        {Object.entries(byKind).map(([kind, list]) => (
          <a
            key={kind}
            href={`#${kind}`}
            className="rounded-full border border-primary/15 bg-white/70 px-3 py-1.5 text-xs font-medium text-primary/90 transition hover:bg-primary/5 hover:text-primary"
          >
            {kindLabel[kind]} ({list.length})
          </a>
        ))}
      </nav>

      {(["prophet", "companion", "history"] as const).map((kind) => (
        <section key={kind} id={kind} className="scroll-mt-24">
          <h2 className="text-xl font-semibold text-primary">{kindLabel[kind]}</h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {byKind[kind].map((story) => (
              <li key={story.slug}>
                <Link href={`/stories/${story.slug}`} className="group block">
                  <Card className="h-full p-6 transition group-hover:border-primary/30 group-hover:shadow-md">
                    {story.era && (
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary/60">{story.era}</p>
                    )}
                    <h3 className="mt-1 text-lg font-semibold text-primary">{story.title}</h3>
                    <p className="mt-1 text-sm italic text-primary/80">{story.subtitle}</p>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{story.summary}</p>
                    <span className="mt-4 inline-block text-sm font-medium text-primary/80 group-hover:underline">
                      Read more
                    </span>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
