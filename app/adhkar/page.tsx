import type { Metadata } from "next";
import adhkar from "@/data/adhkar.json";
import { AdhkarClient } from "./adhkar-client";

export const metadata: Metadata = {
  title: "Daily Adhkar | Tazkiyah AI",
  description: "Morning and evening adhkar with Arabic, transliteration, translation, and repetition counts.",
};

export default function AdhkarPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-primary">Daily adhkar</h1>
        <p className="mt-2 max-w-2xl text-muted">
          A concise set of morning and evening remembrances. Check items as you complete them; progress resets at the start of each
          local calendar day. Pair with your trusted hadith collections for full wordings and virtues.
        </p>
      </div>
      <AdhkarClient data={adhkar} />
    </div>
  );
}
