import React from "react";

const Action = (props) => (
    <div>
        <button
            className='big-button'
            disabled={props.disabled}
            onClick={props.handlePick}
        >
            What should I do?
        </button>
    </div>
);

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

export default Action;