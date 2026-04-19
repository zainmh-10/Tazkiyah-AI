import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Ramadan Hub | Tazkiyah AI",
  description: "I'tikaf etiquette, Laylat al-Qadr du'a themes, and taraweeh tips — seasonal reminders.",
};

export default function RamadanPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-semibold text-primary">Ramadan hub</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Short seasonal notes — not a substitute for fiqh classes. Adjust with your mosque and scholars.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">I&apos;tikaf etiquette</h2>
        <Card className="p-6">
          <ul className="list-inside list-disc space-y-2 text-muted">
            <li>Intend seclusion in the mosque to draw near to Allah — minimize worldly talk and phone noise.</li>
            <li>Keep the prayer row and shared space clean; smell neutral (avoid strong perfume in mixed settings per local adab).</li>
            <li>Do not exit without need; when needs arise, brief and return — rulings on what breaks i&apos;tikaf vary by school.</li>
            <li>Prioritize Qur&apos;an, salah, du&apos;a, and sleep enough to worship with presence.</li>
          </ul>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">Laylat al-Qadr — du&apos;a themes</h2>
        <Card className="p-6 space-y-4">
          <p className="font-arabic text-right text-2xl leading-relaxed text-primary">
            اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي
          </p>
          <p className="text-sm italic text-muted">Allahumma innaka &apos;afuwwun tuhibbul-&apos;afwa fa&apos;fu &apos;anni — often repeated in seeking pardon.</p>
          <p className="text-sm text-muted">
            Seek odd nights in the last ten; increase salawat on the Prophet ﷺ, Qur&apos;an, istighfar, and heartfelt needs with
            humility. Allah knows best which night it is.
          </p>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">Taraweeh tips</h2>
        <Card className="p-6">
          <ul className="list-inside list-disc space-y-2 text-muted">
            <li>Eat light before coming; hydrate well after, not gluttony at iftar.</li>
            <li>Stand with calm — if tired, rest between sets where allowed; some follow shorter jama&apos;ah at first.</li>
            <li>Follow the imam&apos;s recitation quietly; avoid correcting aloud.</li>
            <li>If you pray alone at home, pace recitation so khushu&apos; grows rather than racing.</li>
          </ul>
        </Card>
      </section>

      <p className="text-sm text-muted">
        Track Islamic dates on the{" "}
        <Link href="/hijri" className="font-medium text-primary underline-offset-4 hover:underline">
          Hijri &amp; days
        </Link>{" "}
        page.
      </p>
    </div>
  );
}
