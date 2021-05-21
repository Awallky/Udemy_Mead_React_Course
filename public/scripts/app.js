'use strict';

console.log('App.js is running');

// JSX - JavaScript XML
var inlineCss = {
    width: '200px',
    height: '300px',
    border: '3px solid #ff90f0'
};
// eslint-disable-next-line max-len
var imgUrl = 'https://static01.nyt.com/images/2018/05/03/us/03spongebob_xp/03spongebob_xp-videoSixteenByNineJumbo1600.jpg';
// Challenge One
var user = {
    Name: 'Adam DubYa',
    Age: 30,
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
    var i = void 0;
    var deleteCount = 0;

    for (i = 0; i < options.length; i++) {
        // Warning: Each child in an array or iterator should have a unique "key" prop.
        // Note: added `key={i}` to <li> tags to resolve the above React warning
        out.splice(i, deleteCount, React.createElement(
            'li',
            { key: i },
            options[i]
        ));
    }
    return React.createElement(
        'ol',
        null,
        out
    );
}

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title && app.subtitle ? app.title + ': ' + app.subtitle : app.title
    ),
    app.options.length > 0 ? getOptions(app.options) : 'No options',
    React.createElement(
        'p',
        null,
        'This is some info.'
    ),
    React.createElement('img', { src: imgUrl, style: inlineCss })
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
        return React.createElement(
            'p',
            null,
            'Location: ',
            loc
        );
    }
    // Else statement is implicit. Will return undeifned in lieu of no
    /*else {
        return undefined;
    }*/
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Personal Info'
    ),
    React.createElement(
        'p',
        null,
        'Name: ',
        user.Name ? user.Name.toUpperCase() : 'Anonymous'
    ),
    user.Age && user.Age >= 18 ? React.createElement(
        'p',
        null,
        'Age: ',
        user.Age
    ) : '',
    getLocation(user.Location)
);

var appRoot = document.getElementById('app');
// 
// Takes two arguments:
//  1. JSX you'd like to render
//  2. DOM element - where you would like to render it
//ReactDOM.render(templateTwo, appRoot);
ReactDOM.render(template, appRoot);
