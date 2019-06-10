# TP Échange de données - NodeJS

## Objectifs
L'objectif de ce TP est de mettre en place un serveur websocket NodeJS permettant à plusieurs utilisateurs de jouer en ligne simultanément. Les différents joueurs contrôlent un avatar à l'écran qu'ils peuvent déplacer à l'aide des flèches du clavier.

## Préparatifs
- installer NodeJS 
- récupérer les fichiers de démarrage (archive fournie)
- installer les dépendances de l'application avec la commande
```
npm install
```
- installer Node Inspector
```
npm install node-inspector --save-dev
```
- lancer le serveur node et s'assurer que le message "Socket.IO server is running on port 1337" s'affiche
```bash
.\node_modules\.bin\node-debug server.js
```
- lancer la compilation ES6>ES5 du fichier client.js
```bash
.\node_modules\.bin\babel client.js -d build --source-maps --watch
```

## Instructions
- dans client.js connecter l'utilisateur au serveur. Un message doit apparaitre dans le terminal :
    Nouveau joueur connecté : \<id-de-la-socket\> (\<nb\> connectés)
- placer aléatoirement le joueur
- affecter une couleur de fond aléatoire au joueur
- envoyer au joueur qui vient de se connecter la liste de tous les joueurs et leurs positions
- lorsqu'un joueur se déplace, notifier les autres joueurs pour qu'ils mettent à jour leur affichage

## Pour aller plus loin
- permettre à l'utilisateur de choisir un nom qui s'affichera en dessous de la div qui le représente
- permettre à l'utilisateur de choisir une image d'avatar 
- depuis le serveur, changer la couleur de fond de la page de tous les joueurs de manière aléatoire

