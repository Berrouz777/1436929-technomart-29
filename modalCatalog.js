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
