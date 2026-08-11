import type { Metadata } from "next";
import { Score } from "@/components/companion/Score";
import { socialCard } from "@/lib/base";

const title = "Score // LIKENESS Universe — OVS";
const description =
  "OVS · SCORE — room tone as music. The sound archive the LIKENESS rooms are scored from: tape hiss, fluorescent hum, a detuned piano under a drone. Cues filed against room states. Omnia Vanitas Studios.";

export const metadata: Metadata = {
  title,
  description,
  ...socialCard("score", title, description),
};

export default function ScorePage() {
  return (
    <main className="grain min-h-screen">
      <Score />
    </main>
  );
}
