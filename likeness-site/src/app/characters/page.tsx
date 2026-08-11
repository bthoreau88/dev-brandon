import type { Metadata } from "next";
import { Characters } from "@/components/companion/Characters";
import { socialCard } from "@/lib/base";

const title = "Characters // LIKENESS : THE GAME — OVS";
const description =
  "Identity cards and doubles for LIKENESS : THE GAME. THOREAU, DRYA, and DARK THOREAU — identity locks, roles, and drift risks. Omnia Vanitas Studios.";

export const metadata: Metadata = {
  title,
  description,
  ...socialCard("characters", title, description),
};

export default function CharactersPage() {
  return (
    <main className="grain min-h-screen">
      <Characters />
    </main>
  );
}
