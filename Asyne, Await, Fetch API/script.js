// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })
// }
/*settle means resolve or reject
resolve means promise has settled sucessfully
reject menas promise has not settled sucessfully
*/
async function getData() {
     //simulate getting data from a server
     let x= await fetch ('https://jsonplaceholder.typicode.com/todos/1')
     let data =await x.json()//we can write 'text' also
     console.log(data)
    
}
async function main() {
console.log("loading modules")
console.log("do something else")
console.log("load data")
let data =await getData()
console.log(data)
console.log("process data")
console.log("task 2") 
}
// data.then((value) => {
//     console.log(data)
//     console.log("process data")
// })
main()
