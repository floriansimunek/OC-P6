class App {
	constructor() {
		this.Api = new Api("./data/photographers.json");
		this._params = new URL(document.location).searchParams;
		this._data = [];
		this._photographerId = this._params.get("id");
		this._$photographersWrapper = null;
		this._$photographersBanner = null;
		this._$photographerMedias = null;
		this._$photographerInformations = null;
		this._$sorting = null;
	}

	async init() {
		this._data = await this.Api.getData();

		this.createPhotographersCard(this._data.photographers);
		this.createPhotographer(this._data.photographers);
		if (this._photographerId) {
			new MediaModal(this._$photographerMedias);
			new ContactModal();
		}
		this.sortMedias("LIKES");

		if (this._photographerId) {
			this._$sorting = document.querySelector("#sorting");
			this._$sorting.addEventListener("change", (e) => {
				switch (e.target.value) {
					case "date":
						this.sortMedias("DATES");
						break;
					case "likes":
						this.sortMedias("LIKES");
						break;
					case "title":
						this.sortMedias("TITLES");
						break;
					default:
						throw "Unknown sorter value";
				}
			});
		}
	}

	// TODO: répétition avec autres fonctions, refactor ?
	createPhotographersCard(photographers) {
		this._$photographersWrapper = document.querySelector(".photographer_section");

		if (this._$photographersWrapper) {
			photographers.map((photographer) => {
				const p = new Photographer(photographer);
				this._$photographersWrapper.innerHTML += p.createCardDOM();
			});
		}
	}

	createPhotographer(photographers) {
		this._$photographersBanner = document.querySelector(".photograph-header");

		if (this._$photographersBanner) {
			photographers.filter((photographer) => {
				if (photographer.id == this._photographerId) {
					const p = new Photographer(photographer);
					this._$photographersBanner.innerHTML = p.createBannerDOM();
				}
			});
		}
		this._$photographerInformations = document.querySelector(".more-informations");

		if (this._$photographerInformations) {
			photographers.filter((photographer) => {
				if (photographer.id == this._photographerId) {
					const p = new Photographer(photographer);
					const likes = this._$photographerInformations.querySelector("#likes");
					const price = this._$photographerInformations.querySelector("#price");

					document.querySelector("#contact_modal #contact_modal_title").innerHTML += p.name;
					likes.innerHTML = p.getLikes(this._data.media);
					price.innerHTML = p.price + "€ / jour";
				}
			});
		}

		this.createMediasCards(this._data.photographers);
	}

	createMediasCards(photographers) {
		this._$photographerMedias = document.querySelector(".photograph-medias-list");

		if (this._$photographerMedias) {
			photographers.filter((photographer) => {
				if (photographer.id == this._photographerId) {
					const p = new Photographer(photographer);
					this._$photographerMedias.innerHTML = p.getMedias(this._data.media, this._photographerId);
				}
			});
		}
	}

	sortMedias(type) {
		if (type === "DATES") {
			let $date = document.querySelectorAll("[data-date]");
			let dateArray = Array.from($date);
			let dateSorted = dateArray.sort(this.comparatorDates);

			dateSorted.forEach((el) => {
				this._$photographerMedias.appendChild(el);
			});
		} else if (type === "TITLES") {
			let $title = document.querySelectorAll("[data-title]");
			let titleArray = Array.from($title);
			let titleSorted = titleArray.sort(this.comparatorTitles);

			titleSorted.forEach((el) => {
				this._$photographerMedias.appendChild(el);
			});
		} else if (type === "LIKES") {
			let $likes = document.querySelectorAll("[data-likes]");
			let likesArray = Array.from($likes);
			let likesSorted = likesArray.sort(this.comparatorLikes);

			likesSorted.forEach((el) => {
				this._$photographerMedias.appendChild(el);
			});
		} else {
			throw "Unknown sorting type";
		}
	}

	comparatorDates(a, b) {
		return new Date(b.dataset.date) - new Date(a.dataset.date);
	}

	comparatorTitles(a, b) {
		return a.dataset.title.localeCompare(b.dataset.title);
	}

	comparatorLikes(a, b) {
		return b.dataset.likes - a.dataset.likes;
	}
}

const app = new App();
app.init();
