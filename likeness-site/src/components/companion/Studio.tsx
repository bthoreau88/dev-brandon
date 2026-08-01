"use client";

// OMNIA VANITAS STUDIOS — the studio manifesto / about page.
// Recreated from a brand "about" format (statement typography, pillars, the
// works index) and rebuilt into the OVS dark system. Reads the anthology and
// north star from the shared registry so the studio page and the game speak
// the same language.

import Link from "next/link";
import { motion } from "framer-motion";
import { NORTH_STAR, WORKS } from "@/lib/registry";

// ---- The doctrine (studio pillars) ----
const DOCTRINE: { n: string; k: string; v: string }[] = [
  {
    n: "01",
    k: "EVIDENCE, NOT EXPLANATION",
    v: "We hand you the record and let you carry the question home. The work never tells you what it meant — it repeats, delays, and withholds until the meaning is yours to accuse.",
  },
  {
    n: "02",
    k: "IDENTITY IS A LOCK",
    v: "Every face, garment, and voice is pinned to a reference. The horror is drift — the moment the copy answers for the original and no one in the room corrects it.",
  },
  {
    n: "03",
    k: "THE ROOM REMEMBERS",
    v: "Space is the antagonist. Objects keep contradictory versions of the truth, and your own memory might be the edited copy playing back.",
  },
  {
    n: "04",
    k: "DIEGETIC FIRST",
    v: "Nothing announces itself as art. The score is room tone, the wardrobe is a real closet, and the thing in the doorway is wearing your coat.",
  },
  {
    n: "05",
    k: "RESTRAINT IS THE BUDGET",
    v: "Oxblood is rationed and gore is cheap. We spend on timing, on delay, on the reflection that answers a half-second late.",
  },
];

const KIND_STYLE: Record<string, string> = {
  GAME: "bg-accent/90 text-black",
  TAPE: "bg-teal/80 text-black",
  THREAD: "border border-white/25 text-muted",
};

