// Shared registry — the single source of truth the site reads, mirrored from the
// OVS handoff CSV registries (character/narrative/level/mechanics/asset).
// Per the Production Bible V001: the site and the game speak the same language,
// matching IDs, so content can expand without losing identity.

export const NORTH_STAR = {
  project: "LIKENESS : THE GAME",
  studio: "Omnia Vanitas Studios",
  tagline: "A room for two. A night for four.",
  line: "The room remembers what love edits out.",
  promise:
    "You are inside a room that knows the argument better than you do. Every object remembers a different version of the relationship — and your own memory might be the edited copy.",
  setting: "The Dellwood motel · Room 14",
};

// ---- Characters (character_registry.csv) ----
export type Character = {
  id: string;
  name: string;
  role: string;
  status: string;
  identityLock: string;
  driftRisk: string;
  image?: string;
  isDouble?: boolean;
};

export const CHARACTERS: Character[] = [
  {
    id: "CHR_THOREAU_001",
    name: "THOREAU",
    role: "Player · Witness · Unreliable memory carrier",
    status: "REF_IN_PROGRESS",
    identityLock:
      "Black man, early 30s, medium-deep warm brown skin, round gold glasses, mustache and goatee, guarded intelligent presence.",
    driftRisk:
      "Generic AI face, age shift, missing glasses, incorrect facial hair, over-glamorization.",
    image: "/stills/thoreau-portrait-clean.png",
  },
  {
    id: "CHR_DRYA_001",
    name: "DRYA",
    role: "Relationship anchor · Contradiction source · Double compare",
    status: "REF_IN_PROGRESS",
    identityLock:
      "Black woman, late 20s, warm medium-brown skin, dancer body language, jewelry and piercing detail, guarded emotional force.",
    driftRisk: "Generic glamour model, body-type drift, victim-only staging.",
    image: "/stills/drya-close.png",
  },
  {
    id: "CHR_DARK_THOREAU_001",
    name: "DARK THOREAU",
    role: "The double · Embodied contradiction",
    status: "IDEA",
    identityLock:
      "Same identity as THOREAU — wrong timing, posture, gaze, breath, and response delay only.",
    driftRisk:
      "Monster redesign, gore-first escalation, losing the recognizable base identity.",
    image: "/stills/the-other.png",
    isDouble: true,
  },
];

// ---- Inspectable evidence (asset_manifest.csv + § 10 vertical slice) ----
export type Evidence = {
  id: string;
  name: string;
  status: string;
  qc: string;
  image?: string;
  tone?: "key" | "study" | "tape" | "mirror" | "door";
  note: string;
};

export const EVIDENCE: Evidence[] = [
  {
    id: "PROP_KEY14_001",
    name: "Brass Motel Key 14",
    status: "IDEA",
    qc: "Must read as old brass, not shiny gold.",
    image: "/stills/key-14.png",
    note: "The key that opens the room that opens everything. A black diamond tag, the number worn soft.",
  },
  {
    id: "PROP_LOCKET_001",
    name: "Locket Tintype",
    status: "IDEA",
    qc: "High-detail close-inspect asset.",
    tone: "study",
    note: "A tintype the room keeps re-cropping. The two faces inside don't always agree on who was happy.",
  },
  {
    id: "PROP_TAPE_001",
    name: "Tape 03",
    status: "IDEA",
    qc: "Reads as worn consumer cassette; playback rewrites room state.",
    image: "/stills/three-tapes.png",
    note: "Recorded truth that turns out unreliable. Play it and the room edits itself behind you.",
  },
  {
    id: "PROP_MIRROR_001",
    name: "Bathroom Mirror",
    status: "IDEA",
    qc: "Reflection lag must read clearly — no cheap jump scare.",
    image: "/stills/thoreau-mirror.png",
    note: "The reflection answers late. Your eyes are open; the reflected ones are still closed, mid-word.",
  },
  {
    id: "PROP_DEVICE_001",
    name: "The Black Device",
    status: "IDEA",
    qc: "Purposeful, never explained outright. No sci-fi UI gloss.",
    tone: "door",
    note: "Cold to the touch and warm where it shouldn't be. It is listening, and it is not on your side.",
  },
];

