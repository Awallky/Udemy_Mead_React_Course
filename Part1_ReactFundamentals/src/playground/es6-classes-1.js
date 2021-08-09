
class Person {
    constructor(name = 'Anonymous', age = 0) {
        //console.log('test', name)
        this.name = name || 'Unknown'
        this.age = age
    }
    getGreeting() {
        //return 'Hi I am ' + this.name + '!'
        return `Hi I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!(this.major)
    }
    getDescription() {
        let desc = super.getDescription()
        if (this.hasMajor()) {
            desc += ` Their major is ${this.major}`
        }
        return desc
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let greet = super.getGreeting()
        if (this.hasHomeLocation()) {
            greet += ` I'm visiting from ${this.homeLocation}.`
        }
        return greet
    }
    hasHomeLocation() {
        return !!(this.homeLocation)
    }
}

const me = new Person('Adam Dubya', 30)
const them = new Person()
console.log(me.getGreeting(), me.getDescription())
console.log(them.getGreeting(), them.getDescription())

const stud = new Student('Adam Dubya', 30, 'Computer Engineering')
console.log(stud.hasMajor(), stud.getDescription())

const otherstud = new Student()
console.log(otherstud.hasMajor(),otherstud.getDescription())

const meAsTraveler = new Traveler('Adam DubYa', 30, 'San Diego')
console.log('Traveler', meAsTraveler.getGreeting())
