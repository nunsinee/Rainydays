const priceContainer = document.querySelector(".new-subtitle");
const nameContainer = document.querySelector("#title");
const productPhoto = document.querySelector(".pro-photo");
const productInfo = document.querySelector(".spec-info");
const colorSelect = document.querySelector("#product-color");
const sizeSelect = document.querySelector("#product-size");
const quantSelect = document.querySelector("#product-quant");
const priceReg = document.querySelector(".product-price");

//Get the id from the query string
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

// //if the id is null, redirect to the homepage
if (id === null) {
	location.href = "/";
}

const urlApi =
	"https://rainydays.thaifolkinnorway.com/wp-json/wc/store/products/" + id;

async function productArray(urlApi) {
	try {
		const response = await fetch(urlApi);
		const details = await response.json();
		window.localStorage.setItem("productArray", JSON.stringify(details));
		displayDetail(details);
		changePageTitle(details);
	} catch (error) {
		console.log(error);
	}
}
productArray(urlApi);

//Display Details

function displayDetail(details) {
	priceContainer.innerHTML = `${details.price_html}`;
	nameContainer.innerHTML = `${details.name}`;
	productPhoto.innerHTML = `${details.description}`;
	productInfo.innerHTML = `${details.short_description}`;
	priceReg.innerHTML = `<h2>Kr ${details.prices.price}</h2>`;

	const colorAtt = details.attributes[0].terms;
	const sizeAtt = details.attributes[1].terms;
	const quantAtt = details.attributes[2].terms;

	for (let i = 0; i < colorAtt.length; i++) {
		colorSelect.innerHTML += `<option value="${colorAtt[i].name}">${colorAtt[i].name}</option>`;
	}

	for (let i = 0; i < sizeAtt.length; i++) {
		sizeSelect.innerHTML += `<option value="${sizeAtt[i].name}">${sizeAtt[i].name}</option>`;
	}

	for (let i = 0; i < quantAtt.length; i++) {
		quantSelect.innerHTML += `<option value="${quantAtt[i].name}">${quantAtt[i].name}</option>`;
	}
}

// change page title to one of the property
const titlePage = document.querySelector("title");

function changePageTitle(details) {
	titlePage.innerHTML = `${details.name}`;
}

///////////CART CART/////////CART CART/////////

let buttons = document.querySelectorAll(".add-cart"); // Add Cart button
let itemNo = document.querySelector(".cart span"); // icon cart

const cart = document.querySelector(".cart-container");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
let cartArray = [];

// click event on add to cart button
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", (e) => {
		e.preventDefault(e);

		const products = JSON.parse(localStorage.getItem("productArray")) || [];

		const itemToAdd = products;

		cartArray.push(itemToAdd);
		showCart(cartArray);
		cartNumberItems(products);
		localStorage.setItem("cartList", JSON.stringify(cartArray));
	});
}

function showCart(products) {
	cart.style.display = "flex";
	cartList.innerHTML = "";
	let total = 0;

	products.forEach(function (product) {
		total += product.prices.price;
		cartList.innerHTML = `<div class="cart-item">
		<h4> ${product.name}</h4>  
		<div style ="background-image:url(${product.images[0].src})" class="cart-image"> </div>	
		</div>`;
		totalContainer.innerHTML = `<h4> ${product.price_html}</h4>`;
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

function cartNumberItems(products) {
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
}

onloadCartNumbers();
