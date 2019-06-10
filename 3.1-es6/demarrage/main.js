// codez ici votre TP
console.log('Welcome to ', {title:'JSTV', emoji: '📺'});

/**
 * Analyse le contenu d'une balise et retourne un tableau d'URL d'images
 * si cette balise contient des `<span>`.
 * @param {Node} container Element HTML dans lequel rechercher
 * @returns Array<string> tableau des URLs d'images
 */
function getSlideshowImages( container ) {
	// on récupère tous les span contenus dans la balise
	var spans = container.querySelectorAll( 'span' ),
		images = [];
	// pour chaque span on récupère son contenu (innerHTML)
	spans.forEach( function ( span ) {
		images.push( span.innerHTML );
	} );
	// on retourne le tableau des URLs d'images
	return images;
}

/**
 * Calcule le code HTML d'un slideshow en fonction de la liste des images
 * passées en paramètre et le retourne sous forme de chaîne de caractères.
 * @param {Array<string>} images tableau contenant les URLs des images à afficher
 * @returns string code HTML du slideshow
 */
function renderSlideshow( images ) {
	var slideshow = '';
	// pour chaque image on ajoute le code HTML correspondant
	images.forEach( function( image ) {
		slideshow += '<a href="'+image+'"> \
			<img src="'+image+'" /> \
		</a>';
	} );
	// on retourne le code complet
	return slideshow;
}

/**
 * Fait défiler le diaporama d'un cran.
 * La 1ère image va à la fin, la 2e devient 1ère, etc.
 * @param {Node} container Element HTML dans lequel se trouve le slideshow
 */
function slideNext( container ) {
	var firstSlide = container.querySelector( 'a' );
	container.appendChild( firstSlide );
}

// on initialise le diaporama
var slideshowContainer = document.querySelector( '.slideshow' ),
	images = getSlideshowImages( slideshowContainer );
if ( images.length ) {
	slideshowContainer.innerHTML = renderSlideshow( images );
}
// toutes les 2 secondes on fait défiler le diaporama
setInterval( function () {
	slideNext( slideshowContainer );
}, 2000 );
// on ajoute la classe CSS 'single' au slideshow
// pour n'afficher que la première image
slideshowContainer.classList.add( 'single' );