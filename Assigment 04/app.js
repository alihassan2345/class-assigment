// question 1
for (var i = 0; i < 5; i++) {
  document.write(`hello world <br>`);
}

// question 2

for (var i = 1; i <= 10; i++) {
  document.write(`${i} <br>`);
}

// question 3
var tablenumber = +prompt("Enter a number ");
var tablelength = +prompt("Enter length of table");
for (var i = 1; i <= tablelength; i++) {
  document.write(`${tablenumber} x ${i} = ${tablenumber * i} <br>`);
}

// question 4
let newArray = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
for (let i = 0; i <= 4; i++) {
  document.write(`${newArray[i]} <br>`);
}

// question 5
let newArray1 = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i = 0; i <= 4; i++) {
  document.write(`${newArray1[i]} <br>`);
}
for (let i = 0; i <= 4; i++) {
  document.write(`Element at index ${i} is ${newArray1[i]} <br>`);
}

// question 6
let n = +prompt("Enter a number: ");

let array = new Array(n);
for (let i = 0; i < n; i++) {
  array[i] = prompt(`Enter the element ${i + 1}: `);
}
document.write(`number of items: ${n} <br>`);

document.write(`Items:   <br>`);

for (let i = 0; i < n; i++) {
  document.write(`${array[i]} <br>`);
}

// question 7
document.write("counting   :  ");
for (var i = 1; i <= 15; i++) {
  document.write(`   ${i} ,    `);
}
document.write("<br>");
document.write("reverse   :  ");
for (var i = 10; i >= 0; i--) {
  document.write(`   ${i} ,    `);
}
document.write("<br>");
document.write("even   :  ");
for (var i = 2; i <= 20; i += 2) {
  document.write(`   ${i} ,    `);
}
document.write("<br>");
document.write("odd   :  ");
for (var i = 1; i <= 20; i += 2) {
  document.write(`   ${i} ,    `);
}
document.write("<br>");
document.write("series   :  ");
for (var i = 2; i <= 20; i += 2) {
  document.write(`   ${i}k ,    `);
}

// question 8

const items = ["cake", "apple pie", "cookie", "chips", "patties"];

const searchItem = prompt("Welcome to ABC Bakery. What do you want to order?");

const index = items.findIndex((item) => item === searchItem);

if (index !== items) {
  alert(`${searchItem} is available at index ${index} in our bakery.`);
} else {
  alert(`We are sorry, ${searchItem} is not available in our bakery.`);
}

// question 9

const number = [24, 53, 78, 100, 91, 12];

let largest = number[0];

for (let i = 1; i < number.length; i++) {
  if (number[i] > largest) {
    largest = number[i];
  }
}

document.write(`The largest number in the array is: ${largest}`);

// question 10

const number2 = [24, 53, 78, 100, 91, 12];

let smallest = number2[0];

for (let i = 1; i < number2.length; i++) {
  if (number2[i] < smallest) {
    smallest = number2[i];
  }
}

document.write(`The largest number in the array is: ${smallest}`);

// question 11

const number3 = [24, 53, 78, 100, 91, 12];
const number4 = [24, 53, 78, 100, 91, 12];

let total = number3[0];
let total1 = number4[0];

for (let i = 1; i < number3.length; i++) {
  if (number3[i] > total) {
    total = number3[i];
  }
}

for (let i = 1; i < number4.length; i++) {
  if (number4[i] < total1) {
    total1 = number4[i];
  }
}

// Display the result
document.write(`Array items: ${number3} <br>`);
document.write(`The largest number in the array is: ${total} <br>`);
document.write(`The smallest number in the array is: ${total1}`);

// question 12

for (let i = 5; i <= 100; i = i + 5) {
  document.write(`${i} ,`);
}

// question 13

let student = ["ali", "sami", "taha ", "inam"];
let score = [58, 70, 89, 90];

document.write(
  `<table border=''>
    <tr>
        <td>Student</td>
        <td>score</td>
    </tr>
    <tr>
        <td>${student[0]}</td>
        <td>${score[0]}</td>
    </tr>
    <tr>
        <td>${student[1]}</td>
        <td>${score[1]}</td>
    </tr>
    <tr>
        <td>${student[2]}</td>
        <td>${score[2]}</td>
    </tr>
    <tr>
        <td>${student[3]}</td>
        <td>${score[3]}</td>
    </tr>
</table>
`
);

// question 15

var A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (var i = 0; i < A[i].length; j++) {
  document.write(`${A[0]} <br> ${A[1]} <br> ${A[2]} `);
}

// question 17

for (var i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    document.write(i + " is even" + "<br>");
  } else {
    document.write(i + " is odd" + "<br>");
  }
}

var lines = 5;

// question 19

for (var i = lines; i > 0; i--) {
  document.write("*".repeat(i) + "<br>");
}
document.write("<br>");

// question 20

for (var i = 0; i < lines; i++) {
  document.write("*".repeat(lines) + "<br>");
}
document.write("<br>");

for (var i = 1; i <= lines; i++) {
  document.write("*".repeat(i) + "<br>");
}
document.write("<br>");

for (var i = lines; i > 0; i--) {
  document.write("*".repeat(i) + "<br>");
}


// Asking user for a number
let userInput = prompt("Enter a number to find its factorial:");
let number = parseInt(userInput);

// Checking if the input is a number
if (isNaN(number)) {
    alert("Please enter a valid number.");
} else {
    let steps = "";
    for (let i = number; i >= 1; i--) {
        steps += i;
        if (i > 1) {
            steps += " × ";
        }
    }
    document.write(steps); // Showing result in an alert
}

