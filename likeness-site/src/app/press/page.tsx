import type { Metadata } from "next";
import { PressKit } from "@/components/companion/PressKit";

export const metadata: Metadata = {
  title: "Press // LIKENESS : THE GAME — OVS",
  description:
    "Press fact sheet for LIKENESS : THE GAME — a psychological romantic horror at The Dellwood motel, Room 14. Logline, taglines, key art, and status. Omnia Vanitas Studios.",
};

export default function PressPage() {
  return (
    <main className="grain min-h-screen">
      <PressKit />
    </main>
  );
}
