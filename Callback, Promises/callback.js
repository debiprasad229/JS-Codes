console.log("i am good")
console.log("i am not good")
setTimeout(() => {
  console.log("this is inside set timeout")
}, 0);
setTimeout(() => {
  console.log("this is 2nd timeout")
}, 0);
console.log("the end")
//this is called asynchronous property of js. Thats why all outer scripts will executed first then it will run the settimeout function even if it is set to 0 interval
const fn = () => {
  console.log("nothing")
}
const callback = (arg, fn) => {
  console.log(arg)
  fn()
}
const loadScript = (src, callback) => {
  //type anfn to create a anonymous arrow function

  let sc = document.createElement("Script")
  sc.src = src
  sc.onload = callback("Debi")

  document.head.append(sc)
}
loadScript("https://tubitv.com/tv-shows/200022314/s03-e05-haunting", (arg, fn) => {
  console.log(arg)
  fn("firstarg", () => {
    ddg("second arg", () => {

    })
  })

})
//after some time it will become more lenthy so we have to use "promises" except "callback"
