/*let obj = {
    a: 1,
    b: "Debi"
}
console.log(obj)
let animal = {
    eats: "true"

}
let rabbit = {
    jumps: "True"
}
rabbit.__proto__ = animal
*/
//Class
class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is created")
    }
    eats() {
        console.log("I am Eating")
    }
    jumps() {
        console.log("I am Jumping")
    }
}
class Lion extends Animal {
    constructor(name) {
        super(name)
        console.log("This is Lion")
    }
    eats() {
        console.log("Lion is eating")
    }
}
let a = new Animal("Bunny")
console.log(a)
let l = new Lion("Leo")
console.log(l)
