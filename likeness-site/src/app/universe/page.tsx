import type { Metadata } from "next";
import { UniverseHero } from "@/components/universe/UniverseHero";
import { socialCard } from "@/lib/base";

const title = "Enter the Archive // LIKENESS Universe — OVS";
const description =
  "The LIKENESS universe entry point. The room remembers what you forgot. Move your mouse to scrub the room. Omnia Vanitas Studios.";

export const metadata: Metadata = {
  title,
  description,
  ...socialCard("universe", title, description),
};

export default function UniversePage() {
  return (
    <main className="min-h-screen">
      <UniverseHero />
    </main>
  );
}
