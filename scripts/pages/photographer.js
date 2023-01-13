class App {
	constructor() {
		this.mediasWrapper = document.querySelector(".photograph-medias-list");
		this.photographersApi = new Api("./data/photographers.json");
	}

	async main() {
		const mediasData = await this.photographersApi.getPhotographerMediasList();

		const medias = mediasData.map((media) => (media.hasOwnProperty("image") ? new MediaFactory(media, "image") : new MediaFactory(media, "video")));

		medias.forEach((media) => {
			const Template = new MediaCard(media);
			this.mediasWrapper.innerHTML += Template.createMediaCard();
		});
	}
}

const app = new App();
app.main();
