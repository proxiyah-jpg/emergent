import { motion } from "framer-motion";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&w=1200&q=80",
    alt: "Joueur à l'entraînement de nuit",
    label: "Travail sous les projecteurs",
    span: "md:col-span-7 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1761258771858-36b6656f2711?auto=format&fit=crop&w=900&q=80",
    alt: "Joueur en pleine course",
    label: "Intensité & vitesse",
    span: "md:col-span-5",
  },
  {
    src: "https://images.unsplash.com/photo-1518905332052-b6cfda20ee45?auto=format&fit=crop&w=900&q=80",
    alt: "Gardien de but en action",
    label: "Tous les postes",
    span: "md:col-span-5",
  },
  {
    src: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=1200&q=80",
    alt: "Crampons et ballon au sol",
    label: "Le détail qui change tout",
    span: "md:col-span-12",
  },
];

export default function Gallery() {
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
          Sur le terrain
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-3xl font-display text-4xl uppercase leading-[0.95] sm:text-5xl md:mb-24 lg:text-7xl"
          data-testid="gallery-title"
        >
          L'entraînement, <span className="text-outline">notre terrain de preuve.</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-8">
          {photos.map((p, i) => (
            <motion.figure
              key={p.src}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden border border-line ${p.span} ${i === 3 ? "h-64 md:h-96" : "h-72 md:h-[420px]"}`}
              data-testid={`gallery-item-${i + 1}`}
            >
              <img src={p.src} alt={p.alt} loading="lazy" className="img-treatment h-full w-full object-cover" />
              <figcaption className="absolute bottom-0 left-0 flex w-full items-center justify-between bg-gradient-to-t from-black/80 to-transparent p-5 md:p-7">
                <span className="text-xs uppercase tracking-[0.25em] text-white/90">{p.label}</span>
                <span className="font-display text-sm text-volt">0{i + 1}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
