class PhotographerCard {
	constructor(photographer) {
		this.photographer = photographer;
	}

	getName() {
		return this.photographer.name;
	}

	getPortrait(image) {
		return `./assets/photographers/${image}`;
	}

	getPrice() {
		return `${this.photographer.price}€ / jour`;
	}

	getLikes(datas) {
		let likes = 0;
		const svg = `
			<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M9.125 18.35L7.85625 17.03C3.35 12.36 0.375 9.28 0.375 5.5C0.375 2.42 2.4925 0 5.1875 0C6.71 0 8.17125 0.81 9.125 2.09C10.0788 0.81 11.54 0 13.0625 0C15.7575 0 17.875 2.42 17.875 5.5C17.875 9.28 14.9 12.36 10.3938 17.04L9.125 18.35Z" fill="black"/>
			</svg>		
		`;
		datas.map((data) => (likes += data.likes));

		return likes + svg;
	}

	getPageLink(id) {
		return `./photographer.html?id=${id}`;
	}

	createPhotographerInformations() {
		const informations = `
			<div class="informations">
				<p class="name">${this.photographer.name}</p>
				<p class="location">${this.photographer.city + ", " + this.photographer.country}</p>
				<p class="slogan">${this.photographer.tagline}</p>
			</div>
		`;

		return informations;
	}

	createPhotographerPortrait() {
		const img = `
			<img src="${this.getPortrait(this.photographer.portrait)}">
		`;

		return img;
	}

	createPhotographerCardDOM() {
		const article = `
			<article>
				<a href="${this.getPageLink(this.photographer.id)}" aria-label="Profil de ${this.photographer.name}">
					<img src="${this.getPortrait(this.photographer.portrait)}" alt="${this.photographer.name}">
				</a>
				<h2>${this.photographer.name}</h2>
				<div class="photographer_informations" aria-label="Informations de ${this.photographer.name}" role="contentinfo">
					<p aria-label="Localisation de ${this.photographer.name}" class="location">${this.photographer.city + ", " + this.photographer.country}</p>
					<p aria-label="Slogan de ${this.photographer.name}" class="slogan">${this.photographer.tagline}</p>
					<p aria-label="Prix journalier de ${this.photographer.name}" class="price">${this.photographer.price + "€/jour"}</p>
				</div>
			</article>
		`;

		return article;
	}
}
