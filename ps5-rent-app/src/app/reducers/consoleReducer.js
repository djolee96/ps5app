import { FETCH_CONSOLE, UPDATE_CONSOLE } from '../actions/type';

const initialState = {
    consoles: [],
    consoleUpdated: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CONSOLE:
            return {
                ...state,
                consoles: action.payload
            }
        case UPDATE_CONSOLE:
            return {
                ...state,
                consoleUpdated: action.payload
            }
        default:
            return state;
    }
}