import { FETCH_CONTROLLER, UPDATE_CONTROLLER } from './type';

export function fetchControllers() {
    return function (dispatch) {
        const token = localStorage.getItem("currentUser");
        const requestURL = 'https://psrent.herokuapp.com/controller';


        fetch(requestURL,
            {
                method: 'GET',
                headers: {
                    'auth-token': `${token}`,
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(controllers => dispatch({
                type: FETCH_CONTROLLER,
                payload: controllers
            }))

    }
}

export function updateController(data) {
    return function (dispatch) {
        const token = localStorage.getItem("currentUser");
        const requestURL = 'https://psrent.herokuapp.com/controller';
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
            .then(controller => dispatch({
                type: UPDATE_CONTROLLER,
                payload: controller
            }))
    }
}