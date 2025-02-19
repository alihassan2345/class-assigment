// question 1

let arr100 = [];
console.log(arr100)


// question 3

let newarr =[
    "apple","mango","grapes"
]
document.write(newarr)

// question 4


let newarr2 =[
   1 ,2, 3,4,5,6,7
]
document.write(newarr2)

// question 5
let newarr3 =[
       true , false ,false ,true
    ]
    document.write(newarr3)
    
// question 6

    let newarr4 =[
        true , "ali" ,1 ,"apple ",
     ]
     document.write(newarr4)

    // question 7

    let newarr5 =[
    "jazz" , "warid " , "telenor" , "zong" 
     ]
     document.write(newarr5)

    // question 8

    
    let newarr6 =[
        "SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD"
         ]
         document.write("qualification :" +"<br>" +  newarr6)

    // question 9

    
    let newarr7 =[
   "1)  Avenger : Age of ultron" + "<br>" ,
   "2)  Specture" + "<br>",
   "3)  Avenger : Age of ultron" + "<br>", 
   "4) Avenger : Age of ultron" + "<br>" ,
     ];
     document.write("top movie of 2015" + "<br>" +newarr7)
     document.write("Lenght of array :  "+ newarr7.length)


// question 10

 
let newarr8 =[
    "Audi"  ,
    "Volvo" ,
    "Ford" , 
    "Lamborghini" + "<br>" ,
      ];
      document.write("Faviorate cars" + "<br>" +newarr8)
      document.write("First index of array :  0 <br>  ")
      document.write("car at First index of array :  "+ newarr8[0] + "<br>")
      document.write("last index of array :  3 <br>  ")
      document.write("car at First index of array :  "+ newarr8[3] + "<br>")

// question 11

let student = [
    "michel ","john","tony"
]
let number =[
    320 ,230 ,480
]
let percen =[
   " 64% ",
   "46%",
   "96%"

]

document.write(`score of ${student[0]} is ${number[0]}. percentage : ${percen[0]} <br>`)
document.write(`score of ${student[1]} is ${number[1]}. percentage : ${percen[1]}  <br>`)
document.write(`score of ${student[2]} is ${number[2]}. percentage : ${percen[2]} <br> `)


// 13. Sort student scores
let studentScoresArr = [320, 230, 480, 120];
document.write(`<p>Scores of student: ${studentScoresArr.join(", ")}</p>`);
studentScoresArr.sort();
document.write(`<p>orderded of score of student: ${studentScoresArr.join(", ")}</p>`);

// 14. Sort fruits array
let fruits = ["strawberry", "apple", "orange", "banana"];
document.write(`<p>Fruits list: ${fruits.join(", ")}</p>`);
fruits.sort();
document.write(`<p>ordered Fruits list: ${fruits.join(", ")}</p>`);


// 15. Copy selected city names
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write(`<p>Cities list: ${cities.join(", ")}</p>`);
let selectedCities = cities.slice(1, 4);
document.write(`<p>Selected Cities list: ${selectedCities.join(", ")}</p>`);


// 16. Join array elements into a string
let arr = ["This", "is", "my", "cat"];
document.write(`array : ${arr}`);
let joinedString = arr.join(" ");
document.write(`<p>string : ${joinedString}</p>`);

// 17. FIFO (Queue)
let queue = [];
queue.push("First");
queue.push("In");
queue.push("First");
queue.push("Out");
document.write(`<p>FIFO Output: ${queue.shift()}, ${queue.shift()}, ${queue.shift()}, ${queue.shift()}</p>`);

// 18. LIFO (Stack)
let stack = [];
stack.push("First");
stack.push("In");
stack.push("Last");
stack.push("Out");
document.write(`<p>LIFO Output: ${stack.pop()}, ${stack.pop()}, ${stack.pop()}, ${stack.pop()}</p>`);


// 19. Phone manufacturers dropdown
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
phoneManufacturers.forEach(phone => document.write(`<option>${phone}</option>`));
document.write("</select>");


// 20. Declare and initialize an empty multidimensional array
let multiArray = [[]];

// 21. Matrix representation
let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
matrix.forEach(row => document.write(`<p>${row.join(" ")}</p>`));