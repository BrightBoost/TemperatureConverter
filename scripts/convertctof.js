window.onload = init;

function init() {
  const convertCtoFBtn = document.getElementById("calcCtoF");
  convertCtoFBtn.onclick = cToF;
}

function cToF() {
  const tempC = document.getElementById("tempC");
  let tempFCalc = (tempC.value * 1.8) + 32;

  const tempF = document.getElementById("tempF");
  tempF.value = tempFCalc;
}
