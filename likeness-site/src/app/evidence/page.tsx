import type { Metadata } from "next";
import { EvidenceTimeline } from "@/components/companion/EvidenceTimeline";

export const metadata: Metadata = {
  title: "Evidence // LIKENESS : THE GAME — OVS",
  description:
    "The inspectable object timeline for LIKENESS : THE GAME — key 14, locket, tape, mirror, and the black device. Trigger, room state, and web unlock. Omnia Vanitas Studios.",
};

export default function EvidencePage() {
  return (
    <main className="grain min-h-screen">
      <EvidenceTimeline />
    </main>
  );
}
