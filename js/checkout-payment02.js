const pay = document.querySelector("#confirmPay");
const cardName = document.querySelector("#cardName");
const cardNumber = document.querySelector("#cardNum");
const expiredDate = document.querySelector("#expDate");
const secureNumber = document.querySelector("#secureNum");
const message = document.querySelector("#message");

//1.1 if all the input  pass validation

contactName.addEventListener("input", () => {
	if (checkLength(contactName.value, 0) === true) {
		contactNameError.style.display = "none";
	} else {
		contactNameError.style.display = "block";
	}
});

address.addEventListener("input", () => {
	if (checkLength(address.value, 9) === true) {
		addressError.style.display = "none";
	} else {
		addressError.style.display = "block";
	}
});

city.addEventListener("input", () => {
	if (checkLength(city.value, 1) === true) {
		cityError.style.display = "none";
	} else {
		cityError.style.display = "block";
	}
});

country.addEventListener("input", () => {
	if (checkLength(country.value, 1) === true) {
		countryError.style.display = "none";
	} else {
		countryError.style.display = "block";
	}
});

email.addEventListener("input", () => {
	if (validateEmail(email.value) === true) {
		emailError.style.display = "none";
	} else {
		emailError.style.display = "block";
	}
});

postcode.addEventListener("input", () => {
	if (validatePostcode(postcode.value) === true) {
		postcodeError.style.display = "none";
	} else {
		postcodeError.style.display = "block";
	}
});

phoneNumber.addEventListener("input", () => {
	if (validatePhoneNumber(phoneNumber.value) === true) {
		phoneNumberError.style.display = "none";
	} else {
		phoneNumberError.style.display = "block";
	}
});

confirmForm.addEventListener("submit", submitForm);

//2.1 if all the inputs  pass validation

function submitForm(event) {
	event.preventDefault();
	if (
		checkLength(contactName.value, 0) &&
		checkLength(address.value, 9) &&
		checkLength(city.value, 1) &&
		checkLength(country.value, 1) &&
		validatePostcode(postcode.value) &&
		validatePhoneNumber(phoneNumber.value) &&
		validateEmail(email.value)
	) {
		//display the message when the form has been submitted
		location.href =
			"https://rainnydays-nunsinee.netlify.app/checkout-page02.html";
		confirmForm.reset();
	} else {
		messageTwo.innerHTML = "";
	}
}

//function to check if the length of the input value is valid

function checkLength(value, len) {
	if (value.trim().length > len) {
		return true;
	} else {
		return false;
	}
}

//check validate phone number
function validatePhoneNumber(phoneNumber) {
	const phoneRegex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{5})$/;
	const patternMatches = phoneRegex.test(phoneNumber);
	return patternMatches;
}

//check validate expire date of card
function validateExpDate(expDate) {
	const postcodeRegex = /^[0-9]{4}$/;
	const patternMatches = postcodeRegex.test(postcode);
	return patternMatches;
}

//check validate card number

function validate_creditcardnumber(cardNum) {
	var re16digit = /^\d{16}$/;
	const patternMatches = re16digit.test(cardNum);
	return patternMatches;
}
