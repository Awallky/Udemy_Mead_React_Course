import IndecisionApp from "../components/IndecisionApp";

// returns undefined
//const num = () => {}
// returns an object
//const num = () => ({})

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
//         <RemoveAll />
//     </div>
// )

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