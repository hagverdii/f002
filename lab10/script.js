const btn = document.getElementById("addToCartBtn");

btn.addEventListener("click", function () {
  btn.textContent = "Adding to Cart...";
  btn.disabled = true;
  btn.classList.add("loading");

  setTimeout(function () {
    btn.textContent = "Added to Cart!";
    btn.classList.remove("loading");
    btn.classList.add("success");

    setTimeout(function () {
      btn.textContent = "Add to Cart";
      btn.disabled = false;
      btn.classList.remove("success");
    }, 2000);
  }, 3000);
});