export function Studio() {
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
      <section className="grain relative flex min-h-[82vh] flex-col justify-center overflow-hidden px-6 py-24 md:px-10">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(80% 60% at 22% 20%, rgba(224,83,31,0.14), transparent 60%), radial-gradient(70% 60% at 85% 90%, rgba(111,198,214,0.10), transparent 60%)",
            }}
          />
        </div>
        <div className="relative">
          <span className="mono text-xs tracking-[0.5em] text-accent">
            EST. // OMNIA VANITAS STUDIOS
          </span>
          <h1 className="glow-accent mt-5 text-[15vw] font-extrabold leading-[0.8] tracking-tighter md:text-[10.5vw]">
            OMNIA
            <br />
            VANITAS
          </h1>
          <p className="mono mt-6 max-w-[46ch] text-[11px] leading-relaxed tracking-[0.15em] text-teal uppercase">
            /ˈɒmniə vaˈnitas/ — all is vanity. The mirror, the tape, the face
            you trust.
          </p>
          <p className="mt-6 max-w-[56ch] text-sm leading-relaxed text-muted md:text-lg">
            A studio that makes psychological rooms you cannot fully leave.
            {" "}
            <span className="text-foreground">{NORTH_STAR.line}</span> We build
            one world — the LIKENESS universe — and let it spill across a game,
            a tape, a wardrobe, and a score.
          </p>
        </div>
      </section>

      {/* ============ THE DOCTRINE ============ */}
      <section className="grain relative border-y border-white/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <span className="mono text-xs tracking-[0.4em] text-teal">
            § OVS-00 // THE DOCTRINE
          </span>
          <h2 className="mt-4 max-w-[22ch] text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Five rules the whole universe obeys.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-white/10 bg-white/10 md:grid-cols-2">
            {DOCTRINE.map((d, i) => (
              <motion.div
                key={d.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                className={`bg-background p-7 ${
                  i === DOCTRINE.length - 1 ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-baseline gap-4">
                  <span className="mono text-2xl font-bold text-accent/80">
                    {d.n}
                  </span>
                  <div>
                    <span className="mono text-[11px] tracking-[0.3em] text-teal">
                      {d.k}
                    </span>
                    <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-muted md:text-base">
                      {d.v}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ THE ANTHOLOGY (from registry) ============ */}
      <section
        id="works"
        className="grain relative mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32"
      >
        <span className="mono text-xs tracking-[0.4em] text-accent">
          § OVS-01 // THE ANTHOLOGY
        </span>
        <h2 className="mt-4 max-w-[20ch] text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl">
          One world. Several artifacts.
        </h2>
        <p className="mt-5 max-w-[58ch] text-sm leading-relaxed text-muted md:text-base">
          The motel game is the flagship; everything else is a canonical tape or
          thread cut from the same cloth. Same IDs, same identity locks — the
          world expands without losing itself.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {WORKS.map((w, i) => {
            const inner = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <span className="mono text-[10px] tracking-[0.3em] text-teal/90">
                    {w.setting}
                  </span>
                  <span
                    className={`mono rounded-sm px-2.5 py-1 text-[9px] font-semibold tracking-[0.15em] ${
                      KIND_STYLE[w.kind] ?? KIND_STYLE.THREAD
                    }`}
                  >
                    {w.kind}
                  </span>
                </div>
                <h3 className="glow-accent mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
                  {w.title}
                </h3>
                <p className="mt-2 max-w-[52ch] text-[13px] leading-relaxed text-muted">
                  {w.blurb}
                </p>
                <div className="mono mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-[10px] tracking-[0.2em]">
                  <span className="text-accent/90">{w.status}</span>
                  <span className="text-muted">
                    {w.route ? (
                      <span className="text-teal transition-transform group-hover:translate-x-1">
                        VIEW →
                      </span>
                    ) : (
                      "IN THE WORLD BIBLE"
                    )}
                  </span>
                </div>
              </>
            );
            const cls = `hud-frame glass group block h-full rounded-md p-6 ${
              w.kind === "GAME" ? "ring-1 ring-accent/30" : ""
            }`;
            return (
              <motion.div
                key={w.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  type: "spring",
                  stiffness: 85,
                  damping: 20,
                  delay: (i % 2) * 0.07,
                }}
              >
                {w.route ? (
                  <Link href={w.route} className={`${cls} transition-colors hover:border-white/20`}>
                    {inner}
                  </Link>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ============ NORTH STAR ============ */}
      <section className="grain relative border-t border-white/10 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1000px]">
          <span className="mono text-xs tracking-[0.4em] text-teal">
            § OVS-02 // NORTH STAR
          </span>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 70, damping: 20 }}
            className="mt-6 text-3xl font-extrabold leading-[1.1] tracking-tight md:text-5xl"
          >
            &ldquo;{NORTH_STAR.promise}&rdquo;
          </motion.p>
          <div className="mono mt-10 flex flex-wrap gap-x-10 gap-y-3 border-t border-white/10 pt-6 text-[11px] tracking-[0.2em] text-muted">
            <span className="text-accent">{NORTH_STAR.tagline}</span>
            <span>{NORTH_STAR.setting}</span>
            <span>{NORTH_STAR.studio}</span>
          </div>
        </div>
      </section>

      {/* ============ closing CTA ============ */}
      <footer className="grain relative border-t border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <span className="mono text-xs tracking-[0.4em] text-accent">
            OVS // STUDIO · CLOSE
          </span>
          <h2 className="glow-accent mt-4 max-w-[16ch] text-5xl font-extrabold leading-[0.92] tracking-tighter md:text-8xl">
            All is vanity. Press record.
          </h2>
          <div className="mt-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-[46ch] text-sm text-muted">
              Omnia Vanitas Studios makes work that outlives the sitting — you
              finish carrying a question, not an answer. Step into the archive,
              or read the record.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/universe"
                className="mono rounded-sm bg-accent px-5 py-3 text-[11px] font-semibold tracking-[0.2em] text-black uppercase transition-transform hover:scale-105"
              >
                Enter the archive
              </Link>
              <Link
                href="/press"
                className="mono rounded-sm border border-white/15 px-5 py-3 text-[11px] font-semibold tracking-[0.2em] text-muted uppercase transition-colors hover:text-foreground"
              >
                Press &amp; facts
              </Link>
              <Link
                href="/devlog"
                className="mono rounded-sm border border-teal/40 px-5 py-3 text-[11px] font-semibold tracking-[0.2em] text-teal uppercase transition-colors hover:text-foreground"
              >
                The devlog
              </Link>
            </div>
          </div>
          <div className="mono mt-16 flex flex-col gap-2 border-t border-white/10 pt-6 text-[11px] tracking-[0.2em] text-muted md:flex-row md:justify-between">
            <span>© {2026} Omnia Vanitas Studios — LIKENESS UNIVERSE</span>
            <span>THE ROOM REMEMBERS WHAT LOVE EDITS OUT</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
