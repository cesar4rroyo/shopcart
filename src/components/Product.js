import React from "react";
import "./styles/product.css";

const Product = (props) => {
    return (
        <div className="product">
            <a href={"#" + props.id} onClick={props.fxModal}>
                <img src={props.image} alt={props.title} />
                <p>{props.title}</p>
            </a>
            <div className="product-price">
                <div className="price_container">${props.price}</div>
                <button onClick={props.fxAddCart} className="btn_add_to_cart">
                    Agregar a la bolsa
                </button>
            </div>
        </div>
    );
};

export default Product;
