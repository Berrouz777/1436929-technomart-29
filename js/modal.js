const clickWriteUs = document.querySelector(".show-modal");
const clickMap = document.querySelector(".show-maps");
const modalWriteUs = document.querySelector(".modal-write-us");
const modalShowMap = document.querySelector(".modal-map");
const closeWriteUs = modalWriteUs.querySelector(".close-button");
const closeMap = modalShowMap.querySelector(".close-button");
const special = document.querySelector(".assortment-item-special");
const specialTextOne = special.querySelector(".assortment-item-special-text:first-child");
const specialTextTwo = special.querySelector(".assortment-item-special-text:nth-child(2)");
const btnNext = special.querySelector(".button-next");
const btnBack = special.querySelector(".button-back");
const buyNows = document.querySelectorAll(".buy-now");
const modalCart = document.querySelector(".modal-add");
const buttonOff = modalCart.querySelector(".button-off");
for (buyNow of buyNows) {
buyNow.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalCart.classList.add("modal-cart");
});
};
buttonOff.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalCart.classList.remove("modal-cart");
});
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
clickWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWriteUs.classList.add("modal");
});
closeWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWriteUs.classList.toggle("modal");
});
clickMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalShowMap.classList.add("modal");
});
closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalShowMap.classList.toggle("modal");
});
