import {Add_TO_CART } from './constants';
const initialState = [];
export const reducer = (state = initialState, action) => {
    console.log("hello",action.type, Add_TO_CART)
    switch (action.type) {
        case ADD_To_CART:
            console.log("add to card", action)
            return [
                ...state,
                action.data
            ]
        default:
            return state
    }
}
