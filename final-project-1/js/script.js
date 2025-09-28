function setHeaderHeight() {
  const header = document.querySelector(".header");
  if (header) {
    const headerHeight = header.offsetHeight;
    document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);
  }
}

window.addEventListener("load", setHeaderHeight);
window.addEventListener("resize", setHeaderHeight);

function sumArray(arr) {
  const filteredArr = arr.filter((item) => typeof item === "number");
  return filteredArr.reduce((acc, val) => acc + val, 0);
}

function filterStringArray(arr) {
  const filteredArr = arr.filter((item) => typeof item === "string");
  return filteredArr.filter((item) => item.includes("test"));
}

let arr1 = [1, 2, "test1", 4, "asdafasda", 6];
let arr2 = ["test2", "hello", 3, 5, "wasasd", "test3"];

console.log("Sum of arr:", sumArray(arr1));
console.log("Filtered arr:", filterStringArray(arr2));
