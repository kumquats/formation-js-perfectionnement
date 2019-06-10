# TP 1 - Rappels <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [Objectifs](#objectifs)
- [Préparatifs](#préparatifs)
- [Instructions](#instructions)
- [Pour aller plus loin](#pour-aller-plus-loin)


## Objectifs
- Mettre en place son environnement de développement
- manipuler les types et fonctions de base de JavaScript
- travailler avec l'API DOM pour manipuler la page HTML en JS
- et en profiter pour poser les bases de l'application ***"JSTV"*** que nous développerons tout au long des différents TPs

## Préparatifs
1. **Créer un dossier pour ce TP** et y placer le contenu du dossier de démarrage fourni dans ce repo.
2. **Télécharger PHP** depuis la page de téléchargement pour windows : https://windows.php.net/download/. Dézipper l'archive dans un dossier puis ajouter le chemin vers ce dossier dans la variable d'environnement `PATH`, de manière à rendre php accessible en ligne de commande.
3. **Lancer un serveur http dans le dossier demarrage** :
	```bash
	cd /chemin/vers/demarrage
	php -S localhost:80
	```
	PHP se met alors en attente d'une connexion http et affiche le texte suivant :
	```bash
	PHP 7.2.12 Development Server started at Sun Jun 9 23:14:27 2019
	Listening on http://localhost:80
	Document root is C:\workspace\demarrage
	Press Ctrl-C to quit.
	...
	```
4. **Vérifier dans le navigateur que la page index.html fournie s'affiche correctement** en ouvrant l'url http://localhost. Le résultat attendu est le suivant : <br><a href="images/jstv-00.jpg"><img src="images/jstv-00.jpg" width="80%"></a>

	*Si la page ne s'affiche pas correctement, vérifiez que vous avez bien lancé PHP dans le dossier de démarrage, c'est à dire celui où se trouve le fichier `index.html`.*
5. **Installer un éditeur de code optimisé pour le développement web et particulièrement le JS moderne** : je vous recommande notamment [Visual Studio Code](https://code.visualstudio.com/) (vscode). C'est un éditeur de code opensource et développé avec [Electron](https://electronjs.org/), c'est donc un outil qui est lui-même développé en JS !

	<br>Une fois vscode lancé, il ne reste plus qu'à ouvrir le dossier du projet en le glissant depuis l'explorateur windows jusque dans la fenêtre de vscode.

	**Raccourcis clavier utiles :**
	- <kbd>CTRL</kbd>+<kbd>P</kbd> : ouvrir un fichier à partir de son nom
	- <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> : lancer n'importe quelle commande des menus.
	- <kbd>CTRL</kbd>+<kbd>/</kbd> : commenter/décommenter
	- cheat sheet windows : https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf


## Instructions

*Dans ce TP nous allons créer un **diaporama photo** en JS.
<br>Les images affichées seront calculées par votre code en fonction du contenu d'une balise présente dans la page `index.html` :*
```html
<section class="slideshow">
    <span>images/twd.jpg</span>
    <span>images/pb.jpg</span>
    <span>images/got.jpg</span>
</section>
```
*Votre code devra permettre au final de transformer le contenu de la balise pour correspondre à :*
```html
<section class="slideshow">
    <a href="images/got.gif">
        <img src="images/got.gif" />
    </a>
    <a href="images/td.gif">
        <img src="images/td.gif" />
    </a>
    <a href="images/twd.gif">
        <img src="images/twd.gif" />
    </a>
</section>
```
*Procédons étape par étape :*

1. **Créer une fonction `getSlideshowImages( element )`** qui :
	- prend en paramètre un élément HTML
	- et qui retourne la liste des URL d'images contenues dans des balises `<span>`.

	Appeler cette fonction en lui passant en paramètre la balise de classe `slideshow` et vérifier que le contenu du tableau retourné est bien de la forme :
	```js
	['images/got.gif','images/td.gif','images/twd.gif']
	```
2. **Créer une deuxième fonction `renderSlideshow( images )`** qui prend en paramètre le tableau d'images calculé par `getSlideshowImages` et qui retourne une chaîne de caractères correspondant au code HTML attendu (un lien et une balise img pour chaque image du tableau). Le résultat attendu est :
	```bash
	'<a href="images/got.gif">
        <img src="images/got.gif" />
    </a>
    <a href="images/td.gif">
        <img src="images/td.gif" />
    </a>
    <a href="images/twd.gif">
        <img src="images/twd.gif" />
    </a>'
	```
3. **Remplacer le contenu de la balise `<section class="slideshow">`** avec la chaîne de caractères calculée par `renderSlideshow(images)`.

## Pour aller plus loin
1. ***Créer une fonction slideNext*** qui permet de passer le premier lien contenant la première image en fin de liste (la 1ere image deviens la dernière, la 2e image devient la première, etc.).
2. **Appeler cette fonction automatiquement toutes les 2 secondes**
3. **Pour n'afficher qu'une image à la fois, ajoutez en JS la classe CSS `"single"`** à la `<section class="slideshow">`