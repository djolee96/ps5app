import { CHECKOUT_ITEM, REMOVE_CHECKOUT_ITEM } from '../actions/type';


const initialState = {
    item: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CHECKOUT_ITEM:
            return {
                ...state,
                item: action.payload
            }
        case REMOVE_CHECKOUT_ITEM:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}