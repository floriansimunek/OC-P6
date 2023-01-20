class Media {
	constructor(data) {
		this._id = data.id;
		this._photographerId = data.photographerId;
		this._title = data.title;
		this._image = data.image;
		this._video = data.video;
		this._likes = data.likes;
		this._date = data.date;
		this._price = data.price;
		// window.addEventListener("load", () => {
		// 	this.init();
		// });
	}

	get id() {
		return this._id;
	}

	get photographerId() {
		return this._photographerId;
	}

	get title() {
		return this._title;
	}

	get image() {
		return this._image;
	}

	get video() {
		return this._video;
	}

	get url() {
		if (this._image) {
			return `./assets/images/${this._image}`;
		} else if (this._video) {
			return `./assets/videos/${this._video}`;
		} else {
			throw "Unknown media type";
		}
	}

	get likes() {
		return this._likes;
	}

	get date() {
		return this._date;
	}

	get price() {
		return this._price;
	}

	createCardDOM() {
		if (this.image) {
			this.createPhotoCard();
		} else if (this.video) {
			this.createVideoCard();
		} else {
			throw "Unknown media type";
		}
	}

	// init() {
	// 	this._$mediaLikes = document.querySelector(`#media_${this.id} .likes`);

	// 	this._$mediaLikes.addEventListener("click", () => {
	// 		this.svg = this.svg.replace("black", "#901c1c");
	// 		if (this._$mediaLikes.classList.contains("liked")) {
	// 			this._$mediaLikes.classList.remove("liked");
	// 			this.dislike();
	// 		} else {
	// 			this._$mediaLikes.classList.add("liked");
	// 			this.like();
	// 		}
	// 	});
	// }

	// like() {
	// 	this._likes++;
	// 	this._$mediaLikes.innerHTML = this._likes + this.svg;
	// 	this.updateLikes("INC");
	// }

	// dislike() {
	// 	this._likes--;
	// 	this._$mediaLikes.innerHTML = this._likes + this.svg;
	// 	this.updateLikes("DEC");
	// }

	// updateLikes(action) {
	// 	this._$likes = document.querySelector("#likes");
	// 	this.svg = this.svg.replace("#901c1c", "black");

	// 	if (action === "INC") {
	// 		let n = parseInt(this._$likes.textContent);
	// 		n++;

	// 		this._$likes.innerHTML = n + this.svg;
	// 	} else if (action === "DEC") {
	// 		let n = parseInt(this._$likes.textContent);
	// 		n--;
	// 		this._$likes.innerHTML = n + this.svg;
	// 	} else {
	// 		throw "Unknown action";
	// 	}
	// }
}
