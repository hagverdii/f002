let itemsContainerDiv = document.querySelector(".items-container");
let favItemsContainerDiv = document.querySelector(".favourites-container");

const myItems = [
  { id: 1, title: "Iphone", description: "This is just a test description", price: "3000 AZN" },
  { id: 2, title: "Samsung", description: "This is just a test description", price: "3000 AZN" },
  { id: 3, title: "Nokia", description: "This is just a test description", price: "3000 AZN" },
  { id: 4, title: "Huawei", description: "This is just a test description", price: "3000 AZN" },
  { id: 5, title: "Xiaomi", description: "This is just a test description", price: "3000 AZN" },
];
const favItems = [];

for (let i = 0; i < myItems.length; i++) {
  let item = document.createElement("div");
  item.dataset.id = myItems[i].id;
  item.classList.add("item");
  item.innerHTML = `
  <button><i class="fa-solid fa-star"></i></button>      
  <h3>${myItems[i].title}</h3>
        <p>${myItems[i].description}</p>
        <p>${myItems[i].price}</p>`;
  const button = item.querySelector("button");

  button.addEventListener("click", () => {
    const existingElement = favItems.find((item) => item.id === myItems[i].id);
    if (!existingElement) {
      favItems.push(myItems[i]);
      button.classList.add("active");
    } else {
      const index = favItems.indexOf(existingElement);
      favItems.splice(index, 1);
      button.classList.remove("active");
    }
    renderFavItems();
  });

  itemsContainerDiv.appendChild(item);
}

function renderFavItems() {
  favItemsContainerDiv.innerHTML = "";

  for (let i = 0; i < favItems.length; i++) {
    let item = document.createElement("div");
    item.dataset.id = favItems[i].id + "f";
    item.classList.add("item");
    item.innerHTML = `     
  <h3>${favItems[i].title}</h3>
        <p>${favItems[i].description}</p>
        <p>${favItems[i].price}</p>`;
    favItemsContainerDiv.appendChild(item);
  }
}
