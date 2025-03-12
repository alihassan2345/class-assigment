// // Question 1
// function name1(){
//     document.write("Hello World" + "<br>");
// }
// name1();
// name1();

// // Question 2
// function time(){
//     var a = new Date();
//     document.write(a + "<br>");
// }
// time();

// // Question 3
// function name(firstName, lastName){
//     document.write("Hello " + firstName + " " + lastName + "<br>");
// }
// name("Ali" , "Hassan");

// // Question 4
// function add(a,b){
//     return a + b 

// }
// var c = add(+prompt("Enter first number"), +prompt("Enter second number"));
// document.write(c + "<br>");

// // Question 5
// function calculate(num1, num2, operator) {
//     if (operator === "+") {
//         return num1 + num2;
//     } else if (operator === "-") {
//         return num1 - num2;
//     } else if (operator === "*") {
//         return num1 * num2;
//     } else if (operator === "/") {
//         return  num1 / num2 ;
//     } else {
//         return "Invalid operator";
//     }
// }
// let result = calculate(+prompt( "enter your first number"),+prompt( "enter your second number") , prompt("enter operator (you can choose only +, -, *, /)"));
// document.write("Result: " + result );

// // Question 6
// function square(squ) {
//     return squ ** 2;
// }
// var a = square(+prompt("Enter a number to get its square"));
// document.write(`The square of the ${Math.sqrt(a)} is ${a} <br>`);

// // Question 7
// function factorialSteps(n) {
//     if (n>0){
//         let result = 1;
//         let steps = "";
//         for (let i = n; i >= 1; i--) {
//             result *= i;
//             steps += i;
    
//             if (i > 1) { 
//                 steps += " × ";  
//             } else { 
//                 steps += " = "; 
//             }
//         }

//     return steps + result;
// }
//     else{
//         return "please enter a valid positive number";
//     }
   
    
// }
// let n = parseInt(prompt("Enter a number to find its factorial:"));
// document.write(factorialSteps(n));

// // Question 8

// function countNumbers(start, end) {
//     let result = "";
//     if (start > end) {
//         for (let i = start; i >= end; i--) {
//             result += i + "<br> ";
//         }
//     } else {
//         for (let i = start; i <= end; i++) {
//             result += i + " <br>";
//         }
//     }
//     return result
// }
// let start = +prompt("Enter start number:");
// let end = +prompt("Enter end number:");
// document.write(`${countNumbers(start, end)}`);

// // Question 9



// document.onkeydown = function(event) {
//     if (event.key === "Enter") {
//         console.log("Enter key pressed!");
//     }
// };
// document.onkeyup = function(event) {
//     console.log("Key Released: " + event.key);
// };

// window.onkeydown = function(event) {
//     if (event.key === " ") {
//         event.preventDefault(); // Spacebar se page scroll na ho
//         console.log("Spacebar pressed but scrolling prevented!");
//     }
// };




// function calculate(num1, num2, operator) {
//     if (operator === "+") {
//         return num1 + num2;
//     } else if (operator === "-") {
//         return num1 - num2;
//     } else if (operator === "*") {
//         return num1 * num2;
//     } else if (operator === "/") {
//         return  num1 / num2 ;
//     } else {
//         return "Invalid operator";
//     }
// }




