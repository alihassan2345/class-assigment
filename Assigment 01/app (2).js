// Question 1:

let user = prompt("Enter your name: ");
alert(`Hello, ${user}!`);


// Question 2:

let usernum = +prompt("Enter a number to print a multiplication table: ");
document.write(`<h2>Multiplication Table of ${usernum}</h2>`);
for (let i = 1; i <= 10; i++) {
    document.write(usernum + " x " + i + " = " + (usernum * i) + "<br>");
}


// Question 3:


let userinp = prompt("please enter your city name: ");
if (userinp === "Karachi") {
    alert("Welcome to city of lights");
}else {
    alert("Welcome to " + userinp);
}


// Question 4:
let usergen = prompt("Enter your gender: ");
if (usergen === "male") {
    alert("Good Morning Sir");
} else if (usergen === "female") {
    alert("Good Morning Ma'am");
} else {
    alert("Good Morning " + usergen);
}


// Question 5:
let usercolor = prompt("Enter the color of the traffic signal: ");
if (usercolor === "red") {
    alert("Must Stop");
} else if (usercolor === "yellow") {
    alert("Ready to move");
} else if (usercolor === "green") {
    alert("Move now");
} else {
    alert("Invalid color");
}





// Question 7: 

let carfuel = +prompt("Enter the remaining fuel in your car in litres: ");
if (carfuel < 0.25) {
    alert("Please refill the fuel in your car");
} else {
    alert("You have enough fuel in your car");
}


// Question 8:

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}
 
// Question 9:
let marks1 = prompt("Enter marks for subject 1:");
let marks2 = prompt("Enter marks for subject 2:");
let marks3 = prompt("Enter marks for subject 3:");
let totalMarks = prompt("Enter total marks:");
let obtainedMarks = Number(marks1) + Number(marks2) + Number(marks3);
let percentage = (obtainedMarks / totalMarks) * 100;

let grade, remarks;
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write(`Total Marks: ${totalMarks}<br>`);
document.write(`Marks Obtained: ${obtainedMarks}<br>`);
document.write(`Percentage: ${percentage.toFixed(2)}%<br>`);
document.write(`Grade: ${grade}<br>`);
document.write(`Remarks: ${remarks}<br>`);


// Question 10:

let item1 = prompt("Enter name of item 1:");
let price1 = prompt("Enter price of item 1:");
let qty1 = prompt("Enter quantity of item 1:");

let item2 = prompt("Enter name of item 2:");
let price2 = prompt("Enter price of item 2:");
let qty2 = prompt("Enter quantity of item 2:");

let shippingCharges = 100; // Example value
let totalCost = (price1 * qty1) + (price2 * qty2) + shippingCharges;

if (totalCost > 2000) {
    totalCost *= 0.9; // Apply 10% discount
}

document.write(`Total Cost: ${totalCost}<br>`);



// Question 11:

let secretNumber = 7;
let userNumber = +prompt("Guess the secret number:");
if (userNumber === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userNumber === secretNumber + 1 || userNumber === secretNumber - 1) {
    alert("Close enough to the correct answer");
} else {
    alert("Wrong answer");
}


// Question 12:

let num = +prompt("Enter a number to check if it is divisible by 3:");
if (num % 3 === 0) {
    alert("The number is divisible by 3");
} else {
    alert("The number is not divisible by 3");
}


// Question 13:

let teamAName = prompt("Enter Team A name:");
let teamAScore = Number(prompt("Enter Team A score:"));

let teamBName = prompt("Enter Team B name:");
let teamBScore = Number(prompt("Enter Team B score:"));

if (teamAScore > teamBScore) {
    alert(teamAName + " wins!");
} else if (teamBScore > teamAScore) {
    alert(teamBName + " wins!");
} else {
    alert("It's a tie!");
}



// Question 14:

let userString = prompt("Enter a string:");
let userNumber = Number(prompt("Enter a number:"));
let userBoolean = Boolean(prompt("Enter true/false:"));

alert(`Type of '${userString}': ${typeof userString}`);
alert(`Type of ${userNumber}: ${typeof userNumber}`);
alert(`Type of ${userBoolean}: ${typeof userBoolean}`);



// Question 15:

let num = Number(prompt("Enter a number:"));
if (num % 2 === 0) {
    alert(num + " is an even number.");
} else {
    alert(num + " is an odd number.");
}

// Question 16:

let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /, %):");

let result;
if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    result = num1 / num2;
} else if (operation === "%") {
    result = num1 % num2;
} else {
    alert("Invalid operation!");
}

if (result !== undefined) {
    alert("Result: " + result);
}


// // Question 17:

let day = prompt("Enter the day of the week:").toLowerCase();

if (["monday", "tuesday", "wednesday", "thursday", "friday"].includes(day)) {
    alert("It’s a week day.");
} else if (day === "saturday") {
    alert("It’s weekend.");
} else if (day === "sunday") {
    alert("Yay! It’s a holiday.");
}





// Question 18:

let score = Number(prompt("Enter your score:"));
if (score > 50) {
    alert("You are passed!");
} else {
    alert("Try again!");
}




// Question 19:

let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));

if (num1 > num2) {
    alert("The greater number of " + num1 + " and " + num2 + " is " + num1 + ".");
} else if (num2 > num1) {
    alert("The greater number of " + num1 + " and " + num2 + " is " + num2 + ".");
} else {
    alert(num1 + " and " + num2 + " are equal.");
}




