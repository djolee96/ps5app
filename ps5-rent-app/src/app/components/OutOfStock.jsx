import React from 'react';

class OutOfStock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {


        return (
            <div className="not-available">
                <div className="ribbon">
                    <span>NOT AVAILABLE</span>
                </div>
            </div>
        );


    }
}

export default OutOfStock;
