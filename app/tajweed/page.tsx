import Link from "next/link";
import tajweed from "@/data/tajweed.json";
import { Card } from "@/components/Card";

export default function TajweedIndexPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-primary">Tajweed</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Essential rules of recitation. Tap a rule for a short explanation and an Arabic example. Try the{" "}
          <Link href="/tajweed/practice" className="font-medium text-primary underline-offset-4 hover:underline">
            practice quiz
          </Link>{" "}
          (optional audio).
        </p>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2">
        {tajweed.map((rule) => (
          <li key={rule.slug}>
            <Link href={`/tajweed/${rule.slug}`} className="group block">
              <Card className="p-6 transition group-hover:border-primary/30 group-hover:shadow-md">
                <h2 className="text-lg font-semibold text-primary">{rule.title}</h2>
                <p className="mt-2 line-clamp-2 text-sm text-muted">{rule.explanation}</p>
                <span className="mt-4 inline-block text-sm font-medium text-primary/80 group-hover:underline">
                  Read more
                </span>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
