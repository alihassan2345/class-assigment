// // Question 1
// let user = +prompt("Enter a number: ");
// document.write(`The number is ${user} <br>`);
// document.write(`the round off value is ${Math.round(user)} <br>`);
// document.write(`the floor value is ${Math.floor(user)} <br>`);
// document.write(`the ceil value is ${Math.ceil(user)} <br>`);

// // Question 2
// let user2 = +prompt(`Enter a number negative: `);
// document.write(`The number is ${user} <br>`);
// document.write(`the round off value is ${Math.round(user)} <br>`);
// document.write(`the floor value is ${Math.floor(user)} <br>`);
// document.write(`the ceil value is ${Math.ceil(user)} <br>`);

// // Question 3
// let user3 = +prompt(`Enter a number: `);
// document.write(`The float value of ${user} <br> `);
//  document.write(`the round off value is ${Math.round(user)} <br>`);
// document.write(`the floor value is ${Math.floor(user)} <br>`);
// document.write(`the ceil value is ${Math.ceil(user)} <br>`); 

// // Questin 4
// let user4 = +prompt(`Enter a number: `);
// document.write(`The float value of ${user} <br> `);
//  document.write(`the round off value is ${Math.round(user)} <br>`);
// document.write(`the floor value is ${Math.floor(user)} <br>`);
// document.write(`the ceil value is ${Math.ceil(user)} <br>`); 

// // Question 5
// let user5 = +prompt(`Enter a number: `);
// document.write(`The absolute value of ${user5} is ${Math.abs(user5)}`);

// // Question 6
// let user6 = Math.floor(Math.random() * 50);
// document.write(`The random dice = ${user6}`);

// // Question 7
// let user7 = Math.floor(Math.random() * 2);
// if (user7 == 0) {
//   document.write(`The random coin value is: Heads`);
// }
// else if (user7 == 1) {
//   document.write(`The random coin value is: Tails`);
// }
// else {
//   document.write(`The random coin value is: Error`);
// }

// // Question 8
// let user8 = Math.floor(Math.random() * 101);
// document.write(`random number between 1 and 100 : ${user8}`);

// // Question 9
// let user9 = +prompt(`Enter your weight in kilograms: `);
// document.write(`The weight of user is ${user9} kilograms`);

// // Question 10
// let user10 = +prompt(`choose a number between 1 and 10: `);
// let num = 7
// if (user10 == num) {
//   document.write(`Congratulations! You have guessed the right number`);
// }
// else {
//   document.write(`Try again!`);
// }

// // Question 11
// let date = new Date();
// document.write(`${date} <br>`);

// // Question 12
// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let dmon = new Date().getMonth();
// document.write(`Current month: ${months[dmon]}`);

// // Question 13
// let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let day = new Date().getDay();
// alert(`Today is ${days[day]}`);
// document.write(`Today is ${days[day]}`);

// // Question 14
// let days1 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let day1 = new Date().getDay();
// if (days1[day1] == "Sun" || days1[day1] == "Sat") {
//   document.write(`It's Fun day`);
// }
// else {
//   document.write(`It's a working day`);
// }

// // Question 15
// let date1 = new Date();
// let days2 = date1.getDate();
// if (days2 < 16) {
//   document.write(`First fifteen days of the month`);
// }
// else {
//   document.write(`Last days of the month`);
// }

// // Question 16
// let date2 = new Date();
// let ms = date2.getTime();
// let min = ms / (1000 * 60);
// document.write(`Current date: ${date2} <br>`);
// document.write(`Elapsed milliseconds since January 1, 1970: ${ms} <br>`);
// document.write(`Elapsed minutes since January 1, 1970: ${min} <br>`);

// // Question 17
// let date3 = new Date();
// let hours = date3.getHours();
// if (hours < 12) {
//   document.write(`It am`);
// }
// else {
//     document.write(`It pm`);
// }

// // Question 18
// let date4 = new Date().getFullYear();
// let laterDate = "31 Dec " + date4;
// document.write(`Later date: ${laterDate}`);

// // Question 19
// let ramdam= new Date().getDate();
// let dateram = 2
// let diff = ramdam - dateram;
// document.write(` ${diff} days haved passed since 1st Ramdan 2025 <br>`);

// // Question 20
// let year20 = new Date().getFullYear();
// let ms2 = new Date("June 18, 2015").getTime();
// let secon = ms2 /1000
// document.write(`${secon} second had passed since begning of 2015 to ${year20}  <br>`);

// // Question 23
// let age = prompt("Enter your age:");
// let currentYear = new Date().getFullYear();
// let birthYear = currentYear - age;
// document.write("Your age is: " + age + "<br>");
// document.write("Your birth year is: " + birthYear);

// // Question 24
// let month12 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let date4 = new Date();
// let currentMonth = date4.getMonth();
// let customerName = prompt("Enter your name: ");
// let numberOfUnits = +prompt("Enter number of units: ");
// let chargesPerUnit = +prompt("Enter charges per unit: ");
// let latePaymentSurcharge = +prompt("Enter late payment surcharge: ");
// let netAmount = numberOfUnits * chargesPerUnit;
// let grossAmount = netAmount + latePaymentSurcharge;

// document.write("<h1>K-Electric Bill</h1>");
// document.write("Customer Name: <b>" + customerName + "</b><br>");
// document.write("Month: <b>" + month12[currentMonth] + "</b><br>");
// document.write("Number of units: <b>" + numberOfUnits + "</b><br>");
// document.write("Charges per unit: <b>" + chargesPerUnit + "</b><br><br>");
// document.write("Net Amount Payable (within Due Date): <b>" + netAmount + "</b><br>");
// document.write("Late Payment Surcharge: <b>" + latePaymentSurcharge + "</b><br>");
// document.write("Gross Amount Payable (after Due Date): <b>" + grossAmount + "</b><br>");



























