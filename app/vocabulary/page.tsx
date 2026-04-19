import type { Metadata } from "next";
import { VocabClient } from "./vocab-client";

export const metadata: Metadata = {
  title: "Qur'anic Vocabulary | Tazkiyah AI",
  description: "High-frequency Qur'anic lemmas with short meanings and word-by-word style examples.",
};

export default function VocabularyPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-primary">Arabic vocabulary</h1>
        <p className="mt-2 max-w-2xl text-muted">
          A compact set of common Qur&apos;anic lemmas with example phrases. Expand with a structured morphology course and
          mushaf reading.
        </p>
      </div>
      <VocabClient />
    </div>
  );
}
