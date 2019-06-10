import Component from "./Component";
import Button from "./Button";

export default class SearchForm extends Component {
	#form;
	#input;
	onSubmit;

	constructor() {
		super( 'form', [
			new Component( 'input', null, { type: 'search', name: 'search' } ),
			new Button( 'chercher' )
		] );
	}

	mount( element ) {
		super.mount( element );
		// on récupère une référence vers la balise `<form>`
		this.#form = element.find( 'form' );
		// on écoute le submit
		this.#form.submit( event => this.#handleSubmit( event ) );
		// on récupère une référence vers le champ de saisie
		this.#input = this.#form.find( 'input[name=search]' );
		// on met le focus dans le champ de saisie
		// pour permettre à l'utilisateur de démarrer une recherche immédiatement
		this.#input.focus();
	}

	/**
	 * Méthode déclenchée au submit du formulaire.
	 * @private
	 * @param {Event} event événement submit déclenché par le form
	 * @see #submit()
	 */
	#handleSubmit( event ) {
		event.preventDefault();
		this.submit();
	}

	/**
	 * Méthode qui permet de soumettre le formulaire.
	 * récupère la valeur saisie par l'utilisateur et l'envoie au callback onSubmit.
	 * @see #handleSubmit()
	 */
	submit() {
		const searchValue = this.#input.val();
		if ( this.onSubmit ) {
			this.onSubmit( searchValue );
		}
	}
}