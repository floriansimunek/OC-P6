function photographerFactory(data) {
	const { city, country, id, name, portrait, price, tagline } = data;

	const picture = `assets/photographers/${portrait}`;

	function getUserCardDOM() {
		const article = document.createElement("article");

		const img = document.createElement("img");
		img.setAttribute("src", picture);
		img.setAttribute("alt", name);

		const photographerLink = document.createElement("a");
		photographerLink.setAttribute("href", "./photographer.html?id=" + id);
		photographerLink.setAttribute("aria-label", "Profil de " + name);
		photographerLink.appendChild(img);

		const h2 = document.createElement("h2");
		h2.textContent = name;

		const location = document.createElement("p");
		location.textContent = city + ", " + country;
		location.setAttribute("aria-label", "Localisation de " + name);
		location.classList.add("location");

		const slogan = document.createElement("p");
		slogan.textContent = tagline;
		slogan.setAttribute("aria-label", "Slogan de " + name);
		slogan.classList.add("slogan");

		const tjm = document.createElement("p");
		tjm.textContent = price + "€/jour";
		tjm.setAttribute("aria-label", "Prix journalier de " + name);
		tjm.classList.add("price");

		const photographerInformations = document.createElement("div");
		photographerInformations.classList.add("photographer_informations");
		photographerInformations.setAttribute("aria-label", "Informations de " + name);
		photographerInformations.setAttribute("role", "contentinfo");
		photographerInformations.appendChild(location);
		photographerInformations.appendChild(slogan);
		photographerInformations.appendChild(tjm);

		article.appendChild(photographerLink);
		article.appendChild(h2);
		article.appendChild(photographerInformations);

		return article;
	}
	return { name, picture, getUserCardDOM };
}
