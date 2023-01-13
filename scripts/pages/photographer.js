class App {
	constructor() {
		this.mediasWrapper = document.querySelector(".photograph-medias-list");
		this.photographerHeader = document.querySelector(".photograph-header");
		this.photographerPrice = document.querySelector("#price");
		this.photographerLikes = document.querySelector("#likes");
		this.photographersApi = new Api("./data/photographers.json");
	}

	async main() {
		const mediasData = await this.photographersApi.getPhotographerMediasList();
		const medias = mediasData.map((media) => (media.hasOwnProperty("image") ? new MediaFactory(media, "image") : new MediaFactory(media, "video")));

		medias.forEach((media) => {
			const Template = new MediaCard(media);
			this.mediasWrapper.innerHTML += Template.createMediaCard();
		});

		const photographerData = await this.photographersApi.getPhotographer();

		const photographerCard = new PhotographerCard(photographerData);

		this.photographerHeader.innerHTML += photographerCard.createPhotographerPortrait();
		this.photographerHeader.insertAdjacentHTML("afterbegin", photographerCard.createPhotographerInformations());

		this.photographerPrice.innerHTML = photographerCard.getPrice();

		this.photographerLikes.innerHTML = photographerCard.getLikes(mediasData);
	}
}

const app = new App();
app.main();
