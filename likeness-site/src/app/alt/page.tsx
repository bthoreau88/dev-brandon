import type { Metadata } from "next";
import { AltCut } from "@/components/companion/AltCut";

export const metadata: Metadata = {
  title: "Alternate Cut (non-canon) // LIKENESS — OVS",
  description:
    "A record of the road not taken — the early sci-fi direction for LIKENESS, retired in favor of motel-noir psychological horror. Non-canon. Omnia Vanitas Studios.",
};

export default function AltPage() {
  return (
    <main className="grain min-h-screen">
      <AltCut />
    </main>
  );
}
