let sliderLeftButton = document.getElementById("slider-left-button");
let sliderRightButton = document.getElementById("slider-right-button");
let sliderImage = document.getElementById("slider-image");
let sliderRadioButtons = document.querySelector(".slider-radio-buttons");

let imageSources = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
  "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg",
  "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
];

let sliderCounter = 0;

sliderImage.setAttribute("src", imageSources[sliderCounter]);

for (let i = 0; i < imageSources.length; i++) {
  let radioButton = document.createElement("button");
  radioButton.textContent = "*";
  radioButton.addEventListener("click", () => {
    sliderCounter = i;
    sliderImage.setAttribute("src", imageSources[sliderCounter]);
  });
  sliderRadioButtons.appendChild(radioButton);
}

sliderLeftButton.addEventListener("click", () => {
  if (sliderCounter > 0) {
    sliderImage.setAttribute("src", imageSources[--sliderCounter]);
  } else {
    sliderCounter = imageSources.length - 1;
    sliderImage.setAttribute("src", imageSources[sliderCounter]);
  }
});

sliderRightButton.addEventListener("click", () => {
  if (sliderCounter < imageSources.length - 1) {
    sliderImage.setAttribute("src", imageSources[++sliderCounter]);
  } else {
    sliderCounter = 0;
    sliderImage.setAttribute("src", imageSources[sliderCounter]);
  }
});
