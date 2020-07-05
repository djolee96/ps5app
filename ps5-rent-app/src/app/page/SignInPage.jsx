import React from 'react';
import { Link } from 'react-router-dom';
import { logIn } from '../services/UserServices'

class SignInPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""

        }
    }
    getUsername = (e) => {
        this.setState({ username: e.target.value })
    }
    getPassword = (e) => {
        this.setState({ password: e.target.value })

    }
    loginUser = () => {
        let data = {
            username: this.state.username,
            password: this.state.password
        }
        logIn(data)
            .then(response => localStorage.setItem("currentUser", response))
            .then(x => this.props.history.push('/'))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="sign-in-container">
                <div className="sign-in" >
                    <h3>SIGN IN</h3>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" onChange={this.getUsername} />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={this.getPassword} />
                    <div className="sign-in-btn" onClick={this.loginUser}>
                        <span>Sign In</span>
                    </div>

                    <Link to="/register">Register here</Link>
                </div>
            </div>
        );
    }

}

export default SignInPage;
