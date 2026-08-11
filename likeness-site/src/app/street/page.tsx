import type { Metadata } from "next";
import { Street } from "@/components/companion/Street";
import { socialCard } from "@/lib/base";

const title = "The Street // LIKENESS Universe — OVS";
const description =
  "THE STREET — the exterior the game never lets you reach. A cinematic street-cast tape from the LIKENESS universe: surveillance sweep, kinetic type, and a lookbook of strangers who keep testing positive for your face. Omnia Vanitas Studios.";

export const metadata: Metadata = {
  title,
  description,
  ...socialCard("street", title, description),
};

export default function StreetPage() {
  return (
    <main className="grain min-h-screen">
      <Street />
    </main>
  );
}
