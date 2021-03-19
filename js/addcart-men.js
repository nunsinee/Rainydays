let carts = document.querySelectorAll(".add-cart");
let itemNo = document.querySelector(".cart span");
let products = [
	{
		proName: "Arild Parka ",
		tag: "arildparka",
		price: 1200,
		inCart: 0,
	},
	{
		proName: "Tim Parka ",
		tag: "timparka",
		price: 1200,
		inCart: 0,
	},
	{
		proName: "Kenvin Parka ",
		tag: "kenvinparka",
		price: 1200,
		inCart: 0,
	},
	{
		proName: "John Parka ",
		tag: "johnparka",
		price: 1200,
		inCart: 0,
	},
	{
		proName: "Arild Parka ",
		tag: "arildparka",
		price: 1200,
		inCart: 0,
	},
	{
		proName: "Tim Parka ",
		tag: "timparka",
		price: 1200,
		inCart: 0,
	},
	{
		proName: "Kenvin Parka ",
		tag: "kenvinparka",
		price: 1200,
		inCart: 0,
	},
	{
		proName: "John Parka ",
		tag: "johnparka",
		price: 1200,
		inCart: 0,
	},
	{
		proName: "Arild Parka ",
		tag: "arildparka",
		price: 1200,
		inCart: 0,
	},
	{
		proName: "Arild Parka ",
		tag: "arildparka",
		price: 1200,
		inCart: 0,
	},
	{
		proName: "Arild Parka ",
		tag: "arildparka",
		price: 1200,
		inCart: 0,
	},
	{
		proName: "Arild Parka ",
		tag: "arildparka",
		price: 1200,
		inCart: 0,
	},
];

// click event on add to cart button
for (let i = 0; i < carts.length; i++) {
	carts[i].addEventListener("click", () => {
		carts[i].innerHTML = "Already added";
		carts[i].style.color = "green";
		carts[i].style.backgroundColor = "yellow";
		cartNumberItems(products[i]);
		totalCost(products[i]);
	});
}

// check the cartNumbers in localStorage  if they are exit
//when refresh the page, number of item will still exit(not change to 0)

function onloadCartNumbers() {
	let productNumbers = localStorage.getItem("cartNumberItems");
	if (productNumbers) {
		itemNo.textContent = productNumbers;
	}
}

//show how many items on cart icon use localStorage

function cartNumberItems(product, action) {
	let productNumbers = localStorage.getItem("cartNumberItems");
	productNumbers = parseInt(productNumbers);

	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);

	if (action == "decrease") {
		localStorage.setItem("cartNumberItems", productNumbers - 1);
		itemNo.textContent = productNumbers - 1;
	} else if (productNumbers) {
		localStorage.setItem("cartNumberItems", productNumbers + 1);
		itemNo.textContent = productNumbers + 1;
	} else {
		localStorage.setItem("cartNumberItems", 1);
		itemNo.textContent = 1;
	}
	setItems(product);
}

function setItems(product) {
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);

	if (cartItems != null) {
		if (cartItems[product.tag] == undefined) {
			cartItems = {
				...cartItems,
				[product.tag]: product,
			};
		}
		cartItems[product.tag].inCart += 1;
	} else {
		product.inCart = 1;
		cartItems = {
			[product.tag]: product,
		};
	}

	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

// Total price in the cart
function totalCost(product, action) {
	let cartCost = localStorage.getItem("totalCost");
	if (action == "decrease") {
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost", cartCost - product.price);
	} else if (cartCost != null) {
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost", cartCost + product.price);
	} else {
		localStorage.setItem("totalCost", product.price);
	}
}

// 	if (action == "decrease") {
// 		cartCost = parseInt(cartCost);
// 		localStorage.setItem("totalCost", cartCost - product.price);
// 	} else if (cartCost != null) {
// 		cartCost = parseInt(cartCost);
// 		localStorage.setItem("totalCost", cartCost + product.price);
// 	} else {
// 		localStorage.setItem("totalCost", product.price);
// 	}
// }

