function validate(e) {
	e.preventDefault();
	let firstname = document.querySelector("#firstname").value;
	let lastname = document.querySelector("#lastname").value;
	let email = document.querySelector("#email").value;
	let message = document.querySelector("#message").value;

	console.log("firstname: ", firstname);
	console.log("lastname: ", lastname);
	console.log("email: ", email);
	console.log("message: ", message);
}
