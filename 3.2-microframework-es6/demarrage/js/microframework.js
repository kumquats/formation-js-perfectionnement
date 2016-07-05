function _$( elementSelector ) {
	if( elementSelector )
	{
		this.elements = document.querySelectorAll( elementSelector );
		return this;
	}
	else
	{
		throw new Error( 'Aucun sélecteur fourni au microframework' );
	}
}

_$.prototype.hide = function(){
	for ( var i = 0, length = this.elements.length; i < length; i++ )
	{
		this.elements[ i ].style.display = 'none';
	}

	return this;
}

_$.prototype.show = function(){
	for ( var i = 0, length = this.elements.length; i < length; i++ )
	{
		this.elements[ i ].style.display = 'inherit';
	}

	return this;
}

_$.prototype.paint = function( color, backgroundColor ){
	for ( var i = 0, length = this.elements.length; i < length; i++ )
	{
		this.elements[ i ].style.color = color;
		this.elements[ i ].style.backgroundColor = backgroundColor;
	}

	return this;
}


_$.prototype.on = function( eventType, eventHandler )
{
	for ( var i = 0, length = this.elements.length; i < length; i++ )
	{
		this.elements[ i ].addEventListener( eventType, eventHandler );
	}

	return this;
}