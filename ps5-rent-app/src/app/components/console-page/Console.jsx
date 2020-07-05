import React from 'react';
import ConsoleButton from './ConsoleButton';
import ConsoleImg from './ConsoleImg';
import ConsoleTitle from './ConsoleTitle';
import OutOfStock from '../OutOfStock';

function Console(props) {
    const { title, consoleId, update, available } = props

    if (available < 0) {
        return (
            <div className="console-container">
                <OutOfStock></OutOfStock>
                <ConsoleImg />
                <div className="console-description">
                    <ConsoleTitle title={title} />
                    <ConsoleButton id={consoleId} update={update} />
                </div>
            </div>
        );
    }

    return (
        <div className="console-container">
            <ConsoleImg />
            <div className="console-description">
                <ConsoleTitle title={title} />
                <ConsoleButton id={consoleId} update={update} />
            </div>
        </div>
    );
}

export default Console;
