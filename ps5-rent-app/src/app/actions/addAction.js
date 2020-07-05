import { CHECKOUT_ITEM, REMOVE_CHECKOUT_ITEM } from './type';



export function checkOutItem(item) {
    return function (dispatch) {

        dispatch({
            type: CHECKOUT_ITEM,
            payload: item
        })
    }
}

export function removeCheckOutItem() {
    return function (dispatch) {

        dispatch({
            type: REMOVE_CHECKOUT_ITEM,
            payload: {}
        })
    }
}
