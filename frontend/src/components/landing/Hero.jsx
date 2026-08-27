import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Volume2 } from "lucide-react";
import { useLang } from "@/i18n";

const lineAnim = (delay) => ({
  initial: { y: "110%" },
  animate: { y: "0%" },
  transition: { duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const { t } = useLang();
  const ref = useRef(null);
  const videoRef = useRef(null);
  const [showSoundBtn, setShowSoundBtn] = useState(false);
  const [soundPlayed, setSoundPlayed] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onEnded = () => {
      setSoundPlayed(true);
      v.muted = true;
      v.loop = true;
      v.play().catch(() => {});
    };
    v.addEventListener("ended", onEnded);
    v.loop = false;
    v.muted = false;
    v.play().catch(() => {
      v.muted = true;
      v.loop = true;
      v.play().catch(() => {});
      setShowSoundBtn(true);
      const events = ["pointerdown", "touchstart", "wheel", "keydown"];
      const handler = () => {
        v.loop = false;
        v.muted = false;
        v.currentTime = 0;
        v.play().catch(() => {});
        setShowSoundBtn(false);
        events.forEach((e) => window.removeEventListener(e, handler));
      };
      events.forEach((e) => window.addEventListener(e, handler, { passive: true }));
    });
    return () => v.removeEventListener("ended", onEnded);
  }, []);

  const enableSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.loop = false;
    v.muted = false;
    v.currentTime = 0;
    v.play().catch(() => {});
    setShowSoundBtn(false);
  };

  return (
    <section id="hero" ref={ref} className="relative flex min-h-screen flex-col justify-end overflow-hidden" data-testid="hero-section">
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="h-[120%] w-full object-cover"
          data-testid="hero-background-video"
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-black/40" />
      </motion.div>

      {showSoundBtn && !soundPlayed && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          onClick={enableSound}
          data-testid="hero-sound-button"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-3 border border-volt bg-black/70 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-volt backdrop-blur-md transition-colors duration-300 hover:bg-volt hover:text-black"
        >
          <Volume2 size={16} /> {t.hero.soundCta}
        </motion.button>
      )}

      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-16 pt-40 md:px-12 md:pb-24">
        <motion.img
          src="/assets/logo.jpg"
          alt="Logo Belgium Elite Academy"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 h-24 w-24 object-contain md:h-32 md:w-32"
          data-testid="hero-logo"
        />
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-volt md:text-sm"
          data-testid="hero-badge"
        >
          <span className="inline-block h-px w-10 bg-volt" /> {t.hero.badge}
        </motion.p>

        <h1 className="font-display uppercase leading-[0.9] text-[15vw] sm:text-[12vw] lg:text-[9.5vw]" data-testid="hero-title">
          <span className="block overflow-hidden"><motion.span className="block" {...lineAnim(0.5)}>Belgium</motion.span></span>
          <span className="block overflow-hidden"><motion.span className="block text-volt" {...lineAnim(0.65)}>Elite</motion.span></span>
          <span className="block overflow-hidden"><motion.span className="block text-outline" {...lineAnim(0.8)}>Academy</motion.span></span>
        </h1>

        <div className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1 }}
            className="max-w-xl text-base font-light leading-relaxed text-white/70 md:text-lg"
            data-testid="hero-subtitle"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.25 }}
            href="#methode"
            data-testid="hero-cta-button"
            className="group inline-flex w-fit items-center gap-4 border border-volt px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-volt transition-colors duration-300 hover:bg-volt hover:text-black"
          >
            {t.hero.cta}
            <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-1" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
