import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

// Stateless functional components are much faster than class based components
// because they do not have to manage lifecycle compnents such as componentDidMOunt and things like that
class IndecisionApp extends React.Component {
    state = {
        options: localStorage.getItem('options') ? JSON.parse(localStorage.getItem('options')) : [],
        title: 'Indecision',
        subtitle: 'Put your hands in the life of a computer.',
        addErrStr: "",
        selectedOption: undefined
    };
    handleAddOption = (e) => {
        e.preventDefault()
        const option = e.target.elements.option.value.trim() // trim white space from end of string
        //console.log(testting)
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
            // set error string
            this.setState(() => ({addErrStr: errStr}))
        }
        else {
            this.setState((prevState) => ({
                options: prevState.options.concat(option),
                addErrStr: ""
            }))
        }
        // wipe input from text box
        e.target.elements.option.value = ''
    }
    handleRemoveAll = (e) => {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({ options: prevState.options.filter(option => option !== optionToRemove) }))
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const opt = this.state.options[randomNum]
        //alert(opt)
        this.setState(() => ({
            selectedOption: opt
        }));
    }
    handleClearSelectedOption = () => {
        console.log()
        this.setState((prevState) => ({
            options: prevState.options.filter(option => option !== this.state.selectedOption),
            selectedOption: undefined
        }));
    }
    render() {
        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle} />
                <div className='container'>
                    <Action disabled={this.state.options.length == 0} handlePick={this.handlePick} />
                    <div className='widget'>
                        <Options
                            options={this.state.options}
                            handleAddOption={this.handleAddOption}
                            addErr={this.state.addErrStr}
                            handleDeleteOption={this.handleDeleteOption}
                            handleRemoveAll={this.handleRemoveAll}
                            addErrStr={this.state.addErrStr}                            
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
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
        //console.log('IndecisionApp componentDidMount, Fecthing Data')
    }
    // only pops up when changing the instance state
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
            //console.log('IndecisionApp componentDidUpdate, Saving Data')
            //console.log(prevProps, prevState)
        }
    }
    // Lifecycle that fires when a compnent goes away
    componentWillUnmount() {
        //console.log('IndecisionApp componentWillUnmount')
    }
}

export default IndecisionApp;