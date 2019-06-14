import $ from 'jquery';

export default class Player {
	#selector;
	#video;
	#videoElement;
	#playButton;
	#pauseButton;
	#stopButton;
	#range;

	constructor( selector ) {
		this.#selector = selector;
		const element = $( selector );
		this.#video = element.find( 'video' );
		this.#videoElement = this.#video.get(0);
		this.#playButton = element.find( '.playButton' );
		this.#pauseButton = element.find( '.pauseButton' );
		this.#stopButton = element.find( '.stopButton' );
		this.#range = element.find( 'input[type=range]' );

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