// initialisation des variables de l'appli
let userList = [],
	userId,
	me,
	usersContainer = document.querySelector('.usersContainer');
// objet utilitaire qui va permettre de calculer le déplacement du joueur
// en fonction des touches du clavier
let directions = {
	left : {
		keyCode: 37,
		speed: 0
	},
	up : {
		keyCode: 38,
		speed: 0
	},
	right : {
		keyCode: 39,
		speed: 0
	},
	down : {
		keyCode: 40,
		speed: 0
	}
};

// détection de l'appui sur les touches du clavier
document.addEventListener( 'keyup', onKeyChange );
document.addEventListener( 'keydown', onKeyChange );
// lorsqu'une touche est appuyée ou relachée on met à jour l'objet directions
function onKeyChange( event ){
	Object.keys(directions).forEach( function( direction ) {
		if ( event.keyCode == directions[direction].keyCode ) {
			event.preventDefault();
			directions[direction].speed = event.type == 'keydown' ? 5 : 0;
			return;
		}
	});
}

/**
 * Méthode permettant de mettre à jour les joueurs affichés à l'écran
 * Appelée lorsqu'un nouveau joueur se connecte ou qu'un joueur se déconnecte.
 */
function refreshUsers( list ){
	userList = list;
	// TODO : créer ou mettre à jour les divs correspondant à chaque joueur
}
/**
 * Méthode de rendu des joueurs.
 * Met à jour la position des divs représentant chaque joueur.
 * S'auto appelle au requestAnimationFrame().
 */
function render(){
	// on parcourt les différents utilisateurs connectés
	// pour mettre à jour leur position à l'écran.
	userList.forEach( user =>{
		var el = document.getElementById(user.id);
		el.style.left = user.position.x+'px';
		el.style.top = user.position.y+'px';
	});
	// on calcule la position du joueur en fonction
	// des touches du clavier appuyées
	computeUserPosition();
	// on demande au navigateur de relancer la fonction
	// à la prochaine frame
	requestAnimationFrame( render );
}

/**
 * Calcule la nouvelle position de l'utilisateur en fonction
 * de ce qu'il a appuyé comme touches du clavier.
 * Si la position a changé alors envoie un message au serveur
 * pour notifier tous les joueurs connectés du changement de
 * position de ce joueur
 * @see #onKeyChange()
 */
function computeUserPosition(){
	let vx = directions.right.speed - directions.left.speed;
	let vy = directions.down.speed - directions.up.speed;
	// TODO: envoyer au serveur la nouvelle position du joueur
}

// TODO: coder la connexion au serveur socket.io
// et l'écoute des différents événéments envoyés par le serveur