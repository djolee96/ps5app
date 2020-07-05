import { http } from '../services/HttpServices';


export const logIn = (data) => {
    const requestURL = 'https://psrent.herokuapp.com/user/login';
    return http.post(requestURL, data)

}

export const register = (data) => {
    const requestURL = 'https://psrent.herokuapp.com/user/register';
    return http.post(requestURL, data)
}


export const updateUser = (data, token) => {
    const requestURL = 'https://psrent.herokuapp.com/user';
    return http.patch(requestURL, data, token)
}