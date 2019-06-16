import $ from 'jquery';

export default class Player {
	#selector;
	#element;
	#video;
	#videoElement;
	#playButton;
	#pauseButton;
	#stopButton;
	#range;
	#closeButton;

	constructor( selector ) {
		this.#selector = selector;
		this.#element = $( selector );
		this.#video = this.#element.find( 'video' );
		this.#videoElement = this.#video.get(0);
		this.#playButton = this.#element.find( '.playButton' );
		this.#pauseButton = this.#element.find( '.pauseButton' );
		this.#stopButton = this.#element.find( '.stopButton' );
		this.#range = this.#element.find( 'input[type=range]' );
		this.#closeButton = this.#element.find( '.closeButton' );

		this.#video.on( 'timeupdate', event => this.updateRange( event ) );
		this.#playButton.on( 'click', event => {
			event.preventDefault();
			this.play();
		} );
		this.#pauseButton.click( event => {
			event.preventDefault();
			this.pause();
		} );
		this.#stopButton.click( event => {
			event.preventDefault();
			this.stop();
		} );
		this.#range.change( event => this.seek( this.#range.val() ) );
		this.#closeButton.click( event => {
			this.hide();
		});
	}
	show(){
		this.#element.addClass('visible');
	}
	hide(){
		this.pause();
		this.#element.removeClass('visible');
	}
	play(){
		this.#videoElement.play();
	}
	pause(){
		this.#videoElement.pause();
	}
	stop(){
		this.#videoElement.currentTime = 0;
		this.#videoElement.pause();
	}
	seek( value ) {
		const time = value * this.#videoElement.duration / 100;
		this.pause();
		this.#videoElement.currentTime = time;
	}
	updateRange( event ) {
		this.#range.val( 100 * this.#videoElement.currentTime / this.#videoElement.duration );
	}
}