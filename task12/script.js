const form = document.getElementById('employeeForm');
const tableBody = document.getElementById('employeeTable');
let employees = JSON.parse(localStorage.getItem('employees')) || [];

function renderTable() {
  tableBody.innerHTML = "";
  employees.forEach((emp, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
          <td>${index + 1}</td>
          <td>${emp.fullName}</td>
          <td>${emp.age}</td>
          <td>${emp.position}</td>
          <td>
            <button class="btn-green">Düzəliş</button>
            <button class="btn-red" onclick="deleteEmployee(${emp.id})">Sil</button>
          </td>`;
    tableBody.appendChild(row);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fullName = document.getElementById('fullName').value.trim();
  const age = Number(document.getElementById('age').value);
  const position = document.getElementById('position').value.trim();
  
  const newEmp = {id: Date.now(), fullName, age, position};
  employees.push(newEmp);
  
  renderTable();
  form.reset();
});


function deleteEmployee(id) {
  employees = employees.filter(emp => emp.id !== id);
  renderTable();
}

renderTable()