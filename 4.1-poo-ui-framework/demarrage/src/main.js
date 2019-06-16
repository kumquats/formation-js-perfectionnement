import renderSlideshow, { getSlideshowImages, slideNext } from "./slideshow.js";

// codez ici votre TP
console.log( 'Welcome to ', { title: 'JSFLIX', emoji: '📺' } );


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