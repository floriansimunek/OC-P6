function displayModal() {
	const modal = document.getElementById("contact_modal");
	modal.classList.toggle("visible");
}

function closeModal() {
	const modal = document.getElementById("contact_modal");
	modal.classList.toggle("visible");
}

function openMediaModal(id) {
	const mediaDOM = document.querySelector("#" + id);
	const modal = document.querySelector("#media_modal");

	modal.appendChild(mediaDOM.cloneNode(true));
	modal.classList.add("visible");
}

function closeMediaModal() {
	const modal = document.querySelector("#media_modal");
	modal.innerHTML = `<img id="close" src="assets/icons/close.svg" onclick="closeMediaModal()" />`;
	modal.classList.remove("visible");
}
