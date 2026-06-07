// TAPE 03 canon data, lifted from the OVS Production Bible V.002.
// One source of truth for the site's story-driven sections.

// ---- § 02–03 · Visual DNA / Color Matrix --------------------------------
export type Palette = {
  name: string;
  hex: string;
  family: string;
  job: string;
};

// The six palette families. "Color is behavior — each family does a job."
export const PALETTE: Palette[] = [
  {
    name: "PAPER CREAM",
    hex: "#F2EFE4",
    family: "BONE HIGHLIGHT",
    job: "Sepia-bone highlight. Warm domestic memory before the room turns.",
  },
  {
    name: "NEAR BLACK",
    hex: "#15140F",
    family: "CRUSHED SHADOW",
    job: "The default. Crushed shadow the room hides inside. Reject soft fill.",
  },
  {
    name: "MUTED OLIVE",
    hex: "#6A6B61",
    family: "INSTITUTIONAL",
    job: "Metadata grey. The clinical, archival register beneath the warmth.",
  },
  {
    name: "TUNGSTEN AMBER",
    hex: "#A76E37",
    family: "WARM INTERIOR",
    job: "Lamp heat. False comfort — the version Brandon wants to believe.",
  },
  {
    name: "THRESHOLD TEAL",
    hex: "#6FC6D6",
    family: "COLD INTERIOR / RUPTURE",
    job: "Surveillance, the impossible Study, the rupture bleed at frame edge.",
  },
  {
    name: "OXBLOOD",
    hex: "#7F2921",
    family: "RESERVED FINAL",
    job: "Used once. The bedroom door at 4:02 AM. No other color allowed near it.",
  },
];

// ---- § 04–05 · Camera Law ----------------------------------------------
export type Law = { k: string; v: string };

export const CAMERA_LAW: Law[] = [
  {
    k: "PERSPECTIVE",
    v: "First-person for traversal. Third-person for waking, tape playback, the final door. The shift from first to third is the language of dissociation.",
  },
  {
    k: "LENS",
    v: "FOV 75 default · 65 in stealth · 90 in reality-shift. Tape footage simulates a 35mm consumer camcorder — soft, barrel-distorted, no anamorphic squeeze.",
  },
  {
    k: "MOVEMENT",
    v: "Static unless the story needs the room alive. Micro-movement belongs to objects — dust, breath, reflection, lamp flicker. Never a Steadicam glide.",
  },
  {
    k: "THE OTHER",
    v: "Always at frame edge, half-occluded, or out of focus. Never centered. Never sharp. The player must doubt that they saw what they saw.",
  },
];

// Shot families — § 05
export const SHOT_FAMILIES: Law[] = [
  { k: "CLEAN SINGLE", v: "Brandon centered, room receding into pressure. Performance showcase." },
  { k: "MIRROR / REFLECTION", v: "Reflection can lag, brighten, or hide the body. Identity instability." },
  { k: "DOORWAY FRAME", v: "The room beyond is always darker than the room you're in. Threshold pressure." },
  { k: "OBJECT MACRO", v: "Tape labels, camcorder, the key, the Polaroids. Shallow DOF. Evidence." },
];

// ---- § 11 · Scene Cards · 8 Beats --------------------------------------
export type Scene = {
  no: string;
  min: string;
  title: string;
  fn: string;
  emotion: string;
  register: string;
  camera: string;
  mechanic: string;
};

export const SCENES: Scene[] = [
  {
    no: "01", min: "5 MIN", title: "WAKE",
    fn: "Establish the apartment, the wound, the tapes.",
    emotion: "Disoriented. Calm-on-the-surface.",
    register: "Warm interior · cold rupture on TV.",
    camera: "Third → first. The transition is the cue.",
    mechanic: "Movement, interaction.",
  },
  {
    no: "02", min: "3 MIN", title: "TAPE 01",
    fn: "Brandon eight days ago. Therapy framing.",
    emotion: "Articulate. Distant. Foreshadow.",
    register: "Sepia-umber tape footage.",
    camera: "Locked third-person on couch.",
    mechanic: "Tape playback.",
  },
  {
    no: "03", min: "5 MIN", title: "THE WRONG ROOM",
    fn: "Reality shifts. The Study reveal.",
    emotion: "Dawning recognition.",
    register: "Cold interior bleeds into warm.",
    camera: "First-person, no cuts.",
    mechanic: "Reality-shift system.",
  },
  {
    no: "04", min: "4 MIN", title: "HIDE",
    fn: "The Other is inside. Hold your breath.",
    emotion: "Contained dread. Behind the player.",
    register: "Cold interior. Practicals failing.",
    camera: "First-person, stealth FOV 65.",
    mechanic: "Stealth, line of sight.",
  },
  {
    no: "05", min: "3 MIN", title: "TAPE 02",
    fn: "Brandon two nights ago. Hides a key.",
    emotion: "Fast, scared. Player behind.",
    register: "Tape distortion at intervals.",
    camera: "Locked. Static.",
    mechanic: "Scrub / rewind hidden audio.",
  },
  {
    no: "06", min: "5 MIN", title: "DETECTIVE LOOP",
    fn: "Key, drawer, voicemail, photos.",
    emotion: "The first reading is grief.",
    register: "Warm interior. Object macro.",
    camera: "Insert-heavy. Macro for Polaroids.",
    mechanic: "Photo comparison.",
  },
  {
    no: "07", min: "4 MIN", title: "TAPE 03",
    fn: "The conversation Brandon forgot.",
    emotion: "Recognition. No relief.",
    register: "Tape with structural rupture.",
    camera: "Camera moves itself. Once only.",
    mechanic: "Tape + escalated shifts.",
  },
  {
    no: "08", min: "5 MIN", title: "THE CHOICE",
    fn: "The bedroom door. Two endings, both ambiguous.",
    emotion: "Stillness. A single question.",
    register: "Reserved palette — near-black + oxblood.",
    camera: "Third-person, behind Brandon.",
    mechanic: "The final door.",
  },
];

// Pressure variables — § 07
export const PRESSURE: Law[] = [
  { k: "TIME", v: "The clock advances from 3:14 to 4:02 AM, shown only on the CRT timestamp." },
  { k: "GEOGRAPHY", v: "Rooms rearrange when the player isn't looking." },
  { k: "AUDIO", v: "Diegetic sound grows quieter, scene by scene." },
  { k: "LIGHT", v: "Practicals fail one by one." },
];
