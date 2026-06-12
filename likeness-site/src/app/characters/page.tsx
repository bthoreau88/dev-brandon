import type { Metadata } from "next";
import { Characters } from "@/components/companion/Characters";

export const metadata: Metadata = {
  title: "Characters // LIKENESS : THE GAME — OVS",
  description:
    "Identity cards and doubles for LIKENESS : THE GAME. THOREAU, DRYA, and DARK THOREAU — identity locks, roles, and drift risks. Omnia Vanitas Studios.",
};

export default function CharactersPage() {
  return (
    <main className="grain min-h-screen">
      <Characters />
    </main>
  );
}
