import { Add_TO_CART } from './constants';
const initialState = [];
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_TO_CART:
            console.log("add to card", action)
            return [
                ...state,
                action.data
            ]
        default:
            return state
    }
}
