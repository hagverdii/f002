document.querySelectorAll(".accordion .heading-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    const isOpen = item.classList.toggle("is-open");
    if (isOpen) {
      document.querySelectorAll(".accordion .item").forEach((other) => {
        if (other !== item) {
          other.classList.remove("is-open");
        }
      });
    }
  });
});
