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
- Hero cinétique avec révélation ligne par ligne (BELGIUM / ELITE / ACADEMY), image stade de nuit avec parallaxe
- Marquee éditorial lent (phrases clés : U17-U23, carrière pro…)
- Manifeste en 3 chapitres numérotés : La Méthode, Pour Qui, Le Parcours Pro + bandeau stats
- Galerie bento asymétrique (4 photos d'entraînement, traitement noir & blanc, couleur au survol)
- Contact brutaliste : email + téléphone en grand format, footer
- Header fixe glassmorphism avec navigation par ancres, scroll fluide Lenis
- Responsive mobile/desktop vérifié par captures d'écran

## Points MOCKÉS / à confirmer
- Email contact@belgiumeliteacademy.be et téléphone +32 470 00 00 00 sont des PLACEHOLDERS — fournir les vrais contacts
- Photos d'entraînement : banque d'images (pas les vraies photos de l'académie)

## Backlog priorisé
- P0 : Remplacer email/téléphone par les vraies coordonnées
- P0 : Ajouter les vraies photos des entraînements U17-U23
- P1 : Formulaire d'inscription avec sauvegarde en base (si souhaité plus tard)
- P1 : Section coachs/staff avec photos et parcours
- P2 : Version bilingue FR/NL
- P2 : Témoignages de joueurs passés en pro
