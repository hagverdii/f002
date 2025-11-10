let titleInput = document.getElementById("title-input");
let priceInput = document.getElementById("price-input");
let descriptionInput = document.getElementById("description-input");
let categoryInput = document.getElementById("category-input");
let imageInput = document.getElementById("image-input");

let myForm = document.getElementById("my-form");

myForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: titleInput.value,
        price: priceInput.value,
        description: descriptionInput.value,
        category: categoryInput.value,
        image: imageInput.value,
      }),
    });

    if (!response.ok) throw Error("Error");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
});
