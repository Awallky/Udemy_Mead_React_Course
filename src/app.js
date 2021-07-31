// Order is not important for named import/exports
// Name is important
// import mul, { square, add } from './utils.js'
// import { isAdult, canDrink } from './person.js'
// import isEmail from './validator_export.js'
import React from 'react'
import ReactDOM from 'react-dom'

import IndecisionApp from './components/IndecisionApp';
// const email = 'ajhsbekfghzskirgjhgsdirufgheiruiggaeorg@e.com'
//console.log("app.js is running!!!____!!!!", square(4), add(1,1), isAdult(30), canDrink(16), mul(1,2), email, 'isEmail: ', isEmail(email))
// const template = <p>Testing 123!</p>
ReactDOM.render(<IndecisionApp />, document.getElementById('app_0'))
// can choose to set up a single default export
// ex: export {add, subtract, mul as default }
//     import mul, {add, subtract}
