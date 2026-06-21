"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ALT_FRAMES } from "@/lib/registry";
import { asset } from "@/lib/base";

export function AltCut() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 pb-28 pt-28 md:px-8">
      <Link
        href="/devlog"
        className="mono text-[11px] tracking-[0.25em] text-muted uppercase transition-colors hover:text-foreground"
      >
        ← OVS // DEVLOG
      </Link>

      <span className="mono mt-8 inline-flex items-center gap-2.5 rounded-sm border border-accent/40 px-3 py-1.5 text-[10px] font-semibold tracking-[0.25em] text-accent uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        Non-canon · Alternate cut
      </span>
      <h1 className="glow-accent mt-5 text-5xl font-extrabold leading-[0.95] tracking-tighter md:text-7xl">
        The cut we didn&apos;t make.
      </h1>
      <p className="mt-5 max-w-[64ch] text-sm leading-relaxed text-muted md:text-base">
        Early in development, LIKENESS pointed at a louder, sci-fi game — biomech
        augments, an open martial-law city, a loadout screen. The production bible
        later locked the opposite: a single motel room, no combat, doubles built
        through posture and timing, not tech. These frames are kept as a record of
        the road not taken. <span className="text-foreground/80">They are not canon.</span>
      </p>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ALT_FRAMES.map((f, i) => (
          <motion.figure
            key={f.img}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 85, damping: 20, delay: (i % 3) * 0.06 }}
            className="hud-frame group relative overflow-hidden rounded-md border border-white/10"
          >
            <div className="relative aspect-video w-full">
              <Image
                src={asset(f.img)}
                alt={f.label}
                fill
                sizes="(max-width: 640px) 100vw, 440px"
                className="object-cover opacity-80 grayscale-[0.25] transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 p-4">
              <span className="mono text-[10px] tracking-[0.3em] text-accent/70">
                {f.label}
              </span>
              <p className="mt-1 text-[11px] leading-relaxed text-muted">{f.note}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <div className="mono mt-10 border-l border-accent/30 pl-4 text-[11px] leading-relaxed tracking-[0.05em] text-muted">
        Canon lives at{" "}
        <Link href="/" className="text-teal hover:text-foreground">
          the LIKENESS UNIVERSE
        </Link>
        . The room remembers what love edits out.
      </div>
    </div>
  );
}
