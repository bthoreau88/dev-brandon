"use client";

// OVS · WARDROBE — the motel-noir lookbook.
// A fashion thread, not a model shoot. Every garment is a costume-department
// item with an identity lock and a drift risk, same grammar as the character
// registry. Restrained, lived-in, oxblood held in reserve. Built in the OVS
// dark system; self-contained (reads only the shared asset helper).

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { asset } from "@/lib/base";
import { Scanlines } from "@/components/atmos/Atmos";

// ---- The costume law (§ wardrobe DNA) ----
const COSTUME_LAW: { k: string; v: string }[] = [
  { k: "SILHOUETTE", v: "Lived-in, unforced. Clothes that have been slept in, argued in, driven through the night in." },
  { k: "PALETTE", v: "Tungsten amber, threshold teal, graphite. Oxblood is the only warm accent — and it is rationed." },
  { k: "MATERIAL", v: "Cotton gone soft, wool that pills, a leather cracked at the fold. Nothing new. Nothing glamorous." },
  { k: "RULE", v: "The wardrobe must survive a face swap. If the double wears it, only the timing should feel wrong — never the cloth." },
];

// ---- Looks — costume-department items ----
type Look = {
  code: string;
  name: string;
  worn: string;
  scene: string;
  image: string;
  lock: string;
  drift: string;
  double?: boolean;
};

const LOOKS: Look[] = [
  {
    code: "WRD_THO_01",
    name: "The Arrival Coat",
    worn: "THOREAU",
    scene: "EXT · ARRIVAL · 03:14",
    image: "/stills/thoreau-portrait-clean.png",
    lock: "Heavy charcoal overcoat, collar up, round gold glasses catching the sign light. Worn open, never buttoned.",
    drift: "Tailored hero-coat, brand-new wool, missing glasses.",
  },
  {
    code: "WRD_DRY_01",
    name: "The Anchor Dress",
    worn: "DRYA",
    scene: "INT · ROOM 14 · RESIDUE",
    image: "/stills/drya-close.png",
    lock: "Deep oxblood slip under a men's cardigan two sizes too big. Jewelry and piercing detail kept exact.",
    drift: "Glamour-model gown, body-type drift, victim-only staging.",
  },
  {
    code: "WRD_THO_02",
    name: "The Stealth Layer",
    worn: "THOREAU",
    scene: "INT · HALLWAY · REPETITION",
    image: "/stills/thoreau-stealth.png",
    lock: "Undershirt, suspender straps hanging, wristwatch stopped. The look of a man who stopped getting dressed halfway.",
    drift: "Action-hero tactical wear, over-defined musculature.",
  },
  {
    code: "WRD_DRY_02",
    name: "The Over-Shoulder",
    worn: "DRYA",
    scene: "INT · MIRROR · LAG",
    image: "/stills/drya-over-shoulder.png",
    lock: "Bare shoulder, thin gold chain, hair down. Read from behind — the reflection is what the camera is really watching.",
    drift: "Beauty-campaign lighting, flawless skin retouch.",
  },
  {
    code: "WRD_DBL_01",
    name: "The Same Coat, Wrong",
    worn: "DARK THOREAU",
    scene: "INT · DOUBLE OCCUPANCY",
    image: "/stills/the-other.png",
    lock: "Identical to WRD_THO_01 down to the thread — buttoned all the way, which THOREAU never does. That is the only tell.",
    drift: "Monster redesign, torn/bloodied restyle, losing the base garment.",
    double: true,
  },
  {
    code: "WRD_MAT_01",
    name: "Material Study",
    worn: "COSTUME DEPT",
    scene: "MACRO · FABRIC TEST",
    image: "/stills/fabric.png",
    lock: "Weave, pill, and fade reference for every hero garment. The cloth is photographed before the face ever is.",
    drift: "CG fabric sheen, repeating texture tiles, plastic normal maps.",
  },
];

