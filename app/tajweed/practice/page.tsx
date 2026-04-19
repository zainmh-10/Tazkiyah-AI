import type { Metadata } from "next";
import { TajweedPracticeClient } from "./practice-client";

export const metadata: Metadata = {
  title: "Tajweed Practice Quiz | Tazkiyah AI",
  description: "Listen to samples (optional MP3), choose the tajweed rule, and check your answer.",
};

export default function TajweedPracticePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-primary">Tajweed practice</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Play the clip if you&apos;ve added static MP3s under <code className="rounded bg-primary/10 px-1">public/audio/tajweed/</code>.
          Otherwise read the Arabic phrase and pick the rule. Links open the full lesson.
        </p>
      </div>
      <TajweedPracticeClient />
    </div>
  );
}
