let colorBox = document.querySelector(".color-box");
let redBtn = document.querySelector(".red-btn");
let greenBtn = document.querySelector(".green-btn");
let blueBtn = document.querySelector(".blue-btn");

redBtn.addEventListener("click", () => {
  colorBox.style.backgroundColor = "red";
  colorBox.textContent = "red";
});

greenBtn.addEventListener("click", () => {
  colorBox.style.backgroundColor = "green";
  colorBox.textContent = "green";
});

blueBtn.addEventListener("click", () => {
  colorBox.style.backgroundColor = "blue";
  colorBox.textContent = "blue";
});
