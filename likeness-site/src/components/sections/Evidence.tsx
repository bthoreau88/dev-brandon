"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { asset } from "@/lib/base";

const MACROS = [
  {
    img: asset("/stills/key-14.png"),
    code: "D·02 — MOTEL KEY 14",
    title: "Room 14",
    note: "Worn brass, a black diamond tag. The key that opens the room that opens everything.",
  },
  {
    img: asset("/stills/three-tapes.png"),
    code: "A·03 — THREE TAPES",
    title: "01 · 02 · 03",
    note: "Handwritten pencil labels. The only witnesses that don't lie — and don't quite tell the truth.",
  },
  {
    img: asset("/stills/polaroids.png"),
    code: "D·03 — POLAROID STACK",
    title: "Shot from above",
    note: "An overhead of the living room, taken from a corner no one stands in. A fingerprint on the top photo.",
  },
  {
    img: asset("/stills/fabric.png"),
    code: "J·04 — FABRIC REF",
    title: "Charcoal weave",
    note: "The hoodie, worn — a small pull, a faint coffee stain. The wardrobe anchor, validated to the thread.",
  },
];

export function Evidence() {
  return (
    <section
      id="evidence"
      className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-8 md:py-32"
    >
      <span className="mono text-xs tracking-[0.4em] text-accent">
        § DETECTIVE LOOP // OBJECT MACROS
      </span>
      <h2 className="mt-4 max-w-[20ch] text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
        Evidence. Not decoration.
      </h2>
      <p className="mt-5 max-w-[58ch] text-sm leading-relaxed text-muted md:text-base">
        Every story-critical prop, photographed as evidence — macro framing,
        shallow depth, fingerprints, dust, motivated light. The inserts that
        thread between the rooms.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {MACROS.map((m, i) => (
          <motion.figure
            key={m.code}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 85, damping: 20, delay: (i % 4) * 0.06 }}
            className="hud-frame group relative overflow-hidden rounded-md border border-white/10"
          >
            <div className="relative aspect-square w-full">
              <Image
                src={m.img}
                alt={m.title}
                fill
                sizes="(max-width: 640px) 100vw, 340px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 p-4">
              <span className="mono text-[10px] tracking-[0.3em] text-teal">{m.code}</span>
              <p className="mt-1 text-sm font-semibold tracking-tight">{m.title}</p>
              <p className="mt-1 text-[11px] leading-relaxed text-muted">{m.note}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
