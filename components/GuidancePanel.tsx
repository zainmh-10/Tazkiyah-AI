import type { TazkiyahTopic } from "@/data/tazkiyah";
import { Card } from "./Card";

type GuidancePanelProps = {
  topic: TazkiyahTopic | null;
  animationKey: string;
};

export function GuidancePanel({ topic, animationKey }: GuidancePanelProps) {
  if (!topic) {
    return (
      <Card className="p-8 text-center">
        <p className="text-muted">Select a topic to begin.</p>
      </Card>
    );
  }

  return (
    <div key={animationKey} className="animate-fade-in space-y-6">
      <Card className="p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-primary">{topic.title}</h2>
        <section className="mt-6">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-primary/60">Reflection</h3>
          <p className="mt-2 leading-relaxed text-muted">{topic.reflection}</p>
        </section>
        <section className="mt-8 rounded-2xl bg-primary/5 p-5 pl-4 sm:p-6 sm:pl-5 border-l-4 border-l-primary/30">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-primary/70">Evidence</h3>
          {topic.evidence.type === "ayah" ? (
            <div className="mt-3 space-y-4">
              <p className="text-right font-arabic text-xl leading-relaxed text-primary sm:text-2xl">
                {topic.evidence.arabic}
              </p>
              <p className="text-sm italic leading-relaxed text-muted">{topic.evidence.translation}</p>
              <p className="text-sm font-medium text-primary/85">{topic.evidence.reference}</p>
            </div>
          ) : (
            <div className="mt-3 space-y-3">
              <p className="leading-relaxed text-muted">{topic.evidence.text}</p>
              <p className="text-sm font-medium text-primary/85">{topic.evidence.source}</p>
            </div>
          )}
        </section>
        <section className="mt-8">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-primary/60">Action step</h3>
          <p className="mt-2 leading-relaxed text-muted">{topic.action}</p>
        </section>
        <section className="mt-8 border-t border-primary/10 pt-8">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-primary/60">Small habit</h3>
          <p className="mt-2 leading-relaxed text-muted">{topic.habit}</p>
        </section>
      </Card>
    </div>
  );
}
