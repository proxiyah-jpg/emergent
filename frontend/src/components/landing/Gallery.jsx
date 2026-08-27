import { motion } from "framer-motion";
import { useLang } from "@/i18n";

export default function Gallery() {
  const { t } = useLang();
  return (
    <section id="galerie" className="border-t border-line bg-smoke/30 py-24 md:py-40" data-testid="gallery-section">
      <div className="mx-auto max-w-[1600px] px-5 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-xs uppercase tracking-[0.35em] text-volt"
          data-testid="gallery-kicker"
        >
          {t.gallery.kicker}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-3xl font-display text-4xl uppercase leading-[0.95] sm:text-5xl md:mb-24 lg:text-7xl"
          data-testid="gallery-title"
        >
          {t.gallery.title1} <span className="text-outline">{t.gallery.title2}</span>
        </motion.h2>

        <motion.figure
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="group relative h-72 overflow-hidden border border-line md:h-[560px]"
          data-testid="gallery-item-1"
        >
          <img
            src="https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=1600&q=80"
            alt={t.gallery.label}
            loading="lazy"
            className="img-treatment h-full w-full object-cover"
          />
          <figcaption className="absolute bottom-0 left-0 flex w-full items-center justify-between bg-gradient-to-t from-black/80 to-transparent p-5 md:p-7">
            <span className="text-xs uppercase tracking-[0.25em] text-white/90">{t.gallery.label}</span>
            <span className="font-display text-sm text-volt">01</span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
