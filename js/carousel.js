const url = "https://rainydays.thaifolkinnorway.com/wp-json/wc/store/products/";

const imageSlide = document.querySelector(".track");

// get Slide Show
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const track = document.querySelector(".track");
let carouselWidth = document.querySelector(".carousel-container").offsetWidth;

async function getProducts() {
	try {
		const response = await fetch(url);
		const getResults = await response.json();

		imageSlide.innerHTML = "";
		createSlideHtml(getResults);

		// to do fit every screen size
		window.addEventListener("resize", () => {
			carouselWidth = document.querySelector(".carousel-container").offsetWidth;
		});

		let index = 0;
		next.addEventListener("click", () => {
			index++;
			previous.classList.add("show");
			track.style.transform = `translateX(-${index * carouselWidth}px)`;
			if (track.offsetWidth - index * carouselWidth < carouselWidth) {
				next.classList.add("hide");
			}
		});

		previous.addEventListener("click", () => {
			index--;
			next.classList.remove("hide");
			if (index === 0) {
				previous.classList.remove("show");
			}
			track.style.transform = `translateX(-${index * carouselWidth}px)`;
		});
	} catch (error) {
		console.log("An error occurred");
		imageSlide.innerHTML = displayError(
			"An error occurred when calling the API"
		);
	}
}
getProducts();

function createSlideHtml(slide) {
	for (let i = 0; i < slide.length; i++) {
		imageSlide.innerHTML += `<div.card-container>
		<div class="card">
		<div class="slideImg">
		<img src="${slide[i].images[0].src}">
		</div>
		<div class="info-price">
		<h4>"${slide[i].name}"</h4>
		<h4>KR.${slide[i].prices.price}</h4>
		<h5><a href="product.html?id=${slide[i].id}"> View detail</a></h5>
		</div>
		</div>
		</div>`;
	}
}
