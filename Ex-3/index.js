/*
Write a program to calculate the factorial of a number using reduce and for loops
*/

//Using Reduce
let a = 6
function factorial(number) {
    let arr = Array.from(Array(number + 1).keys())
    console.log("Factorial is")
    // console.log(arr.slice(1,)) This will show the array
    let c = arr.slice(1,).reduce((a, b) => {
        return a * b
    })
    console.log(c)
}
factorial(a)
//Using for loop
let fac = 4
function facfor(number) {

    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    return fac;

}
console.log(facfor(fac))
