class Video extends Media {
	constructor(data) {
		super(data);
	}

	createVideoCard() {
		const $photographerMediasList = document.querySelector(".photograph-medias-list");

		if ($photographerMediasList) {
			const div = createBlock("div", [
				{ name: "class", value: "media_block" },
				{ name: "id", value: "media_" + this.id },
				{ name: "data-title", value: this.title },
				{ name: "data-date", value: this.date },
				{ name: "data-likes", value: this.likes },
				{ name: "role", value: "video" },
			]);

			const video = createBlock("video", [
				{ name: "class", value: "media video" },
				{ name: "tabindex", value: "0" },
				{ name: "aria-label", value: "Open media modal" },
				{ name: "data-title-media", value: this.title },
				{ name: "data-type", value: "video" },
				{ name: "data-id", value: this.id },
			]);
			const source = createBlock("source", [
				{ name: "src", value: this.url },
				{ name: "type", value: "video/mp4" },
			]);
			const meta = createBlock("meta", [
				{ name: "itemprop", value: "title" },
				{ name: "content", value: this.title },
			]);

			const div2 = createBlock("div", [{ name: "class", value: "media-informations" }]);
			const title = createParagraph(this.title, [
				{ name: "class", value: "title" },
				{ name: "tabindex", value: "0" },
				{ name: "aria-label", value: "Title of the video" },
			]);

			const div3 = createBlock("div", [
				{ name: "class", value: "likes-block" },
				{ name: "tabindex", value: "0" },
			]);
			const likes = createParagraph(this.likes, [
				{ name: "class", value: "likes" },
				{ name: "aria-label", value: "Likes counter of the video" },
			]);
			const svg = createImage("./assets/icons/like_red.svg", [
				{ name: "class", value: "like-icon" },
				{ name: "role", value: "img" },
			]);

			video.append(source, meta);
			div3.append(likes, svg);
			div2.append(title, div3);
			div.append(video, div2);
			$photographerMediasList.append(div);
			return div;
		}
	}
}
