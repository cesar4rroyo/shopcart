import React, { useState } from "react";
import FormOrder from "./FormOrder";
import "./styles/bolsacompra.css";
import { connect } from "react-redux";
import {
    removeFromCart,
    decreaseProducts,
    addToCart,
} from "../actions/cartActions";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const BolsaCompra = (props) => {
    const [show, setShow] = useState(false);
    const state = { name: "", email: "", address: "", total: 0 };
    const handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    const createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: state.name,
            email: state.email,
            address: state.address,
            cartItems: props.cartItems,
        };
        this.props.createOrder(order);
    };
    const cartItems = props.cartItems;

    const handleClick = () => {
        setShow(true);
    };

    return (
        <div>
            <div className="steps_buy">
                <img className="logo_compra" src="logo192.png" alt="logo" />
                <li>
                    <span className="step_name">Bolsa de compras</span>
                    <span className="line_separator">
                        <i className="fas fa-chevron-right"></i>
                    </span>
                </li>
                <li>
                    <span className="step_number">1</span>
                    <span className="step_name">Despacho</span>
                    <span className="line_separator">
                        <i className="fas fa-chevron-right"></i>
                    </span>
                </li>
                <li>
                    <span className={show ? "step_number" : "step_number_off"}>
                        2
                    </span>
                    <span className="step_name">Verificacion</span>
                    <span className="line_separator">
                        <i className="fas fa-chevron-right"></i>
                    </span>
                </li>
                <li>
                    <span className="step_number_off">3</span>
                    <span className="step_name">Confirmacion</span>
                </li>
            </div>
            <div className="container">
                <div className="row">
                    <div id="item_container" className="col-sm-8">
                        {cartItems.map((item) => (
                            <li key={item._id}>
                                <CartItem
                                    image={item.image}
                                    title={item.title}
                                    price={item.price}
                                    count={item.count}
                                    addToCart={() => props.addToCart(item)}
                                    removeClick={() =>
                                        props.removeFromCart(item)
                                    }
                                    decreaseProduct={() =>
                                        props.decreaseProducts(item)
                                    }
                                />
                            </li>
                        ))}
                        <div className="proceder_compra">
                            <button onClick={handleClick}>
                                Proceder compra
                            </button>
                        </div>
                        <div className="volver_compra">
                            <Link to="/">
                                <i className="fas fa-arrow-left"></i>
                                Agregar más productos
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        {show ? (
                            <FormOrder
                                submitFx={createOrder}
                                onChangeFx={handleInput}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, {
    removeFromCart,
    decreaseProducts,
    addToCart,
})(BolsaCompra);
