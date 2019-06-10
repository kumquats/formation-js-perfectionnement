import Component from "./Component";
import Button from "./Button";

export default class SearchForm extends Component {
	constructor() {
		super( 'form', [
			new Component( 'input', null, { type: 'search', name: 'search' } ),
			new Button( 'chercher' )
		] );
	}
}