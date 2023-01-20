class MediaModal {
	constructor() {
		this._$modal = document.querySelector("#media_modal");
		this._$mediasList = document.querySelector(".photograph-medias-list");
		this._$mediasWrapper = this._$modal.querySelector(".media_wrapper");
		this._$medias = [];
		this._$close = document.querySelector("#close_mediaModal");
		this._$prevBtn = document.querySelector(".arrow.prev");
		this._$nextBtn = document.querySelector(".arrow.next");
		this._mediaIndex = 0;
	}

	init() {
		this._$medias = this._$mediasList.querySelectorAll(".media_block .media");

		this._$medias.forEach((media, i) => {
			media.addEventListener("click", () => {
				const mediaBlock = media.cloneNode(true);

				this._$mediasWrapper.append(mediaBlock);
				this._$mediasWrapper.append(this.createTitleBlock(mediaBlock));

				this.open();
			});
		});

		this._$prevBtn.addEventListener("click", () => {
			this.prevMedia();
		});

		this._$nextBtn.addEventListener("click", () => {
			this.nextMedia();
		});

		this._$close.addEventListener("click", () => {
			this.mediaWrapperReset();
			this.close();
		});
	}

	createTitleBlock(mediaBlock) {
		const title = mediaBlock.getAttribute("data-title-media");

		if (mediaBlock.querySelector("video")) {
			mediaBlock.querySelector("video").setAttribute("controls", "");
			mediaBlock.querySelector("video").setAttribute("autoplay", "");
		}

		const pTitle = createParagraph(title, [{ name: "class", value: "media-title" }]);

		return pTitle;
	}

	open() {
		this._$modal.setAttribute("aria-modal", "true");
		this._$modal.classList.add("visible");
		this._$modal.focus();
	}

	close() {
		this._$modal.setAttribute("aria-modal", "false");
		this._$modal.classList.remove("visible");
	}

	prevMedia() {
		this._mediaIndex--;

		if (this._mediaIndex < 0) {
			this._mediaIndex = this._$medias.length - 1;
		}

		const mediaBlock = this._$medias[this._mediaIndex].cloneNode(true);

		if (mediaBlock.querySelector("video")) {
			mediaBlock.querySelector("video").setAttribute("controls", "");
			mediaBlock.querySelector("video").setAttribute("autoplay", "");
		}

		this.mediaWrapperReset();
		this._$mediasWrapper.append(mediaBlock);
		this._$mediasWrapper.append(this.createTitleBlock(mediaBlock));
	}

	nextMedia() {
		this._mediaIndex++;

		if (this._mediaIndex >= this._$medias.length) {
			this._mediaIndex = 0;
		}

		const mediaBlock = this._$medias[this._mediaIndex].cloneNode(true);
		if (mediaBlock.querySelector("video")) {
			mediaBlock.querySelector("video").setAttribute("controls", "");
			mediaBlock.querySelector("video").setAttribute("autoplay", "");
		}

		this.mediaWrapperReset();
		this._$mediasWrapper.append(mediaBlock);
		this._$mediasWrapper.append(this.createTitleBlock(mediaBlock));
	}

	mediaWrapperReset() {
		this._$mediasWrapper.innerHTML = "";
	}
}
