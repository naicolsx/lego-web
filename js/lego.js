const modal = document.querySelector(".modal");
const spider = document.querySelector("#buttonSpider");
const closeModal = document.querySelector(".modal__content--close");

spider.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("visible");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("visible");
});
