import React from 'react';
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {

        return (
            <div className="navbar" >
                <ul>
                    <li><Link to="/console">Console</Link></li>
                    <li><Link to="/controller">Controller</Link></li>
                    <li><Link to="/">Main</Link></li>
                    <li><Link to="/games">Games</Link></li>
                    <li><Link to="/tv">Tv</Link></li>
                </ul>
            </div>
        );


    }

}

export default Navbar;
