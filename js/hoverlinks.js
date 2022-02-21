/** @format */

// variables
const links = document.querySelectorAll(".link");

// función para eliminar los id´s en la barra de navegación
const hoverLink = function (e) {
  e.preventDefault();

  if (e.target.classList.contains("link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
};

// evento click que llama a la función hoverLink
links.forEach((link) => {
  link.addEventListener("click", hoverLink);
});
