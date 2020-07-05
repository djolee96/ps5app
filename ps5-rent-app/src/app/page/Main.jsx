import React from 'react';
import CheckoutCalculator from '../components/main-page/CheckoutCalculator';
import CheckoutConsole from '../components/main-page/CheckoutConsole';
import CheckoutController from '../components/main-page/CheckoutController';
import CheckoutGames from '../components/main-page/CheckoutGames';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem, removeItem } from '../actions/mainActions'
import { removeCheckOutItem } from '../actions/addAction'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            console: [],
            controllers: [],
            games: []
        }
    }
    remove = (e) => {
        const currentItems = this.props.items
        const removedItem = e.target.id


        this.props.removeItem(currentItems, removedItem)
        this.isPicked()
        this.props.removeCheckOutItem()
    }

    changePage = () => {
        this.props.history.push("/account")
    }
    isPicked() {
        const consoles = this.props.items.filter(consoles => consoles.consoleId);

        const controllers = this.props.items.filter(controllers => controllers.controllerId)

        const games = this.props.items.filter(games => games.gameId)

        this.setState({ console: consoles, controllers: controllers, games: games })

    }


    componentDidMount() {
        let currentItems = this.props.items
        if (this.props.console.consoleId) {
            const addedItem = this.props.console
            this.props.addItem(currentItems, addedItem)
            this.isPicked()
        }
        if (this.props.controller.controllerId) {
            const addedItem = this.props.controller
            this.props.addItem(currentItems, addedItem)
            this.isPicked()
        }
        if (this.props.game.gameId) {
            const addedItem = this.props.game
            this.props.addItem(currentItems, addedItem)
            this.isPicked()
        }
        if (this.props.tv.tvId) {
            const addedItem = this.props.tv
            this.props.addItem(currentItems, addedItem)
            this.isPicked()
        }

    }


    render() {
        const { console, controllers, games } = this.state


        return (
            <div className="main">
                <CheckoutConsole data={console} remove={this.remove} />
                <CheckoutController data={controllers} remove={this.remove} />
                <CheckoutGames data={games} remove={this.remove} />
                <CheckoutCalculator data={this.props.items} changePage={this.changePage} />
            </div>
        );
    }

}

Main.propTypes = {
    addItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    removeCheckOutItem: PropTypes.func.isRequired,
    console: PropTypes.object,
    controller: PropTypes.object,
    game: PropTypes.object,
    tv: PropTypes.object,
    items: PropTypes.array
}

const mapStateToProps = state => ({
    console: state.checkout.item,
    controller: state.checkout.item,
    game: state.checkout.item,
    tv: state.checkout.item,
    items: state.main.items
})

export default connect(mapStateToProps, { addItem, removeItem, removeCheckOutItem })(Main);
