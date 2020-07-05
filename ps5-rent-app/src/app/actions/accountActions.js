import { FETCH_USER } from './type';



export function fetchUser() {
    return function (dispatch) {
        const token = localStorage.getItem("currentUser");
        const requestURL = 'https://psrent.herokuapp.com/user';


        fetch(requestURL,
            {
                method: 'GET',
                headers: {
                    'auth-token': `${token}`,
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(user => dispatch({
                type: FETCH_USER,
                payload: user
            }))

    }
}


