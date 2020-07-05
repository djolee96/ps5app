import { ADD_ITEM, REMOVE_ITEM } from '../actions/type';


const initialState = {
    items: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: action.payload
            }
        case REMOVE_ITEM:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}