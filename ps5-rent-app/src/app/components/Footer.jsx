import React from 'react';
import { Link } from 'react-router-dom'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {


        return (
            <div className="footer">
                <div className="copyright">
                    <span>CopyRight 2020</span>
                </div>
                <div className="account">
                    <Link to="/account">
                        <i className="far fa-user fa-lg"></i>
                        <span>Account</span>
                    </Link>
                </div>
            </div>
        );


    }
}

export default Footer;
