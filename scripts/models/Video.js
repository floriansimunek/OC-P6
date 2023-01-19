class Video extends Media {
	constructor(data) {
		super(data);
	}

	createVideoCard() {
		return `
            <div class="media_block" id="media_${this.id}" data-title="${this.title}" data-date="${this.date}" data-likes="${this.likes}" role="video">
                <video class="media video" tabindex="0" aria-label="Open media modal">
                    <source src="${this.url}" type="video/mp4">
                    <meta itemprop="title" content="${this.title}">
                </video>
                <div class="media-informations">
                    <p class="title" tabindex="0" aria-label="Title of the video">${this.title}</p>
                    <p class="likes" tabindex="0" aria-label="Likes counter of the video">${this.likes}<span aria-hidden="true">${this.svg}</span></p>
                </div>
            </div>
        `;
	}
}
