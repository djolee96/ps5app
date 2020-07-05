import React from 'react';
import TvButton from './TvButton';
import TvImg from './TvImg';
import TvTitle from './TvTitle';
import OutOfStock from '../OutOfStock';



function Tv(props) {

    if (props.available < 0) {
        return (
            <div className="tv-container">
                <OutOfStock></OutOfStock>
                <TvImg />
                <div className="tv-description">
                    <TvTitle title={props.title} />
                    <TvButton update={props.update} id={props.tvId} />
                </div>

            </div>
        );
    }
    return (
        <div className="tv-container">
            <TvImg />
            <div className="tv-description">
                <TvTitle title={props.title} />
                <TvButton update={props.update} id={props.tvId} />
            </div>

        </div>
    );
}

export default Tv;
