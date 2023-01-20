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
		this.init();
		this._$mediaBlock = null;
		this._liked = false;
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
			this._$mediasBlock = this.createPhotoCard();
		} else if (this.video) {
			this._$mediasBlock = this.createVideoCard();
		} else {
			throw "Unknown media type";
		}
	}

	init() {
		window.addEventListener("load", () => {
			this._$mediaBlock = document.querySelector("#media_" + this.id);
			const $likeIcon = this._$mediaBlock.querySelector(".like-icon");

			$likeIcon.addEventListener("click", () => {
				if (this._liked) {
					this.dislike();
				} else {
					this.like();
				}
			});
		});
	}

	like() {
		this._liked = true;
		this._likes++;

		const $likesCounter = this._$mediaBlock.querySelector(".likes");
		$likesCounter.textContent = this._likes;
		this.updateLikes("INC");
	}

	dislike() {
		this._liked = false;
		this._likes--;

		const $likesCounter = this._$mediaBlock.querySelector(".likes");
		$likesCounter.textContent = this._likes;
		this.updateLikes("DEC");
	}

	updateLikes(type) {
		let $photographerLikes = document.querySelector("#likes");
		let likes = parseInt($photographerLikes.textContent);

		if (type === "INC") {
			likes++;
			$photographerLikes.textContent = likes;
		} else if (type === "DEC") {
			likes--;
			$photographerLikes.textContent = likes;
		} else {
			throw "Unknown like type";
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
