import Link from "next/link";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/topics", label: "Topics" },
  { href: "/coach", label: "Coach" },
  { href: "/tajweed", label: "Tajweed" },
  { href: "/adab", label: "Adab" },
  { href: "/hadith", label: "Hadith" },
  { href: "/stories", label: "Stories" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-primary">
          Tazkiyah AI
        </Link>
        <ul className="flex flex-wrap items-center gap-1 sm:gap-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-primary/5 hover:text-primary"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
