import type { Metadata } from "next";
import { SeerahClient } from "./seerah-client";

export const metadata: Metadata = {
  title: "Seerah Timeline | Tazkiyah AI",
  description: "A compact horizontal timeline of major moments in the life of the Prophet Muhammad ﷺ.",
};

export default function SeerahPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-primary">Seerah timeline</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Approximate years for orientation — not a substitute for detailed sirah study. Click along the line to read short
          reminders of each phase.
        </p>
      </div>
      <SeerahClient />
    </div>
  );
}
