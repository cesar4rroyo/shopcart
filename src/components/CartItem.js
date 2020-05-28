import React from "react";
import "./styles/carts.css";

const CartItem = (props) => {
    return (
        <div className="cart_item_container">
            <div className="stepper">
                <button
                    onClick={props.addToCart}
                    className="stepper_control increase"
                >
                    <i className="fas fa-angle-up"></i>
                </button>
                <div className="count_value_container">
                    <span className="count_value">{props.count}</span>
                </div>
                <button
                    onClick={props.decreaseProduct}
                    className="stepper_control decrease"
                >
                    <i className="fas fa-angle-down"></i>
                </button>
            </div>
            <img src={props.image} alt={props.title} />
            <div>
                <div> {props.title} </div>
                <div className="price_and_count">
                    ${props.price}
                    <span className="delete_container">
                        <i
                            onClick={props.removeClick}
                            className="far fa-trash-alt"
                        ></i>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
