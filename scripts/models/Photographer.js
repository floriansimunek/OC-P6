class Photographer {
	constructor(photographers, medias) {
		this._name = photographers.name;
		this._id = photographers.id;
		this._city = photographers.city;
		this._country = photographers.country;
		this._tagline = photographers.tagline;
		this._price = photographers.price;
		this._portrait = photographers.portrait;
		this._idURL = new URL(document.location).searchParams.get("id");
		this.svg = `
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M9.125 18.35L7.85625 17.03C3.35 12.36 0.375 9.28 0.375 5.5C0.375 2.42 2.4925 0 5.1875 0C6.71 0 8.17125 0.81 9.125 2.09C10.0788 0.81 11.54 0 13.0625 0C15.7575 0 17.875 2.42 17.875 5.5C17.875 9.28 14.9 12.36 10.3938 17.04L9.125 18.35Z" fill="black"/>
            </svg>
        `;
		this._medias = medias.filter((media) => media.photographerId == this._idURL);
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
		const $photographersWrapper = document.querySelector(".photographer_section");

		if ($photographersWrapper) {
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

			const div = createBlock("div", [
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
			$photographersWrapper.append(article);
		}
	}

	createBannerDOM() {
		const $photographersBanner = document.querySelector(".photograph-header");

		if ($photographersBanner && this._idURL == this.id) {
			const aside = createBlock("aside", [{ name: "class", value: "informations" }]);
			const h1 = createHeading(1, this.name, [
				{ name: "class", value: "name" },
				{ name: "tabindex", value: "0" },
			]);

			const div = createBlock("div", [{ name: "tabindex", value: "0" }]);
			const location = createParagraph(this.city + ", " + this.country, [
				{ name: "class", value: "location" },
				{ name: "aria-label", value: "Photographer location" },
			]);
			const slogan = createParagraph(this.tagline, [
				{ name: "class", value: "slogan" },
				{ name: "aria-label", value: "Photographer tagline" },
			]);

			const button = createButton("Contactez-moi", [
				{ name: "class", value: "contact_button" },
			]);
			const img = createImage(this.picture, [
				{ name: "alt", value: "Photo portrait de " + this.name },
				{ name: "role", value: "img" },
			]);

			div.append(location, slogan);
			aside.append(h1, div);
			$photographersBanner.append(aside, button, img);

			this.getMedias();
		}
	}

	getMedias() {
		this._medias.forEach((media) => {
			const m = media.hasOwnProperty("image")
				? new MediaFactory(media, "image")
				: new MediaFactory(media, "video");

			if (m.image) {
				m.createCardDOM();
			} else if (m.video) {
				m.createCardDOM();
			} else {
				throw "Media type error";
			}
		});
	}

	// getLikes(medias) {
	// 	let likes = 0;

	// 	medias.filter((media) => {
	// 		if (media.photographerId == this.id) {
	// 			likes += media.likes;
	// 		}
	// 	});

	// 	return likes + this.svg;
	// }
}
