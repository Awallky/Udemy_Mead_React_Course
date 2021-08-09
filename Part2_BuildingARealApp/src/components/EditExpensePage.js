import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            {props.match.params.id ? 
                <p>
                    Edit the expense of record with id {props.match.params.id}
                </p> : 
                <p>
                    No record provided to edit.
                </p>
            }
            {/* {props.match.params ? 
                (props.match.params.id ? 
                    (<p>Edit the expense of record with id {props.match.params.id}</p>) :
                    (<p>Component does not exist.</p>)
                ) : (<p>Component does not exist.</p>)
            } */}
        </div>
    );
};

export default EditExpensePage;
