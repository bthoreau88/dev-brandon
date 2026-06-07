"use client";

import { motion } from "framer-motion";
import { PALETTE, CAMERA_LAW, SHOT_FAMILIES } from "@/lib/tape03";

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 95, damping: 20 },
  },
};

export function VisualDNA() {
  return (
    <section
      id="visual-dna"
      className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-8 md:py-32"
    >
      <span className="mono text-xs tracking-[0.4em] text-accent">
        § 02–03 // VISUAL DNA
      </span>
      <h2 className="mt-4 max-w-[18ch] text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
        Grade before image.
      </h2>
      <p className="mt-5 max-w-[60ch] text-sm leading-relaxed text-muted md:text-base">
        The look is not a filter. It is a story rule. TAPE 03 lives in the
        collision of warm domestic memory and cold institutional wrongness — the
        grade tells the player which version of the apartment they are inside
        before any dialogue lands. Color is behavior; each family does a job.
      </p>

      {/* Color matrix */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-md bg-white/5 md:grid-cols-3"
      >
        {PALETTE.map((p) => (
          <motion.div
            key={p.name}
            variants={item}
            className="group relative bg-background/80 p-5"
          >
            <div
              className="hud-frame mb-4 h-20 w-full rounded-sm"
              style={{ background: p.hex }}
            />
            <div className="flex items-baseline justify-between">
              <span className="mono text-xs font-semibold tracking-[0.2em]">
                {p.name}
              </span>
              <span className="mono text-[10px] tracking-[0.15em] text-muted">
                {p.hex}
              </span>
            </div>
            <span className="mono mt-1 block text-[9px] tracking-[0.25em] text-teal">
              {p.family}
            </span>
            <p className="mt-3 text-xs leading-relaxed text-muted">{p.job}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Camera law + shot families */}
      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <span className="mono text-xs tracking-[0.4em] text-accent">
            § 04 // CAMERA LAW
          </span>
          <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            The camera is a witness.
          </h3>
          <ul className="mt-6 space-y-5">
            {CAMERA_LAW.map((l) => (
              <li key={l.k} className="flex flex-col gap-1.5 border-l border-white/10 pl-4">
                <span className="mono text-[10px] tracking-[0.3em] text-teal">
                  {l.k}
                </span>
                <span className="text-sm leading-relaxed text-muted">{l.v}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="mono text-xs tracking-[0.4em] text-accent">
            § 05 // SHOT FAMILIES
          </span>
          <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            Every shot belongs to one family.
          </h3>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {SHOT_FAMILIES.map((f) => (
              <li
                key={f.k}
                className="glass hud-frame rounded-md p-4"
              >
                <span className="mono block text-[10px] tracking-[0.25em] text-teal">
                  {f.k}
                </span>
                <p className="mt-2 text-xs leading-relaxed text-muted">{f.v}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
