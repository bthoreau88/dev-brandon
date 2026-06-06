"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Character Forge",
    body: "Sculpt a likeness from a single photo. Bone structure, skin, voiceprint — fully yours.",
    span: "md:col-span-2",
  },
  {
    title: "Real-Time Morph",
    body: "Swap identities mid-match with zero load. The engine renders you on the fly.",
    span: "",
  },
  {
    title: "Trust Economy",
    body: "Every face you wear carries reputation. Spend it. Burn it. Steal it.",
    span: "",
  },
  {
    title: "Neural Disguise",
    body: "AI opponents read micro-expressions. Hold your cover or get flagged.",
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
          SYSTEMS · NOMINAL
        </motion.span>
        <motion.h2
          variants={item}
          className="mt-4 max-w-[20ch] text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl"
        >
          An engine built for deception.
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
