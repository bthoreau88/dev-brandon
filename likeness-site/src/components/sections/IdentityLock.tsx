"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { asset } from "@/lib/base";

const COLD_OPEN = [
  {
    img: asset("/stills/thoreau-waking.png"),
    code: "KEY ART · A·01 — THE WAKING FRAME",
    title: "3:14 AM",
    note: "The cold open. A wound, a cracked camcorder, and no memory of how he got here.",
  },
  {
    img: asset("/stills/thoreau-mirror.png"),
    code: "ALT KEY · A·02 — THE MIRROR LAG",
    title: "The reflection hasn't caught up",
    note: "His eyes are open. The reflected ones are still closed, mid-word.",
  },
];

const SHEETS = [
  { img: asset("/stills/thoreau-lock-sheet.png"), label: "IDENTITY LOCK · THOREAU" },
  { img: asset("/stills/drya-lock-sheet.png"), label: "IDENTITY LOCK · DRYA" },
];

export function IdentityLock() {
  return (
    <section
      id="identity-lock"
      className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-8 md:py-32"
    >
      <span className="mono text-xs tracking-[0.4em] text-accent">
        § 06 // CHARACTER · IDENTITY LOCK
      </span>
      <h2 className="mt-4 max-w-[18ch] text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
        The face is the budget.
      </h2>
      <p className="mt-5 max-w-[58ch] text-sm leading-relaxed text-muted md:text-base">
        Exact identity preserved across every medium — jawline, eye shape, skin
        tone, the marking. No whitening, no beautification, no drift. These are
        the master sheets the whole production renders against.
      </p>

      {/* Cold open pair */}
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {COLD_OPEN.map((s, i) => (
          <motion.figure
            key={s.code}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 85, damping: 20, delay: i * 0.06 }}
            className="hud-frame group relative overflow-hidden rounded-md border border-white/10"
          >
            <div className="relative aspect-[2/3] w-full">
              <Image
                src={s.img}
                alt={s.title}
                fill
                sizes="(max-width: 640px) 100vw, 680px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 p-5">
              <span className="mono text-[10px] tracking-[0.3em] text-teal">
                {s.code}
              </span>
              <p className="mt-1 text-sm font-semibold tracking-tight">{s.title}</p>
              <p className="mt-1 max-w-[42ch] text-xs leading-relaxed text-muted">
                {s.note}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      {/* Lock sheets */}
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {SHEETS.map((s, i) => (
          <motion.figure
            key={s.label}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 85, damping: 20, delay: i * 0.06 }}
            className="hud-frame relative overflow-hidden rounded-md border border-white/10 bg-black/30"
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={s.img}
                alt={s.label}
                fill
                sizes="(max-width: 1024px) 100vw, 680px"
                className="object-contain"
              />
            </div>
            <figcaption className="mono absolute left-4 top-4 text-[10px] tracking-[0.3em] text-teal">
              {s.label}
            </figcaption>
          </motion.figure>
        ))}
      </div>

      {/* World / material board */}
      <motion.figure
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ type: "spring", stiffness: 85, damping: 20 }}
        className="hud-frame relative mx-auto mt-4 max-w-[820px] overflow-hidden rounded-md border border-white/10 bg-black/30"
      >
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={asset("/stills/world-board.png")}
            alt="LIKENESS — Location and material board"
            fill
            sizes="(max-width: 1024px) 100vw, 820px"
            className="object-contain"
          />
        </div>
        <figcaption className="mono absolute left-4 top-4 text-[10px] tracking-[0.3em] text-teal">
          LOCATION &amp; MATERIAL BOARD
        </figcaption>
      </motion.figure>
    </section>
  );
}
