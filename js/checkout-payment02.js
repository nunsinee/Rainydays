const pay = document.querySelector("#confirmPay");
const cardName = document.querySelector("#cardName");
const cardNumber = document.querySelector("#cardNum");
const expiredDate = document.querySelector("#expDate");
const secureNumber = document.querySelector("#secureNum");
const message = document.querySelector("#message");

//1.1 if all the input  pass validation

cardName.addEventListener("input", () => {
	if (checkLength(cardName.value, 0) === true) {
		cardNameError.style.display = "none";
	} else {
		cardNameError.style.display = "block";
	}
});

cardNumber.addEventListener("input", () => {
	if (checkLength(cardNumber.value, 12) === true) {
		cardNum.style.display = "none";
	} else {
		cardNumError.style.display = "block";
	}
});

expiredDate.addEventListener("input", () => {
	if (validateExpDate(expiredDate.value) === true) {
		expDateError.style.display = "none";
	} else {
		expDateError.style.display = "block";
	}
});

cardNumber.addEventListener("input", () => {
	if (validateCreditcardNumber(cardNumber.value) === true) {
		cardNumberError.style.display = "none";
	} else {
		cardNumberError.style.display = "block";
	}
});

secureNumber.addEventListener("input", () => {
	if (validateSecureNumber(secureNumber.value) === true) {
		secureNumError.style.display = "none";
	} else {
		secureNumError.style.display = "block";
	}
});

pay.addEventListener("submit", submitForm);

//2.1 if all the inputs  pass validation

function submitForm(event) {
	event.preventDefault();
	if (
		checkLength(cardName.value, 0) &&
		checkLength(cardNumber.value, 12) &&
		validateExpDate(expiredDate.value) &&
		validateCreditcardNumber(cardNumber.value) &&
		validateSecureNumber(secureNumber.value)
	) {
		//display the message when the form has been submitted
		location.href = "checkout-page03.html";
		message.innerHTML = `<div class="message"> Thank for your payment </div>`;
		pay.reset();
	} else {
		message.innerHTML = "";
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

//check validate expire date of card
function validateExpDate(expDate) {
	const expDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
	const patternMatches = expDateRegex.test(expDate);
	return patternMatches;
}

//check validate card number

function validateCreditcardNumber(cardNumber) {
	const re16digit = /^\d{16}$/;
	const patternMatches = re16digit.test(cardNumber);
	return patternMatches;
}

// easy validate secure code on card 3 or 4 digits /^[0-9]{3,4}$/

function validateSecureNumber(secureNumber) {
	const secureNumRegex = /^[0-9]{3,4}$/;
	const patternMatches = secureNumRegex.test(secureNumber);
	return patternMatches;
}
