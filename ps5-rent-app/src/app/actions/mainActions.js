import { ADD_ITEM, REMOVE_ITEM } from './type';


export function addItem(currentData, newItem) {
    return function (dispatch) {
        let data = currentData
        data.push(newItem)
        let items = data

        dispatch({
            type: ADD_ITEM,
            payload: items
        })
    }
}

export function removeItem(currentData, deleteItem) {
    return function (dispatch) {
        let data = currentData
        const indexOfDeletedItem = data.findIndex(element => element._id === deleteItem)
        if (indexOfDeletedItem >= 0) {
            data.splice(indexOfDeletedItem, 1)
        }

        const items = data


        dispatch({
            type: REMOVE_ITEM,
            payload: items
        })
    }
}