const modalEl = document.querySelector("#modal");
const openModalBtnEl = document.querySelector("#open-modal-btn");
const closeModalBtnEl = document.querySelector("#close-modal-btn");
const overlayEl = document.querySelector("#overlay");

openModalBtnEl.addEventListener("click", () => {
  modalEl.classList.add("open");
  overlayEl.classList.add("open");
});

closeModalBtnEl.addEventListener("click", closeModal);

overlayEl.addEventListener("click", closeModal);

function closeModal() {
  modalEl.classList.remove("open");
  overlayEl.classList.remove("open");
}
