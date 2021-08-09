import React from "react";

const RemoveAll = (props) => (
    <div>
        <button
            className='button button--link'
            onClick={props.handleRemoveAll}
        >
            Remove All
        </button>
    </div>
);

// class RemoveAll extends React.Component {
//     handleRemoveAll() {
//         alert('RemoveAll')
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleRemoveAll}>Remove All</button>
//             </div>
//         )
//     }
// }
export default RemoveAll;
