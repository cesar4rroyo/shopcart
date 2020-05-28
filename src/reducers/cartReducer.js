import { ADD_TO_CART, REMOVE_FROM_CART, DECREASE_PRODUCT } from "../types";

export const cartReducer = (
    state = {
        cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]"),
    },
    action
) => {
    switch (action.type) {
        case DECREASE_PRODUCT:
            return {
                cartItems: action.payload.cartItems,
            };
        case ADD_TO_CART:
            return {
                cartItems: action.payload.cartItems,
            };
        case REMOVE_FROM_CART:
            return {
                cartItems: action.payload.cartItems,
            };
        default:
            return state;
    }
};
