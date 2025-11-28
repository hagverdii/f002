let themeBtn = document.getElementById("theme-btn");

(function initializeTheme() {
  const theme = localStorage.getItem("theme") || "";
  if (theme === "dark") {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    themeBtn.innerHTML = '<i class="fa-regular fa-sun"></i>';
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    themeBtn.innerHTML = '<i class="fa-regular fa-moon"></i>';
  }
})();

themeBtn.addEventListener("click", () => {
  const theme = localStorage.getItem("theme") || "";
  if (theme === "dark" || !theme) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
    themeBtn.innerHTML = '<i class="fa-regular fa-moon"></i>';
  } else if (theme === "light") {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    localStorage.setItem("theme", "dark");
    themeBtn.innerHTML = '<i class="fa-regular fa-sun"></i>';
  }
});
