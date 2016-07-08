var io = require('socket.io')(1337);


/**
 * Ecouteur d'événement 'connection'.
 * Déclenché lorsqu'un nouveau joueur se connecte au serveur.
 * @param  {Object} socket du nouveau joueur
 */
io.on('connection', socket => {
	console.log( `Nouveau joueur connecté : ${socket.id} ${printClientsCount()}` );

	// TODO: envoyer au client les informations nécessaires à l'affichage
	// des joueurs et à son déplacement

	// lorsqu'un utilisateur se déconnecte
	// on notifie tous les joueurs que la liste des utilisateurs a changé
	socket.on('disconnect', ()=> {
		console.log( `Déconnexion : ${socket.id} ${printClientsCount()}`);
	});

});

/**
 * retourne une chaine contenant le nombre de clients connectés
 * @return {String} '(<clientsCount> connectés)'
 */
function printClientsCount(){
	return `(${io.sockets.server.eio.clientsCount} connectés)`;
	// autre notation :
	// return `(${Object.keys(io.sockets.sockets).length} connectés)`;
}

console.log( 'Socket.IO server is running on port 1337. Youpi.' );