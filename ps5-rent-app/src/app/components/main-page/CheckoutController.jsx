import React from 'react';
import { Link } from 'react-router-dom';
import CheckedController from './CheckedController';



class CheckoutController extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        let { data } = this.props
        for (let i = data.length; i < 4; i++) {
            data[i] = {}
        }


        return (
            <div className="checkout-controller-container" >
                {data.map((obj, i) => obj.controllerId ? < CheckedController data={obj} key={i} remove={this.props.remove} /> : <div className="checkout-controller" key={i} ><Link to="controller"><span>+</span></Link></div>)}
            </div>

        );
    }

}

export default CheckoutController;
