"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { asset } from "@/lib/base";

const ENV = [
  {
    img: asset("/stills/living-room.png"),
    code: "ENV · C·01 — LIVING ROOM",
    title: "3:14 AM Establish",
    note: "The couch, the coffee table, three tapes, and a CRT humming static in the corner.",
  },
  {
    img: asset("/stills/bathroom.png"),
    code: "ENV · C·03 — BATHROOM",
    title: "Fluorescent Ring",
    note: "Off-white tile, a vintage mirror, a faucet that drips. Where the reflection lags.",
  },
  {
    img: asset("/stills/office.png"),
    code: "ENV · C·04 — OFFICE",
    title: "Laptop as Light",
    note: "A locked drawer with a brass keyhole. The screen the only thing awake in the room.",
  },
  {
    img: asset("/stills/study-window.png"),
    code: "ENV · C·08 — THE STUDY",
    title: "Window Onto the Wrong City",
    note: "The only room lit without a visible source. The typewriter page rewrites itself between visits.",
  },
  {
    img: asset("/stills/bedroom.png"),
    code: "ENV · C·07 — BEDROOM",
    title: "Climax Space",
    note: "A camcorder on the dresser, red REC light on, lens pointed at the door. Reserved palette.",
  },
  {
    img: asset("/stills/wall-of-photos.png"),
    code: "ENV · D·05 — WALL OF PHOTOS",
    title: "Frames That Empty",
    note: "Family photographs in mismatched wood. Turn your back and the frames go blank.",
  },
  {
    img: asset("/stills/apt-study-desk.png"),
    code: "ENV · THE STUDY · OCCUPIED",
    title: "The Impossible Room",
    note: "Walls that don't meet at right angles. Furniture at 95% scale, the same wrongness twice.",
  },
  {
    img: asset("/stills/apt-investigate-crt.png"),
    code: "LOOP · INVESTIGATE THE APARTMENT",
    title: "The Room Watches Back",
    note: "The CRT plays surveillance of the pair — footage from a camera no one set up.",
  },
];

export function Apartment() {
  return (
    <section
      id="apartment"
      className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-8 md:py-32"
    >
      <span className="mono text-xs tracking-[0.4em] text-accent">
        § 08–09 // LOCATION BIBLE
      </span>
      <h2 className="mt-4 max-w-[20ch] text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
        The apartment has a will.
      </h2>
      <p className="mt-5 max-w-[58ch] text-sm leading-relaxed text-muted md:text-base">
        Five named rooms plus one that does not exist on the floor plan until
        Scene 3. The apartment is the antagonist — it rearranges when the player
        isn&apos;t looking, withholds, and returns objects in the wrong order.
        The horror is geographical, not supernatural.
      </p>

      {/* Typewriter centerpiece */}
      <motion.figure
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className="hud-frame relative mt-12 grid grid-cols-1 overflow-hidden rounded-md border border-white/10 lg:grid-cols-2"
      >
        <div className="relative aspect-[3/2] w-full lg:aspect-auto lg:min-h-[340px]">
          <Image
            src={asset("/stills/typewriter-note.png")}
            alt="Typewriter — He doesn't remember writing this."
            fill
            sizes="(max-width: 1024px) 100vw, 700px"
            className="object-cover"
          />
        </div>
        <figcaption className="flex flex-col justify-center gap-4 bg-background/60 p-8 md:p-12">
          <span className="mono text-[10px] tracking-[0.3em] text-teal">
            OBJECT MACRO · D·06 — TYPEWRITER PAGE
          </span>
          <p className="text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
            &ldquo;He doesn&apos;t remember writing this. He never does.&rdquo;
          </p>
          <p className="max-w-[44ch] text-sm leading-relaxed text-muted">
            Soft warm fill from no visible source — theatrical, impossible. The
            page is evidence the room authored before the player arrived.
          </p>
        </figcaption>
      </motion.figure>

      {/* Environment grid */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ENV.map((s, i) => (
          <motion.figure
            key={s.code}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 85, damping: 20, delay: i * 0.05 }}
            className="hud-frame group relative overflow-hidden rounded-md border border-white/10"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={s.img}
                alt={s.title}
                fill
                sizes="(max-width: 1024px) 100vw, 680px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 p-5">
              <span className="mono text-[10px] tracking-[0.3em] text-teal">
                {s.code}
              </span>
              <p className="mt-1 text-sm font-semibold tracking-tight">{s.title}</p>
              <p className="mt-1 max-w-[48ch] text-xs leading-relaxed text-muted">
                {s.note}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
