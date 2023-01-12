async function getPhotographer() {
	let photographer = [];
	let params = new URL(document.location).searchParams;
	let id = params.get("id");

	await fetch("./data/photographers.json")
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

async function displayData(photographer) {
	console.log(photographer);
}

async function init() {
	const photographer = await getPhotographer();
	displayData(photographer);
}

init();
