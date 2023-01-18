class ContactModal {
	constructor() {
		this._$modal = document.getElementById("contact_modal");
		this._$contactBtn = document.querySelector(".contact_button");
		this._$closeBtn = document.querySelector("#closeContactModal");
		this.init();
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
		this._$modal.classList.add("visible");
	}

	close() {
		this._$modal.classList.remove("visible");
	}
}
