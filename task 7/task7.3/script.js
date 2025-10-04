let makeBiggerButton = document.getElementById("make-bigger");
let baloon = document.getElementById("baloon");

let width = 100;
let height = 100;
let fontSize = 14;

makeBiggerButton.addEventListener("click", () => {
  fontSize += 4;
  width += 20;
  height += 20;

  baloon.style.fontSize = fontSize + "px";
  baloon.style.height = height + "px";
  baloon.style.width = width + "px";
});
