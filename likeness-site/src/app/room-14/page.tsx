import type { Metadata } from "next";
import { Room14 } from "@/components/companion/Room14";

export const metadata: Metadata = {
  title: "Room 14 // LIKENESS : THE GAME — OVS",
  description:
    "Step inside Room 14 — a lightweight 3D web diorama. Drag to look, tap to inspect the evidence. The fallback scene for the LIKENESS companion. Omnia Vanitas Studios.",
};

export default function Room14Page() {
  return (
    <main className="grain min-h-screen">
      <Room14 />
    </main>
  );
}
