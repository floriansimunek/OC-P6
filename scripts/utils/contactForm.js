function displayModal() {
	const modal = document.getElementById("contact_modal");
	modal.classList.toggle("visible");
}

function closeModal() {
	const modal = document.getElementById("contact_modal");
	modal.classList.toggle("visible");
}

function closeMediaModal() {
	const code = `<header><img src="assets/icons/close.svg" onclick="closeMediaModal()" /></header>`;
	const modal = document.getElementById("media_modal");

	modal.innerHTML = code;
	modal.classList.toggle("visible");
}
