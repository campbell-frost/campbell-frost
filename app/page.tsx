import React from "react";
import About from "@/components/about";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";
import { HeroDots } from "@/components/ui/hero-dots";

export default function Home() {
  return (
    <main>
      <HeroDots>
        <Navbar />
        <div className="container">
          <About />
          <Technologies />
          <Projects />
        </div>
      </HeroDots>
      <Footer />
    </main>
  );
}
