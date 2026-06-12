import type { Metadata } from "next";
import { MotelMap } from "@/components/companion/MotelMap";

export const metadata: Metadata = {
  title: "Motel Map // LIKENESS : THE GAME — OVS",
  description:
    "The interactive Dellwood motel map for LIKENESS : THE GAME. Room 14, the hallway, the front office — threshold, repetition, impossible doors. Omnia Vanitas Studios.",
};

export default function MotelPage() {
  return (
    <main className="grain min-h-screen">
      <MotelMap />
    </main>
  );
}
