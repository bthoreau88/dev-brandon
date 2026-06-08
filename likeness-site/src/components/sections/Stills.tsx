"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { asset } from "@/lib/base";

const WIDES = [
  {
    img: asset("/stills/thoreau-desk.png"),
    code: "CHAR · THOREAU — THE STUDY",
    title: "He never does",
    note: "THOREAU at the desk, reading a page the room wrote. The face is the budget.",
  },
  {
    img: asset("/stills/drya-close.png"),
    code: "CHAR · DRYA — THRESHOLD",
    title: "The witness",
    note: "DRYA at the door of Room 14 — marked, composed, carrying the archive.",
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
    note: "DRYA sets her approach before she descends — recon, quiet, or force. Each is a different way through Room 14.",
  },
  {
    img: asset("/stills/drya-over-shoulder.png"),
    code: "CHAR · DRYA — OVER-SHOULDER",
    title: "Behind you, the door",
    note: "Teal threshold bleeding from a room she didn't leave open.",
  },
  {
    img: asset("/stills/drya-corridor.png"),
    code: "ENV · LOADING · WATCHED",
    title: "The Wet Corridor",
    note: "Held in a flooded basement passage. Practical light failing, one arm online.",
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

      <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-12">
        {/* key-art poster */}
        <motion.figure
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 85, damping: 20 }}
          className="hud-frame group relative overflow-hidden rounded-md border border-white/10 lg:col-span-5"
        >
          <div className="relative aspect-[3/4] w-full lg:h-full">
            <Image
              src={asset("/stills/likeness-tape003-poster.png")}
              alt="LIKENESS · TAPE 003 — key art, THOREAU and DRYA"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/40 to-transparent p-5">
            <span className="mono text-[10px] tracking-[0.3em] text-teal">
              KEY ART · A·00 — THE TITLE
            </span>
            <p className="mt-1 text-sm font-semibold tracking-tight">
              LIKENESS · TAPE 003 — Thoreau &amp; Drya
            </p>
          </figcaption>
        </motion.figure>

        {/* wide stills */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
        {WIDES.map((s, i) => (
          <motion.figure
            key={s.code}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              type: "spring",
              stiffness: 85,
              damping: 20,
              delay: i * 0.06,
            }}
            className="hud-frame group relative overflow-hidden rounded-md border border-white/10"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={s.img}
                alt={s.title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 p-5">
              <span className="mono text-[10px] tracking-[0.3em] text-teal">
                {s.code}
              </span>
              <p className="mt-1 text-sm font-semibold tracking-tight">
                {s.title}
              </p>
              <p className="mt-1 max-w-[52ch] text-xs leading-relaxed text-muted">
                {s.note}
              </p>
            </figcaption>
          </motion.figure>
        ))}
        </div>
      </div>
    </section>
  );
}
