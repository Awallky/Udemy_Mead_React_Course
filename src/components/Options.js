import React from "react";
import Option from "./Option";
import AddOption from './AddOption';
import RemoveAll from "./RemoveAll";

const Options = (props) => (
    <div>
        <div className='widget-header'>
            <h3 
                className='widget-header__title'
            >
                Options
            </h3>
            <RemoveAll handleRemoveAll={props.handleRemoveAll}/>
        </div>
        {props.options.length === 0 ? <p className='widget__p'>
                Please add an option to get started
            </p>:''
        }
        {
            props.options.map((option, index) => <Option
                                            key={option}
                                            optionText={option}
                                            handleDeleteOption={props.handleDeleteOption}
                                            count={index+1}
                                            /> )
        }
        <AddOption
            handleAddOption={props.handleAddOption}
            addErrStr={props.addErrStr}
        />
    </div>
);

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