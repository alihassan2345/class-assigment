let userInput = +prompt("Enter a number to find its factorial:");

if (isNaN(userInput)) {
    alert("Please enter a valid number.");
} else {
    let steps = "";
    for (let i = userInput; i >= 1; i--) {
        steps += i;
        if (i > 1) {
            steps += " × ";
        }
    }
    document.write(steps);
}

let usernum = +prompt("enter your number")

for (let i = usernum; i >= 1; i--) {
    usernum += i;
    if (i > 1) {
       usernum += " × ";
    }
}
document.write(usernum);

// question 1
var firstname = 'ali'
var lastname = 'hassan'
var conc = firstname+ " " + lastname
document.write(conc)

// question 2
var mobile = 'samsung galaxy'
document.write(`my faviorate mobile is : ${mobile} <br>`)
document.write(`lenght of mobile is : ${mobile.length}`)

// question 3
var country = 'pakistani'
document.write(`string : ${country} <br>`)
document.write(`index of n is : ${country.indexOf("n")}`)

// question 4

var name = "hello world"
document.write(`string : ${name} <br>`)
document.write(`last index of l : ${name.lastIndexOf("l")}`)

// question 5
let word = "Pakistani";
let character = word.charAt(3);
document.write(`string : ${word} <br>`)
document.write(`character at index 3 : ${character}`)

// question 6
var firstname = 'ali'
var lastname = ' hassan'
var conc = firstname.concat(lastname)
document.write(conc)

// question 7
var city = "hyderabad"
var newresult = city.replace("hyder" , "islam")
document.write(newresult)

// question 8
var andpara ="Ek raat andhera chaya and chand bhi adha chhupa hua tha. Shehar ke galiyan sooni thi and hawa tez chal rahi thi. Ek admi tez kadam uthata hua ek purani imarat ke samne ruk gaya and idhar udhar dekhne laga. Uski saansein tez thi and haath thande ho rahe the. Andar jane ka irada tha and dar bhi lag raha tha. Phir usne himmat ki and darwaza dhakka de kar khola. Andar andhera tha and sirf ek purana deepak jhal mila raha tha. Har taraf sannata tha and sirf uski apni saansein sunai de rahi thi. Achanak ek awaaz ayi and uska dil tez dhadakne laga. Woh mudne laga and tabhi ek thandi hawa ka jhonka aya and darwaza zor se band ho gaya.";
var para= andpara.replaceAll("and" , "&")
document.write(para)

// question 9
var str = "279"
document.write(`Value : ${str} <br>`)
document.write(`Type : ${typeof(str)} <br>`)
var number = 279
document.write(`Value : ${number} <br>`)
document.write(`Type : ${typeof(number)}`)

// question 10 
var user = prompt("enter your website")
document.write(`URL : www.${user}.com <br>`)
document.write(`Domain : ${user}.com`)

// question 11
var userinp = "peanuts"
document.write(userinp.toUpperCase())

// question 12
var userinput = "CARBUS"
document.write(userinput.toLowerCase())

// question 13
var titlecase = prompt("enter your title")
var titlenew = titlecase.slice(0,1).toUpperCase()
var secondtitle =titlecase.slice(1).toLowerCase()
var conca =titlenew + secondtitle
document.write(conca)

// question 14
var dotnum = 35.36
var remove = dotnum.replace(".","");
document.write(dotnum)
document.write(remove)

// question 15
var prompt1 = prompt("enter your first number")
var prompt2 = prompt("enter your second number")
var concu = prompt1 + prompt2
document.write(` a is : ${prompt1} <br>`)
document.write(` b is : ${prompt2} <br>`)
document.write(`a + b is : ${concu}`)

// question 16
var prompt11 = prompt("enter your first number")
var prompt12 = prompt("enter your second number")
var concu1 = prompt11 - prompt12
document.write(` a is : ${prompt11} <br>`)
document.write(` b is : ${prompt12} <br>`)
document.write(`a - b is : ${concu1}`)

