// Stateless functional components are much faster than class based components
// because they do not have to manage lifecycle compnents such as componentDidMOunt and things like that
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption    = this.handleAddOption.bind(this)
        this.handleRemoveAll    = this.handleRemoveAll.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handlePick         = this.handlePick.bind(this)
        this.state = {
            options: props.options ? props.options : [],
            title: 'Indecision',
            subtitle: 'Put your hands in the life of a computer',
            addErrStr: ""
        }
    }
    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim() // trim white space from end of string
        let errStr
        if (!option) {
            //this.setState(() => ({ addErrStr: 'Enter valid value to add item.' }))
            errStr = 'Enter valid value to add item.'
        }
        else if (this.state.options.indexOf(option) > -1) {
            //this.setState(() => ({ addErrStr: 'This option already exists' }))
            errStr = 'This option already exists'
        }
        if (errStr) {
            // wipe input from text box
            e.target.elements.option.value = ''
            // set error string
            this.setState(() => ({addErrStr: errStr}))
        }
        else {
            this.setState((prevState) => ({
                options: prevState.options.concat(option),
                addErrStr: ""
            }))
        }
    }
    handleRemoveAll() {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({ options: prevState.options.filter(option => option !== optionToRemove) }))
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const opt = this.state.options[randomNum]
        alert(opt)
    }
    render() {
        return (
            <div>
                <Header /*title={title}*/ subtitle={this.state.subtitle} />
                <Action disabled={this.state.options.length == 0} handlePick={this.handlePick} />
                {
                    !!(this.state.addErrStr) && <p>{this.state.addErrStr}</p>
                }
                <Options
                    options={this.state.options}
                    handleAddOption={this.handleAddOption}
                    addErr={this.state.addErrStr}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <RemoveAll handleRemoveAll={this.handleRemoveAll}/>
                <Counter />
                {/* <User name="Adam" age={30} /> */}
            </div>
        )
    }
    // Lifecycle methods - https://reactjs.org/docs/react-component.html#the-component-lifecycle
    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem('options'))
            if (options) {
                this.setState(() => ({ options }) )
            }
        } catch (e) {
            // do nothing at all
        }
        console.log('IndecisionApp componentDidMount, Fecthing Data')
    }
    // only pops up when changing the instance state
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
            console.log('IndecisionApp componentDidUpdate, Saving Data')
            console.log(prevProps, prevState)
        }
    }
    // Lifecycle that fires when a compnent goes away
    componentWillUnmount() {
        console.log('IndecisionApp componentWillUnmount')
    }
}

// Extends the Component class, that gives all of the features of React
// Requires one special method to be defined: render
// Note: React enforces classes that extend Component to be have their name be upper case for the first letter
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
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}
Header.defaultProps = {
    title: "Some default title."
}

const Action = (props) => {
    return (
        <div>
            <button disabled={props.disabled} onClick={props.handlePick}>What should I do?</button>
        </div>
    )
}

// class Action extends React.Component {
//     handlePick() {
//         alert('HandlePick')
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.handlePick}>What should I do?</button>
//             </div>
//         )
//     }
// }

const RemoveAll = (props) => {
    return (
        <div>
            <button onClick={props.handleRemoveAll}>Remove All</button>
        </div>
    )
}

// class RemoveAll extends React.Component {
//     handleRemoveAll() {
//         alert('RemoveAll')
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleRemoveAll}>Remove All</button>
//             </div>
//         )
//     }
// }

const Options = (props) => {
    return (
        <div>
            {props.options.length === 0 ? <p>Please add an option to get started</p>:''}
            <p>Options:</p>
            {
                props.options.map((option) => <Option
                                                key={option}
                                                optionText={option}
                                                handleDeleteOption={props.handleDeleteOption}
                                              /> )
            }
            <AddOption handleAddOption={props.handleAddOption} />
        </div>
    )
}

