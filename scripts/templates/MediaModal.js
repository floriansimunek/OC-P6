class MediaModal {
	constructor(data) {
		this.media = data;
	}

	open() {
		const modal = document.querySelector("#media_modal");
		this.media.classList.remove("media");
		this.media.classList.add("opened-media");
		this.media.setAttribute("controls", "");
		console.log(this.media);

		modal.classList.toggle("visible");
		modal.appendChild(this.media.cloneNode(true));
	}
}
