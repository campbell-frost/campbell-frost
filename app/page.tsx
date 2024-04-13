import React from 'react';
import About from '@/components/about';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Projects from '@/components/projects';
import Technologies from '@/components/technologies';
import { HeroDots } from '@/components/ui/hero-dots';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { ThemeProvider } from '@/components/theme-provider';

export default function Home() {
  return (
    <ThemeProvider>

      <main>
        <HeroDots dots='dot-thick'>
          <TracingBeam>
            <Navbar />
            <div className="container">
              <About />
              <Technologies />
              <Projects />

            </div>
          </TracingBeam>
        </HeroDots>
        <Footer />
      </main>
    </ThemeProvider>
  );
}
