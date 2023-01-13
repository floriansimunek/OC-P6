class Api {
	constructor(url) {
		this._url = url;
	}

	async getPhotographers() {
		let photographers = [];

		await fetch(this._url)
			.then((response) => response.json())
			.then((json) => {
				photographers = json.photographers;
			});

		return [...photographers];
	}

	async getPhotographer() {
		let photographer = [];
		let params = new URL(document.location).searchParams;
		let id = params.get("id");

		await fetch(this._url)
			.then((response) => response.json())
			.then((json) => {
				Object.keys(json.photographers).forEach((oneUser) => {
					if (json.photographers[oneUser].id == id) {
						photographer = json.photographers[oneUser];
					}
				});
			});

		return photographer;
	}

	async getPhotographerMediasList() {
		let medias = [];
		let params = new URL(document.location).searchParams;
		let id = params.get("id");

		await fetch(this._url)
			.then((response) => response.json())
			.then((json) => {
				json.media.forEach((media) => {
					if (media.photographerId == id) {
						medias = [...medias, media];
					}
				});
			});

		return medias;
	}
}
