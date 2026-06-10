import type { Metadata } from "next";
import { UniverseHero } from "@/components/universe/UniverseHero";

export const metadata: Metadata = {
  title: "Enter the Archive // LIKENESS Universe — OVS",
  description:
    "The LIKENESS universe entry point. The room remembers what you forgot. Move your mouse to scrub the room. Omnia Vanitas Studios.",
};

export default function UniversePage() {
  return (
    <main className="min-h-screen">
      <UniverseHero />
    </main>
  );
}
