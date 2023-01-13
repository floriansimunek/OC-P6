class MediaCard {
	constructor(media) {
		this.media = media;
	}

	createMediaCard() {
		if (this.media.image) {
			return `<img src="./assets/images/${this.media.image}">`;
		} else if (this.media.video) {
			return `
				<video controls>
					<source src="./assets/videos/${this.media.video}" type="video/mp4">
				</video>
			`;
		} else {
			throw "Media type error";
		}
	}
}
