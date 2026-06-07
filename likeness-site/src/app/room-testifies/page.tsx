import type { Metadata } from "next";
import { RoomTestifies } from "@/components/room/RoomTestifies";

export const metadata: Metadata = {
  title: "The Room Testifies // OVS — LIKENESS",
  description:
    "A 15-frame editorial montage in ARRI Procedural Realism. Thoreau and Drya enter Room 14 looking for a ghost; the room answers with a record. Voiceover, motion, and sound design board.",
};

export default function RoomTestifiesPage() {
  return (
    <main className="min-h-screen">
      <RoomTestifies />
    </main>
  );
}
