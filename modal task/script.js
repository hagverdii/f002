const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const cancelBtn = document.getElementById("cancelBtn");
const nameInput = document.getElementById("nameInput");

openModalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

function closeModal() {
  modal.classList.add("hidden");
  nameInput.value = "";
}

closeModalBtn.addEventListener("click", closeModal);
cancelBtn.addEventListener("click", closeModal);
