"use client";

// OVS · SCORE — room tone as music.
// The sound archive the rooms are scored from: tape hiss, fluorescent hum, a
// detuned piano under a drone. Every cue is procedurally SYNTHESIZED room tone
// (no samples) and plays in-page. Rendered in the OVS dark system; waveforms
// are deterministic (SSR-safe, no hydration drift).

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { asset } from "@/lib/base";

// Deterministic bar heights (0..1) — a seeded pseudo-waveform, stable across
// server and client render.
function wave(seed: number, n: number): number[] {
  const out: number[] = [];
  for (let i = 0; i < n; i++) {
    const a = Math.sin(seed * 12.9898 + i * 0.7);
    const b = Math.sin(seed * 4.1414 + i * 1.31);
    const v = (Math.sin(a * 3 + b * 2) + 1) / 2; // 0..1
    out.push(0.12 + v * 0.88);
  }
  return out;
}

// ---- Sonic DNA (the sound law) ----
const SOUND_LAW: { k: string; v: string }[] = [
  { k: "SOURCE", v: "Diegetic first. Every sound could exist in the room — a fridge, a tape, a piano nobody is playing. The score hides inside the set." },
  { k: "MELODY", v: "Withheld. A theme starts and the room edits it out. If you can hum it on the way home, it was mixed wrong." },
  { k: "TEXTURE", v: "Tape hiss, a fluorescent 60-cycle hum, a detuned upright piano, a sub drone you feel before you hear." },
  { k: "RULE", v: "Score the player, don't entertain them. Comfort is a bug. The music should feel like being remembered incorrectly." },
];

// ---- Cues — the score archive, tied to room states ----
type Cue = {
  code: string;
  title: string;
  state: string;
  time: string;
  seed: number;
  note: string;
  audio: string;
  loop?: boolean;
  flag?: "drone" | "contradiction";
};

const CUES: Cue[] = [
  {
    code: "CUE_00",
    title: "Room Tone (Normal)",
    state: "STATE_00 · NORMAL",
    time: "∞ LOOP",
    seed: 3,
    audio: "cue_00.wav",
    loop: true,
    note: "The baseline you stop hearing: a 40 Hz refrigerator drone and the fluorescent buzz. Silence with a pulse in it.",
  },
  {
    code: "CUE_01",
    title: "Arrival",
    state: "BEAT · ARRIVAL",
    time: "0:06",
    seed: 9,
    audio: "cue_01.wav",
    note: "Brass key in a worn lock, the desk bell's dead sustain, and one detuned piano note that never gets a second.",
  },
  {
    code: "CUE_02",
    title: "Residue",
    state: "BEAT · RESIDUE",
    time: "0:10",
    seed: 21,
    audio: "cue_02.wav",
    note: "Tape hiss rising like damp through drywall — a memory bleeding in from the next room at the wrong volume.",
  },
  {
    code: "CUE_03",
    title: "Mirror Lag",
    state: "STATE_02 · MIRROR LAG",
    time: "0:06",
    seed: 42,
    audio: "cue_03.wav",
    note: "A single note, then its reflection — a half-beat late and a semitone wrong. The echo arrives before you decide to play.",
    flag: "drone",
  },
  {
    code: "CUE_04",
    title: "Tape Contradiction",
    state: "STATE_04 · TAPE CONTRADICTION",
    time: "0:08",
    seed: 68,
    audio: "cue_04.wav",
    note: "Two takes of the same spoken cadence, panned hard left and right, drifting out of sync until neither is the truth.",
    flag: "contradiction",
  },
  {
    code: "CUE_05",
    title: "Double Occupancy",
    state: "BEAT · DOUBLE OCCUPANCY",
    time: "0:10",
    seed: 91,
    audio: "cue_05.wav",
    note: "A breath that isn't yours, low in the mix, and a drone that swells to fill the room a second body would displace.",
    flag: "drone",
  },
];

// ---- Signal chain (the equipment law) ----
const CHAIN = [
  "DETUNED UPRIGHT PIANO",
  "1/4\" TAPE MACHINE (HISS + WOW)",
  "CONTACT MICS ON THE WALLS",
  "MODULAR SUB DRONE",
  "ROOM-14 CONVOLUTION REVERB",
];

function Waveform({
  seed,
  bars = 40,
  className = "",
  active = false,
}: {
  seed: number;
  bars?: number;
  className?: string;
  active?: boolean;
}) {
  const heights = wave(seed, bars);
  return (
    <div
      aria-hidden
      className={`flex h-full w-full items-end gap-[2px] ${
        active ? "opacity-100" : ""
      } ${className}`}
    >
      {heights.map((h, i) => (
        <span
          key={i}
          className={`flex-1 rounded-sm ${
            active ? "eq-bar bg-accent" : "bg-teal/60"
          }`}
          style={{
            height: `${Math.round(h * 100)}%`,
            ...(active
              ? {
                  animationDelay: `${(i % 12) * 0.07}s`,
                  animationDuration: `${0.7 + ((i * 29) % 60) / 100}s`,
                }
              : {}),
          }}
        />
      ))}
    </div>
  );
}

