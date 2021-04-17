const cartItems = JSON.parse(localStorage.getItem("cartList"));
const cartContainer = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");

let total = 0;
cartItems.forEach(function (product) {
	total = product.prices.price;
	cartContainer.innerHTML += `<div class="cart-item">
        <h4><b>Product Name:</b>${product.name}</h4>
				<h4><b>Price: Kr. </b>${product.prices.price}</h4>
        <div style="background-image: url(${product.images[0].src})" class="cart-image"></div>
				</div>`;
});
totalContainer.innerHTML = `Total:${total}`;
