// Extends the Component class, that gives all of the features of React
// Requires one special method to be defined: render
// Note: React enforces classes that extend Component to be have their name be upper case for the first letter
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your hands in the life of a computer</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>Options Component Here</p>
            </div>
        )}
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <form>
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
    </div>
)

ReactDOM.render(jsx, document.getElementById('app_0'))