// Question 20:

let langCode = prompt("Enter a language code (en, es, de):").toLowerCase();

if (langCode === "en") {
    alert("Hello, World!");
} else if (langCode === "es") {
    alert("¡Hola, Mundo!");
} else if (langCode === "de") {
    alert("Hallo, Welt!");
} else {
    alert("Hello, World! (default)");
}



// Question 21:

let number = Number(prompt("Enter a number:"));
if (number > 0) {
    alert(number + " is positive.");
} else if (number < 0) {
    alert(number + " is negative.");
} else {
    alert("The number is zero.");
}



// Question 22:

let noun = prompt("Enter a noun:");
let quantity = Number(prompt("Enter a number:"));

if (quantity === 1) {
    alert(quantity + " " + noun);
} else {
    alert(quantity + " " + noun + "s");
}



// Question 23:

let num = Number(prompt("Enter a number:"));
if (num % 3 === 0) {
    alert("Number is divisible by 3.");
} else {
    alert("Number is not divisible by 3.");
}


// Question 24:

let number = Number(prompt("Enter a number:"));
if (number % 2 === 0) {
    alert("The number is even.");
} else {
    alert("The number is odd.");
}

// Question 25:
let age = Number(prompt("Enter your age:"));
if (age > 18) {
    alert("Old enough.");
} else {
    alert("Too young.");
}



// Question 26:
let myName = "Ali"; // Replace with your name
let userName = prompt("Enter your name:");
if (userName === myName) {
    alert("Hello, " + userName + "! Nice to meet you.");
}


// Question 27:
let num = Number(prompt("Enter a number:"));
switch (num % 3 === 0) {
    case true:
        alert("Number is divisible by 3.");
        break;
    default:
        alert("Number is not divisible by 3.");
}

// Question 28:
let char = prompt("Enter a character:").charAt(0);
if (!isNaN(char)) {
    alert("This is a number.");
} else if (char >= 'A' && char <= 'Z') {
    alert("This is an uppercase letter.");
} else if (char >= 'a' && char <= 'z') {
    alert("This is a lowercase letter.");
}


// Question 29:
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let operator = prompt("Enter an operator (+, -, *, /, %):");

switch (operator) {
    case "+":
        alert("Result: " + (num1 + num2));
        break;
    case "-":
        alert("Result: " + (num1 - num2));
        break;
    case "*":
        alert("Result: " + (num1 * num2));
        break;
    case "/":
        alert("Result: " + (num1 / num2));
        break;
    case "%":
        alert("Result: " + (num1 % num2));
        break;
    default:
        alert("Invalid operator!");
}


// Question 30:
let time = Number(prompt("Enter the time in 24-hour format (e.g., 1900):"));
if (time >= 0 && time < 1200) {
    alert("Good Morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good Evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good Night!");
}

// Question 31:
let year = Number(prompt("Enter a year:"));
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    alert(year + " is a leap year.");
} else {
    alert(year + " is not a leap year.");
}

    Question 32:
let correctPassword = "12345"; // Example password
let userPassword = prompt("Enter your password:");

if (!userPassword) {
    alert("Please enter your password.");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
} else {
    alert("Incorrect password.");
}

// Question 33:
let firstName = "Ali";
if (firstName === "Fahad") {
    document.write("Hello Fahad!");
} else {
    document.write("You are not Fahad.");
}


// Question 34:
let greeting;
let hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// Question 35:
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));

if (num1 > num2) {
    alert(num1 + " is larger.");
} else if (num2 > num1) {
    alert(num2 + " is larger.");
} else {
    alert("Both numbers are equal.");
}

// Question 36:
let number = Number(prompt("Enter a number:"));
if (number > 0) {
    alert("The number is positive.");
} else if (number < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}

// Question 37:
let hour = Number(prompt("Enter the current hour (24-hour format):"));
if (hour >= 6 && hour <= 9) {
    alert("Breakfast is served.");
} else if (hour >= 11 && hour <= 13) {
    alert("Time for lunch.");
} else if (hour >= 17 && hour <= 20) {
    alert("It's dinner time.");
} else {
    alert("Sorry, you'll have to wait, or go get a snack.");
}

// Question 38:
let value = prompt("Enter any value:");
if (!isNaN(value)) {
    alert("Type: Number");
} else if (value.toLowerCase() === "true" || value.toLowerCase() === "false") {
    alert("Type: Boolean");
} else if (value === "") {
    alert("Type: Undefined");
} else {
    alert("Type: String");
}


// Question 39:
let char = prompt("Enter a single character:").toLowerCase();
if ("aeiou".includes(char)) {
    alert("True, it is a vowel.");
} else {
    alert("False, it is not a vowel.");
}


// Question 40:
alert(10 !== 8); // True


// Question 41:
let month = Number(prompt("Enter the month number (1-12):"));
switch (month) {
    case 1:
        alert("January");
        break;
    case 2:
        alert("February");
        break;
    // ...continue for all months
    case 12:
        alert("December");
        break;
    default:
        alert("Invalid month.");
}


// Question 42:
let age = Number(prompt("Enter your age:"));
let voteable = (age < 18) ? "Too young" : "Old enough";
alert(voteable);
