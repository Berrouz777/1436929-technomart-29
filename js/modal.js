const clickWriteUs = document.querySelector(".show-modal");
const clickMap = document.querySelector(".show-maps");
const modalWriteUs = document.querySelector(".modal-write-us");
const modalShowMap = document.querySelector(".modal-map");
const closeWriteUs = modalWriteUs.querySelector(".close-button");
const closeMap = modalShowMap.querySelector(".close-button");
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
buyNow.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalCart.classList.add("modal-cart");
});