// display cart
function displayCart() {
	let cartItems = localStorage.getItem("productsInCart");
	let productContainer = document.querySelector(".products");
	let cartCost = localStorage.getItem("totalCost");

	cartItems = JSON.parse(cartItems);

	if (cartItems && productContainer) {
		productContainer.innerHTML = "";
		Object.values(cartItems).map((item) => {
			productContainer.innerHTML += `
			<div class="product">
			<i class="far fa-times-circle"></i>
			<img src="./images/new-products/${item.tag}.jpg"><h2>${item.proName}</h2>	
			</div>
			<div class="price"><h3>${item.price}<h3></div>
			<div class="quantity"><i class="fas fa-minus-circle" id="decrease"></i><div>${
				item.inCart
			}</div><i class="fas fa-plus-circle" id="increase"></i></div>
			<div class="total">
			${item.inCart * item.price},00 NOK
			</div>
			`;
		});
		productContainer.innerHTML += `
		<div class ="cartTotalContainer">
		<h2 class="cartTotalTitle"> TOTAL: </h2>
		<h2 class="cartTotal">${cartCost},00 NOK </h2>
		</div>
		`;
	}
	deleteButtons();
	manageQuantity();
}

//delete items from cart and update number of items in cart icon status
function deleteButtons() {
	let deleteButtons = document.querySelectorAll(".product i");
	let productName;
	let productNumbers = localStorage.getItem("cartNumberItems");
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	let cartCost = localStorage.getItem("totalCost");

	for (let i = 0; i < deleteButtons.length; i++) {
		deleteButtons[i].addEventListener("click", () => {
			productName = deleteButtons[i].parentElement.textContent
				.trim()
				.toLowerCase()
				.replace(/ /g, "");
			localStorage.setItem(
				"cartNumberItems",
				productNumbers - cartItems[productName].inCart
			);
			localStorage.setItem(
				"totalCost",
				cartCost - cartItems[productName].price * cartItems[productName].inCart
			);
			delete cartItems[productName];
			localStorage.setItem("productsInCart", JSON.stringify(cartItems));
			// console.log(productNumbers);
			displayCart();
			onloadCartNumbers();
		});
	}
}

//Not finished yet
function manageQuantity() {
	let decreaseButtons = document.querySelectorAll("#decrease");
	let increaseButtons = document.querySelectorAll("#increase");
	let currentQuantity = 0;
	let currentProduct = "";

	let cartItems = localStorage.getItem("productsInCart");

	cartItems = JSON.parse(cartItems);

	//Decrease quantity- - -
	for (let i = 0; i < decreaseButtons.length; i++) {
		decreaseButtons[i].addEventListener("click", () => {
			currentQuantity = decreaseButtons[i].parentElement.querySelector("div")
				.textContent;
			console.log(currentQuantity);

			currentProduct = decreaseButtons[
				i
			].parentElement.previousElementSibling.previousElementSibling
				.querySelector("h2")
				.textContent.toLowerCase()
				.replace(/ /g, "")
				.trim();
			console.log(currentProduct);

			if (cartItems[currentProduct].inCart > 1) {
				cartItems[currentProduct].inCart -= 1;
				cartNumberItems(cartItems[currentProduct], "decrease");
				totalCost(cartItems[currentProduct], "decrease");
				localStorage.setItem("productsInCart", JSON.stringify(cartItems));
				displayCart();
			}
		});
	}

	//Increase quantity + + +
	for (let i = 0; i < increaseButtons.length; i++) {
		increaseButtons[i].addEventListener("click", () => {
			currentQuantity = increaseButtons[i].parentElement.querySelector("div")
				.textContent;
			console.log(currentQuantity);

			currentProduct = increaseButtons[
				i
			].parentElement.previousElementSibling.previousElementSibling
				.querySelector("h2")
				.textContent.toLowerCase()
				.replace(/ /g, "")
				.trim();
			console.log(currentProduct);

			cartItems[currentProduct].inCart += 1;
			cartNumberItems(cartItems[currentProduct]);
			totalCost(cartItems[currentProduct]);
			localStorage.setItem("productsInCart", JSON.stringify(cartItems));
			displayCart();
		});
	}
}

onloadCartNumbers();
displayCart();
