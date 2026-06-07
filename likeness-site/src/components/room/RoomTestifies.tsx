"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FRAMES,
  PHASES,
  TESTIMONY,
  SOUND_MAP,
  type Frame,
} from "@/lib/roomTestifies";
import { Scanlines, RuptureField } from "@/components/atmos/Atmos";

// A graded backdrop per phase — searching (warm), revealed (teal pressure),
// body (green-cast), witness (near-black).
const PHASE_BG: Record<number, string> = {
  1: "radial-gradient(70% 60% at 25% 30%, rgba(167,110,55,0.22), transparent 60%), #100f0c",
  2: "radial-gradient(60% 70% at 75% 40%, rgba(111,198,214,0.18), transparent 60%), #0c0f10",
  3: "radial-gradient(60% 60% at 50% 50%, rgba(120,140,95,0.16), transparent 65%), #0b0d0b",
  4: "radial-gradient(50% 60% at 50% 45%, rgba(127,41,33,0.20), transparent 60%), #080707",
};

function FrameRow({ f, i }: { f: Frame; i: number }) {
  const flip = i % 2 === 1;
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 70, damping: 20 }}
      className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-10"
    >
      {/* graded plate */}
      <div
        className={`hud-frame relative overflow-hidden rounded-md border border-white/10 ${
          flip ? "lg:order-2" : ""
        }`}
        style={{ aspectRatio: "16/10", background: PHASE_BG[f.phase] }}
      >
        <Scanlines />
        <RuptureField side={flip ? "left" : "right"} className="opacity-70" />
        <div className="absolute inset-0 grain" />
        <span className="mono absolute left-5 top-5 text-[9px] tracking-[0.3em] text-teal/80">
          FRAME {f.no} · {f.secs}
        </span>
        <span className="mono absolute bottom-5 left-5 right-5 text-[10px] uppercase tracking-[0.25em] text-foreground/70">
          {f.title}
        </span>
      </div>

      {/* copy */}
      <div className={flip ? "lg:order-1" : ""}>
        <span className="mono text-[10px] tracking-[0.3em] text-accent">
          PHASE {f.phase} · {PHASES[f.phase]}
        </span>
        <p className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-foreground md:text-3xl">
          &ldquo;{f.vo}&rdquo;
        </p>
        <dl className="mt-6 space-y-3 border-t border-white/10 pt-5">
          {[
            ["MOTION", f.motion],
            ["SOUND", f.sound],
            ["PURPOSE", f.purpose],
          ].map(([k, v]) => (
            <div key={k} className="flex gap-3">
              <dt className="mono w-16 shrink-0 text-[9px] tracking-[0.25em] text-teal">
                {k}
              </dt>
              <dd className="text-[13px] leading-relaxed text-muted">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.article>
  );
}

export function RoomTestifies() {
  return (
    <div className="relative">
      {/* hero */}
      <header className="grain relative mx-auto max-w-[1400px] px-6 pb-10 pt-28 md:px-8">
        <Link
          href="/"
          className="mono text-[11px] tracking-[0.25em] text-muted uppercase transition-colors hover:text-foreground"
        >
          ← OVS // LIKENESS
        </Link>
        <span className="mono mt-8 block text-xs tracking-[0.4em] text-accent">
          OVS · LIKENESS · PRODUCTION BOARD V.002
        </span>
        <h1 className="glow-accent mt-3 text-5xl font-extrabold leading-[0.92] tracking-tighter md:text-8xl">
          The Room
          <br />
          Testifies.
        </h1>
        <p className="mt-6 max-w-[60ch] text-sm leading-relaxed text-muted md:text-base">
          A 15-frame editorial montage in ARRI Procedural Realism — grounded,
          photographed, restrained. Vulnerability → brutal truth → historical
          expansion → refusal / testimony. Thoreau and Drya enter Room 14 looking
          for a ghost. The room answers with a record.
        </p>
        <p className="mono mt-6 max-w-[60ch] text-sm leading-relaxed tracking-[0.04em] text-foreground/80">
          &ldquo;This is not a ghost story. A ghost story lets the living feel
          innocent. This is testimony.&rdquo;
        </p>
      </header>

      {/* frames */}
      <section className="mx-auto mt-10 flex max-w-[1400px] flex-col gap-20 px-6 py-10 md:px-8 md:gap-28">
        {FRAMES.map((f, i) => (
          <FrameRow key={f.no} f={f} i={i} />
        ))}
      </section>

      {/* testimony cut */}
      <section className="relative border-t border-white/10 px-6 py-24 md:px-8">
        <div className="mx-auto max-w-[820px]">
          <span className="mono text-xs tracking-[0.4em] text-accent">
            FINAL VOICEOVER CUT · THE WITNESS / ROOM
          </span>
          <div className="mt-8 space-y-6">
            {TESTIMONY.map((stanza, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                className="text-lg leading-relaxed text-foreground/85 md:text-xl"
              >
                {stanza}
              </motion.p>
            ))}
          </div>
          <p className="mono mt-10 text-sm tracking-[0.2em] text-teal">
            WE CAME FOR THE NAMES.
          </p>
        </div>
      </section>

      {/* sound map */}
      <section className="border-t border-white/10 px-6 py-20 md:px-8">
        <div className="mx-auto max-w-[1400px]">
          <span className="mono text-xs tracking-[0.4em] text-accent">
            SOUND DESIGN MAP
          </span>
          <p className="mt-4 max-w-[64ch] text-sm leading-relaxed text-muted">
            The score should not overpower the testimony. Sound behaves like
            pressure in the room — and silence arrives at the end as a verdict.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SOUND_MAP.map((s) => (
              <div key={s.k} className="glass hud-frame rounded-md p-5">
                <span className="mono block text-[10px] tracking-[0.3em] text-teal">
                  {s.k}
                </span>
                <p className="mt-2 text-xs leading-relaxed text-muted">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
