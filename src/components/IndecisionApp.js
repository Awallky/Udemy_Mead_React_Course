import React from 'react';
import Header from './Header';
import Action from './Action';
import RemoveAll from './RemoveAll';
import Options from './Options';

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
                {/* <Counter /> */}
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

export default IndecisionApp;