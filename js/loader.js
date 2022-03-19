/** @format */

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 150);
}

window.onload = fadeOut;
