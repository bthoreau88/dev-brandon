"use client";

import { motion } from "framer-motion";

const META = [
  ["BUILD", "UE5 Vertical Slice"],
  ["RUNTIME", "~30 Minutes"],
  ["LOCATION", "Room 14 · The Dellwood"],
  ["ENDINGS", "Two · Both Ambiguous"],
];

export function InDevelopment() {
  return (
    <section
      id="status"
      className="relative border-y border-white/10"
    >
      <div className="grain relative mx-auto max-w-[1400px] px-6 py-20 md:px-8 md:py-24">
        <div className="pointer-events-none absolute -left-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 90, damping: 20 }}
            className="max-w-[44ch]"
          >
            <span className="mono inline-flex items-center gap-2.5 rounded-sm border border-teal/40 px-4 py-2 text-[11px] font-semibold tracking-[0.25em] text-teal uppercase">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
              In Development
            </span>
            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              The room is still being built.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
              LIKENESS · TAPE 03 is in active production at Omnia Vanitas Studios
              — an AAA-likeness vertical slice rendered in Unreal Engine 5. No
              store page yet. This is the archive while the game takes shape.
            </p>
          </motion.div>

          <motion.dl
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-2 gap-px overflow-hidden rounded-md bg-white/5 sm:grid-cols-4 lg:max-w-[560px]"
          >
            {META.map(([k, v]) => (
              <motion.div
                key={k}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0 },
                }}
                className="bg-background/80 px-5 py-5"
              >
                <dt className="mono text-[9px] tracking-[0.25em] text-teal">{k}</dt>
                <dd className="mono mt-2 text-sm text-foreground">{v}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
