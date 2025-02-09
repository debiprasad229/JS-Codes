//Getters and Setters
class User {
    constructor(name) {
        this.name = name
    }
    get name() {
        return this._name
    }
    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short")
            return
        }
        this._name = value
    }
}

let user = new User("Debi")
console.log(user.name)
user.name="Debi2"
console.log(user.name)