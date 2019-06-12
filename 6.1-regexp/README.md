# TP 6.1 - RegExp <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [Objectifs](#objectifs)
- [Préparatifs](#préparatifs)
- [Instructions](#instructions)
- [Pour aller plus loin](#pour-aller-plus-loin)

## Objectifs
- Manipuler les expressions régulières pour valider ou formater des chaînes de caractères

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
1. Adaptez la méthode `handleSubmit()` de la classe `SearchForm` pour vérifier que l'utilisateur a tapé un mot de plus de trois caractères (sans espaces). Si la chaîne saisie correspond, alors on appelle le callback `onSubmit`, sinon on affiche une `alert()` d'erreur.
2. Adaptez le rendu de la classe `SearchResults` pour formater la date "premiered" au format FR (JJ/MM/AAAA).

## Pour aller plus loin
- Utiliser les named groups dans la fonction de formatage de la date
- Adaptez l'affichage de `SearchResults` pour afficher le mois en toutes lettres : par exemple `'2011-04-17'` doit afficher `17 avril 2011`. Utiliser pour cela le tableau suivant :
	```js
	const monthNames = [
		'janvier','février','mars', 'avril', 'mai',
		'juin', 'juillet', 'août','septembre',
		'octobre', 'novembre', 'décembre'
	];
	```