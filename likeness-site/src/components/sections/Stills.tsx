"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { asset } from "@/lib/base";

// Portrait key-art + evidence.
const POSTERS = [
  {
    img: asset("/stills/likeness-tape003-poster.png"),
    code: "KEY ART · A·00 — THE TITLE",
    title: "LIKENESS · TAPE 003",
  },
  {
    img: asset("/stills/ovs-poster.png"),
    code: "KEY ART · A·04 — THE OTHER",
    title: "End of the hallway",
  },
  {
    img: asset("/stills/three-tapes.png"),
    code: "EVIDENCE · A·03 — THREE TAPES",
    title: "01 · 02 · 03",
  },
];

// 16:9 captured frames.
const WIDES = [
  {
    img: asset("/stills/thoreau-desk.png"),
    code: "CHAR · THOREAU — THE STUDY",
    title: "He never does",
    note: "THOREAU at the desk, reading a page the room wrote. The face is the budget.",
  },
  {
    img: asset("/stills/thoreau-stealth.png"),
    code: "CHAR · B·03 — STEALTH",
    title: "Hold your breath",
    note: "Mid-crouch at the kitchen island, turned toward a sound off-frame. No combat — only hiding.",
  },
  {
    img: asset("/stills/thoreau-watching.png"),
    code: "CHAR · B·04 — TAPE PLAYBACK",
    title: "Himself, on the tape",
    note: "Watching the CRT play footage of a figure in the doorway. The footage knows more than he does.",
  },
  {
    img: asset("/stills/drya-close.png"),
    code: "CHAR · DRYA — THRESHOLD",
    title: "The witness",
    note: "DRYA at the door of Room 14 — marked, composed, carrying the archive.",
  },
  {
    img: asset("/stills/drya-over-shoulder.png"),
    code: "CHAR · DRYA — OVER-SHOULDER",
    title: "Behind you, the door",
    note: "Teal threshold bleeding from a room she didn't leave open.",
  },
  {
    img: asset("/stills/drya-main-menu.png"),
    code: "UI · G·01 — MAIN MENU",
    title: "Channel 03 · New Game",
    note: "Diegetic menu. DRYA at the threshold, the OVS lab held behind glass.",
  },
  {
    img: asset("/stills/drya-customization.png"),
    code: "SYS · LOADOUT",
    title: "Configuration",
    note: "DRYA sets her approach before she descends — recon, quiet, or force.",
  },
  {
    img: asset("/stills/drya-corridor.png"),
    code: "ENV · LOADING · WATCHED",
    title: "The Wet Corridor",
    note: "Held in a flooded basement passage. Practical light failing, one arm online.",
  },
  {
    img: asset("/stills/the-other.png"),
    code: "CHAR · B·06 — THE OTHER",
    title: "Off-axis. Never confirmed",
    note: "A figure past the doorframe in your wardrobe. Never centered, never sharp — you doubt you saw it.",
  },
  {
    img: asset("/stills/drya-face-study.png"),
    code: "CHAR · DRYA — FACE STUDY",
    title: "The marking",
    note: "Two angles of the same refusal. The archive enters the body and stays.",
  },
  {
    img: asset("/stills/hallway-door14.png"),
    code: "ENV · DOOR 14 — THE CORRIDOR",
    title: "Toward the numbered door",
    note: "The pair walk a corridor that repeats. Room 14 is a structure, not a single place.",
  },
  {
    img: asset("/stills/open-world-city.png"),
    code: "SYS · THE CITY — MARTIAL LAW",
    title: "What LIKENESS opens into",
    note: "Beyond the apartment vertical slice: the wider world the franchise expands toward.",
  },
];

export function Stills() {
  return (
    <section
      id="stills"
      className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-8 md:py-32"
    >
      <span className="mono text-xs tracking-[0.4em] text-accent">
        OVS // CAPTURED · STILLS
      </span>
      <h2 className="mt-4 max-w-[18ch] text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
        Shot, not described.
      </h2>
      <p className="mt-5 max-w-[58ch] text-sm leading-relaxed text-muted md:text-base">
        Frames pulled from the OVS archive — real likeness, real grade. The face
        is the budget; every still holds the lock.
      </p>

      {/* key art + evidence */}
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {POSTERS.map((p, i) => (
          <motion.figure
            key={p.code}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 85, damping: 20, delay: i * 0.06 }}
            className="hud-frame group relative overflow-hidden rounded-md border border-white/10"
          >
            <div className="relative aspect-[2/3] w-full">
              <Image
                src={p.img}
                alt={p.title}
                fill
                sizes="(max-width: 640px) 100vw, 440px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 p-5">
              <span className="mono text-[10px] tracking-[0.3em] text-teal">{p.code}</span>
              <p className="mt-1 text-sm font-semibold tracking-tight">{p.title}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      {/* captured wides */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {WIDES.map((s, i) => (
          <motion.figure
            key={s.code}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 85, damping: 20, delay: (i % 3) * 0.06 }}
            className="hud-frame group relative overflow-hidden rounded-md border border-white/10"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={s.img}
                alt={s.title}
                fill
                sizes="(max-width: 640px) 100vw, 460px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 p-5">
              <span className="mono text-[10px] tracking-[0.3em] text-teal">{s.code}</span>
              <p className="mt-1 text-sm font-semibold tracking-tight">{s.title}</p>
              <p className="mt-1 max-w-[44ch] text-xs leading-relaxed text-muted">
                {s.note}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
