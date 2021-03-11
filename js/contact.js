const form = document.querySelector("#contactForm");
const contactName = document.querySelector("#contactName");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const textArea = document.querySelector("#textArea");
const message = document.querySelector("#message");

//1.if all the input  pass validation enable the button
function validateForm(event) {
	event.preventDefault();
	if (checkLength(contactName.value, 0) === true) {
		contactNameError.style.display = "none";
	} else {
		contactNameError.style.display = "block";
	}

	if (checkLength(subject.value, 9) === true) {
		subjectError.style.display = "none";
	} else {
		subjectError.style.display = "block";
	}

	if (validateEmail(email.value) === true) {
		emailError.style.display = "none";
	} else {
		emailError.style.display = "block";
	}
	if (checkLength(textArea.value, 19) === true) {
		textAreaError.style.display = "none";
	} else {
		textAreaError.style.display = "block";
	}
}

// event listener when submit form
form.addEventListener("submit", validateForm);
form.addEventListener("submit", submitForm);

//2.function to run when the form is submitted
function submitForm(event) {
	event.preventDefault();
	if (
		checkLength(contactName.value, 0) &&
		checkLength(subject.value, 9) &&
		validateEmail(email.value) &&
		checkLength(textArea.value, 19)
	) {
		//display the message when the form has been submitted
		message.innerHTML = `<div class="message"> Your message has been sent </div>`;
		form.reset();
	} else {
		message.innerHTML = "";
	}
}

//3.function to check if the length of the input value is valid
function checkLength(value, len) {
	if (value.trim().length > len) {
		return true;
	} else {
		return false;
	}
}

//4.function to check if email is valid
function validateEmail(email) {
	const regEX = /\S+@\S+\.\S+/;
	const patternMatches = regEX.test(email);
	return patternMatches;
}
