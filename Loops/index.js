console.log("tutorial on loops")
let a=1
for(let i=0;i<100;i++)
    {
        console.log(a+i)
    }
    let obj={name:"Debi",role:"programming",college:"kmbb"}
    //forin loop
    for (const key in obj) {
            const element = obj[key];
            console.log(key)
            console.log(element)
     }
    //  forof loop
     for (const characters of "debi") {
        console.log(characters)
        
     }
    //  while loop
    let i=3
    while(i<6){
        console.log(i)
        i++
    }
    // do-while loop
    let j=40
    do {
        console.log(j)

    } while (j<6);
   