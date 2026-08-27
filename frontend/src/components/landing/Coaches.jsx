import { motion } from "framer-motion";
import { useLang } from "@/i18n";

export default function Coaches() {
  const { t } = useLang();
  return (
    <section id="staff" className="border-t border-line py-24 md:py-40" data-testid="coaches-section">
      <div className="mx-auto max-w-[1600px] px-5 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-xs uppercase tracking-[0.35em] text-volt"
          data-testid="coaches-kicker"
        >
          {t.coaches.kicker}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-4xl font-display text-4xl uppercase leading-[0.95] sm:text-5xl md:mb-24 lg:text-7xl"
          data-testid="coaches-title"
        >
          {t.coaches.title1} <span className="text-outline">{t.coaches.title2}</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.figure
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="group relative h-80 overflow-hidden border border-line md:h-[520px] lg:h-full"
            data-testid="coaches-image-frame"
          >
            <img
              src="/assets/coaches.png"
              alt={t.coaches.imageLabel}
              loading="lazy"
              className="img-treatment h-full w-full object-cover"
              data-testid="coaches-image"
            />
            <figcaption className="absolute bottom-0 left-0 flex w-full items-center justify-between bg-gradient-to-t from-black/80 to-transparent p-5 md:p-7">
              <span className="text-xs uppercase tracking-[0.25em] text-white/90">{t.coaches.imageLabel}</span>
              <span className="font-display text-sm text-volt">BE</span>
            </figcaption>
          </motion.figure>

          <div className="flex flex-col">
            {t.coaches.list.map((c, i) => (
              <motion.article
                key={c.initials}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-1 gap-6 border-t border-line py-8 transition-colors duration-500 hover:bg-smoke/50 md:gap-10 md:py-10"
                data-testid={`coach-card-${i + 1}`}
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-volt font-display text-lg text-volt transition-colors duration-500 group-hover:bg-volt group-hover:text-black md:h-16 md:w-16">
                  {c.initials}
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-volt">{c.role}</p>
                  <h3 className="mt-2 font-display text-xl uppercase tracking-wide md:text-2xl" data-testid={`coach-name-${i + 1}`}>{c.name}</h3>
                  <p className="mt-3 max-w-lg text-sm font-light leading-relaxed text-white/60">{c.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
