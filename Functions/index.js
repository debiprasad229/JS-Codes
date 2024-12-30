console.log("functions in js")
function nice(name) {
    console.log("hey " + name + " you are nice")
    console.log("hey " + name + " you are good")
    console.log("hey " + name + " you are best")
}
nice("john")
function sum(p,q,r=5) {
    return p+q+r
}
result = sum(4,70)
console.log("Final Result is:" + result)
// arrow function
const func1=(x)=>{
    console.log("i am an arrow function"+x)
}
func1(78)
func1(23)
func1(33)
