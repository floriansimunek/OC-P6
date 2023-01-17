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

		this.event(this._$media, "click", "open");
		this.event(this._$closeBtn, "click", "close");
	}

	event(el, event, method) {
		el.addEventListener(event, () => {
			if (method === "open") {
				this.open();
			} else if (method === "close") {
				this.close();
			} else {
				throw "Unknown method type";
			}
		});
	}

	open() {
		this._$modal.classList.add("visible");
	}

	close() {
		this._$modal.classList.remove("visible");
	}
}
