---
title: "Morpion"
description: "Ce projet de morpion est un jeu classique réalisé en React et TypeScript. Il offre une interface utilisateur intuitive et une jouabilité fluide. 🕹️"
image:
  src: "/img/tic-tac-toe.png"
  alt: "lorem"
repository: "https://github.com/matisbag/tic-tac-toe"
---

> {{ $doc.description }}

:img{:src="image.src" :alt="image.alt"}

::github-link{:to="repository"}
::

### Histoire du projet

Ce projet de jeu de Morpion a été initié pendant ma troisième année de bachelor. Il a été proposé par l'un de mes enseignants pour mettre en pratique nos compétences en développement. Nous avons commencé par créer une version en TypeScript vanilla, puis nous avons étendu le projet en développant une version utilisant React.

### Technologies utilisées

Ce projet de jeu de Morpion a été développé en deux versions. La [première version](https://github.com/matisbag/tic-tac-toe/tree/vanilla) a été construite en TypeScript vanilla, en se limitant aux langages de base du web : HTML, CSS et TypeScript. Pour la [seconde version](https://github.com/matisbag/tic-tac-toe), j'ai utilisé la bibliothèque [React.js](https://react.dev/). Cette approche a permis une gestion plus aisée de l'état de l'application et l'implémentation de fonctionnalités interactives avancées.

### Fonctionnalités

- Jouer contre un autre joueur en local.
- Interface utilisateur intuitive pour placer les symboles sur la grille.
- Détection automatique de la fin de la partie et affichage du vainqueur ou d'un match nul.
- Possibilité de recommencer une nouvelle partie après la fin d'une partie.
- Gestion de l'état du jeu pour suivre le score.
