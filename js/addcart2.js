let carts = document.querySelectorAll(".add-cart");
let itemNo = document.querySelector(".cart span");
let products = [
	{
		proName: "Anna Parka ",
		tag: "annaparka",
		price: 1200,
		inCart: 0,
	},
	{
		proName: "Emma Parka ",
		tag: "emmaparka",
		price: 1400,
		inCart: 0,
	},
	{
		proName: "Jennie Parka ",
		tag: "jennieparka",
		price: 1200,
		inCart: 0,
	},
	{
		proName: "Rosy Parka ",
		tag: "rosyparka",
		price: 1400,
		inCart: 0,
	},
	{
		proName: "Anna Parka ",
		tag: "annaparka",
		price: 1200,
		inCart: 0,
	},
	{
		proName: "Emma Parka ",
		tag: "emmaparka",
		price: 1400,
		inCart: 0,
	},
	{
		proName: "Jennie Parka ",
		tag: "jennieparka",
		price: 1200,
		inCart: 0,
	},
	{
		proName: "Rosy Parka ",
		tag: "rosyparka",
		price: 1400,
		inCart: 0,
	},
	{
		proName: "Anna Parka ",
		tag: "annaparka",
		price: 1200,
		inCart: 0,
	},
	{
		proName: "Anna Parka ",
		tag: "annaparka",
		price: 1200,
		inCart: 0,
	},
	{
		proName: "Anna Parka ",
		tag: "annaparka",
		price: 1200,
		inCart: 0,
	},
	{
		proName: "Anna Parka ",
		tag: "annaparka",
		price: 1200,
		inCart: 0,
	},
	{
		proName: "Kenvin Parka ",
		tag: "Kenvinparka",
		price: 1200,
		inCart: 0,
	},
	{
		proName: "Anna Parka ",
		tag: "annaparka",
		price: 1200,
		inCart: 0,
	},
];

// click event on add to cart button
for (let i = 0; i < carts.length; i++) {
	carts[i].addEventListener("click", (e) => {
		e.preventDefault(e);
		carts[i].innerHTML = "Already added";
		carts[i].style.color = "black";
		carts[i].style.backgroundColor = "white";
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

function cartNumberItems(product) {
	let productNumbers = localStorage.getItem("cartNumberItems");

	// change from string to number
	productNumbers = parseInt(productNumbers);
	if (productNumbers) {
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
function totalCost(product) {
	let cartCost = localStorage.getItem("totalCost");

	if (cartCost != null) {
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost", cartCost + product.price);
	} else {
		localStorage.setItem("totalCost", product.price);
	}
}

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
			<img src="./images/new-products/${item.tag}.jpg">${item.proName}	
			</div>
			<div class="price">${item.price}</div>
			<div class="quantity">${item.inCart}</div>
			<div class="total">
			${item.inCart * item.price},00 NOK
			</div>
			`;
		});
		productContainer.innerHTML += `
		<div class ="cartTotalContainer">
		<p class="cartTotalTitle"> TOTAL: </p>
		<p class="cartTotal">${cartCost},00 NOK </p>
		</div>
		`;
	}
}

onloadCartNumbers();
displayCart();
