function createElement(tag, attributes, properties) {
	const element = document.createElement(tag);

	if (attributes) {
		attributes.forEach((attribute) => {
			element.setAttribute(attribute.name, attribute.value);
		});
	}

	if (properties) {
		properties.forEach((property) => {
			element[property.name] = property.value;
		});
	}

	return element;
}

function createAnchor(href, attributes) {
	return createElement("a", attributes, [{ name: "href", value: href }]);
}

function createImage(src, attributes) {
	return createElement("img", attributes, [{ name: "src", value: src }]);
}

function createHeading(level, text, attributes) {
	return createElement("h" + level, attributes, [{ name: "textContent", value: text }]);
}

function createParagraph(text, attributes) {
	return createElement("p", attributes, [{ name: "textContent", value: text }]);
}

function createButton(text, attributes) {
	return createElement("button", attributes, [{ name: "textContent", value: text }]);
}

function createBlock(tag, attributes) {
	return createElement(tag, attributes);
}
