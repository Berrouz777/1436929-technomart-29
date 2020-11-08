const buyNows = document.querySelectorAll(".buy-now");
const modalCart = document.querySelector(".modal-add");
const closeAdd = modalCart.querySelector(".close-button");
for (buyNow of buyNows) {
buyNow.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalCart.classList.add("modal-cart");
});
};
closeAdd.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalCart.classList.remove("modal-cart");
});
