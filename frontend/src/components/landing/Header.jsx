import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { useLang, CONTACT } from "@/i18n";

export default function Header() {
  const { lang, setLang, t } = useLang();
  const links = [
    { label: t.nav.methode, href: "#methode", testid: "nav-link-methode" },
    { label: t.nav.staff, href: "#staff", testid: "nav-link-staff" },
    { label: t.nav.contact, href: "#contact", testid: "nav-link-contact" },
  ];
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-black/60 backdrop-blur-xl"
      data-testid="site-header"
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-12">
        <a href="#hero" data-testid="nav-logo" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center border border-volt font-display text-sm text-volt transition-colors duration-300 group-hover:bg-volt group-hover:text-black">
            BE
          </span>
          <span className="font-display text-sm tracking-[0.2em] uppercase hidden sm:block">
            Belgium Elite Academy
          </span>
        </a>
        <nav className="flex items-center gap-4 md:gap-7" data-testid="main-nav">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={l.testid}
              className="hidden lg:block text-xs uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-volt"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center border border-line" data-testid="language-switcher">
            {["fr", "nl", "en"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                data-testid={`lang-switch-${l}`}
                className={`px-2.5 py-2 text-[11px] font-semibold uppercase tracking-wider transition-colors duration-300 ${
                  lang === l ? "bg-volt text-black" : "text-white/50 hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href={CONTACT.phoneHref}
            data-testid="nav-phone-link"
            className="hidden md:flex items-center gap-2 border border-line px-3 py-2 text-xs tracking-wider text-white/80 transition-colors duration-300 hover:border-volt hover:text-volt"
          >
            <Phone size={12} /> {CONTACT.phoneDisplay}
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            data-testid="nav-email-link"
            className="flex items-center gap-2 bg-volt px-3 py-2 text-xs font-semibold uppercase tracking-wider text-black transition-colors duration-300 hover:bg-white"
          >
            <Mail size={12} /> <span className="hidden sm:inline">{t.nav.join}</span>
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
