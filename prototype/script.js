let firstNameInput = document.getElementById("firstNameInput");
let lastNameInput = document.getElementById("lastNameInput");
let createUserForm = document.getElementById("createUserForm");

let usersCreated = [];

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

createUserForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let firstName = firstNameInput.value;
  let lastName = lastNameInput.value;
  const newUser = new User(firstName, lastName);
  usersCreated.push(newUser);
  firstNameInput.value = "";
  lastNameInput.value = "";
  console.log(usersCreated);
});

var removeDuplicates = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      count++;
      nums.splice(i, 1);
      i--;
    }
  }
  console.log(nums, count);
  return count;
};

removeDuplicates([1, 1, 2]);
