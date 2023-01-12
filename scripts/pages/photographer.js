// async function getPhotographer() {
// 	let photographer = [];
// 	let params = new URL(document.location).searchParams;
// 	let id = params.get("id");

// 	await fetch("./data/photographers.json")
// 		.then((response) => response.json())
// 		.then((json) => {
// 			Object.keys(json.photographers).forEach((oneUser) => {
// 				if (json.photographers[oneUser].id == id) {
// 					photographer = json.photographers[oneUser];
// 				}
// 			});
// 		});

// 	return photographer;
// }

// async function getPhotographerPhotosList() {
// 	let photos = [];
// 	let params = new URL(document.location).searchParams;
// 	let id = params.get("id");

// 	await fetch("./data/photographers.json")
// 		.then((response) => response.json())
// 		.then((json) => {
// 			json.media.forEach((photo) => {
// 				if (photo.photographerId == id) {
// 					photos = [...photos, photo];
// 				}
// 			});
// 		});

// 	return photos;
// }

// async function displayData(photographer) {
// 	const { city, country, id, name, portrait, price, tagline } = photographer;
// 	const picture = `assets/photographers/${portrait}`;

// 	const photographerHeader = document.querySelector(".photograph-header");

// 	const h2 = document.createElement("h2");
// 	h2.classList.add("name");
// 	h2.textContent = name;

// 	const location = document.createElement("p");
// 	location.classList.add("location");
// 	location.setAttribute("aria-label", "Localisation de " + name);
// 	location.textContent = city + ", " + country;

// 	const slogan = document.createElement("p");
// 	slogan.classList.add("slogan");
// 	slogan.setAttribute("aria-label", "Slogan de " + name);
// 	slogan.textContent = tagline;

// 	const informations = document.createElement("div");
// 	informations.classList.add("informations");
// 	informations.setAttribute("aria-label", "Informations de " + name);
// 	informations.appendChild(h2);
// 	informations.appendChild(location);
// 	informations.appendChild(slogan);

// 	const img = document.createElement("img");
// 	img.setAttribute("src", picture);
// 	img.setAttribute("alt", name);

// 	photographerHeader.prepend(informations);
// 	photographerHeader.appendChild(img);
// }

// async function displayPhotos(photos) {
// 	const { date, id, image, likes, photographerId, price, title } = photos;

// 	const photographerPhotosList = document.querySelector(".photograph-photos-list");

// 	photos.forEach((photo) => {
// 		const img = document.createElement("img");
// 		img.setAttribute("src", `./assets/images/${photo.image}`);

// 		photographerPhotosList.appendChild(img);
// 	});

// 	console.log(photos);
// }

// async function init() {
// 	const photographer = await getPhotographer();
// 	displayData(photographer);
// 	const photos = await getPhotographerPhotosList();
// 	displayPhotos(photos);
// }

// init();
