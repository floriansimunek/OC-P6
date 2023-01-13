class Video {
	constructor(data) {
		this._id = data.id;
		this._photographerId = data.photographerId;
		this._title = data.title;
		this._video = data.video;
		this._likes = data.likes;
		this._date = data.date;
		this._price = data.price;
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
		return `./assets/videos/${this._video}`;
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

	createVideoCard() {
		return `
            <div class="medias">
                <video class="media">
                    <source src="${this.url}" type="video/mp4">
                </video>
                <div class="media-informations">
                    <p class="title">${this.title}</p>
                    <p class="likes">${this.likes}</p>
                </div>
            </div>
        `;
	}
}
