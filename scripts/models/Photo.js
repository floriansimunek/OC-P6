class Photo extends Media {
	constructor(data) {
		super(data);
	}

	createPhotoCard() {
		return `
            <div class="media_block" id="media_${this.id}" data-title="${this.title}" data-date="${this.date}" data-likes="${this.likes}">
                <img class="media image" src="${this.url}">
                <div class="media-informations">
                    <p class="title">${this.title}</p>
                    <p class="likes">${this.likes + this.svg}</p>
                </div>
            </div>
        `;
	}
}
