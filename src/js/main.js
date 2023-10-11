// SWIPER

import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: "auto",
});

// toggle third nav

var button = document.querySelector(".header-more-button");
var thirdnav = document.querySelector(".header-third-nav");

var openThirdnav = function () {
  thirdnav.classList.toggle("is-open");
  button.classList.toggle("is-active");
};
button.addEventListener("click", openThirdnav);

// third nav - flèche change quand on clique
document
  .querySelector(".header-more-button-arrow")
  .addEventListener("click", function () {
    this.classList.toggle("open");
  });

// scroll to top ID
var rootElement = document.documentElement;
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

// Footer swipe up

var footerbutton = document.querySelector(".footer-swipe-button");
var footer = document.querySelector(".footer");
// var footersocial = document.querySelector(".footer-social");

var openFooter = function () {
  console.log("test");
  footer.classList.toggle("is-open");
  footerbutton.classList.toggle("is-active");
  // footersocial.classList.toggle("is-active");
};
footerbutton.addEventListener("click", openFooter);
