// Frame-sequence config. Swap these paths/counts when you drop in your own
// rendered LIKENESS character footage (sliced to /public/frames/frame_0001.jpg ...).

const pad = (i: number) => String(i).padStart(4, "0");

export const HERO = {
  count: 169,
  path: (i: number) => `/frames/frame_${pad(i)}.jpg`,
};

export const CINE = {
  count: 169,
  path: (i: number) => `/frames2/frame_${pad(i)}.jpg`,
};

// Scroll "beat" cards shown over the cinematic reveal. show/hide are 0–1 scroll
// progress thresholds. Rewrite the copy to match your game's lore.
export type Beat = {
  id: string;
  show: number;
  hide: number;
  index: string;
  title: string;
  quote: string;
  source: string;
};

export const BEATS: Beat[] = [
  {
    id: "beat-1",
    show: 0.1,
    hide: 0.3,
    index: "01",
    title: "IDENTITY",
    quote: "Every face is a doorway.",
    source: "CHARACTER FORGE",
  },
  {
    id: "beat-2",
    show: 0.38,
    hide: 0.58,
    index: "02",
    title: "SYNC",
    quote: "Your likeness is your weapon.",
    source: "REAL-TIME MORPH ENGINE",
  },
  {
    id: "beat-3",
    show: 0.64,
    hide: 0.84,
    index: "03",
    title: "ASCEND",
    quote: "Become anyone. Answer to no one.",
    source: "THE FINAL FORM",
  },
];
