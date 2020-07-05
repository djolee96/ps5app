import React from 'react';
import { Link } from 'react-router-dom';
import { register } from '../services/UserServices';



class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            name: "",
            email: ""
        }
    }

    getUsername = (e) => {
        this.setState({ username: e.target.value })
    }
    getPassword = (e) => {
        this.setState({ password: e.target.value })

    }
    getName = (e) => {
        this.setState({ name: e.target.value })

    }
    getEmail = (e) => {
        this.setState({ email: e.target.value })

    }

    registerUser = () => {
        let data = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            name: this.state.name
        }
        register(data)
            .then(response => console.log(response))
            .then(x => this.props.history.push('/sign-in'))
            .catch(err => console.log(err))

    }
    render() {
        return (
            <div className="register-container">
                <div className="register" >
                    <h3>Register</h3>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={this.getName} />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={this.getEmail} />
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" onChange={this.getUsername} />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={this.getPassword} />
                    <div className="register-btn" onClick={this.registerUser}>
                        <span>Register</span>
                    </div>

                    <Link to="/sign-in">Sign In here</Link>
                </div>
            </div>
        );
    }

}

export default RegisterPage;
