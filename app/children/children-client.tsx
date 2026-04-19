"use client";

import { useState } from "react";
import stories from "@/data/children-stories.json";
import { Card } from "@/components/Card";

export function ChildrenClient() {
  const [open, setOpen] = useState(stories[0]?.id ?? "");
  const story = stories.find((s) => s.id === open) ?? stories[0];
  const [answers, setAnswers] = useState<Record<string, number | null>>({});

  if (!story) return null;

  const setAns = (qi: number, idx: number) => {
    setAnswers((a) => ({ ...a, [`${story.id}-${qi}`]: idx }));
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
      <nav className="space-y-1">
        {stories.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setOpen(s.id)}
            className={`w-full rounded-xl px-4 py-2 text-left text-sm font-medium transition ${
              s.id === open ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary hover:bg-primary/15"
            }`}
          >
            {s.title}
          </button>
        ))}
      </nav>
      <Card className="p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary/70">Reading level: {story.readingLevel}</p>
        <h2 className="mt-2 text-2xl font-semibold text-primary">{story.title}</h2>
        <p className="mt-4 leading-relaxed text-muted">{story.body}</p>
        <p className="mt-4 rounded-xl bg-primary/5 px-4 py-3 text-xs text-muted">
          <span className="font-semibold text-primary">Illustration idea:</span> {story.illustrationHint}
        </p>
        <div className="mt-8 space-y-6 border-t border-primary/10 pt-8">
          <h3 className="text-lg font-semibold text-primary">Mini-quiz</h3>
          {story.quiz.map((qu, qi) => {
            const key = `${story.id}-${qi}`;
            const sel = answers[key];
            const ok = sel === qu.correctIndex;
            return (
              <div key={key}>
                <p className="font-medium text-primary">{qu.q}</p>
                <div className="mt-2 flex flex-col gap-2">
                  {qu.choices.map((c, ci) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setAns(qi, ci)}
                      className={`rounded-xl border px-4 py-2 text-left text-sm transition ${
                        sel === ci ? (ok ? "border-primary bg-primary/10" : "border-red-300 bg-red-50") : "border-primary/15 hover:border-primary/30"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                {sel != null && (
                  <p className={`mt-2 text-sm ${ok ? "text-primary" : "text-red-800"}`}>
                    {ok ? "Nice!" : "Try again — think about the lesson."}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
