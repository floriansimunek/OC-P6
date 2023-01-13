class App {
	constructor() {
		this.api = new Api("./data/photographers.json");
		this.photographers = [];
		this.$photographersWrapper = null;
	}

	async init() {
		this.photographers = await this.api.getPhotographers();

		this.createPhotographerCard(this.photographers);
	}

	createPhotographerCard(photographers) {
		this.$photographersWrapper = document.querySelector(".photographer_section");

		if (this.$photographersWrapper) {
			photographers.map((photographer) => {
				const p = new Photographer(photographer);
				this.$photographersWrapper.innerHTML += p.createCardDOM();
			});
		}
	}
}

const app = new App();
app.init();
