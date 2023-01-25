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
		this._medias = medias.filter((media) => media.photographerId == this._idURL);
		this._likes = 0;
		this._$sorting = document.querySelector("#sorting");
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
				{ name: "aria-label", value: "Lien vers la page du photographe " + this.name },
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
				{ name: "aria-label", value: "Informations du photographe" },
			]);
			const location = createParagraph(this.city + ", " + this.country, [
				{ name: "class", value: "location" },
				{ name: "lang", value: "en" },
				{ name: "aria-label", value: "Localisation du photographe" },
			]);
			const slogan = createParagraph(this.tagline, [
				{ name: "class", value: "slogan" },
				{ name: "aria-label", value: "Slogan du photographe" },
			]);
			const price = createParagraph(this.price + "€/jour", [
				{ name: "class", value: "price" },
				{ name: "aria-label", value: "Prix journalier du photographe" },
			]);

			link.append(img, h2);
			div.append(location, slogan, price);
			article.append(link, div);
			$photographersWrapper.append(article);
		}
	}

	createBannerDOM() {
		const $photographersBanner = document.querySelector(".photograph-header");
		const $modalTitle = document.querySelector("#contact_modal_title");
		$modalTitle.innerHTML = "Contactez-moi<br />" + this.name;

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

			const img = createImage(this.picture, [
				{ name: "alt", value: "Photo portrait de " + this.name },
				{ name: "role", value: "img" },
				{ name: "tabindex", value: "0" },
			]);

			div.append(location, slogan);
			aside.append(h1, div);
			$photographersBanner.prepend(aside);
			$photographersBanner.append(img);
		}
	}

	createMediasCardDOM() {
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

	getLikes() {
		this._medias.forEach((media) => {
			this._likes += media.likes;
		});
	}

	displayInformationsDOM() {
		this.getLikes();
		const $moreInformations = document.querySelector(".more-informations");

		if ($moreInformations) {
			const likes = createBlock("div", [{ name: "id", value: "likes-counter" }]);
			const price = createBlock("div", [{ name: "id", value: "price" }]);

			const svg = createImage("./assets/icons/like_black.svg", [
				{ name: "class", value: "like-icon" },
				{ name: "alt", value: "like icon" },
				{ name: "role", value: "img" },
				{ name: "aria-hidden", value: "true" },
			]);

			const pLikes = createParagraph(this._likes, [{ name: "id", value: "likes" }]);
			const pPrice = createParagraph(this.price + "€ / jour", []);

			likes.append(pLikes, svg);
			price.append(pPrice);
			$moreInformations.append(likes, price);
		}
	}

	sortMedias(type) {
		sortElements(type);
		this._$sorting.addEventListener("change", (e) => {
			sortElements(e.target.value);
		});

		function sortElements(type) {
			const $mediasWrapper = document.querySelector(".photograph-medias-list");

			const comparators = {
				date: comparatorDates,
				title: comparatorTitles,
				likes: comparatorLikes,
			};

			if (!comparators[type]) {
				throw "Unknown sorting type";
			}

			let $elements = document.querySelectorAll(`[data-${type}]`);
			let elementsArray = Array.from($elements);
			let elementsSorted = elementsArray.sort(comparators[type]);

			elementsSorted.forEach((el) => {
				$mediasWrapper.appendChild(el);
			});
		}

		function comparatorDates(a, b) {
			return new Date(b.dataset.date) - new Date(a.dataset.date);
		}

		function comparatorTitles(a, b) {
			return a.dataset.title.localeCompare(b.dataset.title);
		}

		function comparatorLikes(a, b) {
			return b.dataset.likes - a.dataset.likes;
		}
	}
}
