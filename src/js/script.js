// Smooth scroll anchor links
const homeLinks = document.querySelectorAll(".home__link[data-goto]");
if (homeLinks.length > 0) {
	homeLinks.forEach(link => {
		link.addEventListener("click", onHomeLinkClick);
	});

	function onHomeLinkClick(e) {
		const homeLink = e.target;
		if (
			homeLink.dataset.goto &&
			document.querySelector(homeLink.dataset.goto)
		) {
			const gotoBlock = document.querySelector(homeLink.dataset.goto);
			const gotoBlockValue =
				gotoBlock.getBoundingClientRect().top +
				window.scrollY -
				document.querySelector("header").offsetHeight;
			window.scroll({ top: gotoBlockValue, behavior: "smooth" });
			e.preventDefault();
		}
	}
}

const reviewsPrev = document.querySelector(".reviews__prev");
const reviewsNext = document.querySelector(".reviews__next");
const reviewsList = document.querySelector(".reviews__list");

if (reviewsPrev && reviewsNext && reviewsList) {
	reviewsPrev.addEventListener("click", onReviewsPrevClick);
	reviewsNext.addEventListener("click", onReviewsNextClick);

	function onReviewsPrevClick(e) {
		const currentTranslateX = currentValueTranslateX();
		const activeItemIndex = activeElementIndex();

		reviewsList.children[activeItemIndex].classList.remove(
			"reviews-item--active"
		);

		if (!currentTranslateX) {
			reviewsList.children[activeItemIndex - 1].classList.add(
				"reviews-item--active"
			);
			reviewsList.style.transform = "translateX(606px)";
			return;
		}

		if (activeItemIndex === 0) {
			reviewsList.lastElementChild.classList.add("reviews-item--active");
			reviewsList.style.transform = `translateX(${
				-Math.floor(reviewsList.childElementCount / 2) * 606
			}px)`;
			return;
		}

		reviewsList.children[activeItemIndex - 1].classList.add(
			"reviews-item--active"
		);
		reviewsList.style.transform = `translateX(${currentTranslateX + 606}px)`;
	}

	function onReviewsNextClick(e) {
		const currentTranslateX = currentValueTranslateX();
		const activeItemIndex = activeElementIndex();

		reviewsList.children[activeItemIndex].classList.remove(
			"reviews-item--active"
		);

		if (!currentTranslateX) {
			reviewsList.children[activeItemIndex + 1].classList.add(
				"reviews-item--active"
			);
			reviewsList.style.transform = "translateX(-606px)";
			return;
		}

		if (activeItemIndex === reviewsList.childElementCount - 1) {
			reviewsList.firstElementChild.classList.add("reviews-item--active");
			reviewsList.style.transform = `translateX(${
				Math.floor(reviewsList.childElementCount / 2) * 606
			}px)`;
			return;
		}

		reviewsList.children[activeItemIndex + 1].classList.add(
			"reviews-item--active"
		);
		reviewsList.style.transform = `translateX(${currentTranslateX - 606}px)`;
	}

	function currentValueTranslateX() {
		const transformValue = reviewsList.style.transform;
		const value = Number(
			transformValue.substring(
				transformValue.indexOf("(") + 1,
				transformValue.indexOf("px")
			)
		);
		return value;
	}

	function activeElementIndex() {
		const elementIndex = Object.values(reviewsList.children).findIndex(
			element => element.classList.contains("reviews-item--active")
		);
		return elementIndex;
	}
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20
	) {
		document.getElementById("myBtn").style.display = "block";
	} else {
		document.getElementById("myBtn").style.display = "none";
	}
}

const topButton = document.getElementById("myBtn");
topButton.addEventListener("click", onHomeLinkClick);
