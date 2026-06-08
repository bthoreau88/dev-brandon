"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { asset } from "@/lib/base";

const subjects = [
  {
    name: "DRYA",
    code: "THE ROOM TESTIFIES",
    img: asset("/subjects/drya-sheet.png"),
    status: "THE WITNESS",
    stats: [
      ["ROLE", "WITNESS · CONDUIT"],
      ["STATE", "TESTIMONY, NOT GRIEF"],
      ["CARRIES", "THE ARCHIVE · ROOM 14"],
      ["REFUSES", "THE HANDLED VERSION"],
    ],
    note: "She enters Room 14 looking for a ghost and finds a record. She stops asking what happened — and takes the record back.",
  },
  {
    name: "THOREAU",
    code: "TAPE-03 // PROTAGONIST",
    img: asset("/subjects/thoreau-sheet.png"),
    status: "THE HOST",
    stats: [
      ["ROLE", "PROTAGONIST · THE HOST"],
      ["STATE", "NO MEMORY OF 48 HRS"],
      ["EVIDENCE", "3 TAPES · 1 WOUND"],
      ["THE OTHER", "A VOICE THAT IS HIS"],
    ],
    note: "Wakes at 3:14 AM to an apartment arranged wrong. Someone with his face is already inside, and the tapes know more than he does.",
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
        OVS // CHARACTER BIBLE
      </span>
      <h2 className="mt-4 max-w-[16ch] text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
        Two faces. One record.
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
