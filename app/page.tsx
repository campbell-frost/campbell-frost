import About from "@/components/about";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";
import { HeroGrid } from "@/components/ui/hero-grid";
import { TracingBeam } from "@/components/ui/tracing-beam";
export default function Home() {
  return (
    <main>
      <HeroGrid>

        <TracingBeam >
          <Navbar />
          <div className="container">
            <About />
            <Technologies />
            <Projects />
          </div>
          <br />
          <br />
          <br />
          <br />
        </TracingBeam>
      </HeroGrid>
    </main>
  );
}
