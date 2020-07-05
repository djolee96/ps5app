import { FETCH_CONTROLLER, UPDATE_CONTROLLER } from '../actions/type';

const initialState = {
    controllers: [],
    controllerUpdated: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CONTROLLER:
            return {
                ...state,
                controllers: action.payload
            }
        case UPDATE_CONTROLLER:
            return {
                ...state,
                controllerUpdated: action.payload
            }
        default:
            return state;
    }
}