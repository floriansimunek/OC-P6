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
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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

	init() {
		this.createCardDOM();
		this.createBannerDOM();
	}

	createCardDOM() {
		const $photographersWrapper = document.querySelector(".photographer_section");

		const article = document.createElement("article");
		const link = createAnchor(this.page, [
			{ name: "aria-label", value: "Link to the photographer page" },
		]);
		const img = createImage(this.picture, [
			{ name: "alt", value: "Photo portrait de " + this.name },
			{ name: "role", value: "img" },
		]);
		const h2 = createHeading(2, this.name, [
			{ name: "aria-label", value: "Photographer name" },
		]);
		const div = createDiv([
			{ name: "class", value: "photographer_informations" },
			{ name: "tabindex", value: "0" },
			{ name: "aria-label", value: "Photographer informations" },
		]);
		const location = createParagraph(this.city + ", " + this.country, [
			{ name: "class", value: "location" },
			{ name: "aria-label", value: "Photographer location" },
		]);
		const slogan = createParagraph(this.tagline, [
			{ name: "class", value: "slogan" },
			{ name: "aria-label", value: "Photographer tagline" },
		]);
		const price = createParagraph(this.price + "€/jour", [
			{ name: "class", value: "price" },
			{ name: "aria-label", value: "Photographer price" },
		]);

		link.append(img, h2);
		div.append(location, slogan, price);
		article.append(link, div);

		if ($photographersWrapper) $photographersWrapper.append(article);
	}

	// createPhotographer2(photographers) {
	// 	this._$photographersBanner = document.querySelector(".photograph-header");

	// 	if (this._$photographersBanner) {
	// 		photographers.filter((photographer) => {
	// 			if (photographer.id == this._photographerId) {
	// 				const p = new Photographer(photographer);
	// 				this._$photographersBanner.innerHTML = p.createBannerDOM();
	// 			}
	// 		});
	// 	}

	// 	this._$photographerInformations = document.querySelector(".more-informations");

	// 	if (this._$photographerInformations) {
	// 		photographers.filter((photographer) => {
	// 			if (photographer.id == this._photographerId) {
	// 				const p = new Photographer(photographer);
	// 				const likes = this._$photographerInformations.querySelector("#likes");
	// 				const price = this._$photographerInformations.querySelector("#price");

	// 				document.querySelector("#contact_modal #contact_modal_title").innerHTML += p.name;
	// 				likes.innerHTML = p.getLikes(this._data.media);
	// 				price.innerHTML = p.price + "€ / jour";
	// 			}
	// 		});
	// 	}

	// 	this.createMediasCards(this._data.photographers);
	// }

	createBannerDOM() {
		const banner = `
            <aside class="informations">
                <h1 class="name" tabindex="0">${this.name}</h1>
				<div tabindex="0">
					<p class="location">${this.city}, ${this.country}</p>
					<p class="slogan">${this.tagline}</p>
				</div>
            </aside>
            <button class="contact_button">Contactez-moi</button>
            <img tabindex="0" src="${this.picture}" alt="Portrait de ${this.name}">
        `;

		return banner;
	}

	getMedias(medias, id) {
		let HTML = "";

		medias.filter((media) => {
			if (media.photographerId == id) {
				const m = media.hasOwnProperty("image")
					? new MediaFactory(media, "image")
					: new MediaFactory(media, "video");
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
