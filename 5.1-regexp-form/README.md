# TP RegExp - validation de formulaire

## Objectifs
Manipuler les regexp et les utiliser dans le cas pratique de la validation des données saisies par un utilisateur dans un formulaire.

## Préparatifs
- récupérer le fichier de démarrage du TP (fourni par le formateur) et le dézipper dans un dossier distinct de votre workspace

## Instructions
- coder la fonction submitHandler() et si l'email saisi n'est pas dans un format d'email ou si la date n'est pas au format JJ/MM/AAAA, afficher un message en dessous de chaque champ de saisie. 

## Pour aller plus loin
- Si les données sont valides, au lieu de soumettre le formulaire, afficher dans la page le texte "Bonjour <Nom>, tu es né en <mois> de l'année <année>, quelle chance !" où
    + <Nom> représente le nom de l'utilisateur déduit à partir de la partie gauche de l'email (si elle est séparée par un point -comme dans l'adresse "ned.stark@got.gouv.wnt" par exemple-, alors seule la partie avant le point est utilisée -ici "ned")
    + <mois> représente le mois de naissance au format texte (et pas numérique).
    + <année> représente l'année de naissance saisie par l'utilisateur