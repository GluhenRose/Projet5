const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

i = 0;

const arrowLeft = document.getElementById("arrowleft");
const arrowRight = document.getElementById("arrowright");
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.getElementById("tagline");
const allDot = document.querySelectorAll(".dot");

function uptadeDots() {
	allDot.forEach((dot, index) => {
		if (index === i) {
			dot.classList.add("dot_selected")
		} else {
			dot.classList.remove("dot_selected")
		}	
	})
}

function slider() {
	bannerImg.src = `./assets/images/slideshow/${slides[i].image}`;
	tagLine.innerHTML = `${slides[i].tagLine}`;

	uptadeDots()
} 

arrowLeft.addEventListener ("click", () => {
	i = i-1
	if (i < 0) {
		i = slides.length -1
	}
	slider();
})

arrowRight.addEventListener ("click", () => {
	i = i+1
	if (i >= slides.length) {
		i = 0
	}
	slider();
})
