import adab from "@/data/adab.json";
import { Card } from "@/components/Card";

type AdabSection = {
  category: string;
  description?: string;
  entries: { title: string; explanation: string; citation: string }[];
};

function slugify(s: string) {
  return s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default function AdabPage() {
  const sections = adab as AdabSection[];
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-semibold text-primary">Adab Library</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Etiquettes from Qur&apos;an and Sunnah — from the prayer mat to the dinner table, the road, and the bed.
        </p>
      </div>

      <nav className="flex flex-wrap gap-2">
        {sections.map((s) => (
          <a
            key={s.category}
            href={`#${slugify(s.category)}`}
            className="rounded-full border border-primary/15 bg-white/70 px-3 py-1.5 text-xs font-medium text-primary/90 transition hover:bg-primary/5 hover:text-primary"
          >
            {s.category}
          </a>
        ))}
      </nav>

      {sections.map((section) => (
        <section key={section.category} id={slugify(section.category)} className="scroll-mt-24">
          <h2 className="text-xl font-semibold text-primary">{section.category}</h2>
          {section.description && <p className="mt-1 text-sm text-muted">{section.description}</p>}
          <div className="mt-5 space-y-4">
            {section.entries.map((e) => (
              <Card key={e.title} className="p-6">
                <h3 className="text-lg font-semibold text-primary">{e.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{e.explanation}</p>
                <p className="mt-4 border-l-2 border-primary/25 pl-4 text-sm italic text-primary/90">{e.citation}</p>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
