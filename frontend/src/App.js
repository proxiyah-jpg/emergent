import "@/App.css";
import { useEffect } from "react";
import Lenis from "lenis";
import { LanguageProvider } from "@/i18n";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Marquee from "@/components/landing/Marquee";
import Manifesto from "@/components/landing/Manifesto";
import Coaches from "@/components/landing/Coaches";
import Contact from "@/components/landing/Contact";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.25, smoothWheel: true, anchors: true });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="bg-obsidian text-white min-h-screen" data-testid="app-root">
        <div className="grain-overlay" aria-hidden="true" />
        <Header />
        <main>
          <Hero />
          <Marquee />
          <Manifesto />
          <Coaches />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
