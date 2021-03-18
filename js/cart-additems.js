// put item on cart using LocalStorage

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
		proName: "New Anna Parka ",
		tag: "newannaparka",
		price: 1200,
		inCart: 0,
	},
	{
		proName: "New Anna Parka ",
		tag: "newannaparka",
		price: 1200,
		inCart: 0,
	},
	{
		proName: "New Anna Parka ",
		tag: "newannaparka",
		price: 1200,
		inCart: 0,
	},
	{
		proName: "New Anna Parka ",
		tag: "newannaparka",
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
		proName: "New Arild Parka ",
		tag: "newarildparka",
		price: 1200,
		inCart: 0,
	},
	{
		proName: "New Arild Parka ",
		tag: "newarildparka",
		price: 1200,
		inCart: 0,
	},
	{
		proName: "New Arild Parka ",
		tag: "newarildparka",
		price: 1200,
		inCart: 0,
	},
	{
		proName: "New Arild Parka ",
		tag: "newarildparka",
		price: 1200,
		inCart: 0,
	},
];

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
