let usersTableBody = document.getElementById("users-table-body");
let getDataBtn = document.getElementById("get-data-btn");
let userIdInput = document.getElementById("user-id-input");
let createUserBtn = document.getElementById("create-user-btn");
let createUserForm = document.querySelector(".create-user-form");
let usernameInput = document.getElementById("username-input");
let emailInput = document.getElementById("email-input");

getDataBtn.addEventListener("click", async () => {
  if (userIdInput.value) {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/" + userIdInput.value);
      const data = await response.json();

      if (response.status === 404) {
        throw new Error("User not found");
      }

      usersTableBody.innerHTML = "";
      usersTableBody.innerHTML += `<tr>
        <td>${data.name}</td>
        <td>${data.username}</td>
        <td>${data.email}</td>
         <td>${data.phone}</td>
      </tr>`;
    } catch (e) {
      usersTableBody.innerHTML = "<tr><td>NO DATA FOUND</td><td></td><td></td><td></td></tr>";
    }
  } else {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();

      if (response.status === 404) {
        throw new Error("User not found");
      }

      if (data && data.length) {
        usersTableBody.innerHTML = "";

        data.forEach((user) => {
          usersTableBody.innerHTML += `<tr>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
         <td>${user.phone}</td>
      </tr>`;
        });
      }
    } catch (e) {
      usersTableBody.innerHTML = "<tr><td>NO DATA FOUND</td><td></td><td></td><td></td></tr>";
    }
  }
});

createUserForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!usernameInput.value || !emailInput.value) return;

  const newUserObj = {
    username: usernameInput.value,
    email: emailInput.value,
  };
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserObj),
    });
    const data = await response.json();

    if (data) {
      usersTableBody.innerHTML += `<tr>
        <td>${data.name}</td>
        <td>${data.username}</td>
        <td>${data.email}</td>
         <td>${data.phone}</td>
      </tr>`;
    }
  } catch (e) {
    alert(e.message);
  }
});
