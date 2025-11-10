let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  const list = document.getElementById("todoList");
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = "todo-item";

    const span = document.createElement("span");
    span.textContent = todo.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteTodo(index));

    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

function addTodo() {
  const input = document.getElementById("todoInput");
  const text = input.value;

  if (text) {
    todos.push({ text });
    saveTodos();
    renderTodos();
    input.value = "";
  }
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
function deleteTodo(index) {
  todos.splice(index, 1);
  saveTodos();
  renderTodos();
}
renderTodos();