// ---- Narrative beats (narrative_beats.csv) ----
export type Beat = {
  id: string;
  name: string;
  status: string;
  characters: string[];
  trigger: string;
  roomState: string;
  webUnlock: string;
};

export const BEATS: Beat[] = [
  {
    id: "BEAT_ARRIVAL_001",
    name: "Arrival at Room 14",
    status: "IDEA",
    characters: ["THOREAU"],
    trigger: "Player enters the room",
    roomState: "STATE_00 · NORMAL",
    webUnlock: "/evidence",
  },
  {
    id: "BEAT_MIRROR_LAG_001",
    name: "The Mirror Answers Late",
    status: "IDEA",
    characters: ["THOREAU", "DARK THOREAU"],
    trigger: "Inspect the bathroom mirror",
    roomState: "STATE_02 · MIRROR LAG",
    webUnlock: "/tapes",
  },
  {
    id: "BEAT_TAPE_CONTRADICTION_001",
    name: "Tape Contradiction",
    status: "IDEA",
    characters: ["THOREAU", "DRYA"],
    trigger: "Play the tape",
    roomState: "STATE_04 · TAPE CONTRADICTION",
    webUnlock: "/tapes",
  },
];

// ---- Story architecture (§ 07) — the six-beat arc ----
export const ARC: { beat: string; fn: string; game: string }[] = [
  { beat: "Arrival", fn: "Ground the player in Room 14", game: "Key, desk bell, hallway, normal lighting." },
  { beat: "Residue", fn: "Expose emotional history", game: "Objects unlock conflicting memories." },
  { beat: "Mirror Lag", fn: "Introduce identity instability", game: "Reflection timing contradicts player action." },
  { beat: "Tape Contradiction", fn: "Show recorded truth as unreliable", game: "Tape playback rewrites room state." },
  { beat: "Double Occupancy", fn: "Reveal body/voice mismatch", game: "Dark variant appears through posture and timing." },
  { beat: "Final Memory Lock", fn: "Choose what evidence to believe", game: "End-of-slice title card and web unlock." },
];

// ---- Locations (level_registry.csv) ----
export type Level = {
  id: string;
  name: string;
  route: string;
  status: string;
  storyFunction: string;
};

export const LEVELS: Level[] = [
  {
    id: "LOC_DELLWOOD_ROOM14_001",
    name: "Room 14",
    route: "/room-14",
    status: "IDEA",
    storyFunction: "Primary chamber. The argument loop and the identity fracture.",
  },
  {
    id: "LOC_DELLWOOD_HALLWAY_001",
    name: "Dellwood Hallway",
    route: "/motel",
    status: "IDEA",
    storyFunction: "Threshold, repetition, impossible doors.",
  },
  {
    id: "LOC_DELLWOOD_OFFICE_001",
    name: "Front Office",
    route: "/motel",
    status: "IDEA",
    storyFunction: "Ledger, key exchange, the arrival ritual.",
  },
];

// ---- Companion route map (§ 15 Three.js architecture) ----
export type Route = { route: string; label: string; fn: string; live: boolean };

export const ROUTES: Route[] = [
  { route: "/universe", label: "Landing", fn: "OVS hierarchy and current campaign title.", live: true },
  { route: "/characters", label: "Characters", fn: "Identity cards and doubles.", live: true },
  { route: "/evidence", label: "Evidence", fn: "The inspectable object timeline.", live: true },
  { route: "/tapes", label: "Tapes", fn: "Tape archive and unlock state.", live: true },
  { route: "/motel", label: "Motel Map", fn: "Interactive Dellwood map and hidden rooms.", live: false },
  { route: "/room-14", label: "Room 14", fn: "Explorable 3D chamber with inspectable objects.", live: false },
  { route: "/devlog", label: "Devlog", fn: "Production notes from build sessions.", live: false },
];
