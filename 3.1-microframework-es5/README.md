# TP Création d'un Microframework

## Objectifs
L'objectif de ce TP est de créer une classe JavaScript permettant d'abstraire la manipulation d'un élément du DOM.
La classe s'instancie en prenant le selecteur CSS d'un élément en paramètre et dispose de méthodes permettant de:
- L'afficher
- Le masquer
- Changer sa couleur de fond, et de texte.

Elle permet également d'écouter des événements, comme le clic sur l'élément par exemple.

## Préparatifs
- récupérer les fichiers de démarrage (archive fournie)

## Instructions
- Créer une classe ayant pour nom **_$**
- Le constructeur de la classe doit prendre un selecteur CSS en paramètre et retrouver l'élément correspondant pour l'enregistrer dans une propriété "element"
- Implémenter la méthode **hide()** permettant de cacher un élément à l'écran
- Implémenter la méthode **show()** permettant d'afficher un élément à l'écran
- Implémenter la méthode **on( type, handler )** permettant d'ajouter un écouteur d'événement sur l'élément ( **type** désignant le type d'événement et **handler** désignant la fonction à appeler lorsque l'événement survient)

## pour aller plus loin
- Implémenter la méthode **paint(color, backgroundColor)** permettant de définir la couleur du texte et du fond de l'élément
- Pour l'instant la classe ne gère qu'un élément à la fois. Un selecteur CSS pouvant désigner plusieurs éléments, modifier les méthodes de la classe afin qu'elles puissent aussi bien s'appliquer sur un élément unique qu'à un groupe d'éléments.
