"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ARC, BEATS } from "@/lib/registry";
import { asset } from "@/lib/base";
import { Scanlines } from "@/components/atmos/Atmos";
import { CompanionShell } from "./CompanionShell";

export function Tapes() {
  return (
    <CompanionShell
      eyebrow="§ 07 // STORY ARCHITECTURE · TAPES"
      title="Recorded truth, unreliable."
      intro="The tapes are the only witnesses — and they lie by omission. Play one and the room rewrites its own state behind you. The conversation keeps being answered by the wrong double."
    >
      {/* Featured tape */}
      <motion.figure
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className="mx-auto mt-12 max-w-[820px]"
      >
        <div className="hud-frame relative overflow-hidden rounded-md border border-white/10 bg-black">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={asset("/stills/drya-tape.png")}
              alt="Recovered footage — REC 03/13/26 23:47"
              fill
              sizes="(max-width: 900px) 100vw, 820px"
              className="object-cover"
            />
            <Scanlines />
            <div
              className="pointer-events-none absolute inset-0"
              style={{ boxShadow: "inset 0 0 120px 30px rgba(0,0,0,0.65)" }}
            />
            <span className="mono absolute left-4 top-4 text-[11px] tracking-[0.2em] text-accent">
              ● REC · 03 / 13 / 26 · 23:47
            </span>
          </div>
        </div>
      </motion.figure>

      {/* Six-beat arc */}
      <div className="mt-16">
        <span className="mono text-xs tracking-[0.4em] text-accent">
          THE SIX-BEAT ARC
        </span>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ARC.map((a, i) => (
            <motion.div
              key={a.beat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 90, damping: 20, delay: (i % 3) * 0.05 }}
              className="glass hud-frame rounded-md p-5"
            >
              <span className="mono text-2xl font-extrabold tracking-tighter text-accent/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 text-base font-bold tracking-tight">{a.beat}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{a.fn}</p>
              <p className="mono mt-3 border-t border-white/10 pt-3 text-[11px] leading-relaxed text-teal/80">
                {a.game}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Unlock states */}
      <div className="mt-16">
        <span className="mono text-xs tracking-[0.4em] text-accent">
          TAPE UNLOCK STATES
        </span>
        <div className="mt-6 space-y-3">
          {BEATS.map((b) => (
            <div
              key={b.id}
              className="hud-frame glass flex flex-col gap-2 rounded-md p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <span className="mono block text-[9px] tracking-[0.25em] text-teal">
                  {b.id}
                </span>
                <span className="text-sm font-medium">{b.name}</span>
              </div>
              <span className="text-xs text-muted">{b.characters.join(" · ")}</span>
              <span className="mono rounded-sm border border-accent/30 px-3 py-1 text-[10px] tracking-[0.1em] text-accent/90">
                {b.roomState}
              </span>
            </div>
          ))}
        </div>
      </div>
    </CompanionShell>
  );
}
