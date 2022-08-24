/** @format */

// declarando las variables del scroll rigth Ventas
const btnVentas = document.getElementById("btn-ventas");
const boxVentas = document.getElementById("box-ventas");

// declarando las variables del scroll rigth Rentas
const btnRentas = document.getElementById("btn-rentas");
const boxRentas = document.getElementById("box-rentas");

// funcion evento click para hacer scroll rigth de la sección de Ventas
btnVentas.addEventListener("click", () => {
  console.log("click btn Ventas");
  boxVentas.scrollBy(345, 0);
});

// funcion evento click para hacer scroll rigth de la sección de Rentas
btnRentas.addEventListener("click", () => {
  console.log("click btn Rentas");
  boxRentas.scrollBy(340, 0);
});
