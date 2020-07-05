import React from 'react';
import GameTitle from './GameTitle';
import GameButton from './GameButton';
import GameImg from './GameImg';
import OutOfStock from '../OutOfStock';


function Game(props) {
    if (props.available < 0) {
        return (
            <div className="game-container">
                <OutOfStock></OutOfStock>
                <GameTitle title={props.title} />
                <GameImg />
                <GameButton id={props.gameId} update={props.update} />
            </div>

        );
    }
    return (
        <div className="game-container">
            <GameTitle title={props.title} />
            <GameImg />
            <GameButton id={props.gameId} update={props.update} />
        </div>

    );
}

export default Game;
