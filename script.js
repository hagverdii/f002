// 1. Array-dakı bütün ədədləri 2-yə vur və yeni array qaytar.
function multiplyByTwo(arr) {
  return arr.map((x) => x * 2);
}

// 2. Array-dan yalnız cüt ədədləri seç.
function getEvenNumbers(arr) {
  return arr.filter((x) => x % 2 === 0);
}

// 3. Array-da mənfi ədəd olub-olmadığını yoxla.
function hasNegative(arr) {
  return arr.some((x) => x < 0);
}

// 4. Bütün ədədlərin müsbət olub-olmadığını yoxla.
function allPositive(arr) {
  return arr.every((x) => x > 0);
}

// 5. Array-dakı ilk 10-dan böyük ədədi tap.
function findFirstGreaterThan10(arr) {
  return arr.find((x) => x > 10);
}

// 6. Array-da verilmiş sözü axtar.
function containsWord(arr, word) {
  return arr.includes(word);
}

// 7. Array-ı tərsinə çevir.
function reverseArray(arr) {
  return [...arr].reverse(); // original array dəyişməsin deyə kopya edirəm
}

// 8. Ədədləri artan sıraya düz.
function sortAscending(arr) {
  return [...arr].sort((a, b) => a - b);
}

// 9. Array-dakı bütün sözləri böyük hərflərə çevir.
function toUpperCaseWords(arr) {
  return arr.map((x) => x.toUpperCase());
}

// 10. Array-dakı yalnız 5 hərfdən uzun sözləri seç.
function filterLongWords(arr) {
  return arr.filter((x) => x.length > 5);
}

// 11. Array-da “JavaScript” sözünün olub-olmadığını yoxla.
function hasJavaScript(arr) {
  return arr.includes("JavaScript");
}

// 12. Array-dakı bütün sözlərin yalnız stringdən ibarət olub-olmadığını yoxla.
function allStrings(arr) {
  return arr.every((x) => typeof x === "string");
}

// 13. Array-dakı ilk tək ədədi tap.
function findFirstOdd(arr) {
  return arr.find((x) => x % 2 !== 0);
}

// 14. Array-dakı bütün ədədləri string-ə çevir.
function numbersToStrings(arr) {
  return arr.map((x) => String(x));
}

// 15. Array-dan null və undefined dəyərləri sil.
function removeNullUndefined(arr) {
  return arr.filter((x) => x != null); // belə yazanda həm null, həm undefined sayılır
}

// 16. Array-dakı obyektlərdən yaşı 18-dən böyük olan insanların adlarını çıxar.
function getAdults(arr) {
  return arr.filter((user) => user.age > 18).map((user) => user.name);
}

// 17. Array-dan ən böyük 3 ədədi tap.
function topThreeNumbers(arr) {
  return [...arr].sort((a, b) => b - a).slice(0, 3);
}

// 18. Array-dakı bütün sözləri böyük hərfə çevir və yalnız 5 hərfdən uzun olanları saxla.
function upperAndFilterLong(arr) {
  return arr.map((x) => x.toUpperCase()).filter((x) => x.length > 5);
}

// 19. Array-dakı ədədləri artan sırayla düz, yalnız cütləri saxla.
function sortAndFilterEvens(arr) {
  return arr.filter((x) => x % 2 === 0).sort((a, b) => a - b);
}

// 20. Array-dakı obyektlərdən active:true olanları seç və adlarını çıxar.
function getActiveNames(arr) {
  return arr.filter((user) => user.active).map((user) => user.name);
}
