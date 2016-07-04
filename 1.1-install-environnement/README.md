# TP Rappels - installation environnement de développement

## Objectifs
Mettre en place un environnement de développement dédié au dev JavaScript.

## Préparatifs
- récupérer les programmes d'installtion de SublimeText3 et xampp (fournis par le formateur)

## Instructions
- lancer l'installation de SublimeText3
- se rendre sur https://packagecontrol.io/installation et suivre les instructions pour l'installation du plugin
- à l'aide de packagecontrol, installer les plugins :
    + jsFormat
    + Better JavaScript
    + Emmet
    + DocBlockr
    + Material Theme
- installer xampp
- lancer xampp 
- créer un dossier "workspace" sur le bureau
- depuis l'interface de xampp, ouvrir le fichier de configuration apache (httpd.conf) et remplacer la variable DocumentRoot et le Directory suivant par le chemin du dossier "workspace"
- créer un dossier "tp1.1" et y placer un fichier index.html
- depuis l'interface de xampp, lancer le serveur apache
- ouvrir l'adresse http://localhost dans un navigateur et vérifier que le dossier "tp1.1" s'affiche bien dans le navigateur
- cliquer sur le dossier "tp1.1" et vérifier que le contenu du fichier index.html s'affiche bien

