import type { Metadata } from "next";
import { Devlog } from "@/components/companion/Devlog";

export const metadata: Metadata = {
  title: "Devlog // LIKENESS : THE GAME — OVS",
  description:
    "Production notes, the phase build plan, and the V002 expansion modules for LIKENESS : THE GAME. Omnia Vanitas Studios.",
};

export default function DevlogPage() {
  return (
    <main className="grain min-h-screen">
      <Devlog />
    </main>
  );
}
