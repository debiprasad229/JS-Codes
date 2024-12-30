console.log("Som")
let boxes = document.getElementsByClassName("box")
console.log(boxes)
boxes[3].style.backgroundColor = "blue"
// this will turn 3rd box to blue

document.getElementById("redbox").style.backgroundColor = "red"
// this will turn the id "redbox" to color red
// the boxes whose id is named redbox it will turn them to red

document.querySelector(".box").style.backgroundColor="green"
// this will turn 1st box to green

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="red"
})
// if we want to turn all boxes to same color use this
