class MediaModal {
	constructor(id, modal) {
		this._mediaID = id;
		this._$media = null;
		this._$modal = modal;
		this._$closeBtn = document.querySelector("#close");
		window.addEventListener("load", () => {
			this.init();
		});
	}

	init() {
		this._$media = document.querySelector(`#media_${this._mediaID}`);

		this._$media.addEventListener("click", () => {
			this.open();
		});

		this._$closeBtn.addEventListener("click", () => {
			this.close();
		});
	}

	open() {
		this._$modal.classList.add("visible");
	}

	close() {
		this._$modal.classList.remove("visible");
	}
}
