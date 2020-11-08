const special = document.querySelector(".assortment-item-special");
const specialTextOne = special.querySelector("li:first-child");
const specialTextTwo = special.querySelector("li:nth-child(2)");
const btnNext = special.querySelector(".button-next");
const btnBack = special.querySelector(".button-back");
const shipping = document.querySelector(".shipping");
const garantee = document.querySelector(".garantee");
const credit = document.querySelector(".credit");
const btnShipping = document.querySelector(".service-buttons button:first-of-type");
const btnGarantee = document.querySelector(".service-buttons button:nth-of-type(2)");
const btnCredit = document.querySelector(".service-buttons button:last-of-type");
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
btnGarantee.addEventListener("click", function (evt) {
  evt.preventDefault();
  btnShipping.classList.remove("service-button-active");
  btnGarantee.classList.add("service-button-active");
  btnCredit.classList.remove("service-button-active");
  shipping.classList.remove("active");
  credit.classList.remove("active");
  garantee.classList.add("active");
});
btnCredit.addEventListener("click", function (evt) {
  evt.preventDefault();
  btnShipping.classList.remove("service-button-active");
  btnGarantee.classList.remove("service-button-active");
  btnCredit.classList.add("service-button-active");
  shipping.classList.remove("active");
  garantee.classList.remove("active");
  credit.classList.add("active");
});
btnShipping.addEventListener("click", function (evt) {
  evt.preventDefault();
  btnShipping.classList.add("service-button-active");
  btnGarantee.classList.remove("service-button-active");
  btnCredit.classList.remove("service-button-active");
  garantee.classList.remove("active");
  credit.classList.remove("active");
  shipping.classList.add("active");
});
