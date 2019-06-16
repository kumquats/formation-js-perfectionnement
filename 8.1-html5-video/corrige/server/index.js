import express from 'express';
import SocketServer from 'socket.io';
import http from 'http';
import renderPage from './renderPage';

// création des serveurs express et socket.io
const app = express(),
	server = http.createServer( app ),
	io = new SocketServer( server ),
	port = 80;

// serveur http express
// pour la page index...
app.get( '/', ( req, res ) => {
	const html = renderPage();
	res.send( html );
} );
// ... et pour tous les fichiers statiques qui se trouvent dans ./public
app.use( express.static( './public' ) );

// serveur websocket socket.io
// pour les échanges de données temps réel
const searchHistory = [];
io.on( 'connection', socket => {
	console.log( `Nouveau visiteur : ${socket.id}` );
	// lorsqu'un nouvel utilisateur se connecte, on lui envoie l'historique complet des recherches précédentes
	socket.emit( 'searchHistoryUpdate', searchHistory );
	// lorsqu'un utilisateur fait une recherche...
	socket.on( 'search', value => {
		console.log( 'Nouvelle recherche lancée : ', value );
		// ... on ajoute la recherche dans l'historique ...
		searchHistory.unshift( {
			search: value,
			socketId: socket.id,
			date: new Date(),
		} );
		// ... et on renvoie l'historique complet à tous les utilisateurs connectés
		io.emit( 'searchHistoryUpdate', searchHistory );
	} );
} );

server.listen( port, () => {
	console.log( `l'appli JSFLIX est lancée sur le port ${port} !
	connectez vous sur http://localhost${port != 80 ? port : ''}` );
} );