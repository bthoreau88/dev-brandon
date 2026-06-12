"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EVIDENCE, BEATS } from "@/lib/registry";
import { asset } from "@/lib/base";
import { CompanionShell } from "./CompanionShell";

const TONE: Record<string, string> = {
  key: "radial-gradient(70% 60% at 40% 35%, rgba(167,110,55,0.35), transparent 65%), #15140f",
  study: "radial-gradient(70% 60% at 55% 40%, rgba(111,198,214,0.18), transparent 65%), #11140f",
  tape: "radial-gradient(80% 70% at 50% 50%, rgba(167,140,90,0.30), transparent 70%), #161410",
  mirror: "linear-gradient(180deg, rgba(111,198,214,0.12), transparent 35%), #0e1113",
  door: "linear-gradient(90deg, #0a0907 45%, rgba(127,41,33,0.55) 50%, #0a0907 56%)",
};

export function EvidenceTimeline() {
  return (
    <CompanionShell
      eyebrow="§ 10 // INSPECTABLE EVIDENCE"
      title="Evidence. Not decoration."
      intro="Five objects you can read, rotate, and compare — each one unlocking a memory fragment that the room would rather you forgot. Every object seems to remember a different version of the relationship."
    >
      {/* Object grid */}
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {EVIDENCE.map((e, i) => (
          <motion.figure
            key={e.id}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 85, damping: 20, delay: (i % 3) * 0.06 }}
            className="hud-frame group relative overflow-hidden rounded-md border border-white/10"
          >
            <div
              className="relative aspect-square w-full"
              style={!e.image ? { background: TONE[e.tone ?? "study"] } : undefined}
            >
              {e.image ? (
                <Image
                  src={asset(e.image)}
                  alt={e.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 440px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              ) : (
                <div className="grain absolute inset-0" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <span className="mono absolute right-3 top-3 rounded-sm border border-white/15 bg-background/60 px-2 py-1 text-[8px] tracking-[0.15em] text-muted">
                {e.status}
              </span>
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 p-4">
              <span className="mono text-[10px] tracking-[0.3em] text-teal">{e.id}</span>
              <p className="mt-1 text-sm font-semibold tracking-tight">{e.name}</p>
              <p className="mt-1 text-[11px] leading-relaxed text-muted">{e.note}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      {/* Beat timeline */}
      <div className="mt-16">
        <span className="mono text-xs tracking-[0.4em] text-accent">
          TRIGGER → ROOM STATE → WEB UNLOCK
        </span>
        <div className="mt-6 space-y-px overflow-hidden rounded-md bg-white/5">
          {BEATS.map((b) => (
            <div
              key={b.id}
              className="grid grid-cols-1 gap-2 bg-background/80 p-4 sm:grid-cols-[1.4fr_1fr_1fr_0.8fr] sm:items-center"
            >
              <div>
                <span className="mono block text-[9px] tracking-[0.25em] text-teal">
                  {b.id}
                </span>
                <span className="text-sm font-medium">{b.name}</span>
              </div>
              <span className="text-xs text-muted">{b.trigger}</span>
              <span className="mono text-[11px] tracking-[0.1em] text-accent/80">
                {b.roomState}
              </span>
              <span className="mono text-[10px] tracking-[0.15em] text-muted">
                {b.webUnlock}
              </span>
            </div>
          ))}
        </div>
      </div>
    </CompanionShell>
  );
}
