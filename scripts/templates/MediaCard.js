class MediaCard {
	constructor(media) {
		this.media = media;
	}

	createMediaCard() {
		const svg = `
			<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M9.125 18.35L7.85625 17.03C3.35 12.36 0.375 9.28 0.375 5.5C0.375 2.42 2.4925 0 5.1875 0C6.71 0 8.17125 0.81 9.125 2.09C10.0788 0.81 11.54 0 13.0625 0C15.7575 0 17.875 2.42 17.875 5.5C17.875 9.28 14.9 12.36 10.3938 17.04L9.125 18.35Z" fill="#901c1c"/>
			</svg>		
		`;

		if (this.media.image) {
			return `
				<div class="medias">
					<img src="./assets/images/${this.media.image}">
					<div class="media-informations">
						<p class="title">${this.media.title}</p>
						<p class="likes">${this.media.likes + svg}</p>
					</div>
				</div>
			`;
		} else if (this.media.video) {
			return `
				<div class="medias">
					<video>
						<source src="./assets/videos/${this.media.video}" type="video/mp4">
					</video>
					<div class="media-informations">
						<p class="title">${this.media.title}</p>
						<p class="likes">${this.media.likes + svg}</p>
					</div>
				</div>
			`;
		} else {
			throw "Media type error";
		}
	}
}
