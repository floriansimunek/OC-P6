class PhotoCard {
	constructor(photo) {
		this.photo = photo;
	}

	getLink(image) {
		return `./assets/images/${image}`;
	}

	createPhotoCard() {
		const img = document.createElement("img");
		img.setAttribute("src", this.getLink(this.photo.image));

		return img;
	}
}
