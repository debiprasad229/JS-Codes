console.log("Hello this is js part 2")
let a=6
let b=8
let c="hello"
console.log(a + b + 9)
console.log(typeof a,typeof b, typeof c)
console.log(b)
console.log(c)

/*var _a="hello" this declaration will work
 var 55a="world" this declaration will not work
 variables in js are case sensitive
*/

//const a1=22; this value can't be changed bcz of const

/* modern js codes variables are declared in let variable. 
 This 'let' is a block datatype 
 if it declared in a block of code then the value will work in that block only
 if it declared outside of block then its value is work as global varible
 var are global datatypes they aren't block datatypes as "let"
*/
{
    let b =77
    console.log(b)
}
let x = "Som bhai"
let y =33
let z=3.33
const p=true
let q= undefined
let r=null
console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)
let o={
    name:"Som",
    "job code":5900, 
    "is_handsome":true
}
/* this is an example of object
if there are multiple words in declaration then it will be written in double quot otherwise it will written without double quot 
*/
console.log(o)
o.salary="100 crores"//this will add extra info.
console.log(o)

