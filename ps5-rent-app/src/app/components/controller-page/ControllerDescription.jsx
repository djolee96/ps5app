import React from 'react';
import ControllerButton from './ControllerButton';
import ControllerTitle from './ControllerTitle';


function ControllerDescription(props) {
    return (
        <div className="controller-description">
            <ControllerTitle title={props.title} />
            <div className="add-controller">
                <ControllerButton id={props.controllerId} update={props.update} />
            </div>
        </div>
    );
}

export default ControllerDescription;
