/**
 * Classe Component de base.
 * C'est de cette classe qu'héritent tous les composants de notre librairie.
 * @see Button
 */
export default class Component {
	tagName;
	children;
	attributes;
	element;

	/**
	 * Constructeur du composant.
	 * Permet de l'initialiser avec son tagName, une liste d'attributs et des enfants.
	 * @param  {String} tagName    Nom de la balise html à générer
	 * @param  {Array}  children   Liste des enfants du composant. Chaque enfant peut être un autre Component ou une String.
	 * @param  {Object} attributes Liste des attributs html à ajouter sous la forme de paires clé:valeur
	 */
	constructor( tagName = 'div', children = [], attributes = {} ) {
		// on utilise les valeurs par défaut d'ES6 pour les paramètres de la méthode
		this.tagName = tagName;
		this.attributes = attributes;
		this.children = children;
	}

	/**
	 * Retourne le code html correspondant au Component et à ses enfants.
	 * @return {String} code html généré
	 * @see #renderAttributes()
	 * @see #renderChildren()
 	*/
	render() {
		// on utilise une template string ES6
		// ce qui permet d'avoir un meilleur aperçu du rendu final
		let html =  `<${this.tagName} ${this.renderAttributes()}`;
		if ( this.children && this.children.length ) {
			html += `>
				${this.renderChildren()}
			</${this.tagName}>`
		} else {
			html += ` />`;
		}
		return html;
	}

	renderAttributes() {
		let attributesHtml = '';
		for ( const attribute in this.attributes ) {
			attributesHtml += ` ${attribute}="${this.attributes[ attribute ]}"`
		}
		return attributesHtml;
	}

	renderChildren() {
		let childrenHtml = '';
		// on utilise ici le forEach avec une Arrow Function
		// ce qui simplifie légèrement le code
		this.children.forEach( child => {
			// comme le composant supporte des enfants de type différents
			// (String ou Component) il faut faire le test ici
			// NB: instanceof Component retourne true également pour les classes filles
			childrenHtml += child instanceof Component ? child.render() : child;
		});
		return childrenHtml;
	}
	/**
	 la méthode permet de sauvegarder dans le composant
	 L'élément HTML auquel il est attaché.
	 Utile pour ajouter des écouteurs d'événements ou accéder au DOM une fois généré.
	 @param {Element} element Element HTML auquel le component est attaché
	 */
	mount( element ){
		this.element = element;
	}
}