// ---- Palette matrix (the graded DNA) ----
const PALETTE: { hex: string; name: string; note: string }[] = [
  { hex: "#a76e37", name: "TUNGSTEN", note: "Motel lamp amber" },
  { hex: "#6fc6d6", name: "THRESHOLD", note: "Cold HUD teal" },
  { hex: "#7f2921", name: "OXBLOOD", note: "Rationed warm accent" },
  { hex: "#14161a", name: "GRAPHITE", note: "The void the room sits in" },
];

export function Wardrobe() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-[1400px] px-6 pt-7 md:px-10">
        <Link
          href="/"
          className="mono text-[11px] tracking-[0.25em] text-muted uppercase transition-colors hover:text-foreground"
        >
          ← OVS // LIKENESS
        </Link>
      </div>

      {/* ============ HERO ============ */}
      <section className="grain relative flex min-h-[86vh] items-end overflow-hidden px-6 pb-16 md:px-10">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={asset("/stills/drya-face-study.png")}
            alt="OVS wardrobe study"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40 grayscale-[0.5] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
          <Scanlines />
        </div>
        <div className="relative">
          <span className="mono text-xs tracking-[0.5em] text-accent">
            OVS&nbsp;//&nbsp;COSTUME&nbsp;DEPT
          </span>
          <h1 className="glow-accent mt-4 text-[18vw] font-extrabold leading-[0.82] tracking-tighter md:text-[12vw]">
            WARDROBE
          </h1>
          <p className="mt-6 max-w-[54ch] text-sm leading-relaxed text-muted md:text-base">
            A motel-noir lookbook — the dressed language of the LIKENESS
            universe. Not a model shoot. Every garment is an evidence item:
            lived-in, restrained, and locked to an identity so tightly that even
            the double has to wear it right.
          </p>
          <span className="mono mt-6 inline-flex items-center gap-2.5 rounded-sm border border-teal/40 px-4 py-2 text-[10px] font-semibold tracking-[0.2em] text-teal uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            WORK_OVS_FASHION · LOOKBOOK LIVE
          </span>
        </div>
      </section>

      {/* ============ THE COSTUME LAW ============ */}
      <section className="grain relative border-y border-white/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <span className="mono text-xs tracking-[0.4em] text-teal">
            § WRD-00 // THE COSTUME LAW
          </span>
          <h2 className="mt-4 max-w-[22ch] text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Dress the wound, not the runway.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-white/10 bg-white/10 md:grid-cols-2">
            {COSTUME_LAW.map((row, i) => (
              <motion.div
                key={row.k}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                className="bg-background p-7"
              >
                <span className="mono text-[10px] tracking-[0.35em] text-accent">
                  {row.k}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {row.v}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ THE LOOKBOOK ============ */}
      <section
        id="looks"
        className="grain relative mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32"
      >
        <span className="mono text-xs tracking-[0.4em] text-accent">
          § WRD-01 // THE LOOKBOOK
        </span>
        <h2 className="mt-4 max-w-[20ch] text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl">
          Six looks. One of them is a lie.
        </h2>
        <p className="mt-5 max-w-[60ch] text-sm leading-relaxed text-muted md:text-base">
          Each item is filed like evidence: an identity lock (what must stay
          true) and a drift risk (how it goes wrong). The double&rsquo;s look is
          the same cloth as the original — the tell is in the wearing, never the
          garment.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LOOKS.map((l, i) => (
            <motion.article
              key={l.code}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                type: "spring",
                stiffness: 85,
                damping: 20,
                delay: (i % 3) * 0.07,
              }}
              className={`hud-frame glass group overflow-hidden rounded-md ${
                l.double ? "ring-1 ring-accent/40" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-black">
                <Image
                  src={asset(l.image)}
                  alt={l.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 440px"
                  className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                    l.double ? "grayscale-[0.35] contrast-110" : "grayscale-[0.45]"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
                <span className="mono absolute top-4 left-4 text-[9px] tracking-[0.3em] text-teal/90">
                  {l.code}
                </span>
                <span
                  className={`mono absolute top-4 right-4 rounded-sm px-2.5 py-1 text-[9px] font-semibold tracking-[0.15em] ${
                    l.double ? "bg-accent/90 text-black" : "bg-teal/80 text-black"
                  }`}
                >
                  {l.worn}
                </span>
                <div className="absolute bottom-0 left-0 p-5">
                  <span className="mono text-[10px] tracking-[0.3em] text-muted">
                    {l.scene}
                  </span>
                  <h3 className="glow-accent text-2xl font-extrabold tracking-tight md:text-3xl">
                    {l.name}
                  </h3>
                </div>
              </div>
              <div className="space-y-3 p-5">
                <div>
                  <span className="mono block text-[9px] tracking-[0.3em] text-teal">
                    IDENTITY LOCK
                  </span>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted">
                    {l.lock}
                  </p>
                </div>
                <div>
                  <span className="mono block text-[9px] tracking-[0.3em] text-accent/80">
                    DRIFT RISK
                  </span>
                  <p className="mono mt-1 text-[11px] leading-relaxed text-muted/80">
                    {l.drift}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ============ PALETTE MATRIX ============ */}
      <section className="grain relative border-y border-white/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="mono text-xs tracking-[0.4em] text-teal">
                § WRD-02 // COLOR MATRIX
              </span>
              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                Four colors, one rule.
              </h2>
            </div>
            <span className="mono max-w-[34ch] text-[11px] leading-relaxed tracking-[0.15em] text-muted">
              THE GRADE IS THE WARDROBE. LIGHT DOES HALF THE COSTUMING.
            </span>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {PALETTE.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="hud-frame overflow-hidden rounded-md border border-white/10"
              >
                <div
                  className="relative h-28 w-full"
                  style={{ backgroundColor: p.hex }}
                >
                  <div className="absolute inset-0 grain" />
                </div>
                <div className="bg-background p-4">
                  <span className="mono text-[11px] font-semibold tracking-[0.25em]">
                    {p.name}
                  </span>
                  <span className="mono mt-1 block text-[10px] tracking-[0.1em] text-muted">
                    {p.hex.toUpperCase()}
                  </span>
                  <p className="mt-2 text-[11px] leading-snug text-muted/80">
                    {p.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ closing CTA ============ */}
      <footer className="grain relative border-t border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <span className="mono text-xs tracking-[0.4em] text-accent">
            OVS // WARDROBE · CLOSE
          </span>
          <h2 className="glow-accent mt-4 max-w-[18ch] text-5xl font-extrabold leading-[0.92] tracking-tighter md:text-8xl">
            The cloth remembers too.
          </h2>
          <div className="mt-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-[46ch] text-sm text-muted">
              A wardrobe you could pull from a real closet, in a real motel, on a
              real bad night. It has to be ordinary enough that when the double
              wears it, you almost don&rsquo;t notice — until you do.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/characters"
                className="mono rounded-sm bg-accent px-5 py-3 text-[11px] font-semibold tracking-[0.2em] text-black uppercase transition-transform hover:scale-105"
              >
                Who wears it
              </Link>
              <Link
                href="/street"
                className="mono rounded-sm border border-white/15 px-5 py-3 text-[11px] font-semibold tracking-[0.2em] text-muted uppercase transition-colors hover:text-foreground"
              >
                Out on the street
              </Link>
              <Link
                href="/universe"
                className="mono rounded-sm border border-teal/40 px-5 py-3 text-[11px] font-semibold tracking-[0.2em] text-teal uppercase transition-colors hover:text-foreground"
              >
                Enter the archive
              </Link>
            </div>
          </div>
          <div className="mono mt-16 flex flex-col gap-2 border-t border-white/10 pt-6 text-[11px] tracking-[0.2em] text-muted md:flex-row md:justify-between">
            <span>© {2026} Omnia Vanitas Studios — LIKENESS // WARDROBE</span>
            <span>A THREAD, NOT A SHOOT</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
