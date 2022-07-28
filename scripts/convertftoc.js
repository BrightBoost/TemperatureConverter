window.onload = init;

function init() {
  const convertFtoCBtn = document.getElementById("calcFtoC");
  convertFtoCBtn.onclick = fToC;
}

function fToC() {
  const tempF = document.getElementById("tempF");
  let tempCCalc = (tempF.value - 32) / 1.8;

  const tempC = document.getElementById("tempC");
  tempC.value = tempCCalc;
}
