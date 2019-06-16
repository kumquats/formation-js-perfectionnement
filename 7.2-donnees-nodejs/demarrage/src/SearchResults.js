import Component from "./Component";
import { formatDate } from "./utils";

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
						${ premiered ? `<time datetime="${premiered}">${formatDate(premiered)}</time>` : '' }
					</section>
				</a>`;
	}
}

export default class SearchResults extends Component {
	#results;

	set results( value ) {
		this.#results = value;
		this.children = this.#results.map( result => new SearchResultRenderer( result ) );
		if ( this.element ){
			this.element.html( this.render() );
		}
	}

	constructor() {
		super( 'div' );
	}
}