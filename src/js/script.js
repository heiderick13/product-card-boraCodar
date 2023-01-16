const btnOpen = document.querySelector("#open");
const btnClose = document.querySelector("#close");
const modal = document.querySelector("#modal");

btnOpen.addEventListener("click", () => {
  let src = document
    .querySelector("#sofa-img")
    .setAttribute("src", "../../img/sofa1.gif");

  btnOpen.classList.remove("active");
  btnClose.classList.add("active");
});

btnClose.addEventListener("click", () => {
  let src = document
    .querySelector("#sofa-img")
    .setAttribute("src", "../../img/sofa.png");

  btnOpen.classList.add("active");
  btnClose.classList.remove("active");
});
