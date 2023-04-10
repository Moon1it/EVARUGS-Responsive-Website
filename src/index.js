import "./index.html";
import "./index.scss";
import "./js/script.js";

new Swiper(".reviews__content", {
	slidesPerView: 4,
	spaceBetween: 25,
	// slidesPerGroup: 3,
	loop: true,
	// loopFillGroupWithBlank: true,
	centerClide: true,
	fade: true,
	grabCursor: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		// dynamicBullets: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		767.98: {
			slidesPerView: 2,
		},
		991.98: {
			slidesPerView: 3,
		},
		1300: {
			slidesPerView: 4,
		},
	},
});
