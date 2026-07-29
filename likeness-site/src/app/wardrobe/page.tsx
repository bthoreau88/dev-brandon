import type { Metadata } from "next";
import { Wardrobe } from "@/components/companion/Wardrobe";

export const metadata: Metadata = {
  title: "Wardrobe // LIKENESS Universe — OVS",
  description:
    "OVS · WARDROBE — the motel-noir lookbook of the LIKENESS universe. A fashion thread, not a model shoot: lived-in, restrained, identity-locked garments filed like evidence. Omnia Vanitas Studios.",
};

export default function WardrobePage() {
  return (
    <main className="grain min-h-screen">
      <Wardrobe />
    </main>
  );
}
