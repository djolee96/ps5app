import { FETCH_GAME, UPDATE_GAME } from '../actions/type';

const initialState = {
    games: [],
    gameUpdated: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_GAME:
            return {
                ...state,
                games: action.payload
            }
        case UPDATE_GAME:
            return {
                ...state,
                gameUpdated: action.payload
            }
        default:
            return state;
    }
}