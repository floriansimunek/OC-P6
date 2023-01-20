class Photo extends Media {
	constructor(data) {
		super(data);
	}

	createPhotoCard() {
		const $photographerMediasList = document.querySelector(".photograph-medias-list");

		if ($photographerMediasList) {
			const div = createBlock("div", [
				{ name: "class", value: "media_block" },
				{ name: "id", value: "media_" + this.id },
				{ name: "data-title", value: this.title },
				{ name: "data-date", value: this.date },
				{ name: "data-likes", value: this.likes },
				{ name: "role", value: "img" },
			]);
			const img = createImage(this.url, [
				{ name: "class", value: "media image" },
				{ name: "tabindex", value: "0" },
				{ name: "alt", value: this.title },
				{ name: "aria-label", value: "Open media modal" },
				{ name: "data-title-media", value: this.title },
				{ name: "data-type", value: "image" },
				{ name: "data-id", value: this.id },
			]);

			const div2 = createBlock("div", [{ name: "class", value: "media-informations" }]);
			const title = createParagraph(this.title, [
				{ name: "class", value: "title" },
				{ name: "tabindex", value: "0" },
				{ name: "aria-label", value: "Title of the image" },
			]);

			const div3 = createBlock("div", [
				{ name: "class", value: "likes-block" },
				{ name: "tabindex", value: "0" },
			]);
			const likes = createParagraph(this.likes, [
				{ name: "class", value: "likes" },
				{ name: "aria-label", value: "Likes counter of the image" },
			]);
			const svg = createImage("./assets/icons/like_red.svg", [
				{ name: "class", value: "like-icon" },
				{ name: "role", value: "img" },
				{ name: "aria-hidden", value: "true" },
			]);

			div3.append(likes, svg);
			div2.append(title, div3);
			div.append(img, div2);
			$photographerMediasList.append(div);
			return div;
		}
	}
}
