import React from 'react';



class CheckedController extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (

            <div className="checked-controller">
                <div className="remove-btn" id={this.props.data._id} onClick={this.props.remove}>
                    remove
                </div>
                <div className="controller-img">

                </div>
            </div>


        );
    }

}

export default CheckedController;
