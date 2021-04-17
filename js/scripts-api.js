const url = "https://rainydays.thaifolkinnorway.com/wp-json/wc/store/products/";

const womenJackets = document.querySelector(".women-jackets");
const menJackets = document.querySelector(".men-jackets");

async function getProducts() {
	try {
		const response = await fetch(url);
		const getResults = await response.json();
		console.log(getResults);
		womenJackets.innerHTML = "";
		menJackets.innerHTML = "";
		createHTML(getResults);
	} catch (error) {
		console.log(error);
	}
}
getProducts();

function createHTML(products) {
	products.forEach(function (product) {
		if (product.categories[0].name === "men") {
			menJackets.innerHTML += `<div>
		<img src="${product.images[0].src}" alt="${product.name}">
		<h3>${product.name} </h3>
		<p> Price: <span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\"></span>${product.price_html}</bdi></span> </p>
		<div class="button"><a href="product.html?id=${product.id}"> View detail</a></div>
		</div>`;
		}
		if (product.categories[0].name === "women") {
			womenJackets.innerHTML += `<div>
		<img src="${product.images[0].src}" alt="${product.name}">
		<h3>${product.name} </h3>
		<p> Price: <span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\"></span>${product.price_html}</bdi></span> </p>
		<div class="button"><a href="product.html?id=${product.id}"> View detail</a></div>
		</div>`;
		}
	});
}
