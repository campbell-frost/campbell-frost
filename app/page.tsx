import About from "@/components/about";
import Navbar from "@/components/navbar";
import Technologies from "@/components/technologies";
import { HeroGrid } from "@/components/ui/hero-grid";
export default function Home() {
  return (
    <main>
      <HeroGrid>

        <Navbar />
        <About />
        <Technologies />
      </HeroGrid>
    </main>
  );
}
