// LIKENESS · THE ROOM TESTIFIES — Production Board V.002.
// 15-frame editorial montage system: frame lock, voiceover timing, motion + sound.

export type Frame = {
  no: string;
  secs: string;
  title: string;
  vo: string;
  motion: string;
  sound: string;
  purpose: string;
  phase: 1 | 2 | 3 | 4;
};

export const FRAMES: Frame[] = [
  {
    no: "01", secs: "6S", title: "THRESHOLD INTO ROOM 14",
    vo: "You came looking for a ghost.",
    motion: "Slow push from inside the room toward Thoreau and Drya at the door.",
    sound: "Door hinge, hallway hum, low room tone.",
    purpose: "The vulnerable entry point. People entering a room they do not control.",
    phase: 1,
  },
  {
    no: "02", secs: "5S", title: "THE ROOM REFUSES COMFORT",
    vo: "That was kind of you. But ghosts are simple.",
    motion: "Locked-off room shot. Tiny lamp flicker; no supernatural movement.",
    sound: "Lamp buzz, weak HVAC, quiet carpeted air.",
    purpose: "The room is ordinary, which makes the answer more disturbing.",
    phase: 1,
  },
  {
    no: "03", secs: "6S", title: "EVIDENCE TABLE",
    vo: "This is not what died in the room. This is what kept living.",
    motion: "Macro push from envelope to key and recorder; restrained rack focus.",
    sound: "Metal key shift, damp table tone, tape hiss entering.",
    purpose: "Objects become testimony without becoming fantasy props.",
    phase: 1,
  },
  {
    no: "04", secs: "5S", title: "TAPE RECORDER BEGINS",
    vo: "A room becomes haunted when the same permission keeps entering.",
    motion: "Hand presses record; red light glows; subtle machine vibration.",
    sound: "Button click, cassette motor, hiss.",
    purpose: "The testimony officially begins.",
    phase: 1,
  },
  {
    no: "05", secs: "6S", title: "INVESTIGATION BOARD",
    vo: "A bed. A lock. A form. A price. A camera. A mirror.",
    motion: "Slow dolly inward from behind Thoreau as he studies the board.",
    sound: "Fluorescent buzz, paper edge movement, faint static.",
    purpose: "The haunting becomes a system of records and images.",
    phase: 2,
  },
  {
    no: "06", secs: "5S", title: "GLASSES REFLECTION",
    vo: "First they learned to write the body down.",
    motion: "Tiny push into lens reflection; evidence briefly sharpens.",
    sound: "Tape hiss, breath, low sub tone.",
    purpose: "The archive enters Thoreau's perception and identity.",
    phase: 2,
  },
  {
    no: "07", secs: "7S", title: "INSTITUTIONAL VISITATION",
    vo: "Not as a life. As inventory. As labor. As correction. As risk. As property. As problem.",
    motion: "Locked-off wide. Minimal posture shifts, no melodrama.",
    sound: "Chair creak, fluorescent hum, distant door lock.",
    purpose: "The institution positions bodies before they speak.",
    phase: 2,
  },
  {
    no: "08", secs: "5S", title: "DRYA · EYE MACRO",
    vo: "Then they learned to look. And looking became its own kind of hand.",
    motion: "Microscopic push-in; moisture shift; fluorescent reflection stays clinical.",
    sound: "Close breath, room tone drops out.",
    purpose: "The gaze becomes touch, price, suspicion, and evidence.",
    phase: 2,
  },
  {
    no: "09", secs: "6S", title: "DRYA · BODY MEMORY",
    vo: "Do not misunderstand the archive. It is not neutral because it is old.",
    motion: "Slow lateral drift across the floor reflection; shoulders barely breathe.",
    sound: "Water drip, fabric shift, distant pipe knock.",
    purpose: "Drya carries the archive as witness, not object. Grief without exploitation.",
    phase: 2,
  },
  {
    no: "10", secs: "6S", title: "WATCHED TESTIMONY",
    vo: "Some cruelty kept a diary. Some violence had beautiful handwriting.",
    motion: "Creep through foreground obstruction toward the table.",
    sound: "Chair scrape, muffled room echo, tape hiss.",
    purpose: "Truth is observed, managed, and contained.",
    phase: 3,
  },
  {
    no: "11", secs: "6S", title: "SILENT HALLWAY · DOOR 14",
    vo: "It changes rooms, that violence.",
    motion: "Slow push down corridor toward the numbered door; one light leak trembles.",
    sound: "Fluorescent buzz, latch click, pressure under a door.",
    purpose: "Room 14 becomes a repeating structure, not a single location.",
    phase: 3,
  },
  {
    no: "12", secs: "6S", title: "THOREAU · BODY RECORD",
    vo: "The body remembers what language tries to clean.",
    motion: "Subtle handheld drift behind Thoreau; back rises and falls with breath.",
    sound: "Sink drip, breath, green fluorescent whine.",
    purpose: "The testimony moves into the body.",
    phase: 3,
  },
  {
    no: "13", secs: "6S", title: "THE HANDLED LIKENESS",
    vo: "That is what a likeness is. Not you. The handled version.",
    motion: "Slow push toward the face; hold slightly too long.",
    sound: "Tape hiss thickens, low bass hum.",
    purpose: "The thesis shot: self versus used image.",
    phase: 3,
  },
  {
    no: "14", secs: "7S", title: "ELEVATOR OF WITNESSES",
    vo: "Every room built on erasure eventually fills with witnesses.",
    motion: "Doors open slowly; everyone remains almost still.",
    sound: "Elevator ding, door motor, then dead silence.",
    purpose: "Private haunting becomes collective testimony.",
    phase: 4,
  },
  {
    no: "15", secs: "8S", title: "EMPTY ROOM · AFTERMATH",
    vo: "You stop asking the room what happened. Rooms lie. You take the record back.",
    motion: "Locked-off wide. Lamp flicker; table evidence remains.",
    sound: "Recorder stops; lamp buzz; silence expands.",
    purpose: "The room is no longer mystery. It is record.",
    phase: 4,
  },
];

