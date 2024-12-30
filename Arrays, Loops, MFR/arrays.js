//Arrays in js
let arr = [1, 3, 5, 6, 8]

arr[0] = 5666
//after this index 0 value will changed to 5666

console.log(arr)
console.log(arr.length)
console.log(arr[1])
console.log(arr, toString())//not working
console.log(arr.join(" and "))

let arr2 = [2, 5, 7, 3, 2, 1]

arr2.pop()//this will remove last element

console.log(arr2)

arr2.push(200)//this will add the element to last

console.log(arr2)

arr2.shift()//this will remove first element
console.log(arr2)

arr2.unshift("cool")//this will add elements at first
console.log(arr2)

delete arr2[3]
console.log(arr2)

let a1 = [1, 2, 3]
let a2 = [4, 5, 6]
let a3 = [9, 8, 7]

a4 = a1.concat(a2, a3)//it returns a new array and doesnot change existing arrays
console.log(a4)

let numbers = [1, 2, 3, 4, 5]
numbers.splice(1, 2)
// numbers.splice(1, 3)
console.log(numbers.splice(1, 2))
// console.log(numbers.splice(1,3))
let no = [5, 3, 2, 4, 1]
no.sort()
console.log(no.sort())

let no1 = [1, 2, 3, 4]
no1.slice(2)
//start from index 2 and print till last 
no1.slice(1, 3)
//start from index 1 and stop before index 3

console.log(no1.slice(2))
console.log(no1.slice(1, 3))

