import React from 'react';


function GamesButton(props) {
    return (
        <div className="add-game-btn" id={props.id} onClick={props.update}>
            Add
        </div>
    );
}

export default GamesButton;
