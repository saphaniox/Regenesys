const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");

//Open the Modal
openModalButton.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
});
