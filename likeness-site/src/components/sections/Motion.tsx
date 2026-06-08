"use client";

import { motion } from "framer-motion";
import { asset } from "@/lib/base";

const CLIPS = [
  {
    src: asset("/video/study-motion.mp4"),
    poster: asset("/video/study-motion.jpg"),
    code: "ENV · C·08 — THE STUDY",
    title: "Window onto the wrong city",
    note: "A slow hold on the impossible room. The skyline outside is one Brandon never lived in.",
  },
  {
    src: asset("/video/investigate-motion.mp4"),
    poster: asset("/video/investigate-motion.jpg"),
    code: "LOOP · INVESTIGATE THE APARTMENT",
    title: "The room watches back",
    note: "The CRT plays surveillance of the pair — footage from a camera no one set up.",
  },
];

export function Motion() {
  return (
    <section
      id="motion"
      className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-8 md:py-32"
    >
      <span className="mono text-xs tracking-[0.4em] text-accent">
        OVS // IN MOTION
      </span>
      <h2 className="mt-4 max-w-[18ch] text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
        The room, moving.
      </h2>
      <p className="mt-5 max-w-[58ch] text-sm leading-relaxed text-muted md:text-base">
        Micro-movement only — dust, breath, the lamp&apos;s flicker. The camera
        is a witness; it watches the room answer before the player does.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {CLIPS.map((c, i) => (
          <motion.figure
            key={c.src}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 85, damping: 20, delay: i * 0.06 }}
            className="hud-frame group relative overflow-hidden rounded-md border border-white/10"
          >
            <div className="relative aspect-[16/9] w-full bg-black">
              <video
                className="h-full w-full object-cover"
                src={c.src}
                poster={c.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="pointer-events-none absolute inset-0 grain" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
              <span className="mono text-[10px] tracking-[0.3em] text-teal">
                {c.code}
              </span>
              <p className="mt-1 text-sm font-semibold tracking-tight">{c.title}</p>
              <p className="mt-1 max-w-[50ch] text-xs leading-relaxed text-muted">
                {c.note}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
