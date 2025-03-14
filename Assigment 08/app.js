// // Question 01
// function date(){
//     let curda = new Date()
//     document.write(curda)
// }
// date()

//     // Question 02
// function name1( first , last){
//     let firstname = first
//     let lastname = last
//     document.write(firstname , lastname)
// }

// name1(prompt("enter your first name") , prompt("enter your last name"))


// // Question 03
// function num1( first , last){
//         let firstnum = first
//         let lastnum = last
//         document.write(firstnum + lastnum)
//     }
    
//     num1(+prompt("enter your first name") , +prompt("enter your last name"))

// // Question 04
// function calculate(num1, num2, operator) {
//         if (operator === "+") {
//             return num1 + num2;
//         } else if (operator === "-") {
//             return num1 - num2;
//         } else if (operator === "*") {
//             return num1 * num2;
//         } else if (operator === "/") {
//             return  num1 / num2 ;
//         } else {
//             return "Invalid operator";
//         }
//     }
    
//     let final = calculate(+prompt('enter num 1') , +prompt("enter num 2") , prompt("enter opreate"))
//     document.write(final)

// // Question 05
// function square(squ) {
//     return squ ** 2;
// }
// var a = square(+prompt("Enter a number to get its square"));
// document.write(`The square of the ${Math.sqrt(a)} is ${a} <br>`);

// // Question 06


// // Question 07
// function counter(numm1 , numm2){
//     let num11 = numm1
//     let num22 = numm2

//     for(let i = num11 ; i <= num22 ; i++){
//         document.write(i + " ")
//     }
//     document.write("<br>")
// }

// counter(+prompt("enter start num") , +prompt("enter last num "))


// // Question 08
// function hypo(squ) {
//         return squ ** 2;
//     }

// function base(squ1){
//     return squ1 ** 2;
// }

// function perp(squ2){
//     return squ2 ** 2;
// }

// let a = base(+prompt("Enter the length of the base"));

// let b = perp(+prompt("Enter the length of the perpendicular"));

// let c = hypo(+prompt("Enter the length of the hyptneous"))

// let resu = Math.sqrt(a) + "=" + Math.sqrt(b) +"+"+Math.sqrt(c)
// let resu1 = a + "=" + b +"+"+c

// document.write(resu + "<br>")
// document.write(resu1)

// // Question 09

// function rectangleArea(width, height) {
//     return width * height;
//   }

//   const area1 = rectangleArea(5, 10);
//   console.log("Area when passing values directly:", area1);

//   let w = 7;
//   let h = 3;
//   const area2 = rectangleArea(w, h);
//   console.log("Area when passing variables:", area2);


// // Question 10 
// function Palindrome(str) {
//     str = str.toLowerCase()
    
//     // Reverse the string
//     let reversedStr = str.split('').reverse().join('');

//     if (str=== reversedStr){
//         return str +" is a palindrome of " + reversedStr ;
//     }
//     else{
//         return str +" is not a palindrome of " + reversedStr ;
//     }
    
// }


// document.write(Palindrome(prompt("enter your palindrome name")));        


// // Question 11
// function capitalizeWords(str) {
//     return str.replace(/\b\w/g, char => char.toUpperCase());
// }


// console.log(capitalizeWords('the quick brown fox')); 

// Question 12
function findLongestWord(str) {
    let words = str.split(" "); // String ko words me split karna
    let longestWord = ""; // Longest word ko store karne ke liye variable

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i]; // Agar current word bada hai, toh update karna
        }
    }
    return longestWord;
}

// Example usage:
console.log(findLongestWord("Web Development Tutorial")); // Output: "Development"
