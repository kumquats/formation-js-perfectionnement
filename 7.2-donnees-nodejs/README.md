# TP 7.1 Échange de données - NodeJS <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [Objectifs](#objectifs)
- [Préparatifs](#préparatifs)
- [Instructions](#instructions)
	- [1. Créer le serveur Socket.io](#1-créer-le-serveur-socketio)
	- [2. Connecter le client JS au serveur socket.io](#2-connecter-le-client-js-au-serveur-socketio)
	- [3. Partager les recherches des utilisateurs](#3-partager-les-recherches-des-utilisateurs)
- [Pour aller plus loin](#pour-aller-plus-loin)

## Objectifs
- Développer un serveur Node avec socket.io
- Connecter notre application JSTV à ce serveur Node pour envoyer / recevoir des données en temps réel

## Préparatifs
1. **Récupérez le contenu du dossier `demarrage` du TP** *(vous pouvez également repartir des fichiers de votre tp précédent si vous aviez terminé)*
2. **Lancez un serveur http dans le dossier demarrage/public** :
	```bash
	cd /chemin/vers/demarrage/public
	php -S localhost:80
	```
3. **Ouvrez http://localhost**
4. **Installez les dépendances du projet (babel, webpack, jquery, etc.)** à l'aide de la commande :
	```bash
	cd /chemin/vers/demarrage
	npm install
	```

## Instructions
### 1. Créer le serveur Socket.io
1. Pour développer un serveur Node, on va installer plusieurs outils :
	- [@babel/register] : un module qui permet de transpiler (compiler) automatiquement et au runtime le code ES6+ en ES5 (notamment pour le support des syntaxes expérimentales) cf. https://node.green/ pour le support EcmaScript dans les différentes versions de node.
	- [socket.io](https://socket.io/) : un serveur websocket
	- [express](https://expressjs.com/) : une librairie qui simplifie la création de serveurs http basés sur node

	```bash
	npm install --save-dev @babel/register
	npm install --save express socket.io
	```

2. Une fois les paquets installés, créez un fichier `launch-server.js` à la racine du dossier `demarrage` qui sera le point d'entrée du serveur node, et placez y le code suivant :
	```js
	require('@babel/register');
	require('./server/index.js');
	```

3. Créez un dossier `src/server` et y placer un fichier `index.js` dans lequel on va initialiser un serveur socket.io :
	```js
	import express from 'express';
	import SocketServer from 'socket.io';
	import http from 'http';

	// création des serveurs express et socket.io
	const app = express(),
		server = http.createServer(app),
		io = new SocketServer(server),
		port = 8080;

	io.on('connection', socket => {
		console.log( `Nouveau visiteur : ${socket.id}` );
	});

	server.listen( port, () => {
		console.log( `l'appli JSTV est lancée sur le port ${port} !` );
	} );
	```

4. Lancez le serveur socket dans un terminal à l'aide de la commande :
	```bash
	cd /chemin/vers/demarrage
	node launch-server.js
	```
	Le message `"l'appli JSTV est lancée sur le port 8080 !"` s'affiche alors dans le terminal.

### 2. Connecter le client JS au serveur socket.io
1. Dans le fichier `main.js` connectez l'appli au serveur socket.io :
	```js
	import io from 'socket.io-client';
	const socket = io('http://localhost:8080');
	```
2. Recompilez l'application client et rechargez la page sur http://localhost
3. Si tout s'est bien passé, le message : `"Nouveau visiteur : ..."` doit s'afficher dans le terminal dans lequel vous avez lancé le serveur.

### 3. Partager les recherches des utilisateurs
Pour partager les recherches entre les différents utilisateurs le principe mis en place sera le suivant :
- lorsqu'un utilisateur fait une recherche, il envoie l'info au serveur
- lorsque le serveur reçoit l'information il la transmet à tous les utilisateurs connecté

Lorsque vous allez modifier le code du serveur, il faudra systématiquement stopper (CTRL+C) et relancer le serveur (`node launch-server.js`). Pour recharger automatiquement le serveur à chaque modification du code source, on va utiliser le module [nodemon](https://nodemon.io/). Stoppez le serveur et installez nodemon :

```bash
npm install --save-dev nodemon
```

ajoutez un script dans le `package.json` :
```json
"server": "nodemon --watch server --inspect launch-server.js"
```

Lancez ensuite le serveur avec la commande :
```bash
npm run server
```
Maintenant, dès qu'un fichier du dossier `server` sera modifié, le serveur sera automatiquement relancé !

1. Envoyez au serveur les recherches des utilisateurs à l'aide de la méthode `socket.emit(...)` : cf. https://socket.io/docs/client-api/#socket-emit-eventName-%E2%80%A6args-ack

2. Côté serveur, détectez l'arrivé d'une nouvelle recherche avec la méthode `socket.on(...)` : cf. https://socket.io/docs/server-api/#socket-on-eventName-callback

3. Chaque fois qu'une recherche arrive au serveur, envoyez l'information (la chaîne recherchée) à tous les utilisateurs connectés à l'aide de la méthode `io.emit(...)` : cf. https://socket.io/docs/server-api/#namespace-emit-eventName-%E2%80%A6args

4. Côté client, récupérez l'information à l'aide de la méthode `socket.on(...)` : cf. https://socket.io/docs/client-api/#socket-on-eventName-callback et affichez les recherches dans la section `<section class="liveSearch"></section>`


## Pour aller plus loin
- Conservez l'historique des recherches et l'envoyer à chaque nouvel utilisateur qui se connecte
- Permettre à un utilisateur de lancer une recherche en cliquant sur un des éléments de l'historique
- Utilisez express pour rendre la page index.html à la place du serveur PHP
- pré-rendre le slideshow dans le code html avant de l'envoyer au navigateur
