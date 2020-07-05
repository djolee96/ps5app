import { FETCH_TV, UPDATE_TV } from './type';



export function fetchTvs() {
    return function (dispatch) {
        const token = localStorage.getItem("currentUser");
        const requestURL = 'https://psrent.herokuapp.com/tv';

        fetch(requestURL,
            {
                method: 'GET',
                headers: {
                    'auth-token': `${token}`,
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(tvs => dispatch({
                type: FETCH_TV,
                payload: tvs
            }))

    }
}


export function updateTV(data) {
    return function (dispatch) {
        const token = localStorage.getItem("currentUser");
        const requestURL = 'https://psrent.herokuapp.com/tv';
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
            .then(tv => dispatch({
                type: UPDATE_TV,
                payload: tv
            }))
    }
}