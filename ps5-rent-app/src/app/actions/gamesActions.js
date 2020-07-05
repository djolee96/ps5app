import { FETCH_GAME, UPDATE_GAME } from './type';



export function fetchGames() {
    return function (dispatch) {
        const token = localStorage.getItem("currentUser");
        const requestURL = 'https://psrent.herokuapp.com/games';

        fetch(requestURL,
            {
                method: 'GET',
                headers: {
                    'auth-token': `${token}`,
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(games => dispatch({
                type: FETCH_GAME,
                payload: games
            }))

    }
}

export function updateGame(data) {
    return function (dispatch) {
        const token = localStorage.getItem("currentUser");
        const requestURL = 'https://psrent.herokuapp.com/games';
        fetch(requestURL,
            {
                method: "PATCH",
                body: JSON.stringify(data),
                headers: {
                    'auth-token': `${token}`,
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(game => dispatch({
                type: UPDATE_GAME,
                payload: game
            }))
    }
}