import { FETCH_TV, UPDATE_TV } from '../actions/type';

const initialState = {
    tvs: [],
    tvUpdated: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_TV:
            return {
                ...state,
                tvs: action.payload
            }
        case UPDATE_TV:
            return {
                ...state,
                tvUpdated: action.payload
            }
        default:
            return state;
    }
}