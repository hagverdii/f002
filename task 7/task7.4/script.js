let plusBtn = document.getElementById("plus-btn");
let minusBtn = document.getElementById("minus-btn");
let myNumText = document.getElementById("my-num");

let myNum = 0;

plusBtn.addEventListener("click", () => {
  myNum++;
  myNumText.textContent = myNum;
});

minusBtn.addEventListener("click", () => {
  myNum--;
  myNumText.textContent = myNum;
});
