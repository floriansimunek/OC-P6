class MediaModal {
	constructor(data) {
		this._$medias = data.querySelectorAll(".media_block");
		this._$modal = document.querySelector("#media_modal");
		this._$close = document.querySelector("#closeMediaModal");
		this._mediaSrc = null;
		this._mediaIndex = 0;
		this._$prevBtn = document.querySelector(".arrow.prev");
		this._$nextBtn = document.querySelector(".arrow.next");
		this.init();
	}

	init() {
		this._$medias.forEach((media, i) => {
			media.querySelector(".media").addEventListener("click", () => {
				if (media.querySelector(".media").classList.contains("image")) {
					this._$modal.querySelector(".medias").appendChild(media.querySelector(".media").cloneNode(true));
					this._$modal.querySelector(".medias").appendChild(media.querySelector(".title").cloneNode(true));
				} else if (media.querySelector(".media").classList.contains("video")) {
					const video = media.querySelector(".media").cloneNode(true);
					video.setAttribute("controls", "");
					video.setAttribute("autoplay", "");

					this._$modal.querySelector(".medias").appendChild(video);
					this._$modal.querySelector(".medias").appendChild(media.querySelector(".title").cloneNode(true));
				} else {
					throw "Unknown media type";
				}

				this.open();

				this._$prevBtn.addEventListener("click", () => {
					this.prevMedia();
				});
				this._$nextBtn.addEventListener("click", () => {
					this.nextMedia();
				});
			});
		});

		this._$close.addEventListener("click", () => {
			this.close();
		});
	}

	open() {
		this._$modal.setAttribute("aria-modal", "true");
		this._$modal.classList.add("visible");
		this._$modal.focus();
		document.body.setAttribute("tabindex", "-1");
	}

	close() {
		this._$modal.setAttribute("aria-modal", "false");
		this._$modal.querySelector(".medias").innerHTML = "";
		this._$modal.classList.remove("visible");
		document.body.removeAttribute("tabindex");
	}

	prevMedia() {
		this._mediaIndex--;
		let media;

		if (this._mediaIndex < 0) {
			this._mediaIndex = this._$medias.length - 1;
		}

		if (this._$medias[this._mediaIndex].querySelector(".media").classList.contains("video")) {
			media = this._$medias[this._mediaIndex].querySelector(".media").cloneNode(true);
			media.setAttribute("controls", "");
			media.setAttribute("autoplay", "");
		} else {
			media = this._$medias[this._mediaIndex].querySelector(".media").cloneNode(true);
		}

		this._$modal.querySelector(".medias").innerHTML = "";
		this._$modal.querySelector(".medias").appendChild(media);
		this._$modal.querySelector(".medias").appendChild(this._$medias[this._mediaIndex].querySelector(".title").cloneNode(true));
	}

	nextMedia() {
		this._mediaIndex++;
		let media;

		if (this._mediaIndex >= this._$medias.length) {
			this._mediaIndex = 0;
		}

		if (this._$medias[this._mediaIndex].querySelector(".media").classList.contains("video")) {
			media = this._$medias[this._mediaIndex].querySelector(".media").cloneNode(true);
			media.setAttribute("controls", "");
			media.setAttribute("autoplay", "");
		} else {
			media = this._$medias[this._mediaIndex].querySelector(".media").cloneNode(true);
		}

		this._$modal.querySelector(".medias").innerHTML = "";
		this._$modal.querySelector(".medias").appendChild(media);
		this._$modal.querySelector(".medias").appendChild(this._$medias[this._mediaIndex].querySelector(".title").cloneNode(true));
	}
}
