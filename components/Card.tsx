import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
};

export function Card({ children, className = "", as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={`rounded-2xl border border-primary/10 bg-white/80 shadow-sm shadow-primary/5 backdrop-blur-sm transition hover:border-primary/20 hover:shadow-md ${className}`}
    >
      {children}
    </Tag>
  );
}
