function setHeaderHeight() {
  const header = document.querySelector(".header");
  if (header) {
    const headerHeight = header.offsetHeight;
    document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);
  }
}

window.addEventListener("load", setHeaderHeight);
window.addEventListener("resize", setHeaderHeight);
