const draggableElements = document.querySelectorAll(".my-draggable-element");
const dropZone = document.querySelectorAll(".draggable-drop-zone");

let draggedElement = null;

for (let element of draggableElements) {
  element.addEventListener("dragstart", () => {
    draggedElement = element;
  });

  element.addEventListener("dragend", () => {
    draggedElement = null;
  });
}

for (let zone of dropZone) {
  zone.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  zone.addEventListener("drop", (event) => {
    event.preventDefault();

    zone.appendChild(draggedElement);
    draggedElement = null;
  });
}
