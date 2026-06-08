"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { asset } from "@/lib/base";
import { Scanlines } from "@/components/atmos/Atmos";

export function RecoveredFootage() {
  return (
    <section
      id="footage"
      className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-8 md:py-32"
    >
      <span className="mono text-xs tracking-[0.4em] text-accent">
        § 05 // CATEGORY E — RECOVERED FOOTAGE
      </span>
      <h2 className="mt-4 max-w-[20ch] text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
        The tapes are the only witnesses.
      </h2>
      <p className="mt-5 max-w-[58ch] text-sm leading-relaxed text-muted md:text-base">
        Consumer camcorder, circa 2003 — 4:3, timestamp burn-in, scanlines,
        chromatic aberration, audio dropout. Scrub and rewind what was said
        before it was forgotten.
      </p>

      <motion.figure
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className="mx-auto mt-12 max-w-[860px]"
      >
        <div className="hud-frame relative overflow-hidden rounded-md border border-white/10 bg-black">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={asset("/stills/drya-tape.png")}
              alt="Recovered footage — REC 03/13/26 23:47"
              fill
              sizes="(max-width: 900px) 100vw, 860px"
              className="object-cover"
            />
            <Scanlines />
            {/* edge vignette for the tube look */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                boxShadow: "inset 0 0 120px 30px rgba(0,0,0,0.65)",
              }}
            />
          </div>
        </div>
        <figcaption className="mono mt-4 flex flex-col gap-1 text-[11px] tracking-[0.2em] text-muted sm:flex-row sm:justify-between">
          <span className="text-teal">TAPE · REC ● 03 / 13 / 26 · 23:47</span>
          <span>DRYA · ROOM 14 · EVIDENCE, NOT EXPLANATION</span>
        </figcaption>
      </motion.figure>
    </section>
  );
}
