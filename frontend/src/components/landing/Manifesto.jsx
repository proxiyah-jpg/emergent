import { motion } from "framer-motion";
import { Target, Users, TrendingUp } from "lucide-react";

const chapters = [
  {
    num: "01",
    title: "La Méthode",
    icon: Target,
    text: "Des séances conçues sur le modèle des centres de formation professionnels : technique individuelle, intensité de jeu, préparation physique et mentale. Chaque détail compte, chaque entraînement vous rapproche du niveau pro.",
  },
  {
    num: "02",
    title: "Pour Qui",
    icon: Users,
    text: "Joueurs et joueuses de U17 à U23. Déjà en club ? Parfait. Nos entraînements complémentaires s'ajoutent à votre programme pour accélérer votre progression et booster votre carrière.",
  },
  {
    num: "03",
    title: "Le Parcours Pro",
    icon: TrendingUp,
    text: "Notre objectif est clair : vous mener vers le monde professionnel. Suivi individualisé, matchs de haut niveau et visibilité auprès des recruteurs pour transformer votre talent en carrière.",
  },
];

export default function Manifesto() {
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
        Le Manifeste
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 max-w-4xl font-display text-4xl uppercase leading-[0.95] sm:text-5xl md:mb-24 lg:text-7xl"
        data-testid="manifesto-title"
      >
        Le talent ne suffit pas. <span className="text-outline">La méthode fait la différence.</span>
      </motion.h2>

      <div className="flex flex-col">
        {chapters.map((c, i) => (
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
              <c.icon size={28} className="shrink-0 text-volt" strokeWidth={1.5} />
              {c.title}
            </h3>
            <p className="max-w-2xl text-sm font-light leading-relaxed text-white/60 md:text-base">{c.text}</p>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-16 grid grid-cols-2 gap-px border border-line bg-line md:mt-24 md:grid-cols-4"
        data-testid="stats-row"
      >
        {[
          ["U17–U23", "Catégories"],
          ["100%", "Exigence pro"],
          ["3+", "Séances / semaine"],
          ["1", "Objectif : le pro"],
        ].map(([v, l]) => (
          <div key={l} className="bg-obsidian p-6 md:p-10">
            <p className="font-display text-3xl text-volt md:text-5xl">{v}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/50">{l}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
