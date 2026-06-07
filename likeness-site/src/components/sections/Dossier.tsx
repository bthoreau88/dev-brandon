"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { asset } from "@/lib/base";

export function Dossier() {
  return (
    <section className="relative mx-auto max-w-[1400px] px-6 py-20 md:px-8 md:py-28">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 90, damping: 20 }}
          className="hud-frame relative aspect-[16/10] overflow-hidden rounded-md"
        >
          <Image
            src={asset("/subjects/thoreau-portrait.png")}
            alt="OVS dossier"
            fill
            sizes="(max-width: 1024px) 100vw, 700px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
          <span className="mono absolute left-5 top-5 text-[10px] tracking-[0.3em] text-teal">
            OVS // DOSSIER · SYS-7
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 90, damping: 20 }}
        >
          <span className="mono text-xs tracking-[0.4em] text-accent">
            THE PREMISE
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            OVS doesn&apos;t recruit. It overwrites.
          </h2>
          <p className="mt-5 max-w-[52ch] text-sm leading-relaxed text-muted md:text-base">
            Tape-03 logs the intake of SYS-7 — subjects fitted with biomech and
            seeded with a borrowed likeness. Each face carries a debt. Wear it
            well and you inherit its access, its allies, its enemies. Wear it too
            long and the host underneath goes quiet for good.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              ["INTAKE", "A subject is fitted, seeded, and assigned a face."],
              ["SYNC", "Biomech binds. Infection rate climbs. Identity blurs."],
              ["COMBINE", "Host and likeness merge. Only OVS remains."],
            ].map(([k, v]) => (
              <li key={k} className="flex items-start gap-4">
                <span className="mono mt-0.5 w-20 shrink-0 text-[10px] tracking-[0.2em] text-teal">
                  {k}
                </span>
                <span className="text-sm text-muted">{v}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
