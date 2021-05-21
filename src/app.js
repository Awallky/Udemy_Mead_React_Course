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
    options: ['Pickle', 'Patty', 'Cheese']
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
        <ol>{out}</ol>
    );
}

var template = (
    <div>
        <h1>{app.title && app.subtitle ? app.title + ': ' + app.subtitle : app.title}</h1>
        {app.options.length > 0 ? getOptions(app.options) : 'No options'}
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

var appRoot  = document.getElementById('app');
// 
// Takes two arguments:
//  1. JSX you'd like to render
//  2. DOM element - where you would like to render it
//ReactDOM.render(templateTwo, appRoot);
ReactDOM.render(template, appRoot);
