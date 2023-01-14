function displayModal() {
	const modal = document.getElementById("contact_modal");
	modal.classList.toggle("visible");
}

function closeModal() {
	const modal = document.getElementById("contact_modal");
	modal.classList.toggle("visible");
}

function openMediaModal(event) {
	const modal = document.getElementById("media_modal");
	const media = event.target;

	// TODO: ne pas mettre l'attribute "controls" pour les img
	let mediaCopy = media.cloneNode(true);
	mediaCopy.setAttribute("onclick", "closeMediaModal(event)");
	mediaCopy.setAttribute("controls", "");
	modal.appendChild(mediaCopy);
	modal.classList.add("visible");
}

function closeMediaModal(event) {
	const modal = document.querySelector("#media_modal");

	modal.innerHTML = `
			<img id="close" src="assets/icons/close.svg" onclick="closeMediaModal()" />
	`;
	modal.classList.remove("visible");
}
