import type { Metadata } from "next";
import { Studio } from "@/components/companion/Studio";

export const metadata: Metadata = {
  title: "Studio // Omnia Vanitas Studios — LIKENESS",
  description:
    "Omnia Vanitas Studios — the studio behind the LIKENESS universe. The doctrine (evidence not explanation, identity as a lock, the room remembers), the anthology, and the north star. Psychological rooms you cannot fully leave.",
};

export default function StudioPage() {
  return (
    <main className="grain min-h-screen">
      <Studio />
    </main>
  );
}
