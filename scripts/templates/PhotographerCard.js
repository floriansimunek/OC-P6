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

	createPhotographerCard() {
		const img = document.createElement("img");
		img.setAttribute("src", this.getPortrait(this.photographer.portrait));
		img.setAttribute("alt", this.photographer.name);

		const imgLink = document.createElement("a");
		imgLink.setAttribute("href", this.getPageLink(this.photographer.id));
		imgLink.setAttribute("aria-label", "Profil de " + this.photographer.name);
		imgLink.appendChild(img);

		const h2 = document.createElement("h2");
		h2.textContent = this.photographer.name;

		const location = document.createElement("p");
		location.textContent = this.photographer.city + ", " + this.photographer.country;
		location.setAttribute("aria-label", "Localisation de " + this.photographer.name);
		location.classList.add("location");

		const slogan = document.createElement("p");
		slogan.textContent = this.photographer.tagline;
		slogan.setAttribute("aria-label", "Slogan de " + this.photographer.name);
		slogan.classList.add("slogan");

		const tjm = document.createElement("p");
		tjm.textContent = this.photographer.price + "€/jour";
		tjm.setAttribute("aria-label", "Prix journalier de " + this.photographer.name);
		tjm.classList.add("price");

		const informations = document.createElement("div");
		informations.classList.add("photographer_informations");
		informations.setAttribute("aria-label", "Informations de " + this.photographer.name);
		informations.setAttribute("role", "contentinfo");
		informations.appendChild(location);
		informations.appendChild(slogan);
		informations.appendChild(tjm);

		const article = document.createElement("article");
		article.appendChild(imgLink);
		article.appendChild(h2);
		article.appendChild(informations);

		return article;
	}
}
