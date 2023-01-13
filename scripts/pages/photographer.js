class App {
	constructor() {
		this.photosWrapper = document.querySelector(".photograph-photos-list");
		this.photographersApi = new Api("./data/photographers.json");
	}

	async main() {
		const photographerPhotosDatas = await this.photographersApi.getPhotographerPhotosList();

		photographerPhotosDatas
			.map((photo) => new Photo(photo))
			.forEach((photo) => {
				const Template = new PhotoCard(photo);
				this.photosWrapper.innerHTML += Template.createPhotoCard();
			});
	}
}

const app = new App();
app.main();
