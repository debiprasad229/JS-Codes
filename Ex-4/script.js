//Exercise12
console.log("Given 5 boxes, assign a random color and a random background to each box using DOM concepts")

let boxes = document.querySelector(".container").children
function getRandomColor() {
    let val1 = Math.ceil(0+Math.random()*255);
    let val2 = Math.ceil(0+Math.random()*255);
    let val3 = Math.ceil(0+Math.random()*255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
//Math.ceil will return maximum value i.e if user inputs 4.23 it will return 5

Array.from(boxes).forEach(e => {
    e.style.backgroundColor=getRandomColor()
    e.style.Color=getRandomColor()
})
