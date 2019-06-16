import $ from 'jquery';
import renderSlideshow, { getSlideshowImages, slideNext } from "./slideshow.js";
import Component from "./Component.js";
import SearchForm from "./SearchForm.js";
import SearchResults from "./SearchResults.js";
import LiveSearch from './LiveSearch.js';
import Player from './Player.js';

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
	console.log( `Recherche de la valeur : ${value}` );
	// on lance la requête AJAX vers l'API tvmaze
	search( value );
	// on envoie la recherche au serveur socket.io
	liveSearch.emitSearch( value );
}

// Page de résultats
const searchResults = new SearchResults();
searchResults.results = [];
const searchResultsContainer = $( '.searchResults' );
searchResultsContainer.html( searchResults.render() );
searchResults.mount( searchResultsContainer );


// Chargement AJAX news.html
function displayNews( html ) {
	$( '.news' ).html( html );
}
fetch( './news.html' )
	.then( response => response.text() )
	.then( displayNews );

// Chargement AJAX des résultats de recherche
function search( value ) {
	// on sauvegarde le texte recherché en LocalStorage
	localStorage.setItem( 'lastSearch', value );
	// on met à jour le formulaire de recherche
	// (utile au chargement de la page si l'on vient de restaurer la recherche depuis le localStorage)
	searchForm.search = value;
	// on lance l'appel AJAX
	fetch( `http://api.tvmaze.com/search/shows?q=${encodeURIComponent( value )}` )
		.then( response => response.json() )
		.then( data => {
			// une fois les résultats reçus, on les envoie au searchResults
			// pour les afficher
			searchResults.results = data;
		} );
}

// restauration de la recherche depuis le localStorage
const lastSearch = localStorage.getItem( 'lastSearch' );
if ( lastSearch ) {
	search( lastSearch );
}

// gestion de la liste des recherches
const liveSearchContainer = $( '.liveSearch' );
const liveSearch = new LiveSearch();
liveSearch.onItemClick = search;
liveSearchContainer.html( liveSearch.render() );
liveSearch.mount( liveSearchContainer );

// Player video
const player = new Player( '.player' );
$('.banner a').click( event => {
	event.preventDefault();
	player.show();
 });