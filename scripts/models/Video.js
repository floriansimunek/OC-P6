class Video extends Media {
	constructor(data) {
		super(data);
	}

	createVideoCard() {
		return `
            <div class="medias" onclick="openMediaModal('media_${this.id}')">
                <video class="media" id="media_${this.id}">
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
