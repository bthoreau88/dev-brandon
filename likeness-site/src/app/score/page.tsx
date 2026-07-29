import type { Metadata } from "next";
import { Score } from "@/components/companion/Score";

export const metadata: Metadata = {
  title: "Score // LIKENESS Universe — OVS",
  description:
    "OVS · SCORE — room tone as music. The sound archive the LIKENESS rooms are scored from: tape hiss, fluorescent hum, a detuned piano under a drone. Cues filed against room states. Omnia Vanitas Studios.",
};

export default function ScorePage() {
  return (
    <main className="grain min-h-screen">
      <Score />
    </main>
  );
}
