import { motion } from "framer-motion";
import { Target, Users, TrendingUp } from "lucide-react";
import { useLang } from "@/i18n";

const icons = [Target, Users, TrendingUp];

export default function Manifesto() {
  const { t } = useLang();
  return (
    <section id="methode" className="mx-auto max-w-[1600px] px-5 py-24 md:px-12 md:py-40" data-testid="manifesto-section">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mb-4 text-xs uppercase tracking-[0.35em] text-volt"
        data-testid="manifesto-kicker"
      >
        {t.manifesto.kicker}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 max-w-4xl font-display text-4xl uppercase leading-[0.95] sm:text-5xl md:mb-24 lg:text-7xl"
        data-testid="manifesto-title"
      >
        {t.manifesto.title1} <span className="text-outline">{t.manifesto.title2}</span>
      </motion.h2>

      <div className="flex flex-col">
        {t.manifesto.chapters.map((c, i) => {
          const Icon = icons[i];
          return (
            <motion.article
              key={c.num}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-1 gap-6 border-t border-line py-10 transition-colors duration-500 hover:bg-smoke/50 md:grid-cols-[120px_1fr_2fr] md:gap-12 md:py-14"
              data-testid={`manifesto-chapter-${c.num}`}
            >
              <span className="font-display text-5xl text-outline-volt md:text-6xl">{c.num}</span>
              <h3 className="flex items-center gap-4 font-display text-2xl uppercase tracking-wide md:text-4xl">
                <Icon size={28} className="shrink-0 text-volt" strokeWidth={1.5} />
                {c.title}
              </h3>
              <p className="max-w-2xl text-sm font-light leading-relaxed text-white/60 md:text-base">{c.text}</p>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-16 grid grid-cols-2 gap-px border border-line bg-line md:mt-24 md:grid-cols-4"
        data-testid="stats-row"
      >
        {t.manifesto.stats.map(([v, l]) => (
          <div key={l} className="bg-obsidian p-6 md:p-10">
            <p className="font-display text-3xl text-volt md:text-5xl">{v}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/50">{l}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
