import React from "react";

const CartItem = (props) => {
    return (
        <div>
            <div>
                <img src={props.image} alt={props.title} />
            </div>
            <div>
                <div> {props.title} </div>
                <div className="right">
                    ${props.price} x {props.count}{" "}
                    <button className="btn" onClick={props.removeClick}>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
