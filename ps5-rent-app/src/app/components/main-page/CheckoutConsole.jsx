import React from 'react';
import { Link } from 'react-router-dom';
import CheckedConsole from "./CheckedConsole"


class CheckoutConsole extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {

        if (this.props.data.length > 0) {
            return (
                <div className="checkout-console-container" >
                    <CheckedConsole data={this.props.data[0]} remove={this.props.remove} />
                </div>
            )
        }

        return (
            <div className="checkout-console-container" >
                <div className="checkout-console">
                    <Link to="console"><span>+</span></Link>
                </div>
            </div>

        );
    }

}

export default CheckoutConsole;
