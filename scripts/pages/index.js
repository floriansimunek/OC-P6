class App {
	constructor() {
		this.photographersWrapper = document.querySelector(".photographer_section");
		this.photographersApi = new Api("./data/photographers.json");
	}

	async main() {
		const photographersDatas = await this.photographersApi.getPhotographers();

		photographersDatas
			.map((photographer) => new Photographer(photographer))
			.forEach((photographer) => {
				const Template = new PhotographerCard(photographer);
				this.photographersWrapper.appendChild(Template.createPhotographerCard());
			});
	}
}

const app = new App();
app.main();
