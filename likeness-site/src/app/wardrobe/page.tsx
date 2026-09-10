import type { Metadata } from "next";
import { Wardrobe } from "@/components/companion/Wardrobe";
import { socialCard } from "@/lib/base";
import { FollowCTA } from "@/components/sections/FollowCTA";

const title = "Wardrobe // LIKENESS Universe — OVS";
const description =
  "OVS · WARDROBE — the motel-noir lookbook of the LIKENESS universe. A fashion thread, not a model shoot: lived-in, restrained, identity-locked garments filed like evidence. Omnia Vanitas Studios.";

export const metadata: Metadata = {
  title,
  description,
  ...socialCard("wardrobe", title, description),
};

export default function WardrobePage() {
  return (
    <main className="grain min-h-screen">
      <Wardrobe />
      <FollowCTA variant="compact" />
    </main>
  );
}
