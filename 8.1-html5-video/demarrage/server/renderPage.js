import renderSlideshow from "../src/slideshow";
import SearchForm from "../src/SearchForm";
import SearchResults from "../src/SearchResults";

export default function renderPage() {
	const images  = ['images/got.gif', 'images/td.gif', 'images/twd.gif' ];
	const slideshow = renderSlideshow(images),
		searchForm = new SearchForm(),
		searchResults = new SearchResults();

	return `<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>JSFLIX - Toutes les infos sur les meilleures séries</title>
	<link rel="stylesheet" href="css/main.css">
	<link rel="stylesheet" href="css/header.css">
	<link rel="stylesheet" href="css/banner.css">
	<link rel="stylesheet" href="css/searchResults.css">
	<link rel="stylesheet" href="css/sidebar.css">
	<script src="build/main.bundle.js" defer></script>
</head>
<body>
	<header>
		<nav></nav>
		<section class="searchForm">${searchForm.render()}</section>
	</header>
	<section class="banner">
		<a href="#">Play</a>
	</section>
	<section class="searchResults">${searchResults.render()}</section>
	<aside class="sidebar">
		<section class="news"></section>
		<section class="slideshow">${slideshow}</section>
		<section class="liveSearch"></section>
	</aside>
	<footer>
		<div>Une (incroyable) création originale de <a href="http://kumquats.fr">kumquats</a> 2019</div>
		<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
	</footer>
</body>
</html>`;
}