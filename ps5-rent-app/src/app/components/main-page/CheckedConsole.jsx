import React from 'react';



class CheckedConsole extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }




    render() {
        return (

            <div className="checked-console">
                <div className="remove-btn" id={this.props.data._id} onClick={this.props.remove}>
                    remove
                </div>
                <div className="console-img">

                </div>
            </div >


        );
    }

}



export default CheckedConsole;
