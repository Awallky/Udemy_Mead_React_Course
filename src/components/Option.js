import React from "react";

const Option = (props) => {
    // console.log(props)
    return (
        <div>
            <li>
                {props.optionText}&nbsp;
                <button
                    onClick={(e) => {
                        props.handleDeleteOption(props.optionText)
                    }}
                >
                    &nbsp;Remove
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

export default Option;
