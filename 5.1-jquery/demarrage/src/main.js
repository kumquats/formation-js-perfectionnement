import renderSlideshow, { getSlideshowImages, slideNext } from "./slideshow.js";
import Component from "./Component.js";
import SearchForm from "./SearchForm.js";

// codez ici votre TP
console.log( 'Welcome to ', { title: 'JSTV', emoji: '📺' } );


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

// création du header
const c = new Component( 'h1', [
		'JS',
		new Component( 'em', [ 'TV' ] )
	],
	{ class: 'logo' }
);
document.querySelector( 'body > header' ).innerHTML = c.render();

// Formulaire de recherche
const searchForm = new SearchForm();
document.querySelector( '.searchForm' ).innerHTML = searchForm.render();