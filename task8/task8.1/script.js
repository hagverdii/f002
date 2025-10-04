let openSidebarButton = document.getElementById("open-sidebar");
let closeSidebarButton = document.getElementById("close-sidebar");
let sidebar = document.getElementById("sidebar");

openSidebarButton.addEventListener("click", onOpenSidebar);
closeSidebarButton.addEventListener("click", onCloseSidebar);

function onOpenSidebar() {
  sidebar.classList.remove("hide-sidebar");
}

function onCloseSidebar() {
  sidebar.classList.add("hide-sidebar");
}
