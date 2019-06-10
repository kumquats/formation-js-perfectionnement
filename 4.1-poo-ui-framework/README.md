# TP Framework UI ES6

## Objectifs

L'objectif de ce TP est de créer un framework UI permettant de créer des composants d'interface graphique réutilisables et de mettre en pratique l'héritage en ES6.

## Préparatifs

- Installer babeljs (npm install --save-dev babel-cli babel-loader babel-core)
- Installer les preset ES2015 (npm install --save-dev babel-preset-es2015)
- Récupérer les fichiers de démarrage (archive fournie)

## Instructions
*NB : pour lancer la compilation, utiliser la commande suivante : .\node_modules\\.bin\babel js -d build --watch --source-maps*
- Créer une classe "Component" qui représentera un composant graphique générique
    + Le constructeur de la classe **Component** doit prendre 3 paramètres:
        * **tagName** (string): Le nom du tag HTML
        * **attributes** (objet): Liste des attributs HTML du composant
        * **children** (array): Liste des enfant du composant. Peut contenir d'autres instances de **Component** ou de simples string
    + La classe devra implémenter les méthodes suivantes
        * **setAttribute(name, value)** : Permet de modifier/ajouter un attribut
        * **getAttribute(name)** : Permet de récupérer la valeur d'un attribut
        * **getTagName()** : Permet de récupérer le tag du composant HTML
        * **render()**: Retourne le code HTML du composant en chaine de caractère en fonction du **tagName**, des **attributes** et des **children**. Cette méthode doit s'appuyer sur la méthode **renderChildren()** décrite ci-dessous
        * **renderChildren()**: Retourne le HTML des composants enfants concaténés dans une seule string
- Créer une classe **Button** qui hérite de **Component**
    + Le constructeur de la classe doit prendre 2 paramètres:
        * **text** : Texte à afficher dans le bouton
        * **attributes** : Attributs du bouton
    + Par défaut cette classe doit générer un 'button' HTML contenant le texte et les attributs définis dans le constructeur
- Créer une classe **RoundedRedButton** qui hérite de **Button**
    + Le constructeur de la classe doit prendre 2 paramètres:
        * **text** : Texte à afficher dans le bouton
        * **attributes** : Attributs du bouton
    + Par défaut cette classe doit afficher un 'button' HTML contenant le texte et les attributs définis dans le constructeur **ET** possédant des coins arrondis, une couleur de texte blanche et une couleur de fond rouge

## Pour aller plus loin
- organiser le code en modules ES6, créer un module par classe en utilisant [webpack](http://webpack.github.io/)) :
    + installer webpack : npm install --save-dev webpack
    + créer un fichier webpack.config.js à la racine du tp (au même niveau que le dossier "node_modules") en suivant les instructions de http://webpack.github.io/docs/usage.html#transpiling-es2015-using-babel-loader
    + répartir le code de chaque classe dans des fichiers distincts, et utiliser les instructions import / export
    + déplacer le code contenu dans la page html vers le fichier ui-framework.js et placer la balise script en bas du body
    + compiler à l'aide de la commande .\node_modules\\.bin\webpack --watch (et plus "babel")
    + ajouter la gestion des source-maps
    + minifier et obfusquer le code généré