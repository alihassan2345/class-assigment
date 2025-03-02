// Question 1
let user = +prompt("Enter a number: ");
document.write(`The number is ${user} <br>`);
document.write(`the round off value is ${Math.round(user)} <br>`);
document.write(`the floor value is ${Math.floor(user)} <br>`);
document.write(`the ceil value is ${Math.ceil(user)} <br>`);

// Question 2
let user2 = +prompt(`Enter a number negative: `);
document.write(`The number is ${user} <br>`);
document.write(`the round off value is ${Math.round(user)} <br>`);
document.write(`the floor value is ${Math.floor(user)} <br>`);
document.write(`the ceil value is ${Math.ceil(user)} <br>`);

// Question 3
let user3 = +prompt(`Enter a number: `);
document.write(`The float value of ${user} <br> `);
 document.write(`the round off value is ${Math.round(user)} <br>`);
document.write(`the floor value is ${Math.floor(user)} <br>`);
document.write(`the ceil value is ${Math.ceil(user)} <br>`); 

// Questin 4
let user4 = +prompt(`Enter a number: `);
document.write(`The float value of ${user} <br> `);
 document.write(`the round off value is ${Math.round(user)} <br>`);
document.write(`the floor value is ${Math.floor(user)} <br>`);
document.write(`the ceil value is ${Math.ceil(user)} <br>`); 

// Question 5
let user5 = +prompt(`Enter a number: `);
document.write(`The absolute value of ${user5} is ${Math.abs(user5)}`);

// Question 6
let user6 = Math.floor(Math.random() * 50);
document.write(`The random dice = ${user6}`);

// Question 7
let user7 = Math.floor(Math.random() * 2);
if (user7 == 0) {
  document.write(`The random coin value is: Heads`);
}
else if (user7 == 1) {
  document.write(`The random coin value is: Tails`);
}
else {
  document.write(`The random coin value is: Error`);
}

// Question 8
let user8 = Math.floor(Math.random() * 101);
document.write(`random number between 1 and 100 : ${user8}`);

// Question 9


// Question 10
let user10 = +prompt(`choose a number between 1 and 10: `);
let num = 7
if (user10 == num) {
  document.write(`Congratulations! You have guessed the right number`);
}
else {
  document.write(`Try again!`);
}

// Question 11
let date = new Date();
document.write(`${date} <br>`);

// Question 12
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dmon = new Date().getMonth();
document.write(`Current month: ${months[dmon]}`);

// Question 13
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = new Date().getDay();
alert(`Today is ${days[day]}`);
document.write(`Today is ${days[day]}`);

// Question 14
let days1 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day1 = new Date().getDay();
if (days1[day1] == "Sun" || days1[day1] == "Sat") {
  document.write(`It's Fun day`);
}
else {
  document.write(`It's a working day`);
}

// Question 15
let date1 = new Date();
let days2 = date1.getDate();
if (days2 < 16) {
  document.write(`First fifteen days of the month`);
}
else {
  document.write(`Last days of the month`);
}

// Question 16








































// let person = parseInt(prompt("Enter your age: "));
// let citizen = prompt("Are you a citizen of Pakistan? (yes/no): ");

// if (person < 18) {
//     console.log("❌ You are not eligible to vote (under 18).");
// } else {
//     if (citizen === "yes" || citizen === "y") {
//         console.log("✅ You are eligible to vote in Pakistan.");
//     } else if (citizen === "no" || citizen === "n") {
//         console.log("❌ You are not eligible to vote (not a Pakistani citizen).");
//     } else {
//         console.log("⚠️ Invalid input! Please enter 'yes' or 'no'.");
//     }
// }
