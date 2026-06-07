"use client";

import { motion } from "framer-motion";
import { SCENES, PRESSURE } from "@/lib/tape03";
import { RuptureField } from "@/components/atmos/Atmos";

const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 90, damping: 20 },
  },
};

export function SceneCards() {
  return (
    <section
      id="scenes"
      className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-8 md:py-32"
    >
      <span className="mono text-xs tracking-[0.4em] text-accent">
        § 07–11 // SCENE ARCHITECTURE
      </span>
      <h2 className="mt-4 max-w-[20ch] text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
        Eight scenes. Three tapes. One room rearranging underneath.
      </h2>
      <p className="mt-5 max-w-[58ch] text-sm leading-relaxed text-muted md:text-base">
        Wake → reconstruct → discover → hide → recover → cross-reference →
        confront → choose. Every scene introduces one thing. Every scene takes
        one away.
      </p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {SCENES.map((s) => (
          <motion.article
            key={s.no}
            variants={item}
            className="glass hud-frame group relative overflow-hidden rounded-md p-5"
          >
            <RuptureField className="opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative flex items-baseline justify-between">
              <span className="mono text-3xl font-extrabold tracking-tighter text-accent/80">
                {s.no}
              </span>
              <span className="mono text-[9px] tracking-[0.25em] text-muted">
                {s.min}
              </span>
            </div>
            <h3 className="relative mt-2 text-lg font-bold tracking-tight">
              {s.title}
            </h3>
            <p className="relative mt-2 text-xs leading-relaxed text-muted">
              {s.fn}
            </p>
            <dl className="relative mt-4 space-y-1.5 border-t border-white/10 pt-3">
              {[
                ["EMOTION", s.emotion],
                ["REGISTER", s.register],
                ["CAMERA", s.camera],
                ["MECHANIC", s.mechanic],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-2">
                  <dt className="mono w-16 shrink-0 text-[8px] tracking-[0.2em] text-teal">
                    {k}
                  </dt>
                  <dd className="text-[11px] leading-snug text-muted">{v}</dd>
                </div>
              ))}
            </dl>
          </motion.article>
        ))}
      </motion.div>

      {/* Pressure variables */}
      <div className="mt-14">
        <span className="mono text-xs tracking-[0.4em] text-accent">
          PRESSURE VARIABLES
        </span>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRESSURE.map((p) => (
            <div key={p.k} className="border-l border-teal/40 pl-4">
              <span className="mono block text-[10px] tracking-[0.3em] text-teal">
                {p.k}
              </span>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">{p.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
