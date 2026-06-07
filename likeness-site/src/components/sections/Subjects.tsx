"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { asset } from "@/lib/base";

const subjects = [
  {
    name: "DRYA",
    code: "SYS-7 // TAPE #1",
    img: asset("/subjects/drya-sheet.png"),
    status: "COMBINE",
    stats: [
      ["INFECTION", "18%"],
      ["STATUS", "COMBINE"],
      ["AUGMENT", "BIOMECH L-ARM"],
      ["CLEARANCE", "SYS-7"],
    ],
    note: "Host signal faint. Likeness dominant. Subject answers to the eye.",
  },
  {
    name: "THOREAU",
    code: "SYS-7 // TAPE-03",
    img: asset("/subjects/thoreau-sheet.png"),
    status: "OPERATIONAL",
    stats: [
      ["INFECTION", "31%"],
      ["STATUS", "OPERATIONAL"],
      ["AUGMENT", "DUAL EXO-ARMS"],
      ["CLEARANCE", "SYS-7"],
    ],
    note: "Resisting integration. High biomech load. Flagged for oversight.",
  },
];

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 90, damping: 20 },
  },
};

export function Subjects() {
  return (
    <section
      id="subjects"
      className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-8 md:py-32"
    >
      <span className="mono text-xs tracking-[0.4em] text-accent">
        OVS // SUBJECT ARCHIVE
      </span>
      <h2 className="mt-4 max-w-[16ch] text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
        Select your subject.
      </h2>

      <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {subjects.map((s) => (
          <motion.article
            key={s.name}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={item}
            className="hud-frame group glass overflow-hidden rounded-md"
          >
            <div className="relative aspect-[16/11] overflow-hidden">
              <Image
                src={s.img}
                alt={`OVS subject ${s.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover object-top grayscale-[0.15] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="mono text-[10px] tracking-[0.3em] text-teal">
                  {s.code}
                </span>
                <h3 className="glow-accent text-4xl font-extrabold tracking-tight md:text-5xl">
                  {s.name}
                </h3>
              </div>
              <span className="mono absolute right-5 top-5 rounded-sm bg-accent/90 px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] text-black">
                {s.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-px bg-white/5">
              {s.stats.map(([k, v]) => (
                <div key={k} className="bg-background/80 px-5 py-3.5">
                  <span className="mono block text-[9px] tracking-[0.25em] text-muted">
                    {k}
                  </span>
                  <span className="mono mt-1 block text-sm text-foreground">
                    {v}
                  </span>
                </div>
              ))}
            </div>
            <p className="px-5 py-4 text-sm leading-relaxed text-muted">
              {s.note}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
