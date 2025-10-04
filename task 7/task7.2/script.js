let toggleParagraphButton = document.getElementById("toggle-paragraph");
let myText = document.getElementById("my-text");

toggleParagraphButton.addEventListener("click", () => {
  myText.classList.toggle("hide-element");
});
