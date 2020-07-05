import React from 'react';



class CheckedGame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (

            <div className="checked-game">
                <div className="remove-btn" id={this.props.data._id} onClick={this.props.remove}>
                    remove
                </div>
                <div className="game-img">

                </div>
            </div>


        );
    }

}


export default CheckedGame;
