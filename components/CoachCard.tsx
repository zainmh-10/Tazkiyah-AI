import type { LucideIcon } from "lucide-react";
import { Card } from "./Card";

type CoachCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  selected: boolean;
  onSelect: () => void;
};

export function CoachCard({ title, description, icon: Icon, selected, onSelect }: CoachCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="w-full text-left"
      aria-pressed={selected}
    >
      <Card
        className={`h-full p-5 transition ${
          selected
            ? "border-primary/40 bg-primary/[0.06] shadow-md ring-2 ring-primary/25"
            : "hover:border-primary/25"
        }`}
      >
        <div className="mb-3 flex items-start gap-3">
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
              selected ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
            }`}
          >
            <Icon className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <div>
            <h3 className="font-semibold text-primary">{title}</h3>
            <p className="mt-1 text-sm text-muted">{description}</p>
          </div>
        </div>
      </Card>
    </button>
  );
}
