import React from 'react';



function TvButton(props) {
    return (
        <div className="btn-container" >
            <div className="button" onClick={props.update} id={props.id}>Add</div>
        </div>
    );
}

export default TvButton;
