import React from "react";

const Option = (props) => (
    <div className='option'>
        <p className='option__text'>{props.count}. {props.optionText}</p>
        <button className='button button--link'
            onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}
        >
            &nbsp;Remove
        </button>
    </div>
);

// class Option extends React.Component {
//     render() {
//         return (
//                 <li>{this.props.optionText}</li>
//         )
//     }
// }

export default Option;
