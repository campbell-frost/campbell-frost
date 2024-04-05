
import styles from './styles.module.css'
import { HeroHighlight } from "@/components/ui/hero-highlight";

import About from "@/components/about";
import Navbar from "@/components/navbar";
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
