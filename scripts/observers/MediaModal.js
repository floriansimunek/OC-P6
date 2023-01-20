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
				const $media = media.cloneNode(true);
				this.addVideoAttributes($media);
				this._$mediasWrapper.append($media);
				this._$mediasWrapper.append(this.createTitleBlock($media));

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

	createTitleBlock($media) {
		let mediaId = $media.getAttribute("data-id");
		let $mediaBlock = document.querySelector("#media_" + mediaId);
		let $title = $mediaBlock.querySelector(".title");

		const pTitle = createParagraph($title.textContent, [
			{ name: "class", value: "media-title" },
		]);
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

		const $media = this._$medias[this._mediaIndex].cloneNode(true);

		this.mediaWrapperReset();
		this.addVideoAttributes($media);
		this._$mediasWrapper.append($media);
		this._$mediasWrapper.append(this.createTitleBlock($media));
	}

	nextMedia() {
		this._mediaIndex++;

		if (this._mediaIndex >= this._$medias.length) {
			this._mediaIndex = 0;
		}

		const $media = this._$medias[this._mediaIndex].cloneNode(true);

		this.mediaWrapperReset();
		this.addVideoAttributes($media);
		this._$mediasWrapper.append($media);
		this._$mediasWrapper.append(this.createTitleBlock($media));
	}

	addVideoAttributes($media) {
		if ($media.getAttribute("data-type") == "video") {
			$media.setAttribute("controls", "");
			$media.setAttribute("autoplay", "");
			$media.setAttribute("muted", "");
		}
	}

	mediaWrapperReset() {
		this._$mediasWrapper.innerHTML = "";
	}
}
