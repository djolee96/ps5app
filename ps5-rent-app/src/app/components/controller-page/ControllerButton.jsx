import React from 'react';

function ControllerButton(props) {
    return (
        <div className="add-button" id={props.id} onClick={props.update}>
            Add
        </div>
    );
}

export default ControllerButton;
