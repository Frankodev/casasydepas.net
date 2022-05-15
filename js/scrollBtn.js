/** @format */

// declarando las variables del scroll top
const scrollButton = document.querySelector(".scroll-top");

if (scrollButton) {
  window.addEventListener("scroll", () => {
    if (scrollY > window.innerHeight * 1.2) {
      scrollButton.style.display = "flex";
    } else {
      scrollButton.style.display = "none";
    }
  });
  scrollButton.addEventListener("click", () => {
    window.scrollBy(0, -900);
  });
}
