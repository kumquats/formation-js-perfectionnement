# TP 4.1 - POO UI Framework <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [Objectifs](#Objectifs)
- [Préparatifs](#Préparatifs)
- [Instructions](#Instructions)
- [Pour aller plus loin](#Pour-aller-plus-loin)

## Objectifs
- Développer en Programmation Orientée Objet à l'aide des nouvelles syntaxes ES6+
- mettre en place les outils nécessaires à l'utilisation des syntaxes expérimentales
- et toujours faire évoluer notre application JSFLIX !

## Préparatifs
1. **Récupérez le contenu du dossier `demarrage` du TP** *(vous pouvez également repartir des fichiers de votre tp précédent si vous aviez terminé)*
2. **Lancez un serveur http dans le dossier demarrage/public** :
	```bash
	cd /chemin/vers/demarrage/public
	php -S localhost:80
	```
3. **Ouvrez http://localhost**
4. **Installez les dépendances du projet (babel, webpack, etc.)** à l'aide de la commande :
	```bash
	cd /chemin/vers/demarrage
	npm install
	```
6. **Installez les plugins babel permettant de supporter les syntaxes expérimentales de la POO** (propriétés d'instance et statiques, propriétés et méthodes privées) :
	```bash
	npm install --save-dev @babel/plugin-proposal-object-rest-spread @babel/plugin-proposal-class-properties @babel/plugin-proposal-private-methods
	```

	Et modifier le fichier .babelrc :
	```json
	{
		"presets": ["@babel/preset-env"],
		"plugins": [
			"@babel/plugin-proposal-object-rest-spread",
			"@babel/plugin-proposal-class-properties",
			"@babel/plugin-proposal-private-methods"
		],
	}
	```

## Instructions
Nous allons développer dans ce TP une classe `Component` qui va permettre de générer du code HTML en JS.

A chaque étape du TP vous allez perfectionner la classe Component pour la rendre capable de gérer des paramètres supplémentaires.

1. **Créez une classe `Component`** dans un module à part `src/Component.js`. La classe dispose de 2 méthodes :
	- un constructeur qui prend 2 paramètres :
		+ **tagName** (string): Le nom de la balise HTML à générer
		+ **children** (array): la liste des enfants du composant.
	- une méthode `render()` qui retourne pour le moment une chaîne de caractères en dur 'ceci est du HTML'.
2. **Ajoutez dans le main.js le code suivant :**
	```js
	const c = new Component('h1', ['JS']);
	document.querySelector('body > header > nav').innerHTML = c.render();
	```
	Modifier le code de la classe Component pour prendre en compte les paramètres passés au constructeur et faire en sorte que le code ci-dessus injecte dans la page le code :
	```html
	<h1>JS</h1>
	```
3. **Modifiez le code du main.js avec la ligne suivante :**
	```js
	const c = new Component('h1', ['JS', 'FLIX']);
	```
	Complétez le code de la classe Component pour prendre en compte tous les enfants passés en paramètre :
	```html
	<h1>JSFLIX</h1>
	```
4. **Prendre en compte les enfants de types `Component` :**
	```js
	const c = new Component('h1', [
	    'JS',
	    new Component( 'em', ['FLIX'] )
	]);
	```
	devra rendre :
	```html
	<h1>JS<em>FLIX</em></h1>
	```
5. **Gérez un 3e paramètre `attributes` :** Le constructeur de la classe `Component` peut maintenant prendre un 3e paramètre (facultatif) nommé `attributes` :
	```js
	const c = new Component(
		'h1',
		[
			'JS',
			new Component( 'em', ['FLIX'] )
		],
		{ class: 'logo' }
	);
	```
	devra rendre :
	```html
	<h1 class="logo">JS<em>FLIX</em></h1>
	```

## Pour aller plus loin
1. **Créez une classe `Button` qui hérite de `Component`**. Le constructeur de la classe doit prendre 2 paramètres:
	- **text** : Texte à afficher dans le bouton
	- **attributes** : Attributs du bouton

	Le code JS :
	```js
	const b = new Button('chercher');
	```
	doit générer :
	```html
	<button>chercher</button>
	```

2. **Créez une classe `SearchForm` :**
	```js
	const searchForm = new SearchForm();
	document.querySelector( '.searchForm' ).innerHTML = searchForm.render();
	```
	génère :
	```html
	<form>
		<input type="search" name="search" />
		<button>chercher</button>
	</form>
	```
3. **Créez une classe `SearchResults` qui permette d'afficher une liste de résultats de recherche** (pour le moment la liste de résultats sera passée en dur) :
	```js
	const searchResults = new SearchResults();
	searchResults.results = [
		{ show: { name: 'Game Of thrones', premiered: '2011-04-17', officialSite: 'http://www.hbo.com/game-of-thrones',
		image: { original: 'http://static.tvmaze.com/uploads/images/original_untouched/190/476117.jpg'} } },
		{ show: { name: 'The Walking Dead', premiered: '2010-10-31', officialSite: 'http://www.amc.com/shows/the-walking-dead', image: { original: 'http://static.tvmaze.com/uploads/images/original_untouched/177/444593.jpg'} } },
		{ show: { name: 'True Detective', premiered	: '2014-01-12', officialSite: 'http://www.hbo.com/true-detective', image: { original: 'http://static.tvmaze.com/uploads/images/original_untouched/178/445621.jpg'} } },
	];
	const searchResultsContainer = document.querySelector( '.searchResults' );
	searchResultsContainer.innerHTML = searchResults.render();
	```
	Le résultat attendu est :
	```html
	<div>
		<a href="http://www.hbo.com/game-of-thrones" class="searchResultRenderer">
			<header>
				<img src="http://static.tvmaze.com/uploads/images/original_untouched/190/476117.jpg" class="thumbnail" />
			</header>
			<section class="infos">
				<h3>Game Of Thrones</h3>
				<time datetime="2011-04-17">2011-04-17</time>
			</section>
		</a>
		<a href="http://www.amc.com/shows/the-walking-dead" class="searchResultRenderer">
			<header>
				<img src="http://static.tvmaze.com/uploads/images/original_untouched/177/444593.jpg" class="thumbnail" />
			</header>
			<section class="infos">
				<h3>The Walking Dead</h3>
				<time datetime="2010-10-31">2010-10-31</time>
			</section>
		</a>
		<a href="http://www.hbo.com/true-detective" class="searchResultRenderer">
			<header>
				<img src="http://static.tvmaze.com/uploads/images/original_untouched/178/445621.jpg" class="thumbnail" />
			</header>
			<section class="infos">
				<h3>True Detective</h3>
				<time datetime="2014-01-12">2014-01-12</time>
			</section>
		</a>
	</div>
	```

