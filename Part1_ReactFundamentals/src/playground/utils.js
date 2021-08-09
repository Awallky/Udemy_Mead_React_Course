console.log('utils.js is running!')
const square = (num) => num*num
const add = (num1, num2) => num1+num2
const mul = (num1, num2) => num1*num2
export {
    square,
    add,
    mul as default // cannot name export in named import statement
                   // will not be found
}
