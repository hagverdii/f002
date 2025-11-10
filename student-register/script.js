let searchInput = document.getElementById("search-input");
let nameInput = document.getElementById("name-input");
let surnameInput = document.getElementById("surname-input");
let groupInput = document.getElementById("group-input");
let studentsListContainer = document.getElementById("students-list");
let addStudentForm = document.getElementById("add-student-form");

let darkModeBtn = document.getElementById("dark-mode-btn");
let lightModeBtn = document.getElementById("light-mode-btn");

let studentsList = JSON.parse(localStorage.getItem("students-list")) || [];
let displayStudentsList = studentsList;

function renderDarkModeButton() {
  let darkMode = JSON.parse(localStorage.getItem("dark")) || false;
  if (darkMode) {
    darkModeBtn.classList.add("hide-element");
    lightModeBtn.classList.remove("hide-element");
  } else {
    darkModeBtn.classList.remove("hide-element");
    lightModeBtn.classList.add("hide-element");
  }
}

renderDarkModeButton();

darkModeBtn.addEventListener("click", () => {
  localStorage.setItem("dark", true);
  document.body.classList.add("dark");
  renderDarkModeButton();
});

lightModeBtn.addEventListener("click", () => {
  localStorage.setItem("dark", false);
  document.body.classList.remove("dark");
  renderDarkModeButton();
});

addStudentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addStudent();
});

searchInput.addEventListener("input", (e) => {
  if (e.target.value) {
    const filteredStudentsList = studentsList.filter((student) =>
      student.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    displayStudentsList = filteredStudentsList;
  } else {
    displayStudentsList = studentsList;
  }
  renderStudents();
});

function renderStudents() {
  studentsListContainer.innerHTML = "";

  displayStudentsList?.forEach((student, index) => {
    const li = document.createElement("li");
    li.className = "student";

    const span = document.createElement("span");
    span.textContent = student.name + " " + student.surname + " " + student.group;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-student-btn";
    deleteBtn.textContent = "Sil";
    deleteBtn.addEventListener("click", () => deleteStudent(index));

    li.appendChild(span);
    li.appendChild(deleteBtn);
    studentsListContainer.appendChild(li);
  });
}

function addStudent() {
  const newStudent = {
    name: nameInput.value,
    surname: surnameInput.value,
    group: groupInput.value,
  };

  if (newStudent.name && newStudent.surname && newStudent.group) {
    studentsList.push(newStudent);
    saveStudents();
    renderStudents();
    addStudentForm.reset();
  }
}

function saveStudents() {
  localStorage.setItem("students-list", JSON.stringify(studentsList));
}

function deleteStudent(index) {
  studentsList.splice(index, 1);
  saveStudents();
  renderStudents();
}

renderStudents();
