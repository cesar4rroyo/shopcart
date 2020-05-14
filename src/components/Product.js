import React from "react";

const Product = (props) => {
    return (
        <div className="product">
            <a href={"#" + props.id} onClick={props.fxModal}>
                <img src={props.image} alt={props.title} />
                <p>{props.title}</p>
            </a>
            <div className="product-price">
                <div>${props.price}</div>
                <button onClick={props.fxAddCart} className="btn primary">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;
