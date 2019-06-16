import io from 'socket.io-client';
import Component from "./Component";
import { formatDate } from './utils';

class LiveSearchRenderer extends Component {
	search;
	date;
	isMe;

	constructor( search, date, isMe ) {
		super();
		this.search = search;
		this.date = date;
		this.isMe = isMe;
	}

	render() {
		return `<li>
			<a
				href="#"
				data-search="${this.search}"
				class="liveSearchRenderer ${this.isMe ? 'isMe' : ''}"
			>
				${this.search}
			</a>
			<time datetime="${this.date}">${formatDate( this.date )}</time>
		</li>`
	}
}

export default class LiveSearch extends Component {
	#searchHistory;
	socket;

	constructor() {
		super( 'ul' );
	}

	mount( element ) {
		super.mount( element );
		// connexion à socket.io
		this.socket = io( 'http://localhost' );
		this.socket.on( 'searchHistoryUpdate', searchHistory => {
			console.log( 'searchHistoryUpdate', searchHistory );
			this.searchHistory = searchHistory;
		} );
		// détection du click sur un élément
		this.element.on( 'click', '[data-search]', event => {
			event.preventDefault();
			const search = event.target.getAttribute( 'data-search' );
			// si le click provient d'un lien avec un attribut data-search
			// alors on signale le click à l'application
			if ( search && this.onItemClick ) {
				this.onItemClick( search );
			}
		} );
	}

	set searchHistory( value ) {
		this.#searchHistory = value;
		this.children = this.#searchHistory.map(
			( { search, date, socketId } ) => new LiveSearchRenderer( search, date, socketId == this.socket.id )
		);
		if ( this.element ) {
			this.element.html( this.render() );
		}
	}

	emitSearch( search ) {
		this.socket.emit( 'search', search );
	}
}