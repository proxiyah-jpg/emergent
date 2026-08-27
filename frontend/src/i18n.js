import { createContext, useContext, useState } from "react";

export const translations = {
  fr: {
    nav: { methode: "La Méthode", staff: "Le Staff", galerie: "Galerie", contact: "Contact", join: "Nous rejoindre" },
    hero: {
      badge: "Académie de football · U17 — U23 · Belgique",
      subtitle: "Des entraînements d'exigence professionnelle qui vous mènent vers une carrière pro. Déjà en club ? Rejoignez-nous en complément et boostez votre progression.",
      cta: "Découvrir l'académie",
    },
    marquee: ["S'entraîner comme un pro", "Boostez votre carrière", "U17 — U23", "Élite belge", "Vers le monde professionnel"],
    manifesto: {
      kicker: "Le Manifeste",
      title1: "Le talent ne suffit pas.",
      title2: "La méthode fait la différence.",
      chapters: [
        { num: "01", title: "La Méthode", text: "Des séances conçues sur le modèle des centres de formation professionnels : technique individuelle, intensité de jeu, préparation physique et mentale. Chaque détail compte, chaque entraînement vous rapproche du niveau pro." },
        { num: "02", title: "Pour Qui", text: "Joueurs de U17 à U23. Déjà en club ? Parfait. Nos entraînements complémentaires s'ajoutent à votre programme pour accélérer votre progression et booster votre carrière." },
        { num: "03", title: "Le Parcours Pro", text: "Notre objectif est clair : vous mener vers le monde professionnel. Suivi individualisé, matchs de haut niveau et visibilité auprès des recruteurs pour transformer votre talent en carrière." },
      ],
      stats: [["U17–U23", "Catégories"], ["100%", "Exigence pro"], ["3+", "Séances / semaine"], ["1", "Objectif : le pro"]],
    },
    coaches: {
      kicker: "Équipe Technique",
      title1: "Un coach",
      title2: "super qualifié.",
      imageLabel: "Séance dirigée par notre staff",
      list: [
        { initials: "Y", name: "YILMAZ", role: "Entraîneur Principal", text: "Plus de 30 ans d'expérience dans la formation de jeunes et en tant que joueur professionnel." },
      ],
    },
    gallery: { kicker: "Sur le terrain", title1: "L'entraînement,", title2: "notre terrain de preuve.", label: "Le détail qui change tout" },
    contact: {
      kicker: "Contact",
      title1: "Rejoignez",
      title2: "l'élite",
      subtitle: "Une question, une inscription, un essai ? Contactez-nous directement — notre équipe vous répond rapidement.",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
    },
    footer: { brand: "© 2026 Belgium Elite Academy", tagline: "S'entraîner comme un pro. Devenir pro." },
  },
  nl: {
    nav: { methode: "De Methode", staff: "De Staf", galerie: "Galerij", contact: "Contact", join: "Word lid" },
    hero: {
      badge: "Voetbalacademie · U17 — U23 · België",
      subtitle: "Trainingen op professioneel niveau die je naar een profcarrière leiden. Speel je al bij een club? Sluit je erbij aan en boost je ontwikkeling.",
      cta: "Ontdek de academie",
    },
    marquee: ["Train als een pro", "Boost je carrière", "U17 — U23", "Belgische elite", "Naar het profvoetbal"],
    manifesto: {
      kicker: "Het Manifest",
      title1: "Talent is niet genoeg.",
      title2: "De methode maakt het verschil.",
      chapters: [
        { num: "01", title: "De Methode", text: "Trainingen naar het model van professionele opleidingen: individuele techniek, spelintensiteit, fysieke en mentale voorbereiding. Elk detail telt, elke training brengt je dichter bij het profniveau." },
        { num: "02", title: "Voor Wie", text: "Spelers van U17 tot U23. Speel je al bij een club? Perfect. Onze extra trainingen vullen je programma aan om je progressie te versnellen en je carrière te boosten." },
        { num: "03", title: "Het Pro-traject", text: "Ons doel is duidelijk: je naar het profvoetbal leiden. Individuele opvolging, wedstrijden op hoog niveau en zichtbaarheid bij scouts om je talent om te zetten in een carrière." },
      ],
      stats: [["U17–U23", "Categorieën"], ["100%", "Pro-eisen"], ["3+", "Trainingen / week"], ["1", "Doel: prof worden"]],
    },
    coaches: {
      kicker: "Technische Staf",
      title1: "Een coach",
      title2: "met topkwalificaties.",
      imageLabel: "Training geleid door onze staf",
      list: [
        { initials: "Y", name: "YILMAZ", role: "Hoofdtrainer", text: "Meer dan 30 jaar ervaring in de jeugdopleiding en als profvoetballer." },
      ],
    },
    gallery: { kicker: "Op het veld", title1: "Training,", title2: "ons bewijsterrein.", label: "Het detail dat alles verandert" },
    contact: {
      kicker: "Contact",
      title1: "Sluit je aan bij",
      title2: "de elite",
      subtitle: "Een vraag, een inschrijving, een test? Neem rechtstreeks contact met ons op — ons team antwoordt snel.",
      emailLabel: "E-mail",
      phoneLabel: "Telefoon",
    },
    footer: { brand: "© 2026 Belgium Elite Academy", tagline: "Trainen als een pro. Pro worden." },
  },
  en: {
    nav: { methode: "The Method", staff: "The Staff", galerie: "Gallery", contact: "Contact", join: "Join us" },
    hero: {
      badge: "Football academy · U17 — U23 · Belgium",
      subtitle: "Professional-standard training that leads you to a pro career. Already at a club? Join us on top of it and boost your progression.",
      cta: "Discover the academy",
    },
    marquee: ["Train like a pro", "Boost your career", "U17 — U23", "Belgian elite", "The road to pro"],
    manifesto: {
      kicker: "The Manifesto",
      title1: "Talent is not enough.",
      title2: "Method makes the difference.",
      chapters: [
        { num: "01", title: "The Method", text: "Sessions modelled on professional academy standards: individual technique, game intensity, physical and mental preparation. Every detail counts, every session brings you closer to pro level." },
        { num: "02", title: "Who For", text: "Players from U17 to U23. Already at a club? Perfect. Our supplementary sessions add to your schedule to accelerate your progress and boost your career." },
        { num: "03", title: "The Pro Pathway", text: "Our goal is clear: leading you to professional football. Individual monitoring, high-level matches and visibility with scouts to turn your talent into a career." },
      ],
      stats: [["U17–U23", "Age groups"], ["100%", "Pro standards"], ["3+", "Sessions / week"], ["1", "Goal: go pro"]],
    },
    coaches: {
      kicker: "Technical Staff",
      title1: "A highly",
      title2: "qualified coach.",
      imageLabel: "Session led by our staff",
      list: [
        { initials: "Y", name: "YILMAZ", role: "Head Coach", text: "Over 30 years of experience in youth development and as a professional player." },
      ],
    },
    gallery: { kicker: "On the pitch", title1: "Training,", title2: "our proving ground.", label: "The detail that changes everything" },
    contact: {
      kicker: "Contact",
      title1: "Join",
      title2: "the elite",
      subtitle: "A question, a registration, a trial? Contact us directly — our team replies quickly.",
      emailLabel: "Email",
      phoneLabel: "Phone",
    },
    footer: { brand: "© 2026 Belgium Elite Academy", tagline: "Train like a pro. Become a pro." },
  },
};

export const CONTACT = {
  email: "belgiumeliteacademy@gmail.com",
  phoneDisplay: "+32 451 05 19 11",
  phoneHref: "tel:+32451051911",
};

const LangContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("fr");
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
