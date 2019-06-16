# TP 8.1 API HTML5 : media player <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [Objectifs](#Objectifs)
- [Préparatifs](#Préparatifs)
- [Instructions](#Instructions)
- [Pour aller plus loin](#Pour-aller-plus-loin)


## Objectifs
- manipuler les méthodes de l'API HTML5 de la balise video

## Préparatifs
1. **Récupérez le contenu du dossier `demarrage` du TP** *(vous pouvez également repartir des fichiers de votre tp précédent si vous aviez terminé)*
2. **Installez les dépendances du projet (babel, webpack, jquery, etc.)** à l'aide de la commande :
	```bash
	cd /chemin/vers/demarrage
	npm install
	```
3. **Lancez le serveur node** :
	```bash
	cd /chemin/vers/demarrage
	npm run server
	```
4. **Ouvrez http://localhost:8080**


## Instructions
1. Dans la fonction `renderPage()` définie dans le fichier `server/renderPage.js`, ajoutez le code html suivant *(dans la balise `<section class="banner">` juste après le lien `<a href="#">Play</a>`)* :
	```html
	<div class="player">
		<video>
			<source src="video.mp4" type="video/mp4"/>
		</video>
		<nav class="player-controls">
			<button class="playButton">play</button>
			<button class="pauseButton">pause</button>
			<button class="stopButton">stop</button>
			<input type="range" max="100" min="0" step=".1" value="0" />
		</nav>
		<button class="closeButton"></button>
	</div>
	```
2. Au clic sur le lien `<a href="#">Play</a>` contenu dans la section `<section class="banner">`, ajouter la classe css "visible" à la balise qu'on vient d'ajouter `<div class="player">...</div>`
3. Utiliser l'api HTML5 de la balise video pour permettre de lancer la vidéo au clic sur le bouton play
4. Au clic sur le bouton pause, mettre en pause la vidéo
5. Au clic sur le bouton stop, arrêter la video et la remettre au début
6. Au fur et à mesure de l'avancée de la lecture mettre à jour la position du `<input type="range">`


## Pour aller plus loin
- Permettre de déplacer la tête de lecture de la vidéo lors de la manipulation du range par l'utilisateur
- Permettre de fermer la vidéo au clic sur le bouton "close"
