class Photographer {
	constructor(data) {
		this._name = data.name;
		this._id = data.id;
		this._city = data.city;
		this._country = data.country;
		this._tagline = data.tagline;
		this._price = data.price;
		this._portrait = data.portrait;
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
				if (m.image) {
					HTML += m.createPhotoCard();
				} else if (m.video) {
					HTML += m.createVideoCard();
				} else {
					throw "Media type error";
				}
			}
		});

		return HTML;
	}
}
