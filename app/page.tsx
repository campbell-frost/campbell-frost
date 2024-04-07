import About from "@/components/about";
import Navbar from "@/components/navbar";
import Technologies from "@/components/technologies";
import { HeroGrid } from "@/components/ui/hero-grid";
import { TracingBeam } from "@/components/ui/tracing-beam";
export default function Home() {
  return (
    <main>
      <HeroGrid>

        <TracingBeam >
          <Navbar />
          <div className=" container ">



            <About />
            <Technologies />
          </div>
        </TracingBeam>
      </HeroGrid>
    </main>
  );
}
