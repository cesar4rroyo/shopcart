import React from "react";
import "./styles/slidecart.css";
import Fade from "react-reveal/Fade";
import Cart from "./Cart";

const SlideCart = (props) => {
    return (
        <div className="overlay_container">
            <Fade right>
                <div className="slide_container">
                    <Cart createOrder={props.createOrder} />
                    <button onClick={props.onClose}>Cerrar</button>
                </div>
            </Fade>
        </div>
    );
};

export default SlideCart;
