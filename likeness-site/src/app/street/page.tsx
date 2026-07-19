import type { Metadata } from "next";
import { Street } from "@/components/companion/Street";

export const metadata: Metadata = {
  title: "The Street // LIKENESS Universe — OVS",
  description:
    "THE STREET — the exterior the game never lets you reach. A cinematic street-cast tape from the LIKENESS universe: surveillance sweep, kinetic type, and a lookbook of strangers who keep testing positive for your face. Omnia Vanitas Studios.",
};

export default function StreetPage() {
  return (
    <main className="grain min-h-screen">
      <Street />
    </main>
  );
}
