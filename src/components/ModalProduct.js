import React from "react";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import "./styles/modal.css";

const ModalProduct = (props) => {
    const modalStyles = {
        overlay: {
            backgroundColor: "rgba(0,0,0,0.6)",
        },
    };
    return (
        <div>
            <Modal
                isOpen={true}
                onRequestClose={props.onRequestClose}
                style={modalStyles}
            >
                <Zoom>
                    <div className="container">
                        <button
                            className="close-modal"
                            onClick={props.closeClick}
                        >
                            x
                        </button>
                        <div className="row">
                            <div className="col-sm-4">
                                <img
                                    className="img_modal"
                                    src={props.image}
                                    alt={props.title}
                                />
                            </div>
                            <div className="col-sm-8">
                                <div className="product-details-description">
                                    <p className="product_title">
                                        <strong>{props.title}</strong>
                                    </p>
                                    <p className="product_description">
                                        {props.description}
                                    </p>
                                    <p>
                                        Available Sizes
                                        <div className="size_container">
                                            {props.availableSizes.map(
                                                (x, index) => (
                                                    <span key={index}>
                                                        {" "}
                                                        <button className="btn_tallas">
                                                            {x}
                                                        </button>{" "}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </p>
                                    <div className="color_container">
                                        <p>Colors</p>
                                        <button className="blanco"> </button>
                                        <button className="rosado"> </button>
                                        <button className="amarillo"> </button>
                                        <button className="verde"> </button>
                                    </div>
                                    <div className="product-price">
                                        <p>Precio</p>
                                        <div>${props.price}</div>
                                    </div>
                                    <button
                                        className="btn_add"
                                        onClick={props.addToCartClick}
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </Modal>
        </div>
    );
};

export default ModalProduct;
