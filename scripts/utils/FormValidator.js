class FormValidator {
	constructor(form) {
		this._$form = form;
		this._$firstnameBlock = this._$form.querySelector("#firstnameBlock");
		this._$lastnameBlock = this._$form.querySelector("#lastnameBlock");
		this._$emailBlock = this._$form.querySelector("#emailBlock");
		this._$messageBlock = this._$form.querySelector("#messageBlock");
		this._errors = {};
	}

	validateFirstName(name) {
		if (!name) {
			this._errors.firstname = "Le prénom est requis";
		} else if (name.length < 2) {
			this._errors.firstname = "Le prénom doit contenir au moins 2 caractères";
		}
	}

	validateLastName(name) {
		if (!name) {
			this._errors.lastname = "Le nom est requis";
		} else if (name.length < 2) {
			this._errors.lastname = "Le nom doit contenir au moins 2 caractères";
		}
	}

	validateEmail(email) {
		if (!email) {
			this._errors.email = "L'email est requis";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			this._errors.email = "L'email est invalide";
		}
	}

	validateMessage(message) {
		if (!message) {
			this._errors.message = "Le message est requis";
		} else if (message.length < 10) {
			this._errors.message = "Le message doit contenir au moins 10 caractères";
		}
	}

	validateForm() {
		this._errors = null;
		const formData = new FormData(this._$form);

		this.validateFirstName(formData.get("firstname"));
		this.validateLastName(formData.get("lastname"));
		this.validateEmail(formData.get("email"));
		this.validateMessage(formData.get("message"));

		if (!this.displayErrors()) {
			console.log("firstname: ", formData.get("firstname"));
			console.log("lastname: ", formData.get("lastname"));
			console.log("email: ", formData.get("email"));
			console.log("message: ", formData.get("message"));
		}
	}

	displayErrors() {
		if (!this._errors) {
			return false;
		}

		const fields = {
			firstname: this._$firstnameBlock,
			lastname: this._$lastnameBlock,
			email: this._$emailBlock,
			message: this._$messageBlock,
		};

		for (const field in fields) {
			if (this._errors[field]) {
				fields[field].setAttribute("data-error", this._errors[field]);
				fields[field].setAttribute("data-error-visible", "true");
			} else {
				fields[field].setAttribute("data-error-visible", "false");
			}
		}

		return true;
	}
}
