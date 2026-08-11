import type { Metadata } from "next";
import { Journey } from "@/components/companion/Journey";
import { socialCard } from "@/lib/base";

const title = "The Journey of Tape 03 // LIKENESS Universe — OVS";
const description =
  "An immersive scroll-driven journey following one cassette through the LIKENESS universe — from the street it was found on to the memory it rewrites. Five rooms, one object. Omnia Vanitas Studios.";

export const metadata: Metadata = {
  title,
  description,
  ...socialCard("journey", title, description),
};

export default function JourneyPage() {
  return (
    <main className="grain min-h-screen">
      <Journey />
    </main>
  );
}
