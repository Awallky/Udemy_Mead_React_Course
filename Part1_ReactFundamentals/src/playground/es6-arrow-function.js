// ES5 function
const square = function (x) {
    return x * x
}

console.log(square(8))

// ES6 arrow function
const squareArrow = (x) => {
    return x * x
}
console.log(squareArrow(9))

const squareArrow_2 = (x) => x * x
console.log(squareArrow_2(9))

const fullName = 'Adam Dubya'

const getFullName = () => {
    const x = document.getElementById('fName').value
    const y = document.getElementById('lName').value
    document.getElementById('fullName').innerHTML = x + ' ' + y
}

const getFirstName = (full) => {
    return (full && full.split(' ')[0])
}

// An inline function
const getFirstName_2 = (full) => (full && full.split(' ')[0])

console.log('Arrow 1', getFirstName(fullName))
console.log('Arrow 2', getFirstName_2(fullName))

var template = (
    <div>
        <form>
            First Name:
            <input type='text' id='fName' size='10'></input>
            <br></br>
            Last Name:
            <input type='text' id='lName' size='10'></input>
            <br></br>
            Your name:
            <input type='button' value='Submit' onClick={getFullName}></input>
        </form>
        Your name is: <span id='fullName'></span>
    </div>
);

var appRoot  = document.getElementById('app');
// 
// Takes two arguments:
//  1. JSX you'd like to render
//  2. DOM element - where you would like to render it
//ReactDOM.render(templateTwo, appRoot);
ReactDOM.render(template, appRoot);
