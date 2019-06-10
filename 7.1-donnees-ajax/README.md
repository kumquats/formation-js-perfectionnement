# TP Échange de données - AJAX

## Objectifs
L'objectif de ce TP est de réaliser des appels AJAX pour communiquer avec une base de données distante (ici l'API de wikipedia). L'utilisation de jquery est recommandée.

## Préparatifs
- télécharger et dézipper les fichiers de démarrage
- consulter le contenu du fichier proxy.php et essayer d'en comprendre le fonctionnement
- s'assurer que le php.ini de votre serveur apache autorise bien les appels CURL : dans le php.ini s'assurer que la ligne `extension=php_curl.dll` est bien décommentée (sans ";" en début de ligne).

## Instructions
- détecter l'événement submit du formulaire et afficher le texte saisi par l'utilisateur dans la console
- lancer une requête ajax au webservice "proxy.php?search=<chaine-saisie-par-l'utilisateur>"
- vérifier dans l'onglet "Network" des devtools du navigateur que l'appel se passe bien et consulter la structure des données reçues, elles doivent correspondre à la structure de l'API MediaWiki cf. https://www.mediawiki.org/wiki/API:Search#Example
- Afficher la liste des résultats dans la page

## Pour aller plus loin
- au clic sur un élément de la liste, afficher le détail de l'article correspondant en utilisant "proxy.php?title=<titre-de-la-page>"
    affichage des résultats + affichage du détail du lien cliqué
    https://fr.wikipedia.org/w/api.php?action=query&titles=Liste%20des%20%C3%A9pisodes%20de%20Game%20of%20Thrones&prop=revisions&rvprop=content&format=json
    cf. https://www.mediawiki.org/wiki/API:Main_page/fr
- stocker la recherche en localstorage pour la réafficher au rechargement de la page
- affichage de messages de loading (ou composant bootstrap) lorsqu'un appel webservice est fait
- affichage d'un message d'erreur dans la page si la valeur saisie est vide