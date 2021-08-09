console.log('App.js is running');

// JSX - JavaScript XML
const inlineCss = {
        width: '200px',
        height: '300px',
        border: '3px solid #ff90f0'
};
// eslint-disable-next-line max-len
const imgUrl =
  'https://static01.nyt.com/images/2018/05/03/us/03spongebob_xp/03spongebob_xp-videoSixteenByNineJumbo1600.jpg';
// Challenge One
const user = {
    Name:    'Adam DubYa',
    Age:     30,
    Location: 'San Diego, CA 92126'
};
// Challenge Two
var app = {
    title: 'Art Thou\' Feeling It Now Mr. Krabs? ',
    subtitle: 'He Wasn\'t',
    options: []
};
// Challenge Three
function getOptions(options) {
    var out = [];
    let i;
    let deleteCount = 0;

    for(i = 0; i < options.length; i++) {
        // Warning: Each child in an array or iterator should have a unique "key" prop.
        // Note: added `key={i}` to <li> tags to resolve the above React warning
        out.splice(i, deleteCount, <li key={i}>{options[i]}</li>);
    }
    return (
        <span>
            <span>Here are your options:</span>
            <ol>{out}</ol>
        </span>
    );
}

var template = (
    <div>
        <h1>{app.title}</h1>
        {app.title && <h1>{app.subtitle}</h1>}
        <span>{app.options.length > 0 ? getOptions(app.options) : 'No options'}</span>
        <p>This is some info.</p>
        <img src={imgUrl} style={inlineCss}></img>
    </div>
); // will not work without babel (JSX compiler)
/* // Can use this equivalent JS code which babel compiles it into:
var template = React.createElement(
    "h1",
    { id: "someid" },
    "Something new"
);
*/
function getLocation(loc) {
    if (loc) {
        return <p>Location: {loc}</p>;
    }
    // Else statement is implicit. Will return undeifned in lieu of no
    /*else {
        return undefined;
    }*/
}

var templateTwo = (
    <div>
        <h1>Personal Info</h1>
        <p>Name: {user.Name ? user.Name.toUpperCase() : 'Anonymous'}</p>
        {user.Age && user.Age >= 18 ? <p>Age: {user.Age}</p> : ''}
        {getLocation(user.Location)}
    </div>
);


// PAY NO ATTENTION TO THE CODE BEHIND (ABOVE) THE GREEN COMMENTS!!!
let count = 0
const incrementCount = () => {
    count++
    renderCounterApp()
} 
const decrementCount = () => {
    count--
    renderCounterApp()
}
const resetCount = () => {
    console.log('Before reset: ', count)
    count = 0
    console.log('After reset: ', count)
    renderCounterApp()
}
const incId = 'increment'
const decId = 'decrement'
const resId = 'reset'

const appRoot  = document.getElementById('app')
const app1Root  = document.getElementById('app_1')
const app2Root  = document.getElementById('app_2')
// 
// Takes two arguments:
//  1. JSX you'd like to render
//  2. DOM element - where you would like to render it
//ReactDOM.render(templateTwo, appRoot);

// Demo 1
const renderCounterApp = () => {
    const templateCounter = (
        <div>
            <h1>Count: {count}</h1>
            <button id={incId} className='button' onClick={incrementCount}>+1</button>&emsp;
            <button id={decId} onClick={decrementCount}>-1</button>&emsp;
            <button id={resId} className='button' onClick={resetCount}>Reset</button>
        </div>
    );
    ReactDOM.render(templateCounter, appRoot);
}

// Demo 2
// https://reactjs.org/docs/events.html#form-events
const onFormSubmit = (e) => {
    e.preventDefault()
    //console.log('Form submitted')
    // get the value the user typed
    const option = e.target.elements.option.value
    if (option) {
        app.options.push(option)
    }
    console.log(app.options, app.options.length)
    renderTemplateThree()
    render()
}

const removeAllOptions = () => {
    app.options = []
    for (var i = 0; i < app.options.length; i++) {
        app.options.pop()
    }

    renderTemplatpThree()
    render()
    console.log(app.options.length)
}

const numbersArray = [55, 101, 1000]
const renderTemplateThree = () => {
    const templateThree = (
        <div>
            <h1>{app.title}</h1>
            {app.title && <h1>{app.subtitle}</h1>}
            <span>{app.options.length > 0 ? getOptions(app.options) : 'No options'}</span>
            <p>Options Count: {app.options.length}</p>
            <p>This is some info.</p>
            <img src={imgUrl} style={inlineCss}></img>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'></input>
                <button>Add Option</button>
            </form>
            <form onSubmit={removeAllOptions}>
                <button>Remove All Options</button>
            </form>
            {
                numbersArray.map((number) => {
                    return <p key={number}>Number: {number}</p>
                })
            }
            {
                <div>
                    Options:
                    <ol>
                        {app.options.map((item) => <li key={item}>{item}</li>)}
                    </ol>
                </div>
            }
         </div>
    )
    ReactDOM.render(templateThree, app1Root)
}

const onMakeDecision = () => {
    // generate a random number between 0 and length of array for options
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}

const render = () => {
    console.log(app.options)
    const renderTemplate = (
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do? {app.options.length}</button>
    )
    ReactDOM.render(renderTemplate, app2Root)
}

//renderCounterApp()
//renderTemplateThree()
//render()

// Challenge: Header with title Visibility Toggle
//            Show details button
//            Text revealed below show details button when clicked
//            Show details button then changes text to hide details when text is displayed
const app3Root = document.getElementById('app_3')
let buttonText = 'Show Details'
let showText = false 
const hiddenText = 'This is some hidden text for demo purposes'
const toggleVisibility = () => {
    if (buttonText === 'Show Details') {
        buttonText = 'Hide Details'
    }
    else if (buttonText === 'Hide Details') {
        buttonText = 'Show Details'
    }
    showText = !showText
    visibilityToggle()
}
const visibilityToggle = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{buttonText}</button>
            {showText ? <p>{hiddenText}</p>: undefined}
        </div>
    )
    ReactDOM.render(template, app3Root)
}

//visibilityToggle()


