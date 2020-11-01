const clickWriteUs = document.querySelector(".show-modal");
const clickMap = document.querySelector(".show-maps")
const modalWriteUs = document.querySelector(".modal-write-us");
const modalShowMap = document.querySelector(".modal-map");
const closeWriteUs = modalWriteUs.querySelector(".close-button");
const closeMap = modalShowMap.querySelector(".close-button");
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
