class App {
	constructor() {
		this.api = new Api("./data/photographers.json");
		this.params = new URL(document.location).searchParams;
		this.data = [];
		this.photographerId = this.params.get("id");
		this.$photographersWrapper = null;
		this.$photographersBanner = null;
		this.$photographerMedias = null;
	}

	async init() {
		this.data = await this.api.getData();

		this.createPhotographersCard(this.data.photographers);
		this.createPhotographerBanner(this.data.photographers);
		this.createPhotographerMedias(this.data.photographers);
	}

	createPhotographersCard(photographers) {
		this.$photographersWrapper = document.querySelector(".photographer_section");

		if (this.$photographersWrapper) {
			photographers.map((photographer) => {
				const p = new Photographer(photographer);
				this.$photographersWrapper.innerHTML += p.createCardDOM();
			});
		}
	}

	createPhotographerBanner(photographers) {
		this.$photographersBanner = document.querySelector(".photograph-header");

		if (this.$photographersBanner) {
			photographers.filter((photographer) => {
				if (photographer.id == this.photographerId) {
					const p = new Photographer(photographer);
					this.$photographersBanner.innerHTML = p.createBannerDOM();
				}
			});
		}
	}

	createPhotographerMedias(photographers) {
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
