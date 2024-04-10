---
title: "Photo Gallery"
description: "Photo Gallery est une application construite avec Next.js. Elle s'inspire de Google Photos, offrant une interface utilisateur simplifiée et une expérience de navigation fluide."
image:
  src: "/img/photo-gallery.png"
  alt: "lorem"
repository: "https://github.com/matisbag/photo-gallery"
---

> {{ $doc.description }}

:img{:src="image.src" :alt="image.alt"}

::github-link{:to="repository"}
::

### Histoire du projet

Ce projet de galerie photo a été initialement attribué comme devoir par un ancien professeur de React lors de ma première année de Master. L'objectif était de mettre en pratique les concepts et les compétences que nous avions acquises dans le cadre de notre formation.

### Technologies utilisées

Cette application a été construite avec [Next.js](https://nextjs.org/) pour le front-end et [Supabase](https://supabase.com/) pour la gestion des données et l'authentification des utilisateurs. J'ai également utilisé [Material-UI](https://mui.com/) pour le style et la mise en page, afin de garantir une interface utilisateur fonctionnelle sans passer trop de temps sur le design.

### Fonctionnalités

- Création d'un compte ou connexion pour accéder à la galerie de photos.
- Visualisation des images dans une disposition en grille.
- Possibilité d'ajouter des images à la galerie.
- Cliquez sur une image pour la voir en mode plein écran.
- En mode plein écran, pouvoir télécharger ou supprimer l'image.