// class Options extends React.Component {
//     render() {
//         console.log(this.props.options.length)
//         return (
//             <div>
//                 <p>Options:</p>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option}/> )
//                 }
//             </div>
//         )
//     }
// }

const Option = (props) => {
    console.log(props)
    return (
        <div>
            <li>
                {props.optionText}&nbsp;
                <button
                    onClick={(e) => {
                        props.handleDeleteOption(props.optionText)
                    }}
                >
                    Remove
                </button>
            </li>
        </div>
    )
}

// class Option extends React.Component {
//     render() {
//         return (
//                 <li>{this.props.optionText}</li>
//         )
//     }
// }
const AddOption = (props) => {
    return (
        <div>
            <form onSubmit={props.handleAddOption}>
                <input type='text' name='option'></input>
                <button>Add Option</button>
            </form>
        </div>
    )
}

// class AddOption extends React.Component {
//     handleAddOption(e) {
//         e.preventDefault()
//         const option = e.target.elements.option.value.trim() // trim white space from end of string
//         if (option) {
//             alert(option)
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleAddOption}>
//                     <input type='text' name='option'></input>
//                     <button>Add Option</button>
//                 </form>
//             </div>
//         )
//     }
// }

// returns undefined
//const num = () => {}
// returns an object
//const num = () => ({})

const jsx = (
    <div>
        <h1>Title</h1>
        <Header />
        <Header />
        <Header />
        {/* This only creates three instances of Header! The fourth is not rendered as the same type of DOM object.*/}
        <header/>
        <Action />
        <Options />
        <AddOption />
        <RemoveAll />
    </div>
)

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleUp    = this.handleUp.bind(this)
        this.handleDown  = this.handleDown.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: 0
        }
    }
    handleUp() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }
    handleDown() {
        this.setState((prevState) => ({
            count: prevState.count - 1
        }))
    }
    handleReset() {
        this.setState(() => ({
            count: 0
        }))
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleUp}>+1</button>
                <button onClick={this.handleDown}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
    componentDidMount() {
        try {
            const cnt = parseInt(JSON.parse(localStorage.getItem('count')))
            this.setState(() => ({ count: cnt }) )
        }
        catch (e) {
            console.log(e)
            // do nothing
        }
        console.log('Counter componentDidMount')
    }
    componentDidUpdate() {
        localStorage.setItem('count', this.state.count)
        console.log('Counter componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('Counter componentWillUnmount')
    }
}

// Stateless Functional Component
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props && !!(props.name) ? props.name: ''}</p>
//             <p>Age: {props && !!(props.age) ? props.age:''}</p>
//         </div>
//     )
// }

//ReactDOM.render(jsx, document.getElementById('app_0'))
ReactDOM.render(<IndecisionApp />, document.getElementById('app_0'))


// ----------------------------------------------------------------------------------------------------------------------------------------------------




// // Extends the Component class, that gives all of the features of React
// // Requires one special method to be defined: render
// // Note: React enforces classes that extend Component to be have their name be upper case for the first letter
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Indecision</h1>
//                 <h2>Put your hands in the life of a computer</h2>
//             </div>
//         )
//     }
// }

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button>What should I do?</button>
//             </div>
//         )
//     }
// }

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>Options Component Here</p>
//             </div>
//         )}
// }

// class AddOption extends React.Component {
//     render() {
//         return (
//             <div>
//                 <form>
//                     <input type='text' name='option'></input>
//                     <button>Add Option</button>
//                 </form>
//             </div>
//         )}
// }

// const jsx = (
//     <div>
//         <h1>Title</h1>
//         <Header />
//         <Header />
//         <Header />
//         {/* This only creates three instances of Header! The fourth is not rendered as the same type of DOM object.*/}
//         <header/>
//         <Action />
//         <Options />
//         <AddOption />
//     </div>
// )

// ReactDOM.render(jsx, document.getElementById('app_0'))