import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CinematicReveal } from "@/components/sections/CinematicReveal";
import { Systems } from "@/components/sections/Systems";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <div id="forge">
          <Hero />
        </div>
        <div id="reveal">
          <CinematicReveal />
        </div>
        <Systems />
      </main>
      <Footer />
    </>
  );
}
