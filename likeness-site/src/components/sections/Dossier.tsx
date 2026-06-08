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
            OVS // DOSSIER · TAPE-03
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
            The room remembers what you forgot.
          </h2>
          <p className="mt-5 max-w-[52ch] text-sm leading-relaxed text-muted md:text-base">
            TAPE-03 is a single-location psychological thriller about identity,
            memory, and the doppelgänger you can almost trust. A man wakes with a
            head wound, a camcorder on the floor, and no memory of the last
            forty-eight hours. Three labeled tapes explain what happened. The
            apartment is wrong in small ways. Someone with his voice is inside.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              ["WAKE", "3:14 AM. A wound, a camcorder, and three tapes you don't remember making."],
              ["RECONSTRUCT", "The rooms rearrange when you look away. Evidence, not explanation."],
              ["CHOOSE", "Two endings, both ambiguous. The room keeps the half you edited out."],
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
