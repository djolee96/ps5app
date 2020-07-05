import React from 'react';

import { updateUser } from '../../services/UserServices';


class CheckoutCalculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            time: 0.5
        }
    }

    rent = () => {
        const consoles = this.state.items.filter(item => item.consoleId).map(item => { return item.name }).pop()
        const controllers = this.state.items.filter(item => item.controllerId)
        const games = this.state.items.filter(item => item.gameId)
        const tv = this.state.items.filter(item => item.tvId).map(item => { return item.name }).pop()
        controllers.map(controller => { return { controllerId: controller.controllerId, name: controller.name } })
        const tomorrow = new Date();
        tomorrow.setHours(tomorrow.getHours() + this.state.time * 24);
        games.map(game => { return { gameId: game.gameId, name: game.name } })
        console.log(tv);
        let data = {
            console: consoles,
            tv: tv,
            controllers: controllers,
            games: games,
            time: tomorrow
        }
        const token = localStorage.getItem("currentUser")
        updateUser(data, token)
            .then(res => console.log("done"))
        this.props.changePage()
    }

    getInputValue = (e) => {
        this.setState({ time: parseFloat(e.target.value) })
    }

    getPrice = (type) => {
        switch (type) {
            case "PlayStation 5":
                return 2000
            case "PlayStation 5 Digital Edition":
                return 2500
            case "DualSense":
                return 200
            case "LG 55'' 4K HDR Smart OLED TV":
                return 2500
            default:
                return 100
        }
    }
    calcTotalPrice = () => {
        let price = 0;
        for (let i = 0; i < this.listDisplay().length; i++) {
            price += this.calculatePrice(this.listDisplay()[i])
        }
        return price

    }
    calculatePrice = (data) => {
        const time = this.state.time
        const type = data.name
        const basePrice = this.getPrice(type)
        const gameCount = this.getNumberOfGames()
        const controllerCount = this.getNumberOfControllers()


        if (time === 0.5) {
            if (gameCount <= 5 && basePrice === 100) {
                return 0
            }
            if (gameCount > 5 && basePrice === 100) {
                return (gameCount - 5) * 100 * 0.5
            }
            if (controllerCount <= 2 && basePrice === 200) {
                return 0
            }
            if (controllerCount > 2 && basePrice === 200) {
                return (controllerCount - 3) * 100 * 0.5
            }
            return parseInt(basePrice * 0.5)
        }
        else if (time === 1) {
            if (gameCount <= 5 && basePrice === 100) {
                return 0
            }
            if (gameCount > 5 && basePrice === 100) {
                return (gameCount - 5) * 100 * 1
            }
            if (controllerCount <= 2 && basePrice === 200) {
                return 0
            }
            if (controllerCount > 2 && basePrice === 200) {
                return (controllerCount - 3) * 100 * 1
            }
            return basePrice * 1
        }
        else if (time === 2) {
            if (gameCount <= 5 && basePrice === 100) {
                return 0
            }
            if (gameCount > 5 && basePrice === 100) {
                return (gameCount - 5) * 100 * 2
            }
            if (controllerCount <= 2 && basePrice === 200) {
                return 0
            }
            if (controllerCount > 2 && basePrice === 200) {
                return (controllerCount - 3) * 100 * 2
            }
            return basePrice * 2
        }
        else if (time === 3) {
            if (gameCount <= 5 && basePrice === 100) {
                return 0
            }
            if (gameCount > 5 && basePrice === 100) {
                return (gameCount - 5) * 100 * 3 * 0.75
            }
            if (controllerCount <= 2 && basePrice === 200) {
                return 0
            }
            if (controllerCount > 2 && basePrice === 200) {
                return (controllerCount - 3) * 100 * 3 * 0.75
            }
            return basePrice * 3 * 0.75
        }
        else if (time === 7) {
            if (gameCount <= 5 && basePrice === 100) {
                return 0
            }
            if (gameCount > 5 && basePrice === 100) {
                return (gameCount - 5) * 100 * 6
            }
            if (controllerCount <= 2 && basePrice === 200) {
                return 0
            }
            if (controllerCount > 2 && basePrice === 200) {
                return (controllerCount - 3) * 100 * 6
            }
            return basePrice * 6

        }
    }

    getNumberOfControllers = () => {
        const allItems = this.state.items
        const numberOfControllers = allItems.filter(item => item.controllerId)
        return numberOfControllers.length
    }
    getNumberOfGames = () => {
        const allItems = this.state.items
        const numberOfGames = allItems.filter(item => item.gameId)
        return numberOfGames.length
    }
    listDisplay = () => {
        const excludedGames = this.state.items.filter(item => !item.gameId)
        const numberOfGames = this.getNumberOfGames()
        if (numberOfGames > 0) {
            const games = {
                name: `Games x ${numberOfGames}`
            }

            excludedGames.push(games)
        }

        return excludedGames
    }

    componentDidMount() {
        this.setState({ items: this.props.data })
    }
    render() {
        return (
            <div className="checkout-calculator-container" >
                <div className="duration">
                    <span>Duration:</span>
                    <form>
                        <div>
                            <input type="radio" name="duration" id="" defaultChecked value="0.5" onChange={this.getInputValue} />
                            <label htmlFor="">12h</label>
                        </div>
                        <div>
                            <input type="radio" name="duration" id="" value="1" onChange={this.getInputValue} />
                            <label htmlFor="">24h</label>
                        </div>
                        <div>
                            <input type="radio" name="duration" id="" value="2" onChange={this.getInputValue} />
                            <label htmlFor="">2d</label>
                        </div>
                        <div>
                            <input type="radio" name="duration" id="" value="3" onChange={this.getInputValue} />
                            <label htmlFor="">3d</label>
                        </div>
                        <div>
                            <input type="radio" name="duration" id="" value="7" onChange={this.getInputValue} />
                            <label htmlFor="">7d</label>
                        </div>

                    </form>
                </div>
                <div className="final-price">
                    <div className="total">
                        <span>Total Price</span>
                        <span>{`${this.calcTotalPrice()} rsd`}</span>
                    </div>
                    <ul>
                        {
                            this.listDisplay()
                                .map((item, i) => {
                                    return (<li key={i}>
                                        <span className="name">{item.name}</span>
                                        <span className="price">{this.calculatePrice(item)}</span>
                                    </li>)
                                })}
                    </ul>
                </div>
                <div className="checkout-btn" onClick={this.rent}>
                    Rent
                </div>
            </div>
        );
    }


}

export default CheckoutCalculator;
