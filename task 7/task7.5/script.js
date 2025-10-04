let leftBtn = document.getElementById("left-btn");
let rightBtn = document.getElementById("right-btn");
let myBox = document.getElementById("my-box");

let marginLeft = 0;

rightBtn.addEventListener("click", () => {
  marginLeft += 10;
  myBox.style.marginLeft = marginLeft + "px";
});

leftBtn.addEventListener("click", () => {
  if (marginLeft < 10) return;
  marginLeft -= 10;
  myBox.style.marginLeft = marginLeft + "px";
});
