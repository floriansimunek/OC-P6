class PhotoCard {
	constructor(photo) {
		this.photo = photo;
	}

	getLink(image) {
		return `./assets/images/${image}`;
	}

	createPhotoCard() {
		const img = `<img src="${this.getLink(this.photo.image)}">`;

		return img;
	}
}
