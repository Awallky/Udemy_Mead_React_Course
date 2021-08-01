import React from "react";

const AddOption = (props) => (
    <div>
        {
            !!(props.addErrStr) && 
            <p className='add-option-error'>
                {props.addErrStr}
            </p>
        }
        <form
            className='add-option' 
            onSubmit={props.handleAddOption}
        >
            <input
                className='add-option__input'
                type='text' name='option'
            ></input>
            <button className='button'>Add Option</button>
        </form>
    </div>
);

// class AddOption extends React.Component {
//     handleAddOption(e) {
//         e.preventDefault()
//         const option = e.target.elements.option.value.trim() // trim white space from end of string
//         if (option) {
//             alert(option)
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleAddOption}>
//                     <input type='text' name='option'></input>
//                     <button>Add Option</button>
//                 </form>
//             </div>
//         )
//     }
// }

export default AddOption;
