import Component from "./Component";

class SearchResultRenderer extends Component {
	result;

	constructor( result ) {
		super();
		this.result = result;
	}

	render() {
		const { show: { id, image, name, summary, officialSite, premiered } } = this.result;
		return `<a href="${ officialSite || '#' }" class="searchResultRenderer">
					<header>
						${ image ? `<img src="${image.original}" class="thumbnail" />` : '' }
						${ summary ? `<div class="summary">${ summary }</div>` : '' }
					</header>
					<section class="infos">
						<h3>${name}</h3>
						${ premiered ? `<time datetime="${premiered}">${premiered}</time>` : '' }
					</section>
				</a>`;
	}
}

export default class SearchResults extends Component {
	#results;

	set results( value ) {
		this.#results = value;
		this.children = this.#results.map( result => new SearchResultRenderer( result ) );
	}

	constructor() {
		super( 'div' );
	}
}