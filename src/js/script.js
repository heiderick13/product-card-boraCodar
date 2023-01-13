const btnOpen = document.querySelector("#open");
const btnClose = document.querySelector("#close");
const modal = document.querySelector("#modal");

btnOpen.addEventListener("click", () => {
  modal.showModal();
});

btnClose.addEventListener("click", () => {
  modal.close();
});
