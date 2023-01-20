class App {
	constructor() {
		this._$photographersBanner = null;
		this._$photographerMedias = null;
		this._$photographerInformations = null;
		this._$sorting = null;
		//
		this.Api = new Api("./data/photographers.json");
		this._data = [];
		this._Photographers = [];
		this._photographerId = new URL(document.location).searchParams.get("id");
	}

	async init() {
		this._data = await this.Api.getData();

		this._data.photographers.forEach((photographer, i) => {
			this._Photographers.push(new Photographer(photographer, this._data.media));
			this._Photographers[i].createCardDOM();
			if (this._photographerId == this._Photographers[i].id) {
				this._Photographers[i].createBannerDOM();
			}
		});

		// this.createPhotographer2(this._data.photographers);
		// if (this._photographerId) {
		// 	new MediaModal(this._$photographerMedias);
		// 	new ContactModal();
		// }
		// this.sortMedias("LIKES");

		// if (this._photographerId) {
		// 	this._$sorting = document.querySelector("#sorting");
		// 	this._$sorting.addEventListener("change", (e) => {
		// 		switch (e.target.value) {
		// 			case "date":
		// 				this.sortMedias("DATES");
		// 				break;
		// 			case "likes":
		// 				this.sortMedias("LIKES");
		// 				break;
		// 			case "title":
		// 				this.sortMedias("TITLES");
		// 				break;
		// 			default:
		// 				throw "Unknown sorter value";
		// 		}
		// 	});
		// }
	}

	// createMediasCards(photographers) {
	// 	this._$photographerMedias = document.querySelector(".photograph-medias-list");

	// 	if (this._$photographerMedias) {
	// 		photographers.filter((photographer) => {
	// 			if (photographer.id == this._photographerId) {
	// 				const p = new Photographer(photographer);
	// 				this._$photographerMedias.innerHTML = p.getMedias(this._data.media, this._photographerId);
	// 			}
	// 		});
	// 	}
	// }

	// sortMedias(type) {
	// 	if (type === "DATES") {
	// 		let $date = document.querySelectorAll("[data-date]");
	// 		let dateArray = Array.from($date);
	// 		let dateSorted = dateArray.sort(this.comparatorDates);

	// 		dateSorted.forEach((el) => {
	// 			this._$photographerMedias.appendChild(el);
	// 		});
	// 	} else if (type === "TITLES") {
	// 		let $title = document.querySelectorAll("[data-title]");
	// 		let titleArray = Array.from($title);
	// 		let titleSorted = titleArray.sort(this.comparatorTitles);

	// 		titleSorted.forEach((el) => {
	// 			this._$photographerMedias.appendChild(el);
	// 		});
	// 	} else if (type === "LIKES") {
	// 		let $likes = document.querySelectorAll("[data-likes]");
	// 		let likesArray = Array.from($likes);
	// 		let likesSorted = likesArray.sort(this.comparatorLikes);

	// 		likesSorted.forEach((el) => {
	// 			this._$photographerMedias.appendChild(el);
	// 		});
	// 	} else {
	// 		throw "Unknown sorting type";
	// 	}
	// }

	// comparatorDates(a, b) {
	// 	return new Date(b.dataset.date) - new Date(a.dataset.date);
	// }

	// comparatorTitles(a, b) {
	// 	return a.dataset.title.localeCompare(b.dataset.title);
	// }

	// comparatorLikes(a, b) {
	// 	return b.dataset.likes - a.dataset.likes;
	// }
}

const app = new App();
app.init();
