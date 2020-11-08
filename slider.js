const special = document.querySelector(".assortment-item-special");
const specialTextOne = special.querySelector("li:first-child");
const specialTextTwo = special.querySelector("li:nth-child(2)");
const btnNext = special.querySelector(".button-next");
const btnBack = special.querySelector(".button-back");
const shippingBtn = document.querySelector(".service-buttons .service-button:first-of-type");
const garanteeBtn = document.querySelector(".service-buttons .service-button:nth-of-type(2)");
const creditBtn = document.querySelector(".service-buttons .service-button:last-of-type");
const shipping = document.querySelector(".service-list li:first-of-type");
const garantee = document.querySelector(".service-list li:nth-of-type(2)");
const credit = document.querySelector(".service-list li:last-of-type");
btnNext.addEventListener("click", function (evt) {
  evt.preventDefault();
  special.classList.remove("background-special-one");
  special.classList.add("background-special-two");
  specialTextOne.classList.add("none");
  specialTextTwo.classList.remove("none");
  btnBack.classList.remove("button-slider-active");
  btnNext.classList.add("button-slider-active");
});
btnBack.addEventListener("click", function (evt) {
  evt.preventDefault();
  special.classList.add("background-special-one");
  special.classList.remove("background-special-two");
  specialTextOne.classList.remove("none");
  specialTextTwo.classList.add("none");
  btnNext.classList.remove("button-slider-active");
  btnBack.classList.add("button-slider-active");
});
