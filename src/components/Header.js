import React from "react";

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
const Header = (props) => (
    <div className='header'>
        <div className='container'>
            <h1 className='header__title'>{props.title}</h1>
            <h2 className='header__subtitle'>{props.subtitle}</h2>
        </div>
    </div>
);

Header.defaultProps = {
    title: "Some default title."
}

export default Header;