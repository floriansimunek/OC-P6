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
		this.trapFocus();
	}

	close() {
		this._$modal.setAttribute("aria-modal", "false");
		this._$modal.classList.remove("visible");
		document.body.focus();
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
