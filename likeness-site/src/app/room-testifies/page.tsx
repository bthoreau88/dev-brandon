import type { Metadata } from "next";
import { RoomTestifies } from "@/components/room/RoomTestifies";
import { socialCard } from "@/lib/base";

const title = "The Room Testifies // OVS — LIKENESS";
const description =
  "A 15-frame editorial montage in ARRI Procedural Realism. Thoreau and Drya enter Room 14 looking for a ghost; the room answers with a record. Voiceover, motion, and sound design board.";

export const metadata: Metadata = {
  title,
  description,
  ...socialCard("room-testifies", title, description),
};

export default function RoomTestifiesPage() {
  return (
    <main className="min-h-screen">
      <RoomTestifies />
    </main>
  );
}
