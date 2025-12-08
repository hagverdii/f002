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

let newTaskInput = document.getElementById("new-task-input");
let newTaskDifficulty = document.getElementById("new-task-difficulty-select");
let newTaskSubmitBtn = document.getElementById("new-task-submit-btn");
let editTaskSubmitBtn = document.getElementById("edit-task-submit-btn");

editTaskSubmitBtn.classList.add("hide-element");

let displayedTasksList = document.getElementById("displayed-tasks-list");
let noTaskFoundDiv = document.getElementById("no-task-found");

let allTasksList = JSON.parse(localStorage.getItem("all-task-list")) || [];

let currentRenderParam = "all";
let showAllTasksBtn = document.getElementById("show-all-tasks-btn");
let showActiveTasksBtn = document.getElementById("show-active-tasks-btn");
let showCompleteTasksBtn = document.getElementById("show-complete-tasks-btn");

showAllTasksBtn.addEventListener("click", () => {
  currentRenderParam = "all";
  showAllTasksBtn.classList.add("active");
  showActiveTasksBtn.classList.remove("active");
  showCompleteTasksBtn.classList.remove("active");
  renderTasks(currentRenderParam);
});

showActiveTasksBtn.addEventListener("click", () => {
  currentRenderParam = "active";
  showActiveTasksBtn.classList.add("active");
  showAllTasksBtn.classList.remove("active");
  showCompleteTasksBtn.classList.remove("active");
  renderTasks(currentRenderParam);
});

showCompleteTasksBtn.addEventListener("click", () => {
  currentRenderParam = "complete";
  showCompleteTasksBtn.classList.add("active");
  showAllTasksBtn.classList.remove("active");
  showActiveTasksBtn.classList.remove("active");
  renderTasks(currentRenderParam);
});

let editTaskIndex = undefined;

let searchTaskInput = document.getElementById("search-task-input");

searchTaskInput.addEventListener("input", (e) => {
  renderTasks(currentRenderParam, e.target.value);
});

function renderTasks(category, searchInput = searchTaskInput.value || "") {
  displayedTasksList.innerHTML = "";
  let filteredAllTasksList = [];

  if (category === "all") {
    filteredAllTasksList = allTasksList
      .map((task, index) => ({ task, originalIndex: index }))
      .filter((item) => item.task.text.toLowerCase().includes(searchInput.toLowerCase()));
  } else if (category === "active") {
    filteredAllTasksList = allTasksList
      .map((task, index) => ({ task, originalIndex: index }))
      .filter((item) => !item.task.done && item.task.text.toLowerCase().includes(searchInput.toLowerCase()));
  } else if (category === "complete") {
    filteredAllTasksList = allTasksList
      .map((task, index) => ({ task, originalIndex: index }))
      .filter((item) => item.task.done && item.task.text.toLowerCase().includes(searchInput.toLowerCase()));
  }

  if (!filteredAllTasksList.length) {
    displayedTasksList.classList.add("hide-element");
    noTaskFoundDiv.classList.remove("hide-element");
    return;
  } else {
    displayedTasksList.classList.remove("hide-element");
    noTaskFoundDiv.classList.add("hide-element");
  }

  filteredAllTasksList.forEach(({ task, originalIndex }) => {
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    let taskDone = document.createElement("input");
    taskDone.type = "checkbox";
    taskDone.checked = task.done;
    taskDone.addEventListener("change", (e) => {
      allTasksList[originalIndex] = { ...task, done: e.target.checked };
      localStorage.setItem("all-task-list", JSON.stringify(allTasksList));
    });

    taskDiv.appendChild(taskDone);

    let taskText = document.createElement("p");
    taskText.textContent = task.text;

    let taskDifficulty = document.createElement("span");
    taskDifficulty.textContent =
      task.difficulty == "1"
        ? "Aşağı"
        : task.difficulty == "2"
        ? "Orta"
        : task.difficulty == "3"
        ? "Yüksək"
        : "Xəta";

    taskDiv.appendChild(taskText);
    taskDiv.appendChild(taskDifficulty);

    let editTaskBtn = document.createElement("button");
    editTaskBtn.classList.add("edit-task-btn");
    editTaskBtn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
    editTaskBtn.addEventListener("click", () => {
      newTaskInput.value = task.text;
      newTaskDifficulty.value = task.difficulty;
      editTaskIndex = originalIndex;
      newTaskSubmitBtn.classList.add("hide-element");
      editTaskSubmitBtn.classList.remove("hide-element");
    });
    taskDiv.appendChild(editTaskBtn);

    let removeTaskBtn = document.createElement("button");
    removeTaskBtn.classList.add("remove-task-btn");
    removeTaskBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    removeTaskBtn.addEventListener("click", () => {
      allTasksList.splice(originalIndex, 1);
      localStorage.setItem("all-task-list", JSON.stringify(allTasksList));
      renderTasks(currentRenderParam);
    });
    taskDiv.appendChild(removeTaskBtn);

    displayedTasksList.appendChild(taskDiv);
  });
}

renderTasks(currentRenderParam);

newTaskSubmitBtn.addEventListener("click", () => {
  let newTask = {
    done: false,
    text: newTaskInput.value.trim(),
    difficulty: newTaskDifficulty.value,
  };
  allTasksList.unshift(newTask);

  newTaskInput.value = "";
  newTaskDifficulty.value = "1";

  localStorage.setItem("all-task-list", JSON.stringify(allTasksList));

  renderTasks(currentRenderParam);
});

editTaskSubmitBtn.addEventListener("click", () => {
  allTasksList[editTaskIndex] = {
    ...allTasksList[editTaskIndex],
    text: newTaskInput.value.trim(),
    difficulty: newTaskDifficulty.value,
  };
  newTaskInput.value = "";
  newTaskDifficulty.value = "1";

  localStorage.setItem("all-task-list", JSON.stringify(allTasksList));

  renderTasks(currentRenderParam);
  newTaskSubmitBtn.classList.remove("hide-element");
  editTaskSubmitBtn.classList.add("hide-element");
});
