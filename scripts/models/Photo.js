class Photo extends Media {
	constructor(data) {
		super(data);
	}

	createPhotoCard() {
		return `
            <div class="media_block" id="media_${this.id}" data-title="${this.title}" data-date="${this.date}" data-likes="${this.likes}" role="img">
                <img tabindex="0" class="media image" src="${this.url}" alt="${this.title}" aria-label="Open media modal">
                <div class="media-informations">
                    <p class="title" tabindex="0" aria-label="Title of the image">${this.title}</p>
                    <p class="likes" tabindex="0" aria-label="Likes counter of the image">${this.likes}<span aria-hidden="true">${this.svg}</span></p>
                </div>
            </div>
        `;
	}
}
