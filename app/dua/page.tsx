import type { Metadata } from "next";
import { DuaClient } from "./dua-client";

export const metadata: Metadata = {
  title: "Du'a Library | Tazkiyah AI",
  description: "Categorized supplications with context, timing, Arabic, and translation.",
};

export default function DuaPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-primary">Du&apos;a library</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Short, practical du&apos;as with notes on when they fit. For full istikharah wording and fiqh details, follow your
          teacher and major hadith collections.
        </p>
      </div>
      <DuaClient />
    </div>
  );
}
