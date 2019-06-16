import $ from 'jquery';
import renderSlideshow, { getSlideshowImages, slideNext } from "./slideshow.js";
import Component from "./Component.js";
import SearchForm from "./SearchForm.js";
import SearchResults from "./SearchResults.js";
import data from './data.json';

// codez ici votre TP
console.log( 'Welcome to ', { title: 'JSFLIX', emoji: '📺' } );


// on initialise le diaporama
const slideshowContainer = $( '.slideshow' ),
	images = getSlideshowImages( slideshowContainer );
if ( images.length ) {
	slideshowContainer.html( renderSlideshow( images ) );
}
// toutes les 2 secondes on fait défiler le diaporama
setInterval( () => slideNext( slideshowContainer ), 2000 );
// on ajoute la classe CSS 'single' au slideshow
// pour n'afficher que la première image
slideshowContainer.addClass( 'single' );

// création du header
const c = new Component( 'h1', [
		'JS',
		new Component( 'em', [ 'FLIX' ] )
	],
	{ class: 'logo' }
);
$( 'body > header > nav' ).html( c.render() );

// Formulaire de recherche
const searchForm = new SearchForm();
const searchFormContainer = $( '.searchForm' );
searchFormContainer.html( searchForm.render() );
searchForm.mount( searchFormContainer );
// au submit du formulaire de recherche on exécute la fonction suivante
searchForm.onSubmit = value => {
	console.log(`Recherche de la valeur : ${ value }` );
}

// Page de résultats
const searchResults = new SearchResults();
searchResults.results = data;
const searchResultsContainer = $( '.searchResults' );
searchResultsContainer.html( searchResults.render() );
