const sliderImagesContainer = document.querySelector(".slider-images");
const sliderLeftButton = document.getElementById("slider-left-button");
const sliderRightButton = document.getElementById("slider-right-button");
const sliderRadioButtons = document.querySelector(".slider-radio-buttons");

const imageSources = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
  "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg",
  "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
];

let currentIndex = 0;

imageSources.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  sliderImagesContainer.appendChild(img);
});

function goToSlide(index) {
  currentIndex = (index + imageSources.length) % imageSources.length;
  sliderImagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateDots();
}

sliderLeftButton.addEventListener("click", () => goToSlide(currentIndex - 1));
sliderRightButton.addEventListener("click", () => goToSlide(currentIndex + 1));
