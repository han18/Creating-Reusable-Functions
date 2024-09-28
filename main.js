// Take an array of numbers and return the sum.

const arrayOfNum = [34, 6, 46, 33, 5, 23, 8, 3, 0, 3, 47, 36, 55, 9];

// printing the values in the array
function arrayPrint(num) {
  for (const e of arrayOfNum) {
    console.log(e);
  }
}

arrayPrint();

//=============== GET THE SUM OF ARRAY//

function arrayOfSum() {
  let sum = 0;
  for (let i = 0; i < arrayOfNum.length; i++) {
    sum += arrayOfNum[i];
  }
  return sum;
}

console.log(arrayOfSum());

//=====================================================================//

//Take an array of numbers and return the average.

function avgOfSum() {
  let avarge = 0;
  for (let i = 0; i < arrayOfNum.length; i++) {
    avarge += arrayOfNum[i] / arrayOfNum.length;
  }
  return Math.round(avarge);
}

console.log(avgOfSum());

//=============================================================//

// Take an array of strings and return the longest string.

const arrayOfStrings = [
  "cats",
  "dogs",
  "birds",
  "lions",
  "snakes",
  "tiger",
  "goat",
  "chiken",
  "owl",
  "deer",
  "cow",
  "donkey",
  "monkeyfunkey",
];

function longString() {
  let longWord = "";
  for (let s of arrayOfStrings) {
    if (s.length > longWord.length) longWord = s;
  }
  return longWord;
}

// console.log(longString());

// =============================================================
// Take an array of strings, and a number and return an array of the strings that
//  are longer than the given number.

const arrayOfStrNum = [
  "cats",
  "dogs",
  "birds",
  "lions",
  "snakes",
  "tiger",
  "goat",
  "chiken",
  "owl",
  "deer",
  "cow",
  "donkey",
  "monkeyfunkey",
  10,
];

// function longStringNum() {
//   let longWord = 4;
//   for (let s of arrayOfStrNum) {
//     if (arrayOfStrNum[s].length >= longWord)  {
//         return arrayOfStrNum[s]
//     }
//   }
//   return longWord;
// }

// console.log(longStringNum());

// let sorted = arrayOfStrNum.sort(function (a, b){
//     return b.length - a.length;
// });

// console.log(sorted[0]);

function longStringNum(long, Numlength) {
  return long.filter((str) => str.length > Numlength);
}
const maxLength = 4;

const results = longStringNum(arrayOfStrNum, maxLength);
console.log(results);

//======================================

//Take a number, n, and print every number
// between 1 and n without using loops. Use recursion.

function printNum(n) {
  if (n <= 0) {
    return;
  }
  console.log(n);
  printNum(n - 1);
}
printNum(15);

console.log("//==================NEXT=======================//")

//============================================================

// Part 2: Thinking Methodically
// When functions are built into objects, like Arrays,
// they are referred to as “methods” of those objects. Many methods,
//  including Array methods, require
//  “callback functions” to determine their behavior.

const employees =
  [
    ({ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" })
  ];

  // Sort the array by age

  employees.sort((a, b) => a - b);
  console.log(employees)

