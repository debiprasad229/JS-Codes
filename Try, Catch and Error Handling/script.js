let a = prompt("Enter First Number")
let b = prompt("Enter Second Number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Please type a valid number")
}
let sum = parseInt(a) + parseInt(b)
// when we take input using prompt it returns a string so parseInt is used to convert any string type values into integer type
function main(){
    let x=1
try {
    console.log("The sum is", sum * x)
    return("True")
} catch (error) {
    console.log("Error come")
    return("False")
}
finally{
    console.log("Files are being closed")
}
}
let c = main()