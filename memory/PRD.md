# PRD — Belgium Elite Academy

## Problem statement (original)
Créer un site de présentation pour une académie de football "BELGIUM ELITE ACADEMY" : présenter l'académie, dire que les entraînements mènent vers une carrière pro, que même les joueurs déjà en club peuvent s'inscrire pour booster leur carrière, avec des images de jeunes U17 à U23 qui s'entraînent. Site responsive mobile + PC.

## Choix utilisateur
- Une seule page défilante (landing page)
- Pas de formulaire — affichage email/téléphone uniquement
- Style visuel laissé au designer (direction "Performance Pro" : noir obsidienne, vert volt, typographie Anton/Inter)
- Français uniquement

## Architecture
- Frontend : React 19 + Tailwind + framer-motion + lenis (scroll fluide). Page unique, composants dans /app/frontend/src/components/landing/
- Backend : FastAPI existant non utilisé (site vitrine statique, aucun endpoint requis)
- Base de données : non utilisée (pas de formulaire)

## User personas
- Jeune joueur U17-U23 (ou ses parents) cherchant un complément d'entraînement de niveau pro
- Joueur déjà en club voulant accélérer sa progression

## Implémenté (27 août 2026)
- Hero cinétique avec révélation ligne par ligne (BELGIUM / ELITE / ACADEMY), **vidéo d'entraînement réelle en fond** (autoplay, muette, en boucle) avec parallaxe
- Site **trilingue FR / NL / EN** avec sélecteur de langue dans le header (tout le contenu traduit)
- Marquee éditorial lent (phrases clés : U17-U23, carrière pro…)
- Manifeste en 3 chapitres numérotés : La Méthode, Pour Qui, Le Parcours Pro + bandeau stats
- **Section Équipe Technique** : photo réelle de l'entraînement (fournie par le client) + 3 fiches coachs (Entraîneur Principal, Préparateur Physique, Entraîneur des Gardiens)
- Contact brutaliste avec les **vraies coordonnées** : belgiumeliteacademy@gmail.com et +32 451 05 19 11
- **SEO Google** : balises meta description/keywords (attaquant, défenseur, milieu central, gardien, club Belgique, devenir pro…), Open Graph, données structurées JSON-LD SportsOrganization
- Header fixe glassmorphism avec navigation par ancres, scroll fluide Lenis
- Responsive mobile/desktop vérifié par captures d'écran
- Galerie photo supprimée à la demande du client (27 août)
- **Logo officiel de l'académie** intégré (header + hero, bien visible) (27 août)
- **Localisation Google Maps** : carte intégrée en mode sombre + lien vers Terrain de football Saint-Nicolas, Liège (27 août)
- Section staff réduite à un seul coach : YILMAZ, Entraîneur Principal, 30+ ans d'expérience (validé par le client)
- **Son de la vidéo hero** : desktop = tentative d'autoplay AVEC son dès l'ouverture, en repartant de currentTime=0 (première phrase audio non coupée) ; si bloqué, premier clic démute en repartant du début. Smartphone = autoplay muet + bouton discret "Activer le son" qui démute SANS redémarrer la vidéo (pas de gel). Dans les 2 cas : une seule lecture sonore, puis boucle muette. Fix clé : attribut muted retiré du JSX (React l'écrasait), tout est piloté en JS (27 août)

## Note déploiement
- Le site est déployé en production (https://pro-pathway-academy.emergent.host). Toute modification faite en preview nécessite un REDÉPLOIEMENT par l'utilisateur pour être visible en production.

## Points MOCKÉS / à confirmer
- Aucun : le coach YILMAZ (Entraîneur Principal, 30+ ans d'expérience) est le vrai profil validé par le client (27 août)

## Backlog priorisé
- P0 : Remplacer les profils fictifs des coachs par les vrais noms/photos/parcours
- P1 : Formulaire d'inscription avec sauvegarde en base (si souhaité plus tard)
- P1 : Plus de photos/vidéos réelles des entraînements
- P2 : Témoignages de joueurs passés en pro
- P2 : Sitemap.xml + robots.txt + Google Search Console pour le référencement
