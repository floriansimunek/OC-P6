class App {
	constructor() {
		this._Api = new Api("./data/photographers.json");
		this._data = [];
		this._Photographers = [];
		this._idURL = new URL(document.location).searchParams.get("id");
		if (this._idURL) {
			this._contactModal = new ModalFactory("contact");
			this._mediaModal = new ModalFactory("media");
		}
	}

	async init() {
		await this.getDatas();

		this._data.photographers.forEach((photographer, i) => {
			this._Photographers.push(new Photographer(photographer, this._data.media));
			if (!this._idURL) {
				this._Photographers[i].createCardDOM();
			}
			if (this._idURL && this._idURL == this._Photographers[i].id) {
				this._Photographers[i].createBannerDOM();
				this._Photographers[i].createMediasCardDOM();
				this._Photographers[i].displayInformationsDOM();
				this._Photographers[i].sortMedias("LIKES");
				this._contactModal.init();
				this._mediaModal.init();
			}
		});
	}

	async getDatas() {
		try {
			this._data = await this._Api.getData();
		} catch (error) {
			console.error(error);
		}
	}
}

const app = new App();
app.init();
