import { ADD_TO_CART, REMOVE_FROM_CART, DECREASE_PRODUCT } from "../types";

const STOCK_TOTAL = 9;

export const decreaseProducts = (item) => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice();
    cartItems.forEach((x) => {
        if (x._id === item._id) {
            if (x.count > 1) {
                x.count--;
            }
        }
    });

    dispatch({
        type: DECREASE_PRODUCT,
        payload: { cartItems },
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const addToCart = (product) => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice();
    let alreadyExists = false;
    cartItems.forEach((x) => {
        if (x._id === product._id) {
            alreadyExists = true;
            if (x.count < STOCK_TOTAL) {
                x.count++;
            }
        }
    });
    if (!alreadyExists) {
        cartItems.push({ ...product, count: 1 });
    }
    dispatch({
        type: ADD_TO_CART,
        payload: { cartItems },
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
    const cartItems = getState()
        .cart.cartItems.slice()
        .filter((x) => x._id !== product._id);
    dispatch({
        type: REMOVE_FROM_CART,
        payload: { cartItems },
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
