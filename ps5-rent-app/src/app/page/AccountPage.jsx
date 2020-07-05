import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/accountActions'



class AccountPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
            time: 0
        }
    }
    calcTimeLeft = (date) => {
        const countDownDate = new Date(date).getTime();
        const now = new Date().getTime();

        let distance = countDownDate - now;
        if (distance < 0) {
            distance = 0;
        }
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const textTime = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        document.querySelector(".time-left").innerHTML = textTime
    }
    setRentedItems = (user) => {
        let rented = []
        if (user._id) {
            const consoles = user.renting.items.console
            const controllers = user.renting.items.controllers
            const games = user.renting.items.games
            const tv = user.renting.items.tv
            rented.push(consoles)
            rented.push(tv)
            controllers.map(controller => rented.push(controller.name))
            games.map(game => rented.push(game.name))
            return rented.map((item, i) => { return (<li key={i}>{item}</li>) })
        }
    }
    logOut = () => {
        localStorage.removeItem("currentUser")
        this.props.history.push('/')
    }


    componentDidMount() {
        this.props.fetchUser()

        // setTimeout(() => {
        //     this.setState({ user: this.props.user })

        //     this.interval = setInterval(() => this.calcTimeLeft(this.state.user.renting.time), 1000)
        // }, 1200)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.user !== this.state.user) {
            let user = this.state.user
            this.setState({ user });
            this.calcTimeLeft(this.state.user.renting.time)
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.user !== prevState.user) {
            return { user: nextProps.user };
        }
        else return null;
    }



    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {
        const { user } = this.state

        return (
            <div className="account-page" >

                <div className="account-info">
                    <h3>Account Information</h3>
                    <div >
                        <span>Name:</span>
                        <span>{user.name}</span>
                    </div>
                    <div >
                        <span>Username:</span>
                        <span>{user.username}</span>
                    </div>
                    <div >
                        <span>Password:</span>
                        <span>*****</span>
                        <span className="change-pass">Change Password</span>
                    </div>
                    <div className="logout" onClick={this.logOut}>
                        Log Out
                    </div>

                </div>
                <div className="account-bonus">
                    <span>Bonus</span>
                    <div className="bonus"></div>
                    <div className="bonus"></div>
                    <div className="bonus"></div>
                    <div className="bonus"></div>
                    <div className="bonus"></div>
                    <div className="bonus"></div>
                </div>
                <div className="rent-info">
                    <div className="current-rent">
                        <h3>Currently renting</h3>
                        <ul>
                            {this.setRentedItems(this.state.user)}
                        </ul>
                    </div>
                    <div className="rent-time">
                        <div className="counter">
                            <span className="time-left"></span>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

AccountPage.propTypes = {
    fetchUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({ user: state.user.user })

export default connect(mapStateToProps, { fetchUser })(AccountPage);
