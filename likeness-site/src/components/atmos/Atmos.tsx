"use client";

// Authored, on-brand atmospheric primitives — no AI gloss, fully Wrong-If
// compliant. These embody the TAPE 03 grade (tungsten amber vs threshold teal,
// crushed shadow, oxblood reserved) as code, used as backdrops and concept tiles.

import { CSSProperties } from "react";

// Vertical teal rupture bleed at a frame edge — "the player is being watched."
export function RuptureField({
  side = "right",
  className = "",
}: {
  side?: "left" | "right";
  className?: string;
}) {
  const dir = side === "right" ? "to left" : "to right";
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-y-0 ${
        side === "right" ? "right-0" : "left-0"
      } w-1/3 ${className}`}
      style={{
        background: `linear-gradient(${dir}, rgba(111,198,214,0.22), rgba(111,198,214,0.04) 45%, transparent)`,
        mixBlendMode: "screen",
      }}
    />
  );
}

// Scanline / VHS texture overlay.
export function Scanlines({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(0,0,0,0.28) 0px, rgba(0,0,0,0.28) 1px, transparent 1px, transparent 3px)",
        mixBlendMode: "multiply",
        opacity: 0.5,
      }}
    />
  );
}

// A concept tile: a procedurally graded "frame" standing in for a photoreal
// still until the pipeline output is dropped in. Variants map to the bible.
type TileVariant =
  | "wake"
  | "study"
  | "door"
  | "tape"
  | "hallway"
  | "mirror";

const TILE: Record<TileVariant, CSSProperties> = {
  wake: {
    background:
      "radial-gradient(120% 90% at 18% 12%, rgba(167,110,55,0.55), transparent 55%), linear-gradient(90deg, transparent 70%, rgba(111,198,214,0.18)), #15140f",
  },
  study: {
    background:
      "radial-gradient(80% 60% at 70% 30%, rgba(111,198,214,0.20), transparent 60%), radial-gradient(60% 50% at 30% 80%, rgba(167,110,55,0.18), transparent), #111418",
  },
  door: {
    background:
      "linear-gradient(90deg, #0a0907 46%, rgba(127,41,33,0.85) 49%, rgba(127,41,33,0.25) 51%, #0a0907 56%)",
  },
  tape: {
    background:
      "linear-gradient(180deg, rgba(120,120,90,0.10), transparent), radial-gradient(90% 70% at 50% 50%, rgba(167,140,90,0.30), transparent 70%), #161410",
  },
  hallway: {
    background:
      "radial-gradient(45% 70% at 50% 40%, rgba(167,110,55,0.35), transparent 70%), linear-gradient(180deg, #0c0d0b, #060605)",
  },
  mirror: {
    background:
      "linear-gradient(180deg, rgba(111,198,214,0.10), transparent 30%), radial-gradient(70% 60% at 50% 45%, rgba(120,150,150,0.18), transparent 65%), #0e1113",
  },
};

export function ConceptTile({
  variant,
  label,
  code,
  ratio = "16/10",
}: {
  variant: TileVariant;
  label: string;
  code: string;
  ratio?: string;
}) {
  return (
    <div
      className="hud-frame group relative overflow-hidden rounded-md border border-white/10"
      style={{ aspectRatio: ratio, ...TILE[variant] }}
    >
      <Scanlines />
      {variant === "door" && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(35% 80% at 50% 50%, rgba(127,41,33,0.45), transparent 60%)",
          }}
        />
      )}
      <div className="absolute inset-0 grain" />
      <span className="mono absolute left-4 top-4 text-[9px] tracking-[0.3em] text-teal/80">
        {code}
      </span>
      <span className="mono absolute bottom-4 left-4 right-4 text-[10px] uppercase tracking-[0.25em] text-foreground/70">
        {label}
      </span>
    </div>
  );
}
