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

function randomize() {
  var randomNumbers = [];
  for (let i = 0; i < 6; i++) {
    randomNumbers.push(Math.floor(Math.random() * 255));
  }
  body.style.background = "linear-gradient(to right, rgb(" + randomNumbers[0] + ", " + randomNumbers[1] + ", " + randomNumbers[2] + "), rgb(" + randomNumbers[3] + ", " + randomNumbers[4] + ", " + randomNumbers[5] + ")";
  css.textContent = body.style.background + ";";
}

randomBtn.addEventListener("click", randomize);

color1.addEventListener("input", changeBackground);

color2.addEventListener("input", changeBackground);

window.addEventListener("load", setColor);