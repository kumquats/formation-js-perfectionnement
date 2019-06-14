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
	<title>JSTV - Toutes les infos sur les meilleures séries</title>
	<link rel="stylesheet" href="css/main.css">
	<script src="build/main.bundle.js" defer></script>
</head>
<body>
	<header></header>
	<section class="searchForm">${searchForm.render()}</section>
	<section class="searchResults">${searchResults.render()}</section>
	<aside class="sidebar">
		<section class="news"></section>
		<section class="player">
			<video>
				<source src="video.mp4" type="video/mp4"/>
			</video>
			<nav class="player-controls">
				<button class="playButton">play</button>
				<button class="pauseButton">pause</button>
				<button class="stopButton">stop</button>
				<input type="range" max="100" min="0" step="1" />
			</nav>
		</section>
		<section class="slideshow">${slideshow}</section>
		<section class="liveSearch"></section>
	</aside>
	<footer>
		<div>Une (incroyable) création originale de <a href="http://kumquats.fr">kumquats</a> 2019</div>
		<div>Icons made by <a href="https://www.freepik.com/?__hstc=57440181.51347cd8618843e7a416f4ec9424fd24.1560114189662.1560114189662.1560114189662.1&__hssc=57440181.1.1560114189662&__hsfp=266348883" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
	</footer>
</body>
</html>`;
}