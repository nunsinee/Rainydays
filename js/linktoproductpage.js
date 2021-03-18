let goPropage = document.querySelectorAll(".product-links");

for (let i = 0; i < goPropage.length; i++) {
	goPropage[i].addEventListener("click", (e) => {
		e.preventDefault();
		e.stopPropagation();
		location.href = "product.html";
	});
}
