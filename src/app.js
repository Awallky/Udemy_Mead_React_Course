class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your hands in the life of a computer'
        const options = ['Pickle', 'Patties', 'Cheese']
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options}/>
                <AddOption />
                <RemoveAll />
            </div>
        )
    }
}

// Extends the Component class, that gives all of the features of React
// Requires one special method to be defined: render
// Note: React enforces classes that extend Component to be have their name be upper case for the first letter
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        alert('HandlePick')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

class RemoveAll extends React.Component {
    handleRemoveAll() {
        alert('RemoveAll')
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        console.log(this.props.options.length)
        return (
            <div>
                <p>Options:</p>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/> )
                }
            </div>
        )}
}

class Option extends React.Component {
    render() {
        return (
                <li>{this.props.optionText}</li>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim() // trim white space from end of string
        if (option) {
            alert(option)
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'></input>
                    <button>Add Option</button>
                </form>
            </div>
        )}
}

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

//ReactDOM.render(jsx, document.getElementById('app_0'))
ReactDOM.render(<IndecisionApp />, document.getElementById('app_0'))

