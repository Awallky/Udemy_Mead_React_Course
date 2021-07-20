// entry point for application -> output 
const path = require('path')
//console.log(path.join(__dirname, 'public')) // path to current location

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
}