//Caching the DOM
const css = document.querySelector("h3");
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const body = document.getElementById("gradient");
const randomBtn = document.querySelector("#random");



function changeBackground() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = body.style.background + ";";
}

function setColor() {
  color1.value = '#ff0000';
  color2.value = '#ffff00';
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = body.style.background + ";";
}

function randomize() {
  let randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
  let randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
  body.style.background = `linear-gradient(to right, #${randomColor1}, #${randomColor2})`;
  css.textContent = body.style.background + ";";
  color1.value = `#${randomColor1}`;
  color2.value = `#${randomColor2}`;
}

randomBtn.addEventListener("click", randomize);

color1.addEventListener("input", changeBackground);

color2.addEventListener("input", changeBackground);

window.addEventListener("load", setColor);