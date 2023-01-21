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
			["click", "keypress"].forEach((event) => {
				media.addEventListener(event, (e) => {
					const that = this;

					function appendMediaInModal() {
						const $media = media.cloneNode(true);
						that.addVideoAttributes($media);
						that._$mediasWrapper.append($media);
						that._$mediasWrapper.append(that.createTitleBlock($media));
						that.open();
					}

					if (event == "click") {
						appendMediaInModal();
					}

					if (event == "keypress" && e.key == "Enter") {
						appendMediaInModal();
					}
				});
			});
		});

		this._$prevBtn.addEventListener("click", () => {
			this.prevMedia();
		});

		this._$nextBtn.addEventListener("click", () => {
			this.nextMedia();
		});

		this._$close.addEventListener("click", () => {
			this.close();
		});

		document.onkeydown = (e) => {
			e = e || window.event;
			if (e.key === "ArrowLeft") {
				this.prevMedia();
			}

			if (e.key === "ArrowRight") {
				this.nextMedia();
			}

			if (e.key === "Escape") {
				this.close();
			}
		};
	}

	createTitleBlock($media) {
		let mediaId = $media.getAttribute("data-id");
		let $mediaBlock = document.querySelector("#media_" + mediaId);
		let $title = $mediaBlock.querySelector(".title");

		const pTitle = createParagraph($title.textContent, [
			{ name: "class", value: "media-title" },
			{ name: "tabindex", value: "0" },
		]);
		return pTitle;
	}

	open() {
		this._$modal.setAttribute("aria-modal", "true");
		this._$modal.classList.add("visible");
		this.trapFocus();
	}

	close() {
		this._$modal.setAttribute("aria-modal", "false");
		this._$modal.classList.remove("visible");
		this.mediaWrapperReset();
		document.body.focus();
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

	trapFocus() {
		this._$modal.focus();
		var focusableEls = this._$modal.querySelectorAll("*");
		var firstFocusableEl = focusableEls[0];
		var lastFocusableEl = focusableEls[focusableEls.length - 1];
		var KEYCODE_TAB = 9;

		this._$modal.addEventListener("keydown", function (e) {
			var isTabPressed = e.key === "Tab" || e.keyCode === KEYCODE_TAB;

			if (!isTabPressed) {
				return;
			}

			if (e.shiftKey) {
				/* shift + tab */ if (document.activeElement === firstFocusableEl) {
					lastFocusableEl.focus();
					e.preventDefault();
				}
			} /* tab */ else {
				if (document.activeElement === lastFocusableEl) {
					firstFocusableEl.focus();
					e.preventDefault();
				}
			}
		});
	}
}
