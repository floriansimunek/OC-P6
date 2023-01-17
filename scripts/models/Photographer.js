class Photographer {
	constructor(data) {
		this._name = data.name;
		this._id = data.id;
		this._city = data.city;
		this._country = data.country;
		this._tagline = data.tagline;
		this._price = data.price;
		this._portrait = data.portrait;
		this.svg = `
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.125 18.35L7.85625 17.03C3.35 12.36 0.375 9.28 0.375 5.5C0.375 2.42 2.4925 0 5.1875 0C6.71 0 8.17125 0.81 9.125 2.09C10.0788 0.81 11.54 0 13.0625 0C15.7575 0 17.875 2.42 17.875 5.5C17.875 9.28 14.9 12.36 10.3938 17.04L9.125 18.35Z" fill="black"/>
            </svg>
        `;
	}

	get name() {
		return this._name;
	}

	get id() {
		return this._id;
	}

	get city() {
		return this._city;
	}

	get country() {
		return this._country;
	}

	get tagline() {
		return this._tagline;
	}

	get price() {
		return this._price;
	}

	get portrait() {
		return this._portrait;
	}

	get picture() {
		return `assets/images/photographers/${this._portrait}`;
	}

	get page() {
		return `./photographer.html?id=${this.id}`;
	}

	createCardDOM() {
		const article = `
            <article>
                <a href="${this.page}">
                    <img src="${this.picture}" alt="${this.name}">
                </a>
                <h2>${this.name}</h2>
                <div class="photographer_informations">
                    <p class="location">${this.city}, ${this.country}</p>
                    <p class="slogan">${this.tagline}</p>
                    <p class="price">${this.price}€/jour</p>
                </div>
            </article>
        `;

		return article;
	}

	createBannerDOM() {
		const banner = `
            <div class="informations">
                <p class="name">${this.name}</p>
                <p class="location">${this.city}, ${this.country}</p>
                <p class="slogan">${this.tagline}</p>
            </div>
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            <img src="${this.picture}">
        `;

		return banner;
	}

	getMedias(medias, id) {
		let HTML = "";

		medias.filter((media) => {
			if (media.photographerId == id) {
				const m = media.hasOwnProperty("image") ? new MediaFactory(media, "image") : new MediaFactory(media, "video");
				if (m._image) {
					HTML += m.createPhotoCard();
				} else if (m._video) {
					HTML += m.createVideoCard();
				} else {
					throw "Media type error";
				}
			}
		});

		return HTML;
	}

	getLikes(medias) {
		let likes = 0;

		medias.filter((media) => {
			if (media.photographerId == this.id) {
				likes += media.likes;
			}
		});

		return likes + this.svg;
	}
}