export const PHASES: Record<number, string> = {
  1: "SEARCHING",
  2: "TRUTH REVEALED",
  3: "BODY + STRUCTURE",
  4: "WITNESS",
};

// Final voiceover cut — "THE WITNESS / ROOM", broken into stanzas.
export const TESTIMONY: string[] = [
  "A room does not become haunted because blood touched the floor. A room becomes haunted when the same permission keeps entering. A bed. A lock. A form. A price. A camera. A mirror. Different tools. Same hunger.",
  "First they learned to write the body down. Not as a life. As inventory. As labor. As correction. As risk. As property. As problem. The wound became paperwork. And paperwork has always known how to survive.",
  "Then they learned to look. And looking became its own kind of hand. A gaze can touch. A gaze can price. A gaze can undress. A gaze can accuse. A gaze can turn a person into evidence before they have done anything wrong.",
  "Do not misunderstand the archive. It is not neutral because it is old. It is not innocent because it is written neatly. Some cruelty kept a diary. Some violence had beautiful handwriting.",
  "That is what a likeness is. Not you. The handled version. The version they can market, desire, mock, copy, fear, punish, mourn publicly, forget privately. A face made useful after the soul has been edited out.",
  "So no. This is not a ghost story. A ghost story lets the living feel innocent. This is testimony. This is the record underneath the record. This is memory refusing burial.",
  "You do not let the room keep the story. You take the record back. Let the room keep its ghosts. We came for the names.",
];

export const SOUND_MAP: { k: string; v: string }[] = [
  { k: "REPEATING", v: "Tape hiss, fluorescent hum, pipe knocks, weak HVAC, chair creak, wet floor drip, elevator motor, lamp buzz." },
  { k: "BEGINNING", v: "Room tone, hallway air, recorder click. Keep the first third intimate and vulnerable." },
  { k: "MIDDLE", v: "Tape hiss thickens, fluorescent pressure rises, low sub tone enters beneath institutional spaces." },
  { k: "ENDING", v: "Elevator ding, witnesses hold silence, tape stops, lamp buzz remains, final room tone expands." },
];
