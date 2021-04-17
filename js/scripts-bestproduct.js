const bestList = document.querySelector(".main-content-2");
const url = "https://rainydays.thaifolkinnorway.com/wp-json/wc/store/products/";

async function getProducts() {
	try {
		const response = await fetch(url);
		const getResults = await response.json();
		//console.log(getResults);
		bestList.innerHTML = "";
		createBestList(getResults);
	} catch (error) {
		console.log(error);
	}
}
getProducts();

function createBestList(products) {
	for (i = 0; i < products.length; i++) {
		bestList.innerHTML += `<div class="best-seller">
		<img src="${products[i].images[0].src}" alt="${products[i].name}">
		<h4>${products[i].name} </h4>
		<p> Price: <span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\"></span>${products[i].price_html}</bdi></span> </p>
		<a href="product.html?id=${products[i].id}"> View detail</a>
		</div>`;
	}
}
