import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { useLang, CONTACT } from "@/i18n";

export default function Contact() {
  const { t } = useLang();
  return (
    <footer id="contact" className="border-t border-line" data-testid="contact-section">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-12 md:py-40">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-xs uppercase tracking-[0.35em] text-volt"
          data-testid="contact-kicker"
        >
          {t.contact.kicker}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display uppercase leading-[0.9] text-[13vw] sm:text-[10vw] lg:text-[7.5vw]"
          data-testid="contact-title"
        >
          {t.contact.title1} <span className="text-volt">{t.contact.title2}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-8 max-w-xl text-base font-light leading-relaxed text-white/60"
          data-testid="contact-subtitle"
        >
          {t.contact.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-14 flex flex-col gap-px border border-line bg-line md:mt-20 md:flex-row"
        >
          <a
            href={`mailto:${CONTACT.email}`}
            data-testid="contact-email-link"
            className="group flex flex-1 items-center justify-between gap-4 bg-obsidian p-7 transition-colors duration-500 hover:bg-volt md:p-12"
          >
            <span>
              <span className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50 transition-colors duration-500 group-hover:text-black/60">
                <Mail size={14} /> {t.contact.emailLabel}
              </span>
              <span className="mt-3 block break-all font-display text-sm uppercase text-white transition-colors duration-500 group-hover:text-black sm:text-2xl md:text-3xl">
                {CONTACT.email}
              </span>
            </span>
            <ArrowUpRight size={28} className="shrink-0 text-volt transition-all duration-500 group-hover:translate-x-1 group-hover:text-black" />
          </a>
          <a
            href={CONTACT.phoneHref}
            data-testid="contact-phone-link"
            className="group flex flex-1 items-center justify-between gap-4 bg-obsidian p-7 transition-colors duration-500 hover:bg-volt md:p-12"
          >
            <span>
              <span className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50 transition-colors duration-500 group-hover:text-black/60">
                <Phone size={14} /> {t.contact.phoneLabel}
              </span>
              <span className="mt-3 block font-display text-lg uppercase text-white transition-colors duration-500 group-hover:text-black sm:text-2xl md:text-3xl">
                {CONTACT.phoneDisplay}
              </span>
            </span>
            <ArrowUpRight size={28} className="shrink-0 text-volt transition-all duration-500 group-hover:translate-x-1 group-hover:text-black" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-px grid grid-cols-1 gap-px border border-line border-t-0 bg-line lg:grid-cols-[1.4fr_1fr]"
          data-testid="contact-location-block"
        >
          <div className="h-72 bg-smoke md:h-96">
            <iframe
              title="Belgium Elite Academy — Google Maps"
              src="https://maps.google.com/maps?q=50.637764,5.5363061&z=16&output=embed"
              className="h-full w-full border-0"
              style={{ filter: "grayscale(1) invert(0.92) contrast(0.85)" }}
              loading="lazy"
              data-testid="contact-map-iframe"
            />
          </div>
          <div className="flex flex-col justify-between bg-obsidian p-7 md:p-12">
            <div>
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50">
                <MapPin size={14} className="text-volt" /> {t.contact.locationLabel}
              </p>
              <p className="mt-3 font-display text-xl uppercase leading-tight text-white md:text-2xl" data-testid="contact-location-name">
                {t.contact.locationName}
              </p>
              <p className="mt-2 text-sm font-light text-white/50">{t.contact.locationCity}</p>
            </div>
            <a
              href="https://maps.app.goo.gl/8LkRXBbmNBmtDx5G8"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-maps-link"
              className="group mt-8 inline-flex w-fit items-center gap-3 border border-volt px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-volt transition-colors duration-300 hover:bg-volt hover:text-black"
            >
              {t.contact.mapsCta}
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-3 px-5 py-8 text-xs uppercase tracking-[0.2em] text-white/40 md:flex-row md:items-center md:justify-between md:px-12">
          <span data-testid="footer-brand">{t.footer.brand}</span>
          <span data-testid="footer-tagline">{t.footer.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
