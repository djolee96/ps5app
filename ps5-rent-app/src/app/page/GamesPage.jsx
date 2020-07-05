import React from 'react';
import PropTypes from 'prop-types';

import Game from '../components/games-page/Game';


import { connect } from 'react-redux';
import { fetchGames, updateGame } from "../actions/gamesActions"
import { checkOutItem } from '../actions/addAction';

class GamesPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            games: [],
            updateGame: this.props.gameUpdated
        }
    }

    updateGameAvailable = (e) => {
        const id = parseInt(e.target.id)
        const data = {
            gameId: id,
            available: -1
        }
        this.props.updateGame(data)
    }

    changePage = () => {
        this.props.history.push('/')
    }
    writeCheckOutItem = () => {
        this.props.checkOutItem(this.state.updateGame)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.games !== this.state.games) {
            let games = this.state.games
            this.setState({ games });
        } else if (prevState.updateGame !== this.state.updateGame) {
            let updateGame = this.state.updateGame
            this.setState({ updateGame });
            this.writeCheckOutItem()
            this.changePage()
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.games !== prevState.games) {
            return { games: nextProps.games };
        } else if (nextProps.gameUpdated !== prevState.updateGame) {
            return { updateGame: nextProps.gameUpdated };
        }
        else return null;
    }

    componentDidMount() {
        this.props.fetchGames()
    }
    render() {
        const { games } = this.state

        return (
            <div className="games-page" >
                {games.map(element => { return <Game available={element.available} key={element.gameId} gameId={element.gameId} title={element.name} update={this.updateGameAvailable} /> })}
            </div>
        );
    }
}
GamesPage.propTypes = {
    fetchGames: PropTypes.func.isRequired,
    updateGame: PropTypes.func.isRequired,
    checkOutItem: PropTypes.func.isRequired,
    gameUpdated: PropTypes.object,
    games: PropTypes.array.isRequired
}
const mapStateToProps = state => ({ games: state.games.games, gameUpdated: state.games.gameUpdated })
export default connect(mapStateToProps, { fetchGames, updateGame, checkOutItem })(GamesPage);
