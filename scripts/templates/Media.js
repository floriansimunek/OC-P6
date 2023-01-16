class Media {
	constructor({ id, photographerId, title, image = null, video = null, likes, date, price }) {
		this._id = id;
		this._photographerId = photographerId;
		this._title = title;
		this._image = image;
		this._video = video;
		this._likes = likes;
		this._date = date;
		this._price = price;
		this.svg = `<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.125 18.35L7.85625 17.03C3.35 12.36 0.375 9.28 0.375 5.5C0.375 2.42 2.4925 0 5.1875 0C6.71 0 8.17125 0.81 9.125 2.09C10.0788 0.81 11.54 0 13.0625 0C15.7575 0 17.875 2.42 17.875 5.5C17.875 9.28 14.9 12.36 10.3938 17.04L9.125 18.35Z" fill="#901c1c"/></svg>`;
		this._$modal = document.querySelector("#media_modal");
		this._modal = new MediaModal(this._id, this._$modal);
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
}