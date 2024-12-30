// old for loop
let arr=[1,22,54,66,3]
let newArr=[]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(element**2)  
}
console.log(newArr)
// it will print the square of above Array elements 

// map filter reduce(mfr) concept
let newArr1=arr.map((e)=>{
    return e**2
})
console.log(newArr)

// filter function
const GreaterThanSeven=(e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(GreaterThanSeven))

//  reduce function
let arr2=[1,2,3,4,5,6]
const red=(a,b)=>{
    return a*b//we can perform any operation using this
}
console.log(arr2.reduce(red))

