"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { asset } from "@/lib/base";

// The reserved-palette final frame — near-black + oxblood, used once.
export function Choice() {
  return (
    <section id="choice" className="relative">
      <div className="relative h-[70vh] min-h-[440px] w-full overflow-hidden">
        <Image
          src={asset("/stills/choice-door.png")}
          alt="The Choice — bedroom door at 4:02 AM"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        <div className="grain absolute inset-0" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="absolute inset-0 mx-auto flex max-w-[1400px] flex-col justify-center px-6 md:px-8"
        >
          <span className="mono text-[10px] tracking-[0.4em] text-accent">
            SCENE 08 · A·05 — THE FINAL FRAME · 4:02 AM
          </span>
          <h2 className="glow-accent mt-4 max-w-[14ch] text-4xl font-extrabold leading-[0.95] tracking-tighter md:text-7xl">
            Then there is the door.
          </h2>
          <p className="mt-5 max-w-[42ch] text-sm leading-relaxed text-muted md:text-base">
            Near-black and a thin crack of oxblood. The reserved palette, used
            once in the entire runtime. Two endings wait on the other side. Both
            are true. Neither is.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
