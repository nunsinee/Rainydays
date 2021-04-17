const cartItems = JSON.parse(localStorage.getItem("cartList"));
const cartContainer = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");

let total = 0;
cartItems.forEach(function (product) {
	total += product.price;
	cartContainer.innerHTML += `<div class="cart-item">
        <h4>${product.name}</h4>
        <div style="background-image: url(${product.images[0].src})" class="cart-image"></div>
				<h3>Total: ${product.price_html}</h3>
				</div>`;
});
