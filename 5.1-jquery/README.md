# TP 5.1 - jQuery <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [Objectifs](#objectifs)
- [Préparatifs](#préparatifs)
- [Instructions](#instructions)
	- [1. Installation de jQuery](#1-installation-de-jquery)
	- [2. La fonction $()](#2-la-fonction-)
	- [3. Modifier la page](#3-modifier-la-page)
	- [4. Les événements avec jQuery](#4-les-événements-avec-jquery)
- [Pour aller plus loin](#pour-aller-plus-loin)

## Objectifs
- Installer jquery
- utiliser les principales fonctions de manipulation du DOM avec jQuery

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

## Instructions
### 1. Installation de jQuery
1. **Installez jquery** avec la commande :
	```bash
	cd /chemin/vers/demarrage
	npm install --save jquery
	```
2. **Ouvrez le fichier `package.json` et constatez que jQuery a été ajouté à la liste des dépendances du projet :**
	```bash
	  "dependencies": {
	    "jquery": "^3.4.1"
	  }
	```
### 2. La fonction $()
**jQuery met à disposition une fonction "magique" `$()` qui permet notamment de sélectionner des éléments HTML puis d'y appliquer des modifications.**
1. **Dans le fichier main.js, importez jQuery** :
	```js
	import $ from 'jquery';
	```

	Vous noterez que cette instruction `import` est un peu différente de celles que l'on avait faites jusque là : en effet, **quand on importe un paquet npm, on indique après le `from` juste son nom** (et pas un chemin relatif comme pour les modules que l'on développe nous-mêmes).

2. **Utilisez la fonction $ pour sélectionner le h1 et affichez le contenu dans la console** :
	```js
	console.log( $('h1') );
	```

	La valeur retournée par `$()` est un [objet jQuery](http://api.jquery.com/Types/#jQuery). Il s'agit d'un objet qui contient la liste de tous les éléments HTML correspondant au sélecteur CSS (*ici nous n'en avons qu'un seul, d'où le length = 1*) et des méthodes qui vont permettre de les manipuler.

### 3. Modifier la page
1. **Avec la méthode `.html()` affichez le contenu du h1** :
	```js
	console.log( $('h1').html() );
	```

2. **La méthode `.html()` peut aussi servir à modifier le contenu d'une balise : remplacez le contenu du logo par le texte `'jQuery forever'`**.

3. Comme expliqué plus haut, jQuery retourne un objet qui peut contenir une collection d'éléments HTML. Si le sélecteur CSS que l'on passe à la fonction `$()` correspond à plusieurs éléments de la page, les méthodes que l'on appellera ensuite sur l'objet jQuery s'appliqueront automatiquement à tous les éléments de la page concernés !

	**Remplacez le sélecteur CSS précédent `'h1'` par `'section'`**.

	Voyez comment avec **une seule instruction** on a pu modifier **toutes** les sections de la page (*tout du moins toutes celles qui existaient au moment où l'on a exécuté l'instruction*). Pas besoin de `forEach` ou de boucle `for`, elle est inclue dans chaque méthode de l'objet jQuery retourné par `$()`.

4. **Effacez le code précédent de manière à revenir à un titre et des sections "normales"**.

5. **Modifiez le code du fichier main.js et du module slideshow.js pour utiliser jQuery au lieu des méthodes classiques de l'API DOM (querySelector, innerHTML, classList.add, appendChild).**

### 4. Les événements avec jQuery
1. **A l'aide de la méthode [`.on()`](https://api.jquery.com/on/) détectez le clic sur le h1** et affichez le texte `'On a cliqué sur le h1'` dans la console.
2. **remplacez l'appel à [`.on()`](https://api.jquery.com/on/) par l'appel à la méthode [`.click()`](https://api.jquery.com/click/)** : la fonction passée à `.click()` reçoit en paramètre un objet [event](http://api.jquery.com/category/events/event-object/) avec (comme dans l'API DOM) une propriété [`currentTarget`](http://api.jquery.com/event.currentTarget/) et une méthode [`preventDefault()`](http://api.jquery.com/event.preventDefault/)

## Pour aller plus loin
Je vous propose d'utiliser jQuery pour détecter la soumission du formulaire de recherche.
<br>Pour cela on va modifier légèrement la classe `Component` et le `main.js` :
1. **Dans la classe `Component` ajoutez la méthode `mount()`** comme ceci :
	```js
	mount( element ){
		this.element = element;
	}
	```
2. **Dans le `main.js`, juste après l'appel à `searchForm.render()`, appelez la méthode `mount` :**
	```js
	searchForm.mount( searchFormContainer );
	```
	(*`searchFormContainer` étant la balise HTML dans laquelle on a fait le `render()`*)
3. **Dans la classe SearchForm, overridez la méthode `mount()`** et ajoutez avec jQuery un écouteur d'événement 'submit' sur le formulaire. Cet écouteur d'événements va appeller une nouvelle méthode de la classe SearchForm qu'on appellera `handleSubmit`. Pour le moment cette méthode `handleSubmit` n'affiche qu'un message dans la console.
4. **Toujours dans `SearchForm`, ajoutez une propriété nommée `onSubmit`.** Cette propriété va permettre au `main.js` de passer une fonction de callback à appeler au submit. Modifiez le code de la méthode `handleSubmit` pour appeler ce callback en lui passant la valeur saisie par l'utilisateur dans le champ de recherche.
	<br>Dans le `main.js` on passera ce callback de cette manière :
	```js
	searchForm.onSubmit = value => {
		console.log(`Recherche de la valeur : ${ value }` );
	}
	```
