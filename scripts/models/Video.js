class Video extends Media {
	constructor(data) {
		super(data);
	}

	createVideoCard() {
		return `
            <div class="medias">
                <video class="media">
                    <source src="${this.url}" type="video/mp4">
                </video>
                <div class="media-informations">
                    <p class="title">${this.title}</p>
                    <p class="likes">${this.likes + this.svg}</p>
                </div>
            </div>
        `;
	}
}
