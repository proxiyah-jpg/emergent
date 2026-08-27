import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const links = [
  { label: "La Méthode", href: "#methode", testid: "nav-link-methode" },
  { label: "Galerie", href: "#galerie", testid: "nav-link-galerie" },
  { label: "Contact", href: "#contact", testid: "nav-link-contact" },
];

export default function Header() {
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
        <nav className="flex items-center gap-5 md:gap-8" data-testid="main-nav">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={l.testid}
              className="hidden md:block text-xs uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-volt"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+32470000000"
            data-testid="nav-phone-link"
            className="hidden sm:flex items-center gap-2 border border-line px-3 py-2 text-xs tracking-wider text-white/80 transition-colors duration-300 hover:border-volt hover:text-volt"
          >
            <Phone size={12} /> +32 470 00 00 00
          </a>
          <a
            href="mailto:contact@belgiumeliteacademy.be"
            data-testid="nav-email-link"
            className="flex items-center gap-2 bg-volt px-3 py-2 text-xs font-semibold uppercase tracking-wider text-black transition-colors duration-300 hover:bg-white"
          >
            <Mail size={12} /> <span className="hidden sm:inline">Nous rejoindre</span>
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
