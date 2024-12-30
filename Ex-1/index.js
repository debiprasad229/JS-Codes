/* create a faulty calculator
This faulty calculator does following:
1. It takes two numbers inputs from the user
2. It Performs wrong operations as follows:

+ --> -
* --> +
- --> /
/ --> **

It performs wrong operation 10% of times */

let random = Math.random()
let a = prompt("Enter First Number")
let c = prompt("Enter Operation")
let b = prompt("Enter Second Number")
let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}
if (random > 0.1) { 

    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else {
    c = obj[c] //this will perform errors 10% of times

    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
//This code will run in web server not in node.js