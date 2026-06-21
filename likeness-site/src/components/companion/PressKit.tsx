"use client";

import Image from "next/image";
import Link from "next/link";
import { NORTH_STAR, WORKS } from "@/lib/registry";
import { asset } from "@/lib/base";

const FACTS: [string, string][] = [
  ["STUDIO", NORTH_STAR.studio],
  ["STATUS", "In Development"],
  ["SETTING", NORTH_STAR.setting],
  ["FORMAT", "UE5 vertical slice · ~30 min"],
  ["GENRE", "Psychological romantic horror"],
  ["PILLARS", "No combat · room as antagonist · two endings"],
];

const TAGLINES = [NORTH_STAR.tagline, NORTH_STAR.line, "Bad games answer. Good games haunt."];

const KEY_ART = [
  { img: "/stills/poster-room14.png", label: "KEY ART · ROOM 14" },
  { img: "/stills/likeness-tape003-poster.png", label: "KEY ART · THOREAU & DRYA" },
  { img: "/stills/choice-door.png", label: "FINAL FRAME · THE CHOICE" },
];

export function PressKit() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 pb-28 pt-28 md:px-8">
      <Link
        href="/"
        className="mono text-[11px] tracking-[0.25em] text-muted uppercase transition-colors hover:text-foreground"
      >
        ← OVS // LIKENESS
      </Link>

      <span className="mono mt-8 block text-xs tracking-[0.4em] text-accent">
        PRESS // FACT SHEET
      </span>
      <h1 className="glow-accent mt-3 text-5xl font-extrabold leading-[0.95] tracking-tighter md:text-7xl">
        LIKENESS : THE GAME
      </h1>
      <p className="mt-5 max-w-[64ch] text-sm leading-relaxed text-muted md:text-base">
        {NORTH_STAR.promise}
      </p>

      {/* taglines */}
      <div className="mt-8 flex flex-wrap gap-2">
        {TAGLINES.map((t) => (
          <span
            key={t}
            className="mono rounded-sm border border-white/15 px-3 py-1.5 text-[11px] tracking-[0.1em] text-teal"
          >
            {t}
          </span>
        ))}
      </div>

      {/* fact sheet */}
      <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-md bg-white/5 sm:grid-cols-3">
        {FACTS.map(([k, v]) => (
          <div key={k} className="bg-background/80 p-5">
            <span className="mono block text-[9px] tracking-[0.25em] text-teal">{k}</span>
            <span className="mt-2 block text-sm text-foreground">{v}</span>
          </div>
        ))}
      </div>

      {/* key art */}
      <div className="mt-12">
        <span className="mono text-xs tracking-[0.4em] text-accent">KEY ART</span>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {KEY_ART.map((k) => (
            <figure
              key={k.img}
              className="hud-frame relative aspect-[3/4] overflow-hidden rounded-md border border-white/10"
            >
              <Image
                src={asset(k.img)}
                alt={k.label}
                fill
                sizes="(max-width: 640px) 100vw, 440px"
                className="object-cover"
              />
              <figcaption className="mono absolute bottom-3 left-3 text-[9px] tracking-[0.25em] text-teal">
                {k.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* teaser slot */}
      <div className="mt-12">
        <span className="mono text-xs tracking-[0.4em] text-accent">TEASER</span>
        <div className="hud-frame mt-5 flex aspect-video w-full items-center justify-center rounded-md border border-dashed border-white/15 bg-black/40">
          <div className="text-center">
            <span className="mono inline-flex items-center gap-2.5 rounded-sm border border-teal/40 px-4 py-2 text-[11px] tracking-[0.25em] text-teal uppercase">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
              Teaser in production
            </span>
            <p className="mono mt-3 text-[10px] tracking-[0.2em] text-muted">
              CUT VIA THE OVS / HIGGSFIELD CAMPAIGN — DROPS HERE ON APPROVAL
            </p>
          </div>
        </div>
      </div>

      {/* the universe */}
      <div className="mt-12">
        <span className="mono text-xs tracking-[0.4em] text-accent">THE UNIVERSE</span>
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {WORKS.map((w) => (
            <div key={w.id} className="glass hud-frame rounded-md p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">{w.title}</span>
                <span className="mono text-[9px] tracking-[0.2em] text-muted">
                  {w.kind} · {w.status}
                </span>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">{w.blurb}</p>
            </div>
          ))}
        </div>
      </div>

      {/* contact */}
      <div className="mono mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-[11px] tracking-[0.2em] text-muted md:flex-row md:justify-between">
        <span>{NORTH_STAR.studio} — LIKENESS : THE GAME</span>
        <span>bthoreau88.github.io/dev-brandon · IN DEVELOPMENT</span>
      </div>
    </div>
  );
}
