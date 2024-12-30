console.log("This is Strings Tutorial")
let a = "Debi";
console.log(a[0])
console.log(a.length)
let name = "Debi"
let friend="Ram"
console.log("his name is "+name + " and his friend name is "+friend)
// Template literals in js
console.log(`his name is ${name} and his friend name is ${friend}`)

let b="Shivam"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
console.log(b.slice(1,4))
console.log(b.slice(4))
let c="sonuon"
console.log(c.replace("on","33"))
// replace will only change first characters they dont change the other characters
console.log(c.concat(b,a,"Samsung", "moto"))
/*NOTE-
 strings cant be changed through out the program execution
 this property of strings is called immutability*/