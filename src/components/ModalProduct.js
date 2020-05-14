import React from "react";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

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
                    <button className="close-modal" onClick={props.closeClick}>
                        x
                    </button>
                    <div className="product-details">
                        <img src={props.image} alt={props.title} />
                        <div className="product-details-description">
                            <p>
                                <strong>{props.title}</strong>
                            </p>
                            <p>{props.description}</p>
                            <p>
                                Available Sizes
                                {props.availableSizes.map((x) => (
                                    <span>
                                        {" "}
                                        <button className="btn">
                                            {x}
                                        </button>{" "}
                                    </span>
                                ))}
                            </p>
                            <div className="product-price">
                                <div>${props.price}</div>
                                <button
                                    className="btn primary"
                                    onClick={props.addToCartClick}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </Modal>
        </div>
    );
};

export default ModalProduct;
