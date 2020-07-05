import React from 'react';
import { Link } from 'react-router-dom';
import CheckedGame from './CheckedGame';


class CheckoutGames extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        let { data } = this.props
        for (let i = data.length; i < 8; i++) {
            data[i] = {}
        }
        return (
            <div className="checkout-games-container" >
                {data.map((obj, i) => obj.gameId ? < CheckedGame data={obj} key={i} remove={this.props.remove} /> : <div className="checkout-games" key={i}><Link to="games"><span>+</span></Link></div>)}
            </div>

        );
    }

}

export default CheckoutGames;
