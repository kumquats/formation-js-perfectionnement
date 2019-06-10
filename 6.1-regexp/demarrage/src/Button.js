import Component from "./Component";

export default class Button extends Component {
	constructor( label, attributes ){
		super( 'button', [label], attributes );
	}
}