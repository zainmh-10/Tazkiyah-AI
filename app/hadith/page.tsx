import hadith from "@/data/hadith.json";
import { Card } from "@/components/Card";

type HadithEntry = {
  arabic?: string;
  text: string;
  narrator?: string;
  source: string;
};

type HadithSection = {
  category: string;
  description?: string;
  entries: HadithEntry[];
};

function slugify(s: string) {
  return s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default function HadithPage() {
  const sections = hadith as HadithSection[];
  const total = sections.reduce((acc, s) => acc + s.entries.length, 0);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-semibold text-primary">Hadith Library</h1>
        <p className="mt-2 max-w-2xl text-muted">
          {total} authentic narrations from the Prophet ﷺ — arranged by theme, with narrator and source for every entry.
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
            {section.entries.map((h, i) => (
              <Card key={`${section.category}-${i}`} className="p-6">
                {h.arabic && (
                  <p className="text-right font-arabic text-xl leading-relaxed text-primary sm:text-2xl">
                    {h.arabic}
                  </p>
                )}
                <p className={`leading-relaxed text-muted ${h.arabic ? "mt-4" : ""}`}>&ldquo;{h.text}&rdquo;</p>
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-primary/80">
                  {h.narrator && (
                    <span>
                      Narrated by <span className="font-medium">{h.narrator}</span>
                    </span>
                  )}
                  <span className="italic">{h.source}</span>
                </div>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
