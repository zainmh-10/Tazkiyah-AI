import type { Metadata } from "next";
import { AsmaClient } from "./asma-client";

export const metadata: Metadata = {
  title: "Asma al-Husna | Tazkiyah AI",
  description: "The beautiful names of Allah — Arabic, meaning, reflection, and a du'a pattern.",
};

export default function AsmaPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-primary">Asma al-Husna</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Ninety-nine names commonly counted in devotional practice; meanings are concise English glosses. Reflection lines invite
          pause; du&apos;a lines follow a simple pattern you can personalize with adab.
        </p>
      </div>
      <AsmaClient />
    </div>
  );
}
