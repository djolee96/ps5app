import React from 'react';
import ControllerDescription from './ControllerDescription';
import ControllerImg from './ControllerImg';
import OutOfStock from '../OutOfStock'
function Controller(props) {

    if (parseInt(props.available) < 0) {
        return (<div className="controller-container">
            <OutOfStock></OutOfStock>
            <ControllerImg />
            <ControllerDescription title={props.title} controllerId={props.controllerId} update={props.update} />
        </div>)
    }
    return (
        <div className="controller-container">
            <ControllerImg />
            <ControllerDescription title={props.title} controllerId={props.controllerId} update={props.update} />
        </div>
    );
}

export default Controller;
