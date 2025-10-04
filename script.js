// Tapşırıq 1.1
let numString = "42";
let boolString = "true";
let mixedArray = ["123", "456", "789"];
let nullValue = null;

// 1. numString -> number
let num = Number(numString); // 42
console.log(num, typeof num);

// 2. boolString -> boolean
let bool = boolString === "true"; // true
console.log(bool, typeof bool);

// 3. mixedArray elementlərini number tipinə çevirin
let numArray = mixedArray.map(Number); // [123, 456, 789]
console.log(numArray);

// 4. nullValue-nu boolean-a çevirin
let boolNull = Boolean(nullValue); // false
console.log(boolNull);
// Çünki null "falsy" dəyərdir

// Tapşırıq 1.2
let sample1 = NaN;
let sample2 = [1, 2, 3];
let sample3 = "";
let sample4 = 0;
let sample5 = { name: "John" };

console.log(typeof sample1); // "number"
console.log(typeof sample2); // "object"
console.log(typeof sample3); // "string"
console.log(typeof sample4); // "number"
console.log(typeof sample5); // "object"

console.log(sample2 instanceof Array); // true
console.log(sample5 instanceof Object); // true

console.log(Array.isArray(sample2)); // true
console.log(Array.isArray(sample5)); // false

// Tapşırıq 2.1
let text = "   JavaScript is awesome   ";

// 1. Trim
let trimmed = text.trim();
console.log(trimmed);

// 2. ToUpperCase
console.log(trimmed.toUpperCase());

// 3. Replace
let replaced = trimmed.replace("is", "was");
console.log(replaced);

// 4. Split
let words = trimmed.split(" ");
console.log(words);

// 5. Length
console.log(trimmed.length);

// Tapşırıq 2.2
let user = {
  firstName: "Ali",
  lastName: "Məmmədov",
  age: 25,
  email: "ali@example.com",
};

// 1. Template literal
let greeting = `Hörmətli ${user.firstName} ${user.lastName}, sizin ${user.age} yaşınız var.`;
console.log(greeting);

// 2. Cədvəl formasında
let table = `
Ad: ${user.firstName}
Soyad: ${user.lastName}
Yaş: ${user.age}
Email: ${user.email}
`;
console.log(table);

// 3. Email parçalanması
let emailParts = user.email.split("@");
console.log(emailParts);

// Tapşırıq 3.1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let fruits = ["alma", "armud", "banan", "gilas", "üzüm"];

// 1. Filter
let even = numbers.filter((n) => n % 2 === 0);
console.log(even);

// 2. Map (cube)
let cubes = numbers.map((n) => n ** 3);
console.log(cubes);

// 3. Reduce (sum)
let sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

// 4. Sort fruits
let sortedFruits = [...fruits].sort();
console.log(sortedFruits);

// 5. Push, Pop, Shift, Unshift
fruits.push("nar");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("qarpız");
console.log(fruits);

// Tapşırıq 3.2
let students = [
  { id: 1, name: "Aygün", grades: [85, 90, 92] },
  { id: 2, name: "Elçin", grades: [75, 85, 88] },
  { id: 3, name: "Nigar", grades: [95, 88, 91] },
  { id: 4, name: "Orxan", grades: [70, 65, 72] },
];

// 1. Orta qiymət
students.forEach((s) => {
  s.avg = s.grades.reduce((acc, cur) => acc + cur, 0) / s.grades.length;
});
console.log(students);

// 2. 85-dən yuxarı orta qiymət, yuxarıda hər tələbəyə avg əlavə elədim
let highStudents = students.filter((s) => s.avg > 85);
console.log(highStudents);

// 3. Sort azalan sıra
let sortedStudents = [...students].sort((a, b) => b.avg - a.avg);
console.log(sortedStudents);

// 4. Ümumi orta
let overall = students.reduce((acc, s) => acc + s.avg, 0) / students.length;
console.log(overall);

// 1. Faktorial
function calculateFactorial(n) {
  if (n < 0) return undefined;
  let res = 1;
  for (let i = 1; i <= n; i++) res *= i;
  return res;
}
console.log(calculateFactorial(5));

// 2. Kvadrat (arrow function)
const square = (x) => x * x;
console.log(square(6));

// 3. Higher-order function
function filterArray(arr, filterFn) {
  return arr.filter(filterFn);
}
console.log(filterArray(numbers, (n) => n > 5));

let bankAccount = {
  accountNumber: "AZ123456",
  owner: "Əli Məmmədov",
  balance: 1000,
  transactions: [],
  deposit(amount) {
    this.balance += amount;
    this.transactions.push({ type: "deposit", amount });
  },
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push({ type: "withdraw", amount });
    } else {
      console.log("Yetərli balans yoxdur!");
    }
  },
  checkBalance() {
    return this.balance;
  },
  history() {
    return this.transactions;
  },
};

bankAccount.deposit(500);
bankAccount.withdraw(200);
console.log(bankAccount.checkBalance());
console.log(bankAccount.history());

// Tapşırıq 5.1
// 1. Tək/Cüt
function checkOddEven(n) {
  return n % 2 === 0 ? "Cüt" : "Tək";
}
console.log(checkOddEven(7));

// 2. Üç ədəddən ən böyüyü
function maxOfThree(a, b, c) {
  return Math.max(a, b, c);
}
console.log(maxOfThree(3, 9, 7));

// 3. İlin fəsli
function getSeason(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return "Qış";
    case 3:
    case 4:
    case 5:
      return "Yaz";
    case 6:
    case 7:
    case 8:
      return "Yay";
    case 9:
    case 10:
    case 11:
      return "Payız";
    default:
      return "Yanlış ay!";
  }
}
console.log(getSeason(4));

// 4. Kalkulyator
function calc(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Sıfıra bölmək olmaz!";
    default:
      return "Yanlış əməliyyat!";
  }
}
console.log(calc(10, 5, "*"));

// Tapşırıq 5.2
// 1. Fibonacci
function fibonacci(n) {
  let a = 0,
    b = 1;
  for (let i = 0; i < n; i++) {
    console.log(a);
    [a, b] = [b, a + b]; // temp variable yaratmiram
  }
}
fibonacci(7);

// 2. Array tərsinə (while)
let arr = [1, 2, 3, 4, 5];
let i = arr.length - 1;
while (i >= 0) {
  console.log(arr[i]);
  i--;
}

// 3. Sadə ədədlər
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
for (let i = 2; i <= 20; i++) {
  if (isPrime(i)) console.log(i);
}

// 4. Pattern (ulduz üçbucaq)
let rows = 5;
for (let i = 1; i <= rows; i++) {
  console.log("*".repeat(i));
}
