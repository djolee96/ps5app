import { FETCH_CONSOLE, UPDATE_CONSOLE } from './type';



export function fetchConsoles() {
    return function (dispatch) {
        const token = localStorage.getItem("currentUser");
        const requestURL = 'https://psrent.herokuapp.com/console';

        fetch(requestURL,
            {
                method: 'GET',
                headers: {
                    'auth-token': `${token}`,
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(consoles => dispatch({
                type: FETCH_CONSOLE,
                payload: consoles
            }))

    }
}


export function updateConsole(data) {
    return function (dispatch) {
        const token = localStorage.getItem("currentUser");
        const requestURL = 'https://psrent.herokuapp.com/console';
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
            .then(console => dispatch({
                type: UPDATE_CONSOLE,
                payload: console
            }))
    }
}