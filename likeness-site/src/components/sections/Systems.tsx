"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "The room is the antagonist",
    body: "No combat. No monster to fight. The apartment rearranges when you look away, withholds, and returns objects in the wrong order. The horror is geographical.",
    span: "md:col-span-2",
  },
  {
    title: "Tape as mechanic",
    body: "Three VHS tapes are the only witnesses. Scrub, rewind, and cross-reference what you said before you forgot it.",
    span: "",
  },
  {
    title: "No HUD. Only blackouts",
    body: "Diegetic everything — the menu is a CRT, pause is an ejected tape. No restart screen, only the gaps in your memory.",
    span: "",
  },
  {
    title: "Two endings. Both true",
    body: "Evidence, not explanation. You finish carrying a question, not an answer — and neither ending lets the room off the hook.",
    span: "md:col-span-2",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

export function Systems() {
  return (
    <section
      id="systems"
      className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-8 md:py-32"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        <motion.span
          variants={item}
          className="font-mono text-xs tracking-[0.4em] text-accent"
        >
          OVS // WHAT THE GAME IS
        </motion.span>
        <motion.h2
          variants={item}
          className="mt-4 max-w-[20ch] text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl"
        >
          A chamber horror that haunts, not answers.
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className={`glass grain relative overflow-hidden rounded-[20px] p-7 ${f.span}`}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-3 max-w-[40ch] text-sm leading-relaxed text-muted">
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
