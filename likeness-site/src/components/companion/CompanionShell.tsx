"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES, NORTH_STAR } from "@/lib/registry";

export function CompanionShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="mx-auto max-w-[1400px] px-6 pb-28 pt-28 md:px-8">
      <Link
        href="/"
        className="mono text-[11px] tracking-[0.25em] text-muted uppercase transition-colors hover:text-foreground"
      >
        ← OVS // LIKENESS
      </Link>

      <span className="mono mt-8 block text-xs tracking-[0.4em] text-accent">
        {eyebrow}
      </span>
      <h1 className="glow-accent mt-3 text-5xl font-extrabold leading-[0.95] tracking-tighter md:text-7xl">
        {title}
      </h1>
      <p className="mt-5 max-w-[64ch] text-sm leading-relaxed text-muted md:text-base">
        {intro}
      </p>

      {/* companion route chips */}
      <nav className="mt-8 flex flex-wrap gap-2">
        {ROUTES.map((r) => {
          const active = pathname === r.route;
          const cls = active
            ? "bg-accent text-black"
            : r.live
              ? "border border-white/15 text-muted hover:text-foreground"
              : "border border-white/10 text-muted/50";
          return r.live ? (
            <Link
              key={r.route}
              href={r.route}
              className={`mono rounded-sm px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase transition-colors ${cls}`}
            >
              {r.label}
            </Link>
          ) : (
            <span
              key={r.route}
              title="Planned companion route"
              className={`mono rounded-sm px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase ${cls}`}
            >
              {r.label} ·{" "}
              <span className="text-teal/60">soon</span>
            </span>
          );
        })}
      </nav>

      <div className="mono mt-6 border-l border-teal/30 pl-4 text-[11px] leading-relaxed tracking-[0.05em] text-muted">
        {NORTH_STAR.tagline} — {NORTH_STAR.line}
      </div>

      {children}
    </div>
  );
}
