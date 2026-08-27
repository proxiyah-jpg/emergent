import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLang } from "@/i18n";

const lineAnim = (delay) => ({
  initial: { y: "110%" },
  animate: { y: "0%" },
  transition: { duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const { t } = useLang();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative flex min-h-screen flex-col justify-end overflow-hidden" data-testid="hero-section">
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
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

      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-16 pt-40 md:px-12 md:pb-24">
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
