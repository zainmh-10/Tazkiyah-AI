import { Card } from "./Card";

type AyahCardProps = {
  arabic: string;
  translation: string;
  reference: string;
};

export function AyahCard({ arabic, translation, reference }: AyahCardProps) {
  return (
    <Card className="p-6 sm:p-8">
      <p className="font-arabic text-right text-2xl leading-relaxed text-primary sm:text-3xl">{arabic}</p>
      <p className="mt-6 text-base italic leading-relaxed text-muted">{translation}</p>
      <p className="mt-4 text-sm font-medium text-primary/80">{reference}</p>
    </Card>
  );
}
