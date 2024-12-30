console.log("Promise Function")
let a =Math.random()
let prom1= new Promise((resolve,reject)=>{

    if(a<0.5){
        reject("no number is supported")
    }
    else{
    setTimeout(() => {
        console.log("yes i am done")
        resolve("debi")
    }, 3000);
    }
})

// prom1.then(()=>{
//     console.log(a)
// })
// .catch((err)=>{
//     console.log(err)
// })
let prom2= new Promise((resolve,reject)=>{

    if(a<0.5){
        reject("no number is supported 2")
    }
    else{
    setTimeout(() => {
        console.log("yes i am done2")
        resolve("debi 2")
    }, 1000);
    }
})

let p3=Promise.all([prom1,prom2])
p3.then((a)=>{
    console.log(a)
})
.catch(err=>{
    console.log(err)

})
