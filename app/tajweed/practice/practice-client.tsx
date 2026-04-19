"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import quiz from "@/data/tajweed-quiz.json";
import { Card } from "@/components/Card";
export function TajweedPracticeClient() {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [show, setShow] = useState(false);
  const [audioErr, setAudioErr] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const q = quiz[idx];
  const atEnd = idx >= quiz.length - 1;

  const correct = picked === q.correctSlug;

  const choices = useMemo(() => {
    const copy = [...q.choices];
    return copy.sort(() => Math.random() - 0.5);
  }, [q]);

  const next = () => {
    setPicked(null);
    setShow(false);
    setAudioErr(false);
    setIdx((i) => Math.min(i + 1, quiz.length - 1));
  };

  const prev = () => {
    setPicked(null);
    setShow(false);
    setAudioErr(false);
    setIdx((i) => Math.max(i - 1, 0));
  };

  return (
    <div className="space-y-6">
      <Card className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-muted">
          <span>
            Question {idx + 1} / {quiz.length}
          </span>
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">Listen + choose</span>
        </div>
        <p className="mt-6 font-arabic text-center text-3xl leading-relaxed text-primary">{q.arabic}</p>
        <p className="mt-2 text-center text-sm text-muted">{q.hint}</p>

        <div className="mt-6 flex flex-col items-center gap-3">
          <audio
            ref={audioRef}
            key={q.id}
            controls
            preload="none"
            src={q.audioPath}
            onError={() => setAudioErr(true)}
            onLoadedData={() => setAudioErr(false)}
            className="w-full max-w-md"
          />
          {audioErr && (
            <p className="max-w-md text-center text-xs text-muted">
              No audio file at <code className="rounded bg-primary/10 px-1">{q.audioPath}</code>. Add a short MP3 under{" "}
              <code className="rounded bg-primary/10 px-1">public/audio/tajweed/</code> with that name, or practice by reading the
              example aloud.
            </p>
          )}
        </div>

        <div className="mt-8 grid gap-2 sm:grid-cols-2">
          {choices.map((c) => {
            const isSel = picked === c.slug;
            const isCor = show && c.slug === q.correctSlug;
            const isWrong = show && isSel && !isCor;
            return (
              <button
                key={c.slug}
                type="button"
                onClick={() => !show && setPicked(c.slug)}
                className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                  isCor
                    ? "border-primary bg-primary/15 text-primary"
                    : isWrong
                      ? "border-red-300/80 bg-red-50 text-red-900"
                      : isSel
                        ? "border-primary/40 bg-primary/5 text-primary"
                        : "border-primary/15 bg-white hover:border-primary/30"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => picked && setShow(true)}
            disabled={!picked || show}
            className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Check answer
          </button>
          {show && (
            <span className={`self-center text-sm font-medium ${correct ? "text-primary" : "text-red-800"}`}>
              {correct ? "Correct." : "Not quite — see the rule page for review."}
            </span>
          )}
          {show && (
            <Link
              href={`/tajweed/${q.correctSlug}`}
              className="self-center text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Open rule: {q.correctSlug}
            </Link>
          )}
        </div>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-primary/10 pt-6">
          <button
            type="button"
            onClick={prev}
            disabled={idx === 0}
            className="inline-flex items-center justify-center rounded-xl border border-primary/15 bg-white/60 px-5 py-2.5 text-sm font-medium text-primary transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={next}
            disabled={atEnd}
            className="inline-flex items-center justify-center rounded-xl border border-primary/15 bg-white/60 px-5 py-2.5 text-sm font-medium text-primary transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </Card>
    </div>
  );
}
