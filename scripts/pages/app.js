class App {
	constructor() {
		this.api = new Api("./data/photographers.json");
		this.params = new URL(document.location).searchParams;
		this.data = [];
		this.photographerId = this.params.get("id");
		this.$photographersWrapper = null;
		this.$photographersBanner = null;
		this.$photographerMedias = null;
		this.$photographerInformations = null;
	}

	async init() {
		this.data = await this.api.getData();

		this.createPhotographersCard(this.data.photographers);
		this.createPhotographer(this.data.photographers);
	}

	// TODO: répétition avec autres fonctions, refactor ?
	createPhotographersCard(photographers) {
		this.$photographersWrapper = document.querySelector(".photographer_section");

		if (this.$photographersWrapper) {
			photographers.map((photographer) => {
				const p = new Photographer(photographer);
				this.$photographersWrapper.innerHTML += p.createCardDOM();
			});
		}
	}

	createPhotographer(photographers) {
		this.$photographersBanner = document.querySelector(".photograph-header");

		if (this.$photographersBanner) {
			photographers.filter((photographer) => {
				if (photographer.id == this.photographerId) {
					const p = new Photographer(photographer);
					this.$photographersBanner.innerHTML = p.createBannerDOM();
				}
			});
		}
		this.$photographerInformations = document.querySelector(".more-informations");

		if (this.$photographerInformations) {
			photographers.filter((photographer) => {
				if (photographer.id == this.photographerId) {
					const p = new Photographer(photographer);
					const likes = this.$photographerInformations.querySelector("#likes");
					const price = this.$photographerInformations.querySelector("#price");

					likes.innerHTML = p.getLikes(this.data.media, this.photographerId);
					price.innerHTML = p.price + "€/jour";
				}
			});
		}

		this.createMediasCards(this.data.photographers);
	}

	createMediasCards(photographers) {
		this.$photographerMedias = document.querySelector(".photograph-medias-list");

		if (this.$photographerMedias) {
			photographers.filter((photographer) => {
				if (photographer.id == this.photographerId) {
					const p = new Photographer(photographer);
					this.$photographerMedias.innerHTML = p.getMedias(this.data.media, this.photographerId);
				}
			});
		}
	}
}

const app = new App();
app.init();
