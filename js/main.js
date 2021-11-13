/** @format */

let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header .navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// Aplicando función al #search-form (modal)
// document.guerySelector("#modal").onclick = () => {
//   document.getElementsByClassName("search-form").classList.toggle("active");
// };

// document.querySelector("#close").onclick = () => {
//   document.getElementsByClassName("search-form").classList.remove("active");
// };

var swiper = new Swiper(".home-slider", {
  spaceBetween: 50,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 1500);
}

window.onload = fadeOut;

//SCRIPT PARA ENVIO DE FORMULARIO OCt-21
// const formulario = document.getElementById("formulario");
// const registro = document.getElementById("registro");
// const exito = document.getElementById("exito");

// formulario.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   await fetch(
//     "https://sheet.best/api/sheets/3bbe9427-c375-4596-96e3-f5f98c7b56ae",
//     {
//       method: "POST",
//       mode: "cors",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         Nombre: formulario.nombre.value,
//         Telefono: formulario.telefono.value,
//         Mensaje: formulario.mensaje.value,
//       }),
//     }
//   );
//   registro.classList.remove("activo");
//   exito.classList.add("activo");
// });
