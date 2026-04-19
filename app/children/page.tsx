import type { Metadata } from "next";
import { ChildrenClient } from "./children-client";

export const metadata: Metadata = {
  title: "Children's Corner | Tazkiyah AI",
  description: "Short stories with illustration prompts and mini-quizzes.",
};

export default function ChildrenPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-primary">Children&apos;s corner</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Simple narratives with values — read together, draw the illustration idea, and try the tiny quizzes.
        </p>
      </div>
      <ChildrenClient />
    </div>
  );
}
