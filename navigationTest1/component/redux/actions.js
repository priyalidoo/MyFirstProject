import { Add_TO_CART } from './constants';

export function addToCart(item) {
    return {
        type: Add_TO_CART,
        data: item
    }

}