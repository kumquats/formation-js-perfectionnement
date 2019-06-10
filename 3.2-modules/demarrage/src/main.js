// codez ici votre TP
console.log( 'Welcome to ', { title: 'JSTV', emoji: '📺' } );

/**
 * Analyse le contenu d'une balise et retourne un tableau d'URL d'images
 * si cette balise contient des `<span>`.
 * @param {Node} container Element HTML dans lequel rechercher
 * @returns Array<string> tableau des URLs d'images
 */
function getSlideshowImages( container ) {
	// on récupère tous les span contenus dans la balise
	// Array.from permet de convertir la NodeList en tableau
	// pratique pour bénéficier de plus de méthodes,
	// notamment la méthode .map()
	const spans = Array.from( container.querySelectorAll( 'span' ) );
	// Pour chaque span on récupère son contenu (innerHTML)
	// et on retourne le tableau des URLs d'images
	return spans.map( ( { innerHTML: src } ) => src );
}

/**
 * Calcule le code HTML d'un slideshow en fonction de la liste des images
 * passées en paramètre et le retourne sous forme de chaîne de caractères.
 * @param {Array<string>} images tableau contenant les URLs des images à afficher
 * @returns string code HTML du slideshow
 */
function renderSlideshow( images ) {
	let slideshow = '';
	// pour chaque image on ajoute le code HTML correspondant
	images.forEach( src => {
		slideshow += `<a href="${src}">
			<img src="${src}" />
		</a>`
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
	const firstSlide = container.querySelector( 'a' );
	container.appendChild( firstSlide );
}

// on initialise le diaporama
const slideshowContainer = document.querySelector( '.slideshow' ),
	images = getSlideshowImages( slideshowContainer );
if ( images.length ) {
	slideshowContainer.innerHTML = renderSlideshow( images );
}
// toutes les 2 secondes on fait défiler le diaporama
setInterval( () => slideNext( slideshowContainer ), 2000 );
// on ajoute la classe CSS 'single' au slideshow
// pour n'afficher que la première image
slideshowContainer.classList.add( 'single' );