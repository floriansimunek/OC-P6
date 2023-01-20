class MediaFactory {
	constructor(data, type) {
		if (type === "image") {
			return new Photo(data);
		} else if (type === "video") {
			return new Video(data);
		} else {
			throw "Unknown media format type";
		}
	}
}
