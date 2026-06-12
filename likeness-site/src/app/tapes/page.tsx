import type { Metadata } from "next";
import { Tapes } from "@/components/companion/Tapes";

export const metadata: Metadata = {
  title: "Tapes // LIKENESS : THE GAME — OVS",
  description:
    "The tape archive and unlock state for LIKENESS : THE GAME. Recorded truth that rewrites the room. The six-beat arc. Omnia Vanitas Studios.",
};

export default function TapesPage() {
  return (
    <main className="grain min-h-screen">
      <Tapes />
    </main>
  );
}
