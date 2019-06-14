# TP 8.1 API HTML5 : media player <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [Objectifs](#objectifs)
- [Préparatifs](#préparatifs)
- [Instructions](#instructions)
- [Pour aller plus loin](#pour-aller-plus-loin)


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
1. Ajouter dans la fonction `renderPage()` ajoutez le code html suivant dans la balise `<aside class="sidebar">` juste après la section "news" :
	```html
	<section class="player">
		<video>
			<source src="video.mp4" type="video/mp4"/>
		</video>
		<nav class="player-controls">
			<button class="playButton">play</button>
			<button class="pauseButton">pause</button>
			<button class="stopButton">stop</button>
			<input type="range" max="100" min="0" step="1" />
		</nav>
	</section>
	```
2. Utiliser l'api HTML5 de la balise video pour permettre de lancer la vidéo au clic sur le bouton play
3. Au clic sur le bouton pause, mettre en pause la vidéo
4. Au clic sur le bouton stop, arrêter la video et la remettre au début
5. Au fur et à mesure de l'avancée de la lecture mettre à jour la position du `<input type="range">`

## Pour aller plus loin
- Permettre de déplacer la tête de lecture de la vidéo lors de la manipulation du range par l'utilisateur
