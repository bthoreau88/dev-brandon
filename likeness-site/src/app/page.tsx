import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CinematicReveal } from "@/components/sections/CinematicReveal";
import { Subjects } from "@/components/sections/Subjects";
import { Dossier } from "@/components/sections/Dossier";
import { Stills } from "@/components/sections/Stills";
import { VisualDNA } from "@/components/sections/VisualDNA";
import { SceneCards } from "@/components/sections/SceneCards";
import { Apartment } from "@/components/sections/Apartment";
import { ConceptFrames } from "@/components/sections/ConceptFrames";
import { Systems } from "@/components/sections/Systems";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <div id="reveal">
          <CinematicReveal />
        </div>
        <Subjects />
        <Dossier />
        <Stills />
        <VisualDNA />
        <SceneCards />
        <Apartment />
        <ConceptFrames />
        <Systems />
      </main>
      <Footer />
    </>
  );
}
