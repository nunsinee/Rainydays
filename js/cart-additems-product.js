// put item on cart using LocalStorage
let carts = document.querySelectorAll(".add-cart");
let itemNo = document.querySelector(".cart span");

for (let i = 0; i < carts.length; i++) {
	carts[i].addEventListener("click", (e) => {
		e.preventDefault();
		cartNumberItems();
		carts[i].innerHTML = "Already added";
		carts[i].style.color = "black";
		carts[i].style.backgroundColor = "white";
	});
}

function cartNumberItems() {
	let productNumbers = localStorage.getItem("cartNumberItems");
	productNumbers = parseInt(productNumbers);

	if (productNumbers) {
		localStorage.setItem("cartNumberItems", productNumbers + 1);
		itemNo.textContent = productNumbers + 1;
	} else {
		localStorage.setItem("cartNumberItems", 1);
		itemNo.textContent = 1;
	}
}

function onloadCartNumbers() {
	let productNumbers = localStorage.getItem("cartNumberItems");
	if (productNumbers) {
		itemNo.textContent = productNumbers;
	}
}
onloadCartNumbers();
