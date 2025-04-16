// question 1
function calculatePower() {
    let base = +prompt("Enter the base number:");
    let power = +prompt("Enter the base number:");

    // Convert string input to numbers
 

    // Calculate using built-in method
    const result = Math.pow(base, power);
    console.log(result); // Show result

    // Show result
 }

  calculatePower()

// question 3

let a = +prompt("Enter the first number:");
let b = +prompt("Enter the second number:");
let c = +prompt("Enter the third number:");

let S;  // Global variable

function sum() {
    S = (a + b + c) / 2;
    console.log( S);
}

function total() {
    let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    console.log(area);
}

// Call both functions
sum();
total();


// question 4
function calculateAverage(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
  }
  
  function calculatePercentage(m1, m2, m3) {
    let totalMarks = 300; 
    let obtainedMarks = m1 + m2 + m3;
    return (obtainedMarks / totalMarks) * 100;
  }
  
  function mainFunction() {
    let m1 = +prompt("Enter marks of Subject 1:");
    let m2 = +prompt("Enter marks of Subject 2:");
    let m3 = +prompt("Enter marks of Subject 3:");
  
    let avg = calculateAverage(m1, m2, m3);
    let perc = calculatePercentage(m1, m2, m3);
  
    console.log(`Average Marks: ${avg.toFixed(2)}`);
    console.log(`Percentage: ${perc.toFixed(2)}%`);
  }
  
  
  mainFunction();



// question 5

function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]); 
      if (str[i] === char) {
        return i; 
      }
    }
    return -1; 
  }
  
  console.log(customIndexOf("hello", "o")); 





  
// question 6
function removevowel(){
    let str = prompt("Enter a string:");
    console.log(str); // Show original string
    let result = str.replaceAll(/[aeiouAEIOU]/g, '');
    console.log(result); // Show result
  
}

removevowel()



// question 8

function convertToMeters(km) {
    return km * 1000;
  }
  
  function convertToFeet(km1) {
    return km1 * 3280.84;
  }
  
  function convertToInches(km2) {
    return km2 * 39370.1;
  }
  
  function convertToCentimeters(km3) {
    return km3 * 100000;
  }
  
  let distanceKm = 5; 
  
  console.log("Distance in Kilometers: " + distanceKm);
  console.log("In Meters: " + convertToMeters(distanceKm));
  console.log("In Feet: " + convertToFeet(distanceKm));
  console.log("In Inches: " + convertToInches(distanceKm));
  console.log("In Centimeters: " + convertToCentimeters(distanceKm));
  

// question 9

function employeesallary(){
    var actuallsallary = 50000;
    overtimeinhour = +prompt("Enter overtime hours:");
    perhours = 12 
    overtime = overtimeinhour * perhours;
    total = ` your total hours is ${overtimeinhour} and your total salary is ${overtime + actuallsallary}`
    console.log(total);
}

employeesallary()



