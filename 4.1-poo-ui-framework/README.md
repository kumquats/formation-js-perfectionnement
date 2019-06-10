# TP 4.1 - POO UI Framework <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [Objectifs](#objectifs)
- [Préparatifs](#préparatifs)
- [Instructions](#instructions)
- [Pour aller plus loin](#pour-aller-plus-loin)

## Objectifs
- Développer en Programmation Orientée Objet à l'aide des nouvelles syntaxes ES6+
- mettre en place les outils nécessaires à l'utilisation des syntaxes expérimentales
- et toujours faire évoluer notre application JSTV !

## Préparatifs
1. **Récupérez le contenu du dossier `demarrage` du TP** *(vous pouvez également repartir des fichiers de votre tp précédent si vous aviez terminé)*
2. **Lancez un serveur http dans le dossier demarrage/public** :
	```bash
	cd /chemin/vers/demarrage/public
	php -S localhost:80
	```
3. **Ouvrez http://localhost**
4. Installez les plugins babel permettant de supporter les syntaxes expérimentales de la POO (propriétés d'instance et statiques, propriétés et méthodes privées) :
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
Nous allons développer dans ce une classe `Component` qui va permettre de générer du code HTML en JS.

A chaque étape du TP vous allez perfectionner la classe Component pour la rendre capable de gérer des paramètres supplémentaires.

1. **Créez une classe `Component`** dans un module à part `src/Component.js`. La classe dispose de 2 méthodes :
	- un constructeur qui prend 2 paramètres :
		+ **tagName** (string): Le nom de la balise HTML à générer
		+ **children** (array): la liste des enfants du composant.
	- une méthode `render()` qui retourne pour le moment une chaîne de caractères en dur 'ceci est du HTML'.
2. **Ajoutez dans le main.js le code suivant :**
	```js
	const c = new Component('h1', ['JS']);
	document.querySelector('body > header').innerHTML = c.render();
	```
	Modifier le code de la classe Component pour prendre en compte les paramètres passés au constructeur et faire en sorte que le code ci-dessus injecte dans la page le code :
	```html
	<h1>JS</h1>
	```
3. **Modifiez le code du main.js avec la ligne suivante :**
	```js
	const c = new Component('h1', ['JS', 'TV']);
	```
	Complétez le code de la classe Component pour prendre en compte tous les enfants passés en paramètre :
	```html
	<h1>JSTV</h1>
	```
4. **Prendre en compte les enfants de types `Component` :**
	```js
	const c = new Component('h1', [
	    'JS',
	    new Component( 'em', ['TV'] )
	]);
	```
	devra rendre :
	```html
	<h1>JS<em>TV</em></h1>
	```
5. **Gérez un 3e paramètre `attributes` :** Le constructeur de la classe `Component` peut maintenant prendre un 3e paramètre (facultatif) nommé `attributes` :
	```js
	const c = new Component(
		'h1',
		[
			'JS',
			new Component( 'em', ['TV'] )
		],
		{ class: 'logo' }
	);
	```
	devra rendre :
	```html
	<h1 class="logo">JS<em>TV</em></h1>
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


