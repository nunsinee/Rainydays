const url = "https://rainydays.thaifolkinnorway.com/wp-json/wc/store/products/";

const womenJackets = document.querySelector(".women-jackets");
const bestList = document.querySelector(".main-content-2");

async function getProducts() {
	try {
		const response = await fetch(url);
		const getResults = await response.json();

		womenJackets.innerHTML = "";
		createHTML(getResults);
		createBestList(getResults);
	} catch (error) {
		console.log(error);
	}
}
getProducts();

function createHTML(products) {
	products.forEach(function (product) {
		if (product.categories[0].name === "women") {
			womenJackets.innerHTML += `<div class="best-seller">
		<img src="${product.images[0].src}" alt="${product.name}">
		<h3>${product.name} </h3>
		<p> Price: <span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\"></span>${product.price_html}</bdi></span> </p>
		<div class="button"><a href="product.html?id=${product.id}"> View detail</a></div>
		</div>`;
		}
	});
}

function createBestList(products) {
	for (i = 0; i < products.length; i++) {
		bestList.innerHTML += `<div class="best-seller">
		<img src="${products[i].images[0].src}" alt="${products[i].name}">
		<h3>${products[i].name} </h3>
		<p> Price: <span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\"></span>${products[i].price_html}</bdi></span> </p>
		<a href="product.html?id=${products[i].id}"> View detail</a>
		</div>`;
	}
}
