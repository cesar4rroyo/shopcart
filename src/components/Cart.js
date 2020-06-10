import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import Proceed from "./Proceed";
import {
    removeFromCart,
    decreaseProducts,
    addToCart,
} from "../actions/cartActions";
import "./styles/carts.css";

class Cart extends Component {
    render() {
        const { cartItems } = this.props;
        return (
            <div className="cart_general">
                {cartItems.length === 0 ? (
                    <div className="cart cart-header">
                        No tienes ningun producto
                        <div className="close_btn_no_products">
                            <button
                                className="close_btn width_total"
                                onClick={this.props.onClose}
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="cart cart-header">
                        Tienes {cartItems.length} productos seleccionados
                    </div>
                )}
                <div>
                    <div className="cart">
                        <ul className="cart-items">
                            {cartItems.map((item) => (
                                <li key={item._id}>
                                    <CartItem
                                        image={item.image}
                                        title={item.title}
                                        price={item.price}
                                        count={item.count}
                                        addToCart={() =>
                                            this.props.addToCart(item)
                                        }
                                        removeClick={() =>
                                            this.props.removeFromCart(item)
                                        }
                                        decreaseProduct={() =>
                                            this.props.decreaseProducts(item)
                                        }
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                    {cartItems.length !== 0 && (
                        <div>
                            <Proceed onClose={this.props.onClose}>
                                <span>
                                    {cartItems
                                        .reduce(
                                            (a, c) => a + c.price * c.count,
                                            0
                                        )
                                        .toFixed(2)}
                                </span>
                            </Proceed>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, {
    removeFromCart,
    decreaseProducts,
    addToCart,
})(Cart);
