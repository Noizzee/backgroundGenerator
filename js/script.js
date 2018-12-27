//Caching the DOM
var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.getElementById("gradient");
var randomBtn = document.querySelector("#random");



function changeBackground() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

function setColor() {
  color1.value = '#ff0000';
  color2.value = '#ffff00';
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

function randomize(random1, random2, random3) {
  random1 = Math.floor(Math.random() * 255);
  random2 = Math.floor(Math.random() * 255);
  random3 = Math.floor(Math.random() * 255);
  body.style.background = "linear-gradient(to right, rgb(" + random1 + ", " + random2 + ", " + random3 + "), rgb(" + random2 + ", " + random3 + ", " + random1 + ")";
  css.textContent = body.style.background + ";";
}

randomBtn.addEventListener("click", randomize);

color1.addEventListener("input", changeBackground);

color2.addEventListener("input", changeBackground);

window.addEventListener("load", setColor);