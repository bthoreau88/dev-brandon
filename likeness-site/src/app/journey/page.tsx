import type { Metadata } from "next";
import { Journey } from "@/components/companion/Journey";

export const metadata: Metadata = {
  title: "The Journey of Tape 03 // LIKENESS Universe — OVS",
  description:
    "An immersive scroll-driven journey following one cassette through the LIKENESS universe — from the street it was found on to the memory it rewrites. Five rooms, one object. Omnia Vanitas Studios.",
};

export default function JourneyPage() {
  return (
    <main className="grain min-h-screen">
      <Journey />
    </main>
  );
}
