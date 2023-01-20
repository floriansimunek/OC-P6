class ModalFactory {
	constructor(type) {
		if (type === "media") {
			return new MediaModal();
		} else if (type === "contact") {
			return new ContactModal();
		} else {
			throw "Unknown modal format type";
		}
	}
}
