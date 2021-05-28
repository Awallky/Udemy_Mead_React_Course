// arguments object - no longer bound with arrow functions
const add = (a, b) => {
    //console.log(arguments)
    return a+b 
}
console.log(add(55,1,1001))
// this keyword - no longer bound with arrow functions
const user = {
    name: 'Adam',
    cities: ['Philly', 'New York', 'Dublin'],
    /*printPlacesLived () {
        console.log(this.name)
        console.log(this.cities)

        // causes crash because this.name is not accessible to an anonymous function
        //this.cities.forEach(function (city) {
        //    console.log(this.name + ' has lived in ' + city)
        //});
        //workaround: 
        const that = this
        this.cities.forEach(function (city) {
            console.log(that.name + ' has lived in ' + city)
        });
        // Arrow function is bound to the parent's this value
        // Functions no longer bind their own this value with arrow functions
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city)
        })
        // There are pplaces where you do not want to use arrow functions because it does not bind its own this value
        // One example is inside of object methods like the placesLived method
    }*/
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!')
    }
}

const multiplier = {
    // numbers - array of numbers
    numbers: [1, 2, 3],
    // multiplyBy - single number
    multiplyBy: 100,
    // multiply - return a new array where the numbers have been multiplied, use map
    multiply() {
        return this.numbers.map((number) => number + ' * ' + this.multiplyBy + ' = ' + number*this.multiplyBy)
    }
}

console.log(user.printPlacesLived(), user.cities)
console.log(multiplier.multiply())