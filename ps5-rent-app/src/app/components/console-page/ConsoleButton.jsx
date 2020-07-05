import React from 'react';


function ConsoleButton(props) {
    return (

        <div className="btn-container">
            <div className="button" id={props.id} onClick={props.update}>Add</div>
        </div>

    );
}

export default ConsoleButton;
