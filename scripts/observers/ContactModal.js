class ContactModal {
	constructor() {
		this._$modal = document.querySelector("#contact_modal");
		this._$contactBtn = document.querySelector("#open_contactModal");
		this._$closeBtn = document.querySelector("#closeContactModal");
	}

	init() {
		this._$contactBtn.addEventListener("click", () => {
			this.open();
		});

		this._$closeBtn.addEventListener("click", () => {
			this.close();
		});
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
}
