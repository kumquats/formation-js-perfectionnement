# TP 3.1 - ES6 <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [Objectifs](#Objectifs)
- [Préparatifs](#Préparatifs)
- [Instructions](#Instructions)
	- [1. Configuration de Babel](#1-Configuration-de-Babel)
	- [2. Convertir le code en ES6](#2-Convertir-le-code-en-ES6)

## Objectifs
- Mettre en place les outils nécessaires à l'utilisation d'ES6+ en production
- convertir le code de notre application JSFLIX en ES6+

## Préparatifs
1. **Récupérez le contenu du dossier `demarrage` du TP** *(vous pouvez également repartir des fichiers de votre tp précédent si vous aviez terminé)*
2. **Modifiez l'arborescence du projet** *(déplacez `main.js` dans un sous-dossier `src`, le `index.html`, le `css` et les images dans un sous-dossier `public` )* :
	```bash
	demarrage/
	  ├─ public/
	  │   ├─ images/
	  │   │   ├─ ...
	  │   │   └─ ...
	  │   ├─ css/main.css
	  │   └─ index.html
	  ├─ src/
	  │   └─ main.js
	  ├─ .babelrc
	  └─ package.json
	```
3. **Lancez un serveur http dans le dossier demarrage/public** :
	```bash
	cd /chemin/vers/demarrage/public
	php -S localhost:80
	```
4. **Ouvrez http://localhost**

## Instructions

### 1. Configuration de Babel

Pour installer Babel et compiler votre code ES6+ en ES5, il vous faut Node.JS dernière version (current) : https://nodejs.org/en/download/current/
Node.JS est livré avec npm (Node Package Manager - l'outil qui permet de télécharger des utilitaires JS) ce qui vous sera utile pour la suite.

Tapez dans un terminal les instructions suivantes :
1. **Initialisez votre projet npm :**
	```bash
	cd /chemin/vers/demarrage
	npm init
	```
	Répondez alors aux questions qui vous sont posées pour créer votre projet npm. A la fin du questionnaire vous verrez qu'un fichier package.json a été créé. Celui-ci nous sera utile par la suite.
2. **Installez babel :**
   ```bash
	npm install --save-dev @babel/core @babel/cli
	```
	Vous noterez que @babel/core et @babel/cli ont été rajoutés dans les dépendances du fichier `package.json` !
4. **Installer le preset `env` qui permettra de transpiler les features ES6+ en ES5** (on peut voir le preset "env" comme un dictionnaire de traduction ES6+ -> ES5) :
	```bash
	npm install --save-dev @babel/preset-env
	```
5. **Puis créer un fichier `.babelrc`** à la racine de votre projet (dans le dossier `demarrage` au même niveau que le `package.json` et le fichier ìndex.html` et configurer Babel avec le preset `env` :
	```json
	{
		"presets": ["@babel/preset-env"]
	}
	```
6. **Vous pouvez maintenant compiler votre code ES6+ en ES5** à l'aide de la commande :
	```bash
	./node_modules/.bin/babel src -d public/build
	```
	Cette commande va créer un dossier `public/build` dans lequel sera placé le fichier main.js compilé !

	Vérifiez que le fichier public/build/main.js est bien généré.

7. **Une fois le fichier `public/build/main.js` créé, modifiez le fichier index.html pour charger ce fichier à la place du `main.js`. Rechargez la page pour vérifier que tout fonctionne toujours correctement !**

8. **Pour simplifier le travail et éviter d'avoir à compiler manuellement à chaque modification**, utilisez la commande suivante qui va tourner en tâche de fond et recompiler à chaque sauvegarde du fichier js/main.js :
	```bash
	./node_modules/.bin/babel src -d public/build --verbose --watch --source-maps
	```
### 2. Convertir le code en ES6
A chaque étape vérifiez que tout fonctionne toujours dans le navigateur.

Gardez un oeil sur le terminal dans lequel s'exécute babel, les erreurs de compilation apparaîtront là !

1. Dans le fichier `src/main.js` (*attention à ne pas travailler sur le fichier compilé dans `build` !*) remplacer tous les `var` par des `const` (ou des `let si impossible`.
2. Remplacer les fonctions anonymes par des arrow fonctions.
3. Remplacer les concaténations de chaînes par des template strings.
3. Utiliser le destructuring là où c'est possible.
