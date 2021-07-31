import React from "react";
import Option from "./Option";
import AddOption from './AddOption';

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

export default Options;