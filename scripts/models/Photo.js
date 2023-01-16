class Photo extends Media {
	constructor(data) {
		super(data);
	}

	createPhotoCard() {
		return `
            <div class="media_block">
                <img class="media" id="media_${this.id}" src="${this.url}">
                <div class="media-informations">
                    <p class="title">${this.title}</p>
                    <p class="likes">${this.likes + this.svg}</p>
                </div>
            </div>
        `;
	}
}
