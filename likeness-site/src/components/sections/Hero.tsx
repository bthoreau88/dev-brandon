"use client";

import Image from "next/image";
import { asset } from "@/lib/base";

const subjects = [
  {
    name: "DRYA",
    tag: "THE ROOM TESTIFIES",
    status: "THE WITNESS",
    img: asset("/subjects/drya-select.png"),
  },
  {
    name: "THOREAU",
    tag: "TAPE-03",
    status: "THE HOST",
    img: asset("/subjects/thoreau-portrait.png"),
  },
];

export function Hero() {
  return (
    <section className="grain relative flex min-h-screen flex-col justify-between overflow-hidden">
      {/* background plate */}
      <Image
        src={asset("/subjects/thoreau-title.png")}
        alt="OVS subject THOREAU"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

      {/* top HUD strip */}
      <div className="relative z-10 mx-auto mt-28 flex w-full max-w-[1400px] items-center justify-between px-6 md:px-8">
        <span className="mono text-[10px] tracking-[0.4em] text-teal">
          OVS // LIKENESS · TAPE 03
        </span>
        <span className="mono text-[10px] tracking-[0.4em] text-muted">
          THE ROOM <span className="text-accent">REMEMBERS</span>
        </span>
      </div>

      {/* title block */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-8">
        <span className="mono text-xs tracking-[0.45em] text-accent">
          A PSYCHOLOGICAL CHAMBER HORROR
        </span>
        <h1 className="glow-accent mt-4 text-[20vw] font-extrabold leading-[0.82] tracking-tighter md:text-[13vw]">
          LIKENESS
        </h1>
        <p className="mt-5 max-w-[44ch] text-balance text-sm text-muted md:text-base">
          A man wakes with a wound he can&apos;t explain, three tapes, and a
          voice in the next room that is his own. Identity, memory, and the
          doppelgänger you can almost trust.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#subjects"
            className="mono rounded-sm bg-accent px-7 py-3 text-xs font-semibold tracking-[0.15em] text-black uppercase transition-transform hover:scale-105"
          >
            Meet the two
          </a>
          <a
            href="#stills"
            className="mono glass rounded-sm px-7 py-3 text-xs font-semibold tracking-[0.15em] uppercase transition-colors hover:text-teal"
          >
            View Stills
          </a>
        </div>
      </div>

      {/* character rail */}
      <div className="relative z-10 mx-auto mb-10 w-full max-w-[1400px] px-6 md:px-8">
        <span className="mono mb-3 block text-[10px] tracking-[0.4em] text-muted">
          THE CHARACTERS
        </span>
        <div className="flex gap-3">
          {subjects.map((s) => (
            <a
              key={s.name}
              href="#subjects"
              className="hud-frame group relative flex w-44 items-end overflow-hidden rounded-sm border border-white/10 bg-black/40 p-3 transition-colors hover:border-accent/60"
              style={{ height: 96 }}
            >
              <Image
                src={s.img}
                alt={s.name}
                fill
                sizes="180px"
                className="object-cover opacity-50 transition-opacity group-hover:opacity-70"
              />
              <div className="relative z-10">
                <span className="mono block text-sm font-bold tracking-[0.2em]">
                  {s.name}
                </span>
                <span className="mono block text-[9px] tracking-[0.2em] text-teal">
                  {s.status}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted">
        <span className="mono text-[9px] tracking-[0.3em]">SCROLL</span>
        <span className="h-8 w-px animate-pulse bg-gradient-to-b from-teal to-transparent" />
      </div>
    </section>
  );
}
