"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LEVELS } from "@/lib/registry";
import { CompanionShell } from "./CompanionShell";

// Per-location deep link into the companion.
const LINK: Record<string, { href: string; cta: string }> = {
  LOC_DELLWOOD_ROOM14_001: { href: "/evidence", cta: "Inspect the evidence →" },
  LOC_DELLWOOD_HALLWAY_001: { href: "/tapes", cta: "Follow the tapes →" },
  LOC_DELLWOOD_OFFICE_001: { href: "/characters", cta: "The arrival ritual →" },
};

export function MotelMap() {
  return (
    <CompanionShell
      eyebrow="§ 15 // INTERACTIVE MAP"
      title="The Dellwood."
      intro="A motel that repeats. Five named spaces and one that isn't on the floor plan until you stop looking for it. Threshold, repetition, impossible doors — the map is the antagonist, drawn flat."
    >
      {/* Neon facade — door strip */}
      <div className="relative mt-12 overflow-hidden rounded-md border border-white/10 bg-gradient-to-b from-[#0c0d0b] to-[#060605] p-6 md:p-10">
        <div className="grain absolute inset-0" />
        <div className="relative flex items-center justify-between">
          <span className="mono text-[10px] tracking-[0.4em] text-accent">
            VACANCY · 3:14 AM
          </span>
          <span className="mono text-[10px] tracking-[0.4em] text-muted">
            THE DELLWOOD
          </span>
        </div>
        <div className="relative mt-6 flex items-end gap-1.5 sm:gap-2">
          {Array.from({ length: 14 }, (_, i) => i + 1).map((n) => {
            const hero = n === 14;
            return (
              <div key={n} className="flex flex-1 flex-col items-center gap-1.5">
                <div
                  className={`relative w-full rounded-t-sm border-x border-t ${
                    hero
                      ? "border-teal/50 bg-gradient-to-b from-teal/15 to-transparent"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                  style={{ height: hero ? 64 : 44 }}
                >
                  {hero && (
                    <span
                      className="absolute inset-y-2 right-1 w-[2px] rounded-full"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(127,41,33,0.9), rgba(127,41,33,0.1))",
                        boxShadow: "0 0 10px 2px rgba(127,41,33,0.5)",
                      }}
                    />
                  )}
                </div>
                <span
                  className={`mono text-[9px] tracking-[0.1em] ${
                    hero ? "text-teal" : "text-muted/50"
                  }`}
                >
                  {n}
                </span>
              </div>
            );
          })}
        </div>
        <p className="mono relative mt-5 text-[10px] tracking-[0.25em] text-muted/70">
          ROOM 14 — THE ONLY DOOR THAT REMEMBERS YOU
        </p>
      </div>

      {/* Location cards */}
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {LEVELS.map((l, i) => {
          const link = LINK[l.id];
          const hero = l.id === "LOC_DELLWOOD_ROOM14_001";
          return (
            <motion.article
              key={l.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 85, damping: 20, delay: i * 0.06 }}
              className={`hud-frame glass flex flex-col rounded-md p-6 ${
                hero ? "ring-1 ring-teal/40" : ""
              }`}
            >
              <span className="mono text-[10px] tracking-[0.3em] text-teal">
                {l.id}
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">{l.name}</h2>
              <span className="mono mt-1 text-[9px] tracking-[0.25em] text-muted">
                {l.route} · {l.status}
              </span>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {l.storyFunction}
              </p>
              {link && (
                <Link
                  href={link.href}
                  className="mono mt-5 inline-block text-[11px] tracking-[0.2em] text-accent uppercase transition-opacity hover:opacity-70"
                >
                  {link.cta}
                </Link>
              )}
            </motion.article>
          );
        })}
      </div>

      <p className="mono mt-6 text-[11px] leading-relaxed tracking-[0.05em] text-muted/70">
        An explorable 3D Room 14 (Three.js + optional Gaussian splats) is the
        next milestone — gated on the 4-step reference packs becoming models. This
        card map is the fallback mode the bible requires, live today.
      </p>
    </CompanionShell>
  );
}
