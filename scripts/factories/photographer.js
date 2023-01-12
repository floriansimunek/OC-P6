function photographerFactory(data) {
	const { city, country, id, name, portrait, price, tagline } = data;

	const picture = `assets/photographers/${portrait}`;

	function getUserCardDOM() {
		const article = document.createElement("article");

		const img = document.createElement("img");
		img.setAttribute("src", picture);
		img.setAttribute("alt", name);
		img.setAttribute("aria-label", "Voir le profil de " + name);

		const h2 = document.createElement("h2");
		h2.textContent = name;

		const location = document.createElement("p");
		location.textContent = city + ", " + country;
		location.classList.add("location");

		const slogan = document.createElement("p");
		slogan.textContent = tagline;
		slogan.classList.add("slogan");

		const tjm = document.createElement("p");
		tjm.textContent = price + "€/jour";
		tjm.classList.add("price");

		article.appendChild(img);
		article.appendChild(h2);
		article.appendChild(location);
		article.appendChild(slogan);
		article.appendChild(tjm);

		return article;
	}
	return { name, picture, getUserCardDOM };
}
