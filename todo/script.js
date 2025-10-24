const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('todoList');

addBtn.addEventListener('click', addTodo);
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTodo();
});

function addTodo() {
  const text = input.value.trim();
  if (text === '') {
    alert('Please enter a task');
    return;
  }
  
  const li = document.createElement('li');
  li.innerHTML = `
                <span>${text}</span>
                <button class="deleteBtn">Delete</button>
            `;
  
  li.querySelector('.deleteBtn').addEventListener('click', () => {
    li.remove();
  });
  
  list.appendChild(li);
  input.value = '';
}