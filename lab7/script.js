const sunBtn = document.getElementById("sunBtn");
const moonBtn = document.getElementById("moonBtn");
const rootBody = document.body;

function enableDark() {
  rootBody.classList.add("dark");
}

function enableLight() {
  rootBody.classList.remove("dark");
}

sunBtn.addEventListener("click", () => {
  enableDark();
});

moonBtn.addEventListener("click", () => {
  enableLight();
});

(function init() {
  enableLight();
})();
