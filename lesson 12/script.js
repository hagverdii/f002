// let toggleNavButton = document.getElementById("toggle-sidebar");
// let sidebarElement = document.getElementById("sidebar");
// let navListElement = document.getElementById("nav-list");

// toggleNavButton.addEventListener("click", () => {
//   sidebarElement.classList.toggle("hide-element");

//   for (let i = 0; i < 3; i++) {
//     const newListElement = document.createElement("li");
//     newListElement.textContent = "This is element #" + (i + 1);
//     navListElement.appendChild(newListElement);
//   }
// });

let imageContainer = document.getElementById("image-container");

let newImg = document.createElement("img");
newImg.setAttribute(
  "src",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png"
);

imageContainer.appendChild(newImg);
