/** @format */

// variable del div contenedor de la foto principal
const imgPrincipal = document.querySelector("#img_principal");

// variable de las fotos de la galeria
const imagenes = document.querySelectorAll("#galeria img");

// variable de la imagen activa
const imagenActiva = document.querySelector("#img-activa");

// Indice de la imagen a la que hacemos click
let indiceImagen = 0;

// Tareas:
// 1.- al dar click en una foto de la galeria esta debera de aparecer en la 'foto principal gde'

const cambiarImagen = (event) => {
  imagenActiva.src = event.target.src;
  indiceImagen = Array.from(imagenes).indexOf(event.target);
};

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", cambiarImagen);
});
