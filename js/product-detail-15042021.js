const priceContainer = document.querySelector(".new-subtitle");
const nameContainer = document.querySelector("#title");
const productPhoto = document.querySelector(".pro-photo");
const productInfo = document.querySelector(".pro-spec2");
const colorSelect = document.querySelector("#product-color");
const sizeSelect = document.querySelector("#product-size");
const quantSelect = document.querySelector("#product-quant");
const addCartButton = document.querySelector(".addTocart");

//Get the id from the query string
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

// //if the id is null, redirect to the homepage
if (id === null) {
	location.href = "/";
}

const urlID =
	"https://rainydays.thaifolkinnorway.com/wp-json/wc/store/products/" + id;

console.log(urlID);

async function fetchProduct(urlID) {
	try {
		const response = await fetch(urlID);
		const details = await response.json();
		console.log(details);

		changePageTitle(details);
		displayDetail(details);
	} catch (error) {
		console.log(error);
	}
}
fetchProduct(urlID);

function displayDetail(details) {
	priceContainer.innerHTML = `${details.price_html}`;
	nameContainer.innerHTML = `${details.name}`;
	productPhoto.innerHTML = `${details.description}`;
	productInfo.innerHTML = `${details.short_description}`;
	addCartButton.innerHTML = `<button class="product-button" data-product="${details.prices.price}">Add to Cart </button>`;

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

/////////////
