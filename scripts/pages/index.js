async function getPhotographers() {
	let photographers = [];

	await fetch("./data/photographers.json")
		.then((response) => response.json())
		.then((json) => {
			photographers = json.photographers;
		});

	return {
		photographers: [...photographers],
	};
}

async function displayData(photographers) {
	const photographersSection = document.querySelector(".photographer_section");

	photographers.forEach((photographer) => {
		const photographerModel = photographerFactory(photographer);
		const userCardDOM = photographerModel.getUserCardDOM();
		photographersSection.appendChild(userCardDOM);
	});
}

async function init() {
	// Récupère les datas des photographes
	const { photographers } = await getPhotographers();
	displayData(photographers);
}

init();
