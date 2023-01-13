class PhotographerCard {
	constructor(photographer) {
		this.photographer = photographer;
	}

	getPortrait(image) {
		return `./assets/photographers/${image}`;
	}

	getPageLink(id) {
		return `./photographer.html?id=${id}`;
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
