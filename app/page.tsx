import About from "@/components/ui/about";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import Navbar from "@/components/ui/navbar";
export default function Home() {
  return (
    <main>
      <HeroHighlight>
        <Navbar />
        <About />
   
      </HeroHighlight>
    </main>
  );
}
