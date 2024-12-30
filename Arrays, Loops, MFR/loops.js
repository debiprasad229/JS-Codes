// for loop
let a=[1,23,2,5,66]
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
}
// foreach loop
a.forEach((value, index, arr)=>{
    console.log(value, index, arr)
})

// forin loop
let obj={
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element)
    }
}
// forof loop
for (const element of a) {
    console.log(element)
}


