//import React, { useState } from 'react'

const obj = {
    name: 'Vikram',
    getName() {
        return this.name
    }
};

// Can look at Mozilla documentation to see how this works more completely
const getName = obj.getName.bind({name: 'Vik'})
const func = function () {
    console.log(this)
}
console.log(obj.getName())
console.log(getName())
func()

const getRandomInt = (max) => Math.floor(Math.random() * max)

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleRemoveOption = this.handleRemoveOption.bind(this)
        this.state = {
            title: 'Indecision',
            subtitle: 'Put your hands in the life of a computer',
            options: props.options
        }
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handlePick() {
        alert('Select: ' + this.state.options[getRandomInt(this.state.options.length)])
    }
    handleAddOption(option) {
        if(!option) {
            console.log('Indecision Empty Option')
            return 'Enter valid value to add item.'
        }
        else if(this.state.options.indexOf(option) > -1) {
            console.log('Indecision Pre-existing Option')
            return 'This option already exists'
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })
    }
    handleRemoveOption(optionToRemove) {
        console.log("Indecision remove option")
        // wrap parentheses around object return to 
        // make sure it is treated as an object
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option
            })
        }))
    }
    render() {
        return (
            <div>
                <Header /*title={this.state.title}*/ subtitle={this.state.subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleAddOption={this.handleAddOption}
                    handleRemoveOption={this.handleRemoveOption}
                />
                <AddOption addOption={this.handleAddOption} />
                <Counter count={10} />
                <VisibilityToggle />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

// Extends the Component class, that gives all of the features of React
// Requires one special method to be defined: render
// Note: React enforces classes that extend Component to be have their name be upper case for the first letter
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

// default props value for header
Header.defaultProps = {
    title: "some default title"
}
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!(props.hasOptions)}
            >
                What should I do?
            </button>
        </div>
    )
}
// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.handlePick}
//                     disabled={!(this.props.hasOptions)}
//                 >
//                     What should I do?
//                 </button>
//             </div>
//         )
//     }
// }

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 <p>Options:</p>
//                 {
//                     this.props.options.map((option) => <Option
//                                                             key={option}
//                                                             optionText={option}
//                                                             handleRemoveOption={this.props.handleRemoveOption}
//                                                         /> )
//                 }
//             </div>
//         )
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            <p>Options:</p>
            <ul>
            {
                props.options.map((option) => <Option
                                                    key={option}
                                                    optionText={option}
                                                    handleRemoveOption={props.handleRemoveOption}
                                                />)
            }
            </ul>
        </div>
    )
}

const Option = (props) => {
    return (
        <li>
            {props.optionText}&nbsp;
            <button
                onClick={(e) => {
                    console.log(props.optionText)
                    e.preventDefault()
                    props.handleRemoveOption(props.optionText)
                }}
            >
                Remove
            </button>
        </li>
    )
}
// class Option extends React.Component {
//     render() {
//         return (
//                 <li>{this.props.optionText}</li>
//         )
//     }
// }

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        console.log('AddOption handle add option', this.state.error)
        e.preventDefault()
        const option = e.target.elements.option.value.trim() // trim white space from end of string
        const error = this.props.addOption(option)
        console.log(error)
        this.setState(() => {
            return {
                // original below
                //error: error

                // can also do this since they share the same name: 
                error
            }
        })
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'></input>
                    <button>Add Option</button>
                </form>
            </div>
        )}
}

// --------------------------------------------------- 
// VisibilityToggle - render, constructor, handleToggleVisisbility
// visibility -> false initially 
class VisibilityToggle extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            visibility: false,
            visibilityText: 'Show Details'
        }
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this)
    }
    handleVisibilityToggle () {
        if (this.state.visibility) {
            this.setState((prevState) => {
                return {
                    visibility: !(prevState.visibility),
                    visibilityText: "Hide Details"
                }
            })
        }
        else {
            this.setState((prevState) => {
                return {
                    visibility: !(prevState.visibility),
                    visibilityText: "Show Details"
                }
            })
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.handleVisibilityToggle} title='visibilityToggleButton'>{this.state.visibilityText}</button>
                {this.state.visibility && (
                    <div>
                        <p>Some  hidden deetz!</p>
                    </div>
                )}
            </div>
        )
    }
}
// ---------------------------------------------------

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleMinus = this.handleMinus.bind(this)
        this.handlePlus = this.handlePlus.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            initialCount: props.count,
            count: props.count,
            name: "Julie"
        }
    }
    // Want to pass a function to setState as opposed to an object because there are issues
    // with the asynchronous nature of the setState calls
    handlePlus () {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    handleMinus () {
        this.setState((prevState) => {
            return {
                count: prevState.count-1
            }
        })
        // Dangerous because setState is asynchronous
        // this.setState ({
        //     count: this.state.count-1
        // })
    }
    handleReset() {
        this.setState(() => {
            return {
                count: this.state.initialCount
            }
        })
        // this.setState ({
        //     count: 0
        // })
    }
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button title='incrementButton' onClick={this.handlePlus}>+</button>
                <button title='decrementButton' onClick={this.handleMinus}>-</button>
                <button title='resetButton'     onClick={this.handleReset}>Reset Count</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<IndecisionApp options={['Pickle', 'Patty', 'Cheese']} />, document.getElementById('app_0'))

