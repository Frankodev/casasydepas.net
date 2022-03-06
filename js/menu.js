/** @format */

let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");
let darAltaInmobiliaria = document.querySelector(".activ");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

darAltaInmobiliaria.onclick = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};
