import React from "react";

const AddOption = (props) => {
    return (
        <div>
            <form onSubmit={props.handleAddOption}>
                <input type='text' name='option'></input>
                <button>Add Option</button>
            </form>
        </div>
    )
}

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