export function Score() {
  // Hero equalizer: many bars, animated via CSS with staggered timing.
  const heroBars = 64;

  // One shared <audio> element (rendered below); one cue plays at a time.
  // React stops it on unmount, so no cleanup effect is needed.
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState<string | null>(null);

  const toggleCue = (cue: Cue) => {
    const a = audioRef.current;
    if (!a) return;
    if (playing === cue.code) {
      a.pause();
      setPlaying(null);
      return;
    }
    a.pause();
    a.src = asset(`/assets/audio/${cue.audio}`);
    a.loop = Boolean(cue.loop);
    a.currentTime = 0;
    void a.play().then(
      () => setPlaying(cue.code),
      () => setPlaying(null),
    );
  };

  return (
    <div className="relative">
      {/* shared audio element for the cue archive */}
      <audio
        ref={audioRef}
        preload="none"
        onEnded={() => setPlaying(null)}
        className="hidden"
      />

      <div className="mx-auto max-w-[1400px] px-6 pt-7 md:px-10">
        <Link
          href="/"
          className="mono text-[11px] tracking-[0.25em] text-muted uppercase transition-colors hover:text-foreground"
        >
          ← OVS // LIKENESS
        </Link>
      </div>

      {/* ============ HERO ============ */}
      <section className="grain relative flex min-h-[82vh] flex-col justify-end overflow-hidden px-6 pb-14 md:px-10">
        {/* animated room-tone equalizer, bottom-anchored */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-1/2 items-end gap-[3px] px-6 opacity-30 md:px-10">
          {Array.from({ length: heroBars }).map((_, i) => (
            <span
              key={i}
              className="eq-bar flex-1 rounded-sm bg-teal"
              style={{
                height: "100%",
                animationDelay: `${(i % 16) * 0.09}s`,
                animationDuration: `${1.1 + ((i * 37) % 90) / 100}s`,
              }}
            />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />

        <div className="relative">
          <span className="mono text-xs tracking-[0.5em] text-accent">
            OVS&nbsp;//&nbsp;SOUND&nbsp;DEPT
          </span>
          <h1 className="glow-accent mt-4 text-[20vw] font-extrabold leading-[0.82] tracking-tighter md:text-[14vw]">
            SCORE
          </h1>
          <p className="mt-6 max-w-[54ch] text-sm leading-relaxed text-muted md:text-base">
            Room tone as music. The sound archive the LIKENESS rooms are scored
            from — tape hiss, a fluorescent hum, a detuned piano under a drone.
            Every cue below is procedurally synthesized and plays in-page. Press
            one, and the room starts listening back.
          </p>
          <span className="mono mt-6 inline-flex items-center gap-2.5 rounded-sm border border-teal/40 px-4 py-2 text-[10px] font-semibold tracking-[0.2em] text-teal uppercase">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
            WORK_OVS_MUSIC · SOUND ARCHIVE
          </span>
        </div>
      </section>

      {/* ============ SONIC DNA ============ */}
      <section className="grain relative border-y border-white/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <span className="mono text-xs tracking-[0.4em] text-teal">
            § SCR-00 // THE SOUND LAW
          </span>
          <h2 className="mt-4 max-w-[22ch] text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            If you can hum it, it&rsquo;s wrong.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-white/10 bg-white/10 md:grid-cols-2">
            {SOUND_LAW.map((row, i) => (
              <motion.div
                key={row.k}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                className="bg-background p-7"
              >
                <span className="mono text-[10px] tracking-[0.35em] text-accent">
                  {row.k}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {row.v}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ THE CUE ARCHIVE ============ */}
      <section
        id="cues"
        className="grain relative mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32"
      >
        <span className="mono text-xs tracking-[0.4em] text-accent">
          § SCR-01 // CUE ARCHIVE
        </span>
        <h2 className="mt-4 max-w-[20ch] text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl">
          Six cues. None of them resolve.
        </h2>
        <p className="mt-5 max-w-[60ch] text-sm leading-relaxed text-muted md:text-base">
          Each cue is filed against a room state, the way an object unlocks a
          memory. Press play — every cue is procedurally synthesized room tone,
          no samples, so it&rsquo;s something the room could plausibly be making
          on its own.
        </p>

        <div className="mt-12 space-y-3">
          {CUES.map((c, i) => (
            <motion.article
              key={c.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 22,
                delay: (i % 3) * 0.05,
              }}
              className={`hud-frame glass group grid grid-cols-1 gap-5 rounded-md p-5 transition-colors md:grid-cols-[auto_1fr_auto] md:items-center md:gap-7 md:p-6 ${
                playing === c.code
                  ? "ring-1 ring-teal/60"
                  : c.flag === "contradiction"
                    ? "ring-1 ring-accent/40"
                    : ""
              }`}
            >
              {/* play/pause control + label */}
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => toggleCue(c)}
                  aria-label={`${playing === c.code ? "Pause" : "Play"} ${c.title}`}
                  aria-pressed={playing === c.code}
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-sm border text-sm transition-colors ${
                    playing === c.code
                      ? "border-teal bg-teal text-black"
                      : "border-teal/40 text-teal hover:bg-teal hover:text-black"
                  }`}
                >
                  {playing === c.code ? "❚❚" : "▶"}
                </button>
                <div>
                  <span className="mono block text-[10px] tracking-[0.3em] text-teal/90">
                    {c.code}
                  </span>
                  <h3 className="text-lg font-bold tracking-tight md:text-xl">
                    {c.title}
                  </h3>
                </div>
              </div>

              {/* waveform + note */}
              <div className="min-w-0">
                <button
                  type="button"
                  onClick={() => toggleCue(c)}
                  aria-label={`${playing === c.code ? "Pause" : "Play"} ${c.title}`}
                  className="block h-10 w-full cursor-pointer"
                >
                  <Waveform
                    seed={c.seed}
                    bars={44}
                    active={playing === c.code}
                    className={c.flag === "contradiction" ? "opacity-90" : ""}
                  />
                </button>
                <p className="mt-2 text-[12px] leading-relaxed text-muted">
                  {c.note}
                </p>
              </div>

              {/* meta */}
              <div className="mono flex shrink-0 flex-row items-center justify-between gap-4 text-[10px] tracking-[0.2em] text-muted md:flex-col md:items-end md:justify-center">
                <span className={playing === c.code ? "text-teal" : "text-accent/90"}>
                  {playing === c.code ? "▶ NOW PLAYING" : c.state}
                </span>
                <span>{c.time}</span>
                {c.flag === "drone" && (
                  <span className="text-teal/70">DRONE</span>
                )}
                {c.flag === "contradiction" && (
                  <span className="text-accent">OUT OF SYNC</span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ============ SIGNAL CHAIN ============ */}
      <section className="grain relative border-y border-white/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <span className="mono text-xs tracking-[0.4em] text-teal">
            § SCR-02 // SIGNAL CHAIN
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            The room is the instrument.
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {CHAIN.map((node, i) => (
              <div key={node} className="flex items-center gap-3">
                <motion.span
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="mono rounded-sm border border-white/15 bg-white/[0.03] px-4 py-2.5 text-[11px] tracking-[0.15em] text-foreground/85"
                >
                  {node}
                </motion.span>
                {i < CHAIN.length - 1 && (
                  <span className="text-accent/70">→</span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-[62ch] text-sm leading-relaxed text-muted">
            Nothing synthetic pretends to be real; everything real is pushed
            until it turns strange. The chain ends in Room 14&rsquo;s own
            reverb, so every cue sounds like it was recorded standing exactly
            where the player is standing.
          </p>
        </div>
      </section>

      {/* ============ closing CTA ============ */}
      <footer className="grain relative border-t border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <span className="mono text-xs tracking-[0.4em] text-accent">
            OVS // SCORE · CLOSE
          </span>
          <h2 className="glow-accent mt-4 max-w-[18ch] text-5xl font-extrabold leading-[0.92] tracking-tighter md:text-8xl">
            Listen for the edit.
          </h2>
          <div className="mt-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-[46ch] text-sm text-muted">
              You will not remember a melody. You will remember a feeling that
              the room was keeping time with you — and that somewhere in the
              mix, a second take of your own voice was already playing.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/room-testifies"
                className="mono rounded-sm bg-accent px-5 py-3 text-[11px] font-semibold tracking-[0.2em] text-black uppercase transition-transform hover:scale-105"
              >
                The room testifies
              </Link>
              <Link
                href="/tapes"
                className="mono rounded-sm border border-white/15 px-5 py-3 text-[11px] font-semibold tracking-[0.2em] text-muted uppercase transition-colors hover:text-foreground"
              >
                The tapes
              </Link>
              <Link
                href="/universe"
                className="mono rounded-sm border border-teal/40 px-5 py-3 text-[11px] font-semibold tracking-[0.2em] text-teal uppercase transition-colors hover:text-foreground"
              >
                Enter the archive
              </Link>
            </div>
          </div>
          <div className="mono mt-16 flex flex-col gap-2 border-t border-white/10 pt-6 text-[11px] tracking-[0.2em] text-muted md:flex-row md:justify-between">
            <span>© {2026} Omnia Vanitas Studios — LIKENESS // SCORE</span>
            <span>ROOM TONE AS MUSIC</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
