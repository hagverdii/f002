let itemsListDiv = document.querySelector(".items-list");

let fetchAllBtn = document.getElementById("fetch-all-btn");
let fetchElectronicsBtn = document.getElementById("fetch-electronics-btn");
let fetchJeweleryBtn = document.getElementById("fetch-jewelery-btn");
let fetchMClothingBtn = document.getElementById("fetch-mclothing-btn");
let fetchWClothingBtn = document.getElementById("fetch-wclothing-btn");

async function fetchItemsList(category) {
  if (!category) {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    if (data && data.length) {
      itemsListDiv.innerHTML = "";
      data.forEach((item) => {
        itemsListDiv.innerHTML += `<div class="item">
        <img src="${item.image}" alt="Product" />
        <hr />
        <h4>${item.title}</h4>
        <p>${item.price}</p>
      </div>`;
      });
    } else {
      itemsListDiv.innerHTML = "<h2>NO DATA</h2>";
    }
  } else {
    const response = await fetch("https://fakestoreapi.com/products/category/" + category);
    const data = await response.json();

    if (data && data.length) {
      itemsListDiv.innerHTML = "";
      data.forEach((item) => {
        itemsListDiv.innerHTML += `<div class="item">
        <img src="${item.image}" alt="Product" />
        <hr />
        <h4>${item.title}</h4>
        <p>${item.price}</p>
      </div>`;
      });
    } else {
      itemsListDiv.innerHTML = "<h2>NO DATA</h2>";
    }
  }
}

fetchItemsList();

fetchAllBtn.addEventListener("click", () => {
  fetchItemsList();
});

fetchElectronicsBtn.addEventListener("click", () => {
  fetchItemsList("electronics");
});

fetchJeweleryBtn.addEventListener("click", () => {
  fetchItemsList("jewelery");
});

fetchMClothingBtn.addEventListener("click", () => {
  fetchItemsList("men's clothing");
});

fetchWClothingBtn.addEventListener("click", () => {
  fetchItemsList("women's clothing");
});
