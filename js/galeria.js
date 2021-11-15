/** @format */

// declarando variables
const imagenes = document.querySelectorAll("#galeria img");
const imagenActiva = document.querySelector("#img_activa");

// Tareas:
// 1.- al dar click en una foto de la galeria esta debera de aparecer en la img principal 'id=img-activa'

// función que cambia la imagen activa 'Imagen Principal'
const cambiarImagen = (event) => {
  imagenActiva.src = event.target.src;
  // indiceImagen utiliza el metodo Array.from('element').indexOf('target'), para saber el indice del objeto dentro del array, se obtiene al ejecutar la función evento.click()
  indiceImagen = Array.from(imagenes).indexOf(event.target);
  // console.log(indiceImagen);
};
// metodo de Array 'forEach' para rrecorrer el array de imagenes y obtener su indice en evento 'click', wl evento también llama a la función 'cambiarImagne'
imagenes.forEach((imagen) => {
  imagen.addEventListener("click", cambiarImagen);
});
