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
}
